const User = require('../../models/User');
const config = require('config');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const generateAccessToken = (id) => {
    const payload = {id}
    return jwt.sign(payload, config.get('secret'), {expiresIn: "24h"});
}

class authController {
    async registration(req, res) {
        try {
            const {email, name, password} = req.body;
            const candidate = await User.findOne({email});
            if (candidate) {
                return res.status(400).json({message: 'User with this email already exist'});
            }
            const hashPassword = bcrypt.hashSync(password, 7);
            const user = new User({email, name: name, password: hashPassword});
            await user.save();
            return res.json({message: "User was successfuly registered"});
        } catch (error) {
            console.log(error);
            res.status(400).json({message: 'Reg error'});
        }
    }

    async login(req, res) {
        try {
            const {email, password} = req.body;
            const user = await User.findOne({email});
            if (!user) {
                return res.status(400).json({message: 'User not found'});
            }
            const validPassword = bcrypt.compareSync(password, user.password);
            if (!validPassword) {
                return res.status(400).json({message: 'Wrong password'});
            }
            const token = generateAccessToken(user._id);
            return res.json({token});
        } catch (error) {
            console.log(error);
            res.status(400).json({message: 'Login error'});
        }
    }

    async getUsers(req, res) {
        try {
            const users = await User.find();
            res.json(users);
        } catch (error) {
            console.log(e);
        }
    }
}

module.exports = new authController();