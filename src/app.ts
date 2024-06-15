import express from 'express';
import cors from 'cors';
import authRouter from './auth/auth-router';
import userRouter from './user/user-router';
import chatRouter from './chat/chat-router';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/auth', authRouter);
app.use('/users', userRouter);
app.use('/messages', chatRouter);

export default app;
