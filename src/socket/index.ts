import { Server } from 'socket.io';
import User from '../user/models/User';
import { default as Message } from '../chat/models/Message';

const initializeSocket = (io: Server) => {
	io.on('connection', socket => {
		console.log('a user connected');

		socket.on('join', async (username: string) => {
			socket.data.username = username;
			await User.findOneAndUpdate({ username }, { online: true });
			io.emit('userOnline', username);
		});

		socket.on('message', async msg => {
			const message = new Message(msg);
			await message.save();
			io.emit('message', msg);
		});

		socket.on('typing', data => {
			socket.broadcast.emit('typing', data);
		});

		socket.on('disconnect', async () => {
			const username = socket.data.username;
			if (username) {
				await User.findOneAndUpdate({ username }, { online: false });
				io.emit('userOffline', username);
			}
		});
	});
};

export default initializeSocket;
