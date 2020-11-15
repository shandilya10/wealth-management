import express from 'express';
import dotenv from 'dotenv';
import config from './config';
import mongoose from 'mongoose';
import userRoute from './routes/userRoute';

dotenv.config();

const mongodbUrl = config.MONGODB_URL;
mongoose.connect(mongodbUrl, {
    useNewUrlParser:true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).catch(error => console.log(error.reason));
const app = express();

app.use('/api/users', userRoute);
app.get('/', (req,res) => {
    res.send('Server Running!');
});
app.listen(5000, () => {console.log("Server Started on http://localhost:5000")});