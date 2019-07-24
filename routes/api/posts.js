const express = require("express");
const router = express.Router();
const { validationResult } = require("express-validator");
const { postFormValidator, commentFormValidator } = require("../../validate");

// middlewares
const auth = require("../../middlewares/auth");
const admin = require("../../middlewares/admin");

const Post = require("../../models/Post");
const Profile = require("../../models/Profile");
const User = require("../../models/User");

const multer = require("multer");
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "./uploads/images");
  },
  filename: function(req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  // Reject a file
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/png"
  ) {
    cb(null, true);
  } else {
    cb(new Error("Invalid image type"), false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
});

// @route   POST api/posts
// @desc    Create a post
// @access  Private
router.post(
  "/",
  admin,
  upload.single("postImage"),
  postFormValidator,

  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = await User.findById(req.user.id).select("-password");

      const {
        title,
        category,
        posttype,
        classyear,
        date,
        postbody,
        meta,
        publish,
        caption
      } = req.body;

      let image = { caption: "", thumbnail: "" };

      if (req.file) image = { thumbnail: req.file.path };
      if (caption) image = { caption };

      const newPost = new Post({
        title,
        category,
        posttype,
        classyear,
        date,
        postbody,
        image,
        meta,
        publish,
        name: user.name,
        avatar: user.avatar,
        user: req.user.id
      });

      const post = await newPost.save();

      res.json(post);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route   PUT api/posts/:id
// @desc    update a post
// @access  Private
router.put(
  "/:id",
  admin,
  upload.single("postImage"),
  postFormValidator,

  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = await User.findById(req.user.id).select("-password");
      let post = await Post.findById(req.params.id);

      const {
        title,
        category,
        posttype,
        classyear,
        date,
        postbody,
        meta,
        publish,
        caption
      } = req.body;

      const updatedPost = {};
      updatedPost.user = req.user.id;
      updatedPost.name = user.name;
      updatedPost.avatar = user.avatar;

      updatedPost.title = title;
      updatedPost.category = category;
      updatedPost.posttype = posttype;
      updatedPost.postbody = postbody;
      if (classyear) updatedPost.classyear = classyear;
      if (date) updatedPost.date = date;
      if (req.file)
        updatedPost.image = { ...post.image, thumbnail: req.file.path };
      if (meta) updatedPost.meta = meta;
      if (publish) updatedPost.publish = publish;
      if (caption) updatedPost.image = { ...post.image, caption };

      post = await Post.findByIdAndUpdate(
        req.params.id,
        { $set: updatedPost },
        { new: true }
      );

      res.json(post);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route   GET api/posts
// @desc    Get all posts
// @access  Private
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find().sort({ dateposted: -1 });

    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   GET api/posts/:id
// @desc    Get post by ID
// @access  Public
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ msg: "Post not found" });
    }

    res.json(post);
  } catch (err) {
    console.error(err.message);

    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Post not found" });
    }

    res.status(500).send("Server Error");
  }
});

// @route   Delete api/posts/:id
// @desc    Delete a post
// @access  Private
router.delete("/:id", admin, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ msg: "Post not found" });
    }

    await post.remove();

    res.json("Post removed");
  } catch (err) {
    console.error(err.message);

    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Post not found" });
    }

    res.status(500).send("Server Error");
  }
});

// @route   PUT api/posts/like/:id
// @desc    Like a post
// @access  Private
router.put("/like/:id", auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    // Check if the post has already been liked
    if (
      post.likes.filter(like => like.user.toString() === req.user.id).length > 0
    ) {
      return res.status(400).json({ msg: "Post already liked" });
    }

    post.likes.unshift({ user: req.user.id });

    await post.save();

    res.json(post.likes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   PUT api/posts/unlike/:id
// @desc    Like a post
// @access  Private
router.put("/unlike/:id", auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    // Check if the post has already been liked
    if (
      post.likes.filter(like => like.user.toString() === req.user.id).length ===
      0
    ) {
      return res.status(400).json({ msg: "Post has not yet been liked" });
    }

    // Get remove index
    const removeIndex = post.likes
      .map(like => like.user.toString())
      .indexOf(req.user.id);

    post.likes.splice(removeIndex, 1);

    await post.save();

    res.json(post.likes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   POST api/posts/comment/:id
// @desc    Comment on a post
// @access  Private
router.post("/comment/:id", auth, commentFormValidator, async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const user = await User.findById(req.user.id).select("-password");
    const post = await Post.findById(req.params.id);

    const comenterName = user.name.firstName + " " + user.name.lastName;

    const newComment = {
      text: req.body.text,
      name: comenterName,
      avatar: user.avatar,
      user: req.user.id
    };

    post.comments.unshift(newComment);

    await post.save();

    res.json(post.comments);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   DELETE api/posts/comment/:id/:comment_id
// @desc    delete a comment on a post
// @access  Private
router.delete("/comment/:id/:comment_id", auth, async (req, res) => {
  try {
    let post = await Post.findById(req.params.id);
    const user = await User.findById(req.params.id);

    // Pull out comment
    const comment = post.comments.find(
      comment => comment.id === req.params.comment_id
    );

    // Make sure comment exists
    if (!comment) {
      return res.status(404).json({ msg: "Comment does not exist" });
    }

    // Check user
    if (comment.user.toString() !== req.user.id && req.user.role !== "admin") {
      return res.status(401).json({ msg: "User not authorized" });
    }

    post = await Post.findByIdAndUpdate(
      req.params.id,
      { $pull: { comments: comment } },
      { new: true }
    );

    res.send(post);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
