import{ Request, Response, NextFunction} from "express";

export const verifyIsAdmMiddleware = (req:Request, res:Response, next:NextFunction)=>{
    console.log(req.user.isAdm)
    if(!req.user.isAdm){
        
        return res.status(403).json({
            message: "User is not admin"
        })
    }
    return next()
}