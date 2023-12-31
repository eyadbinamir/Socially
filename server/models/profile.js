import { Schema, model, Types } from "mongoose";
const { ObjectId } = Types;
import { config } from "dotenv";
config();
const ProfileSchema = new Schema({
  _id: {
    type: ObjectId,
  },
  firstName: {
    type: String,
    required: true,
    min: 2,
    max: 20,
  },
  lastName: {
    type: String,
    required: true,
    min: 2,
    max: 20,
  },
  coverPath: String,
  picturePath: {
    type: String,
    default: `${process.env.API_URL}/assets/default_avatar.jpg`,
  },
  bio: String,
  birthDate: String,
  gender: String,
  followers: {
    type: Array,
    default: [],
  },
  following: {
    type: Array,
    default: [],
  },
  location: String,
  occupation: String,
  createdAt: { type: Number, default: Date.now() },
});
const Profile = model("Profiles", ProfileSchema);
export default Profile;
