import {User, default as UserMongo} from "./user.model";
import {Model} from "mongoose";

export class UserService {
  mongoModel: Model<User>;

  constructor(mongoModel?: Model<User>) {
    this.mongoModel = mongoModel || UserMongo;
  }

  create(name: string, email: string, password: string) {

    let user = new this.mongoModel({
      name: name,
      email: email,
      password: password
    });

    user.save();

    return user;
  }

 /* async findAll(): Promise<User[]> {
    return await this.repository.findAll()
  } */
}
