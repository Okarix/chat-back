import mongoose, { Schema, Document } from 'mongoose';

interface IUser extends Document {
	username: string;
	password: string;
	online: boolean;
}

const userSchema: Schema = new Schema({
	username: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	online: { type: Boolean, default: false },
});

export default mongoose.model<IUser>('User', userSchema);
