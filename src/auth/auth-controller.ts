import { Request, Response } from 'express';
import User from '../user/models/User';

export const login = async (req: Request, res: Response) => {
	const { username, password } = req.body;
	const user = await User.findOne({ username, password });
	if (user) {
		res.sendStatus(200);
	} else {
		res.sendStatus(401);
	}
};

export const register = async (req: Request, res: Response) => {
	const { username, password } = req.body;
	try {
		const newUser = new User({ username, password, online: false });
		await newUser.save();
		res.sendStatus(201);
	} catch (error) {
		res.status(400).send(error);
	}
};
