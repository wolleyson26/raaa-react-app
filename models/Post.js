const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "user"
  },
  classyear: {
    type: String
  },
  title: {
    type: String,
    required: true
  },
  postbody: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  date: Date,
  posttype: {
    type: String,
    required: true
  },
  image: {
    thumbnail: String,
    caption: String
  },
  publish: {
    type: Boolean,
    default: false
  },
  meta: String,
  name: Object,
  avatar: String,
  likes: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "user"
      }
    }
  ],
  comments: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "user"
      },
      text: {
        type: String,
        required: true
      },
      avatar: String,
      name: String,
      date: {
        type: Date,
        default: Date.now
      }
    }
  ],

  dateposted: {
    type: Date,
    default: Date.now
  }
});

module.exports = Post = mongoose.model("post", PostSchema);
