import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config";

import { IUserLogin } from "../../interfaces/users";

export const userLoginService = async ({ email, password }: IUserLogin) => {
  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.find();

  const account = users.find((user) => user.email === email);

  if (!account) {
    throw new Error("Wrong email/password");
  }
  if (!bcrypt.compareSync(password, account.password)) {
    throw new Error("Wrong email/password");
  }
  const token = jwt.sign(
    {
      id: account.id,
      isAdm: account.isAdm,
    },
    process.env.SECRET_KEY as string,
    {
      expiresIn: "24h",
    }
  );

  return token;
};
