import { Response, Request } from "express";
import { listUserService } from "../../services/users/listUser.service";

export const listUserController = async (req: Request, res: Response) => {
  try {
    const userOrUsers = await listUserService();

    return res.status(200).json(userOrUsers);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).json({
        error: err.name,
        message: err.message,
      });
    }
  }
};
