import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  isActivated: { type: String, default: false },
  activationLink: { type: String },
});

export default model('User', UserSchema)
