import GroupMongo, {Group} from "./group.model";
import {Model} from "mongoose";

export class GroupRepository {
  mongoModel: Model<Group>;

  constructor(mongoModel?: Model<Group>) {
    this.mongoModel = mongoModel || GroupMongo;
  }

  async findAll() {
    return await this.mongoModel.find();
  }

  save(group: Group) {
  }
}
