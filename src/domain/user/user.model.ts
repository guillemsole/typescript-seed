import {Model, Schema, Document} from "mongoose";
import * as mongoose from "mongoose";
import * as crypto from "crypto";

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
    match: [/.+\@.+\..+/, 'Please fill a valid email address']
  },
  password: {
    type: String,
    required: true
  }
});


UserSchema.pre("save", (next) => {
  if (this.isNew) {
    this.password = hashPassword(this.password);
  }
  next();
});

const hashPassword = (password) => {
  return crypto.createHash('md5').update(password).digest("hex");
}

const UserMongo: Model<User> = mongoose.model<User>('User', UserSchema);
export default UserMongo;
