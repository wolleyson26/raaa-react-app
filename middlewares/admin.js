const jwt = require("jsonwebtoken");
const keys = require("../config/keys");

const User = require("../models/User");

module.exports = async function(req, res, next) {
  // Get token from header
  const token = req.header("x-auth-token");

  // Check if not token
  if (!token) {
    return res.status(401).json({ msg: "No token, athorization denied" });
  }

  // Verify token
  try {
    const decoded = jwt.verify(token, keys.jwtSecret);

    req.user = decoded.user;

    const user = await User.findById(req.user.id).select("-password");

    if (user.role === "admin") {
      next();
    } else {
      res.status(401).json({ msg: "Athorization denied" });
    }
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};
