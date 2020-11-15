import express from 'express';
import User from '../models/userModel';

const router = express.Router();


router.post("/signin", async(req,res) => {

    const signinUser = await User.findOne({
        email: req.body.email,
        password: req.body.password
    });
    if(signinUser){
        res.send({
            _id: signinUser.id,
            name: signinUser.name,
            email: signinUser.email,
            token: getToken(user)
        })
    }else{
        res.status(401).send({msg:'Invalid Username or Password!'});
    }
});


router.get("/createuser", async (req, res) => {
    try {
        const user = new User({
            name : 'Jack',
            email : 'jack@email.com',
            password: '1234'
        });
        const newUser = await User.save();
        res.send(newUser);
    } catch (error) {
        res.send({msg: error.message});
    }
});

export default router;