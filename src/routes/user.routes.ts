import { Router } from "express";

import { createUserController } from "../controllers/users/createUser.controller";
import { listUserController } from "../controllers/users/listUser.controller";
import { listUserIdController } from "../controllers/users/listUserId.controller";

import { verifyAuthUserMiddleware } from "../middlewares/verifyAuthUser.middleware";
import { verifyIsAdmMiddleware } from "../middlewares/verifyIsAdm.middleware";

export const userRouter = Router();

userRouter.post("", createUserController);
userRouter.get("",verifyAuthUserMiddleware,verifyIsAdmMiddleware, listUserController);
userRouter.get("/:id",verifyAuthUserMiddleware, listUserIdController);
