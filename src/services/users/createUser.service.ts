
import { User } from "../../entities/user.entity";
import bcrypt from "bcrypt";

import { IUserRequest } from "../../interfaces/users";

import  AppDataSource  from "../../data-source";

export const userCreateService = async ({name, email, isAdm, password}: IUserRequest)=>{
    const userRepository = AppDataSource.getRepository(User)

    const users =  await userRepository.find()

    const emailAlreadyExists = users.find((user)=>user.email === email)

    if(emailAlreadyExists){
        throw new Error("Email Already exists");
    }

    const user = new User()
    user.name = name,
    user.email = email,
    user.isAdm = isAdm, 
    user.password = bcrypt.hashSync(password,10)

    userRepository.create(user);
    await userRepository.save(user)

    return user
}