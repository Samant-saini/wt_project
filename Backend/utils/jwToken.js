export const generateToken=(user,message,statusCode,res)=>{
    const token=user.generateJsonWebToken(); 
    //    console.log("token" , token) //Generating the JWT:
    const cookieName=user.role==="Admin" ? "adminToken":"patientToken";   //Setting the Cookie Name Based on User Role:
    // console.log("cookie name" , cookieName)
    res.status(statusCode).cookie(cookieName,token,{     ///Setting the JWT as a Cookie:
        expires:new Date(Date.now()+process.env.COOKIE_EXPIRE*24*60*60*1000),
        httpOnly:true,

    }).json({
        success:true,
        message,
        user,
        token,
    });

}