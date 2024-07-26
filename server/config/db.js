import mongoose from "mongoose";

const connected = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}`);
  } catch (err) {
    console.error("error for db.js:\n", err.message);
  }
};

export default connected;
