import {Model, Schema, Document} from "mongoose";
import * as mongoose from "mongoose";

export interface Group extends Document {
  title: string;
  date: Date;
  description: string;
  version: number;

  showVersion(): number;
}

let GroupSchema = new Schema({
  title: String,
  date: Date,
  description: String,
  version: Number
});

GroupSchema.methods.showVersion = () => {
  return this.version;
};

GroupSchema.statics.makeGroup = (title: string, description: string) => {
  return new GroupMongo({
    title: title,
    description: description,
    date: new Date()
  })
};

const GroupMongo: Model<Group> = mongoose.model<Group>('Group', GroupSchema);
export default GroupMongo;
