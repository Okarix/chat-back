import mongoose, { Schema, Document } from 'mongoose';

interface IMessage extends Document {
	sender: string;
	receiver: string;
	message: string;
	timestamp: string;
}

const messageSchema: Schema = new Schema({
	sender: { type: String, required: true },
	receiver: { type: String, required: true },
	message: { type: String, required: true },
	timestamp: { type: String, required: true },
});

export default mongoose.model<IMessage>('Message', messageSchema);
