import { Request, Response } from 'express';
import message from './models/message';

export const getMessages = async (req: Request, res: Response) => {
	const messages = await message.find();
	res.json(messages);
};
