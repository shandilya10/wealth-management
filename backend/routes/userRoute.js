import express from 'express';
import User from '../models/userModel';
import { getToken, isAuth } from '../util';

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
            token: getToken(signinUser)
        })
    }else{
        res.status(401).send({msg:'Invalid Username or Password!'});
    }
});

router.post('/register', async (req, res) => {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    const newUser = await user.save();
    if (newUser) {
      res.send({
        _id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        token: getToken(newUser)
      });
    } else {
      res.status(401).send({ message: 'Invalid User Data.' });
    }
});

export default router;