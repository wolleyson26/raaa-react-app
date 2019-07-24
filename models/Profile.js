const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  gender: String,
  birthDate: Date,
  bio: String,
  education: {
    school: {
      type: String,
      required: true
    },
    degree: {
      type: String,
      required: true
    },
    from: {
      type: Date,
      required: true
    },
    to: {
      type: Date,
      require: true
    }
  },
  occupation: {
    job: {
      type: String,
      required: true
    },
    company: {
      type: String,
      required: true
    },
    location: String
  },
  contact: {
    staddress: {
      type: String,
      require: true
    },
    aptno: {
      type: String
    },
    city: {
      type: String,
      require: true
    },
    state: {
      type: String,
      require: true
    },
    zip: String,
    country: {
      type: String,
      require: true
    },
    phone: {
      type: String,
      require: true
    }
  },
  created: {
    type: Date,
    default: Date.now
  },
  dateupdated: Date
});

module.exports = profile = mongoose.model("profile", ProfileSchema);
