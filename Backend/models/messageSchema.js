import mongoose from "mongoose";
import validator from "validator"

const messageSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        minLength:[3,"First Name Must cantain At least three character"]
    },
    lastName:{
        type:String,
        required:true,
        minLength:[3,"last Name Must cantain atleast 3 character"]
    },
    email:{
        type:String,
        required:true,
        validate:[validator.isEmail,"please Provide a valid Email"]
    },
    phone:{
        type:String,
        required:true,
        minLength:[11,"phone number cantain must 11 Digits"],
        maxLength:[11,"phone number cantain atleast 10 characters"]
    },
    message:{
        type:String,
        required:true,
        minLength:[11,"phone number cantain atleast 10 characters"]
    },
})
export const  Message=mongoose.model("Message",messageSchema)