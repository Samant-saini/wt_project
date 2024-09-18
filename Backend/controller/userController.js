import {catchAsyncErrors} from "../middlewares/catchAsyncErrors.js";
 import ErrorHandler from "../middlewares/errorMiddleware.js";
import { User } from "../models/userSchema.js";
import { generateToken } from "../utils/jwToken.js";
import cloudinary from "cloudinary"
export const patientRegister=catchAsyncErrors(async(req,res,next)=>{
    const {
        firstName,
        lastName,
        email,
        phone,
        password,
        gender,
        dob,
        nic,
        role
    }=req.body;
    
    if(
        !firstName || 
        !lastName ||
        !nic || 
        !email || 
        !phone ||
        !password ||
        !gender || 
        !role
    ) {
        return next (new ErrorHandler("Please fill full form !",400));
    }
    let user=await User.findOne({email});
    if(user){
        return next(new ErrorHandler("User already is registered",400));
    }
    
    await User.create({firstName,
        lastName,
        email,
        phone,
        password,
        gender,
        dob,
        nic,
        role});
        // generateToken(user,"user reistered",200,res)
    res.status(200).json({
        sucees:true,
        message:"user create  successfully",
    });
})
export const login=catchAsyncErrors(async(req,res,next)=>{
    const {email,password,confirmPassword,role}=req.body;
    if(!email||!password||!confirmPassword||!role){
        return next(new ErrorHandler("Please Provide All Details",400));
    }
    if(password !==confirmPassword){
        return next(new ErrorHandler("Password and Confirm Password does not matched",400));
    }
    const user=await User.findOne({email}).select("+password");
    if(!user){
        return next(new ErrorHandler("inavlid password or email",400));
    }
    const isPasswordMatched=await user.comparePassword(password);
    if(!isPasswordMatched){
        return next(new ErrorHandler("Invalid passord or email",400));
    }
    if(role!==user.role){
        return next(new ErrorHandler("user with this  role is found",400));
    }
    // res.status(200).json({
    //     sucees:true,
    //     message:"user login  successfully",
    // })
    generateToken(user,"user suceesfull login",200,res)
});
export const addNewAdmin=catchAsyncErrors(async(req,res,next)=>{
    const {
        firstName,
        lastName,
        email,
        phone,
        password,
        gender,
        dob,
        nic
        
    }=req.body;
    if(
        !firstName || 
        !lastName ||
       
        !email || 
        !phone ||
        !password ||
        !gender ||
        !dob||
        !nic
    
    ) {
        return next (new ErrorHandler("Please fill full form !",400));
    }
    const isRegistered=await  User.findOne({email});
    if(isRegistered){
        return next(new ErrorHandler(`${isRegistered.role} With this Email Already exists`));
    }
 const admin=await User.create({  firstName,
    lastName,
    email,
    phone,
    password,
    gender,
    dob,
    nic,
role:"Admin"});
res.status(200).json({
    success:true,
    message:"New Admin is registered",
    admin,
})
// generateToken(admin,"admin suceesfull login",200,res)
})
export const getAlldoctors=catchAsyncErrors(async(req,res,next)=>{
    const doctors=await User.find({role:"Doctor"});
    res.status(200).json({
        success:true,
        doctors,
    });

    });
export const getUserDetails=catchAsyncErrors(async(req,res ,next)=>{
    const user=req.user;
    res.status(200).json({
        success:true,
        user,
    });
});
// export const logoutAdmin=catchAsyncErrors(async(req,res,next)=>{
//     res.status(200)
//     .cookie("adminToken","",{
//         httpOnly:true,
//         expires:new Date(Date.now()),

//     })
//     .json({
//         success:true,
//         message:"Admin Log out successfully",
//     });
// })
export const logoutAdmin = catchAsyncErrors(async (req, res, next) => {
    res.status(200)
        .cookie("adminToken", "", {
            httpOnly: true,
            expires: new Date(Date.now()), // Expire immediately
            path: '/', // Ensure the cookie path is correctly set
            // secure: process.env.NODE_ENV === 'production' // Uncomment if using HTTPS
        })
        .json({
            success: true,
            message: "Admin logged out successfully",
        });
});

export const Patientlogout=catchAsyncErrors(async(req,res,next)=>{
    res.status(200)
    .cookie("patientToken"," ",{
        httpOnly:true,
        expires:new Date(Date.now()),
    })
    .json({
        success:true,
        message:"Patient Log out successfully",
    })

})
export const addnewDoctor=catchAsyncErrors(async(req,res,next)=>{
    if(!req.files ||Object.keys(req.files).length===0){
        return next(new ErrorHandler("Doctor Avatar is required",400));
    }
    const {docAvatar}=req.files;
    const allowedFormats=["image/png","image/jpeg","image/webp"];
    if (!allowedFormats.includes(docAvatar.mimetype)){
        return next(new ErrorHandler("File format is not allowed",400));
    }
    const {
        firstName,
        lastName,
        email,
        phone,
        password,
        gender,
        dob,
        nic,
        doctorDepartment

    }=req.body;
    if( !firstName||
        !lastName||
        !email||
        !phone||
        !password||
        !gender||
        !dob||
        !nic||
        !doctorDepartment){
            return next(new ErrorHandler("please provide the full Details",400))
        }
        const isRegistered=await User.findOne({email});
        if(isRegistered){
            return next(new ErrorHandler(`${isRegistered.role} already registered`,400))
        }
        const cloudinaryResponse=await cloudinary.uploader.upload(
            docAvatar.tempFilePath
        );
        if(!cloudinaryResponse || cloudinaryResponse.error){
            console.error(
                "cloudinary Error:",
                cloudinaryResponse.error || "unknown cloudinary Error"
            );
        }
const doctor=await User.create({
    firstName,
    lastName,
    email,
    phone,
    password,
    gender,
    dob,
    nic,
    doctorDepartment,
    role:"Doctor",
    docAvatar:{
        public_id:cloudinaryResponse.public_id,
        url:cloudinaryResponse.secure_url,
    },
});
res.status(200).json({
    success:true,
    message:"New Doctor registered",
    doctor,
});
});

