import express from "express";
const router=express.Router();
import { addNewAdmin,addnewDoctor,getAlldoctors , getUserDetails,login, logoutAdmin, Patientlogout, patientRegister } from "../controller/userController.js";
import {isAdminAuthenticated,
    isPatientAuthenticated} from "../middlewares/auth.js"
router.post("/patient/register",patientRegister);
 router.post("/login",login);
router.post("/admin/addnew",isAdminAuthenticated,addNewAdmin);
router.get("/doctors",getAlldoctors);
router.get("/admin/me",isAdminAuthenticated,getUserDetails);
router.get("/patient/me",isPatientAuthenticated,getUserDetails);
router.get("/admin/logout",isAdminAuthenticated,logoutAdmin);
router.get("/patient/logout",isPatientAuthenticated,Patientlogout);
router.post("/doctor/addnew",isAdminAuthenticated,addnewDoctor);

export default router;