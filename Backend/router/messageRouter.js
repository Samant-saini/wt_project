import express from "express";
import { getAllmessages, sendMessage } from "../controller/messageController.js";
import { isAdminAuthenticated } from "../middlewares/auth.js";
const router=express.Router();
router.post("/send",sendMessage);
router.get("/getallmessages",isAdminAuthenticated,getAllmessages)

export default router;