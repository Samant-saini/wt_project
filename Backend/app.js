
import express from "express";
import { config } from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import { dbConnection } from "./database/dbConnection.js";

import messageRouter from "./router/messageRouter.js";
import { errorMiddleware } from "./middlewares/errorMiddleware.js";

import userRouter from "./router/userRouter.js";
import appointmentRouter from "./router/appointmentRouter.js"; // Corrected import statement

const app = express();
config({ path: "./config/config.env" });
app.use(cors({
    // origin:[process.env.FRONTEND_URL,process.env.DASHBOARD_URL],
    origin:  ["http://localhost:5173", "http://localhost:5174"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
}));
app.use("/message", messageRouter);
app.use("/user", userRouter);
app.use("/appointment", appointmentRouter); // Corrected usage

dbConnection();
app.use(errorMiddleware);

export default app;
