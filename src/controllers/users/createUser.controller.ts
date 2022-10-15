import { Request, Response } from "express";
import { userCreateService } from "../../services/users/createUser.service";

export const createUserController = async (req: Request, res: Response) => {
  const { name, email, isAdm, password } = req.body;

  try {
    const newUser = await userCreateService({name, email, isAdm, password})

    return res.status(201).json(newUser)
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).json({
        error: err.name,
        message: err.message,
      });
    }
  }
};
