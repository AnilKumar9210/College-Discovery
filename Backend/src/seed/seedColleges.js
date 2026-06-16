import dotenv from "dotenv";
import mongoose from "mongoose";


import connectDB from "../config/db.js";
import College from "../models/College.js";

import collegesData from "./collegesData.js";

dotenv.config();

const seedColleges = async () => {
  try {
    await connectDB();

    console.log("Connected to MongoDB");

    await College.deleteMany();

    console.log("Old colleges removed");

    await College.insertMany(collegesData);

    console.log(
      `${collegesData.length} colleges inserted successfully`
    );

    process.exit(0);

  } catch (error) {

    console.error(error);

    process.exit(1);

  }
};

seedColleges();
