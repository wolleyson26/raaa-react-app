const express = require("express");
const router = express.Router();
const { validationResult } = require("express-validator");
const { eventFormValidator } = require("../../validate");

// Middlewares
const admin = require("../../middlewares/admin");
const Event = require("../../models/Event");

// @route   GET api/events
// @desc    get events
// @access  Public
router.get("/", async (req, res) => {
  try {
    const events = await Event.find().sort({ date: 1 });

    res.json(events);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   Post api/events
// @desc    Create an events
// @access  Private
router.post("/", admin, eventFormValidator, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const user = await User.findById(req.user.id).select("-password");

    const {
      title,
      date,
      time,
      location,
      locationUrl,
      body,
      publish
    } = req.body;

    //   let image = "";

    //   if (req.file) image = req.file.path;

    const newEvent = new Event({
      title,
      date,
      time,
      location,
      locationUrl,
      body,
      publish,
      image,
      user: req.user.id
    });

    const event = await newEvent.save();

    res.json(event);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   PUT api/events
// @desc    Update an events
// @access  Private
router.put("/:id", admin, eventFormValidator, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const user = await User.findById(req.user.id).select("-password");

    const {
      title,
      date,
      time,
      location,
      locationUrl,
      body,
      image,
      publish
    } = req.body;

    const eventFields = {};
    eventFields.user = req.user.id;
    eventFields.title = title;
    eventFields.date = date;
    eventFields.location = location;
    eventFields.body = body;

    if (time) eventFields.time = time;
    if (locationUrl) eventFields.locationUrl = locationUrl;
    if (image) eventFields.image = image;
    if (publish) eventFields.publish = publish;

    let event = await Event.findById(req.params.id);

    // update
    event = await Event.findOneAndUpdate(
      req.params.id,
      { $set: eventFields },
      { new: true }
    );
    res.json(event);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   GET api/events/:id
// @desc    Get event by ID
// @access  Private
router.get("/:id", admin, async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);

    if (!event) {
      return res.status(404).json({ msg: "Event not found" });
    }

    res.json(event);
  } catch (err) {
    console.error(err.message);

    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Event not found" });
    }

    res.status(500).send("Server Error");
  }
});

// @route   DELETE api/events/:id
// @desc    Delete an event
// @access  Private
router.delete("/:id", admin, async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);

    if (!event) {
      return res.status(404).json({ msg: "Event not found" });
    }

    await event.remove();

    res.json({ msg: "Event removed" });
  } catch (err) {
    console.error(err.message);

    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Event not found" });
    }

    res.status(500).send("Server Error");
  }
});

module.exports = router;
