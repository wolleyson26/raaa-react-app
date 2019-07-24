const { check } = require("express-validator");

exports.signupValidator = [
  check("firstName", "Firstname is required")
    .not()
    .isEmpty(),
  check("lastName", "Lastname is required")
    .not()
    .isEmpty(),
  // email is not null, valid and normalized
  check("email", "Please enter a valid email").isEmail(),
  // check for password
  check("password", "Password field is required")
    .not()
    .isEmpty(),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Password must contain at least 6 characters")
    .matches(/\d/)
    .withMessage("Password must contain a number")
];

exports.signinValidator = [
  check("email", "Please include a valid email").isEmail(),
  check("password", "Password is required").exists()
];

exports.profileFormValidator = [
  check("school", "School field is required")
    .not()
    .isEmpty(),
  check("degree", "Degree field is required")
    .not()
    .isEmpty(),
  check("from", "From field is required")
    .not()
    .isEmpty(),
  check("to", "To field is required")
    .not()
    .isEmpty(),
  check("job", "Job title field is required")
    .not()
    .isEmpty(),
  check("company", "Company field is required")
    .not()
    .isEmpty(),
  check("staddress", "Street address field is required")
    .not()
    .isEmpty(),
  check("city", "City field is required")
    .not()
    .isEmpty(),
  check("state", "State field is required")
    .not()
    .isEmpty(),
  check("country", "Country field is required")
    .not()
    .isEmpty(),
  check("phone", "Phone field is required")
    .not()
    .isEmpty()
];

exports.postFormValidator = [
  check("title", "Title field is required")
    .not()
    .isEmpty(),
  check("postbody", "Post body field is required")
    .not()
    .isEmpty(),
  check("category", "Category field is required")
    .not()
    .isEmpty(),
  check("posttype", "Post type field is required")
    .not()
    .isEmpty()
];

exports.commentFormValidator = [
  check("text", "Comment field is required")
    .not()
    .isEmpty()
];

exports.eventFormValidator = [
  check("title", "Title is required")
    .not()
    .isEmpty(),
  check("date", "Date is required")
    .not()
    .isEmpty(),
  check("location", "Location is required")
    .not()
    .isEmpty(),
  check("body", "Event body is required")
    .not()
    .isEmpty()
];
