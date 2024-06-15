import http from 'http';
import { Server } from 'socket.io';
import app from './app';
import initializeSocket from './socket';
import connectDB from './utils/db';

const server = http.createServer(app);
const io = new Server(server, {
	cors: {
		origin: 'http://localhost:3000',
		methods: ['GET', 'POST'],
	},
});

initializeSocket(io);
connectDB();

const PORT = process.env.PORT || 8000;
server.listen(PORT, () => {
	console.log(`listening on *:${PORT}`);
});
