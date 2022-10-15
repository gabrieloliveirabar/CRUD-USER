import { Request,Response } from "express";
import { listUserIdService } from "../../services/users/listUserId.service";

export const listUserIdController = async  (req:Request, res:Response)=>{
    try {
         const id = req.params.id
         const userId = await listUserIdService(id)

         return res.status(200).json(userId)
    } catch (err) {
        if (err instanceof Error) {
            return res.status(400).json({
              error: err.name,
              message: err.message,
            });
    }
}
}