import mongoose from "mongoose";

const publisherSchema = new mongoose.Schema({
  name: String,
  location: String,
});

const Publisher = mongoose.model("Publisher", publisherSchema);

export default Publisher;
