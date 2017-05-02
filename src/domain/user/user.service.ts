import {User, default as UserMongo} from "./user.model";
import {Model} from "mongoose";

export class UserService {
  mongoModel: Model<User>;

  constructor(mongoModel?: Model<User>) {
    this.mongoModel = mongoModel || UserMongo;
  }

  async create(name: string, email: string, password: string) {

    let user = new this.mongoModel({
      name: name,
      email: email,
      password: password
    });

    return await user.save();
  }

  async findByEmail(email: string) {
    return await this.mongoModel.findOne({email:email});
  }

  async findById(id: string) {
    return await this.mongoModel.findById(id);
  }

}
