import {Model, Schema, Document} from "mongoose";
import * as mongoose from "mongoose";

export interface User extends Document {
  name: string;
  email: string;
  password: string;

}

let UserSchema = new Schema({
  name: String,
  email: String,
  password: String
});


const UserMongo: Model<User> = mongoose.model<User>('User', UserSchema);
export default UserMongo;
