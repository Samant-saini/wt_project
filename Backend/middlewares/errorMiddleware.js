class ErrorHandler extends Error{
    constructor(message, statusCode){
        super(message);
            this.statusCode = statusCode;
        }
    }
    export const errorMiddleware=(err,req,res,next)=>{
        err.message=err.message || "internal server error";
        err.statusCode=err.statusCode ||500;
        if(err.code==11000){
            const message=`Duplicatte ${Object.keys(err.keyValue)}Entered`;
            err=new ErrorHandler(message,400);
        }
        if(err.name==="JsonwebtokenError"){
            const mesage="Json web token is invalid,Try Again !";
            err=new ErrorHandler(mesage,400); 
        }
        if(err.name==="JsonwebtokenError"){
            const mesage="Json web token is Expired,Try Again !";
            err=new ErrorHandler(mesage,400); 
        }
        if(err.name==="CastError"){
            const mesage=`Invalid ${err.path}`;
            err=new ErrorHandler(mesage,400); 
        }
        const errorMessage=err.errors ?Object.values(err.errors).map(error=>error.message).join(" "):err.message;

        res.status(err.statusCode).json({
            success:false,
            message:errorMessage,
        });

    };
    export default ErrorHandler ;
