import express from 'express';

const app = express();

app.get('/', (req,res) => {
    res.send('Server Running!');
});
app.listen(5000, () => {console.log("Server Started!")});