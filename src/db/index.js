import mongoose from "mongoose";
import { db_name } from "../Constants.js";

const connectDb = async () => {
  try {
   const connectionInstance =  await mongoose.connect(`${process.env.Mongodb_Url}/${db_name}`);
   console.log(`MongoDB Connection : ${connectionInstance.connection.host}`)
  } catch (error) {
    console.log('Error caused : ' + error);
    process.exit(1);
  }
};

export default connectDb;