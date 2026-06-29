import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import rateLimit from "express-rate-limit";

import connectDB from "./src/config/db.js";

import authRoutes from "./src/routes/authRoutes.js";
import collegeRoutes from "./src/routes/collegeRoutes.js";
import qaRoutes from "./src/routes/qaRoutes.js";
import recommendationRoutes from "./src/routes/recomendationRoutes.js";
import comparisonRoutes from "./src/routes/comparisonRoutes.js";
import dashboardRoutes from "./src/routes/dashboardRoutes.js";

import errorHandler from "./src/middleware/errorHandler.js";


import profileRoutes
    from "./src/routes/profileRoutes.js";


import adminRoutes
    from "./src/routes/adminRoutes.js";

import sendEmail from "./src/utils/sendEmail.js";

import aiChatRoutes from "./src/routes/aiChatRoutes.js"

import aiComparisonRoutes from "./src/routes/aiComparisonRoutes.js";

import chatHistoryRoutes from "./src/routes/chatHistoryRoutes.js";



dotenv.config();

await connectDB();

const app = express();

/* Security Middleware */
app.use(helmet());

/* Logging */
app.use(morgan("dev"));

/* Rate Limiting */
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: {
        success: false,
        message: "Too many requests, please try again later."
    }
});

app.use(limiter);

/* Core Middleware */
app.use(cors());

app.use(express.json());

app.use(express.urlencoded({
    extended: true
}));

/* Health Check */
app.get("/", (req, res) => {

    res.status(200).json({
        success: true,
        message: "College Discovery API Running"
    });

});

/* Routes */
app.use("/api/auth", authRoutes);

app.use("/api/colleges", collegeRoutes);

app.use("/api/questions", qaRoutes);

app.use(
    "/api/recommendations",
    recommendationRoutes
);

app.use(
    "/api/compare",
    comparisonRoutes
);

app.use(
    "/api/dashboard",
    dashboardRoutes
);


app.use(
    "/api/ai-chat",
    aiChatRoutes
);

app.use (
    "/api/ai-compare",
    aiComparisonRoutes
);


//chat history routes

app.use ('/api/chats',chatHistoryRoutes);


app.get("/test-email", async (req, res) => {
  try {
    const response = await sendEmail(
      "your_email@gmail.com", // replace with your email
      "College Discovery Test",
      "<h1>Email Working 🚀</h1>"
    );

    res.status(200).json({
      success: true,
      response,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
});

/* 404 Handler */


app.use(
    "/api/profile",
    profileRoutes
);



app.use(
    "/api/admin",
    adminRoutes
);


// recommendation routes 

app.use((req, res) => {

    res.status(404).json({
        success: false,
        message: "Route not found"
    });

});
/* Global Error Handler */
app.use(errorHandler);



const PORT =
    process.env.PORT || 5000;

app.listen(PORT, () => {

    console.log(
        `🚀 Server running on http://localhost:${PORT}`
    );

});