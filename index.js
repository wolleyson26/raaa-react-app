const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");

try {
  mongoose.connect(keys.mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    reconnectTries: 100, // Never stop trying to reconnect
    reconnectInterval: 500, // Reconnect every 500ms
    poolSize: 10, // Maintain up to 10 socket connections
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0
  });

  console.log("MongoDB Connected...");
} catch (err) {
  console.error(err.message);
  // Exit process with failure
  process.exit(1);
}

const app = express();

// Init middleware
app.use(express.json({ extended: false }));

app.use("/uploads", express.static("uploads"));

// Server routes
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/users", require("./routes/api/users"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));
app.use("/api/events", require("./routes/api/events"));

const PORT = process.env.PORT || 5005;

app.listen(PORT);
