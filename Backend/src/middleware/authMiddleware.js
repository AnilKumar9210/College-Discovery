import jwt from "jsonwebtoken";
import User from "../models/Users.js";
import dotenv from "dotenv";

dotenv.config();

const protect = async (
  req,
  res,
  next
) => {
  try {
    console.log("Protect middleware called",process.env.JWT_SECRET);

    let token;

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith(
        "Bearer"
      )
    ) {

      token =
        req.headers.authorization.split(
          " "
        )[1];

      const decoded =
        jwt.verify(
          token,
          process.env.JWT_SECRET
        );

      const user =
        await User.findById(
          decoded.id
        ).select("-password");

      if (!user) {
        return res.status(401).json({
          success: false,
          message:
            "User not found",
        });
      }

      req.user = user;

      req.userId = user._id;

      next();

    } else {

      return res.status(401).json({
        success: false,
        message:
          "Not authorized, no token",
      });

    }

  } catch (error) {

    console.log(error);

    return res.status(401).json({
      success: false,
      message:
        "Token invalid",
    });

  }
};

export default protect;