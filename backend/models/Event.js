

const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  _id : { type: Number, required: true },
  title: { type: String, required: true },
  date: { type: Date, required: true },
  description: { type: String, required: true },
  Price: { type: Number, default: 100 },
  image: { type: String, required: true },
  website: { type: String, required: true },
});
const Event = mongoose.model("Event", eventSchema);

module.exports = Event;