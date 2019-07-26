const mongoose = require("mongoose");
const keys = require("./keys");

const connectDB = async () => {
  try {
    await mongoose.connect(keys.mongoURI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
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
    });

    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
