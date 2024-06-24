import mongoose from "mongoose";
export const dbConnection=()=>{ //it is initraite to database connection
    mongoose.connect(process.env.MONGO_URI,{ //The mongoose.connect() method is used to connect to a MongoDB database
        // process.env.MONGO_URI is expected to hold the MongoDB connection string. 
         dbName: "MERN_STACK_HOSPITAL_MANAGEMENT"// MERN_STACK_HOSPITAL_MANAGEMENT, ensuring that all operations performed through this connection use this database.

    }).then(()=>{
        console.log("connected to database")
    }).catch((err)=>{
        console.log(`some error occured while coonecting to database :${err}`);
    });
}
