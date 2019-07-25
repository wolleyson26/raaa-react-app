const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");

mongoose
  .connect(keys.mongoURI, {
    useNewUrlParser: true,
    autoIndex: false, // Don't build indexes
    reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
    reconnectInterval: 500, // Reconnect every 500ms
    poolSize: 10, // Maintain up to 10 socket connections
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0,
    connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
    socketTimeoutMS: 45000,
    family: 4 // Use IPv4, skip trying IPv6
  })
  .then(() => {
    console.log("MongoDB connected...");
  })
  .catch(err => console.log(err));

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
