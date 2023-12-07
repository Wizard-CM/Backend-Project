// require('dotenv').config()
import dotenv from 'dotenv';
import connectDb from "./db/index.js";

dotenv.config({
  path:"./env"
})

connectDb()

// First Approach
/*

import mongoose from "mongoose";
import { db_name } from "./Constants.js";
import express from "express";
const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.Mongodb_Url}/${db_name}`);

    // 
    app.on("Errrr", (error) => {
      console.log(`Errrr : ${error}`);
      throw error;
    });

    // Tf there is no error , app will listen on the given port
    app.listen(process.env.PORT, () => {
      console.log(`App is listening on port : ${process.env.PORT}`);
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
})();

*/