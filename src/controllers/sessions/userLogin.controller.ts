import { Request, Response } from "express";
import { userLoginService } from "../../services/sessions/userLogin.service";

export const userLoginController = async (req: Request, res: Response) => {
  try {
    const {email, password} = req.body
    const token = await userLoginService({email,password})

    return res.status(200).json({token})
  } catch (err) {
    if (err instanceof Error) {
      return res.status(401).json({
        error: err.name,
        message: err.message,
      });
    }
  }
};
