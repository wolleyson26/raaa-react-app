const express = require("express");
const router = express.Router();
const { validationResult } = require("express-validator");
const { profileFormValidator } = require("../../validate");

const Profile = require("../../models/Profile");
const User = require("../../models/User");
const auth = require("../../middlewares/auth");

// @route   POST api/profile
// @desc    Create users profile
// @access  Private
router.post("/", auth, profileFormValidator, async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const {
    gender,
    birthDate,
    bio,
    school,
    degree,
    from,
    to,
    job,
    company,
    location,
    staddress,
    aptno,
    city,
    state,
    zip,
    country,
    phone
  } = req.body;

  // Build profile object

  const profileFields = {
    user: req.user.id,
    gender,
    birthDate,
    bio,
    education: {
      school,
      degree,
      from,
      to
    },
    occupation: {
      job,
      company,
      location
    },
    contact: {
      staddress,
      aptno,
      city,
      state,
      zip,
      country,
      phone
    },
    dateupdated: Date.now()
  };

  try {
    // Create
    const profile = new Profile(profileFields);

    await profile.save();
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   PUT api/profile/:id
// @desc    update users profile
// @access  Private
router.put("/:user_id", auth, profileFormValidator, async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const {
      gender,
      birthDate,
      bio,
      school,
      degree,
      from,
      to,
      job,
      company,
      location,
      staddress,
      aptno,
      city,
      state,
      zip,
      country,
      phone
    } = req.body;

    // Build profile object

    const profileFields = {};
    profileFields.dateupdated = Date.now();
    profileFields.user = req.params.user_id;

    if (bio) profileFields.bio = bio;

    if (gender) profileFields.gender = gender;
    if (birthDate) profileFields.birthDate = birthDate;

    // Build education object
    profileFields.education = {};
    if (school) profileFields.education.school = school;
    if (degree) profileFields.education.degree = degree;
    if (from) profileFields.education.from = from;
    if (to) profileFields.education.to = to;

    // Build occupation object
    profileFields.occupation = {};
    if (job) profileFields.occupation.job = job;
    if (company) profileFields.occupation.company = company;
    if (location) profileFields.occupation.location = location;

    // Build contact object
    profileFields.contact = {};
    if (staddress) profileFields.contact.staddress = staddress;
    if (aptno) profileFields.contact.aptno = aptno;
    if (city) profileFields.contact.city = city;
    if (state) profileFields.contact.state = state;
    if (zip) profileFields.contact.zip = zip;
    if (country) profileFields.contact.country = country;
    if (phone) profileFields.contact.phone = phone;

    // Update!

    // Check user
    if (req.params.user_id !== req.user.id && req.user.role !== "admin") {
      return res.status(401).json({ msg: "User not authorized" });
    }

    let profile = await Profile.findOne({ user: req.params.user_id });

    if (profile) {
      // Update
      profile = await Profile.findOneAndUpdate(
        { user: req.params.user_id },
        { $set: profileFields },
        { new: true }
      ).populate("user", ["name", "avatar"]);
      return res.json(profile);
    }
    // Create
    profile = new Profile(profileFields);

    await profile.save();
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   GET api/profile
// @desc    Get all profiles
// @access  Private
router.get("/", auth, async (req, res) => {
  try {
    const profiles = await Profile.find()
      .populate("user", ["name", "avatar"])
      .select("-dateofbirth")
      .sort({ created: -1 });
    res.json(profiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   GET api/profile/user/:user_id
// @desc    Get profile by user ID
// @access  Private
router.get("/user/:user_id", auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.params.user_id })
      .populate("user", ["name", "avatar"])
      .select("-dateofbirth");

    if (!profile) {
      return res.status(400).json({ msg: "There is no profile for this user" });
    }

    res.json(profile);
  } catch (err) {
    if (err.kind === "ObjectId") {
      return res.status(400).json({ msg: "Profile not found" });
    }
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   DELETE api/profile
// @desc    Delete profile, user & posts
// @access  Private
router.delete("/", auth, async (req, res) => {
  try {
    // @todo - remove users posts
    // Remove profile
    await Profile.findOneAndRemove({ user: req.user.id });

    // Remove user
    await User.findOneAndRemove({ _id: req.user.id });

    res.json({ msg: "User deleted" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
