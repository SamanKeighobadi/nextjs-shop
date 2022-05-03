import mongoose from "mongoose";

const connectDB = () => {
  if (mongoose.connections[0].readyState) {
    console.log("Already connected...");
    return;
  }
  mongoose.connect(
    "mongodb://localhost:27017/next_shop",
    {
      
    },
    (err) => {
      if (err) throw err;
      console.log("connected to mongodb.");
    }
  );
};

export default connectDB;
