import mongoose from "mongoose";
import dotenv from "dotenv";

import connectDB from "./src/config/db.js";
import College from "./src/models/College.js";

dotenv.config();

const updateImages = async () => {

   

  try {

    await connectDB();

    const colleges =
      await College.find();

    for (
      let i = 0;
      i < colleges.length;
      i++
    ) {

      colleges[i].image =
        `https://loremflickr.com/800/600/college?lock=${i}`;

      await colleges[i].save();

      console.log(
        `Updated ${colleges[i].name}`
      );

    }

    console.log(
      "All images updated successfully"
    );

    process.exit();

  } catch (error) {

    console.log(error);

    process.exit(1);

  }

};

updateImages();