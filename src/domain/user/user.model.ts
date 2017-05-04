import {Model, Schema, Document} from "mongoose";
import * as mongoose from "mongoose";

export interface User extends Document {
  name: string;
  email: string;
  password: string;
}

let UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    match: [/.+\@.+\..+/, 'Please fill a valid email address'],
    trim: true
  },
  password: {
    type: String,
    required: true
  }
});


const UserMongo: Model<User> = mongoose.model<User>('User', UserSchema);
export default UserMongo;
