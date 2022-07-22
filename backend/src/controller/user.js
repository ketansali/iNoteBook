const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
exports.signUp = async (req, res) => {
    try {
        const userExited = await User.findOne({ email: req.body.email })
        if (userExited) { return res.status(400).json('Already User existed') }
        User.create(req.body)
            .then(async (user) => {

                const token = await jwt.sign({ user: user._id }, process.env.JWTKEY)
                return res.status(201).json({ token })
            }).catch((err) => {
                return res.status(201).json(err)
            })

    } catch (err) {
        return res.status(400).json(err)
    }
}
exports.logIn = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email: email })
        if (!user) { return res.status(409).json('User Not existed') }
        const isMatch = await bcrypt.compare(password, user.password)

        if (isMatch) {
            const token = await jwt.sign({ user: user._id }, process.env.JWTKEY)
            return res.status(200).json({ token })
        } else {

            return res.status(400).json('Please try to login with correct credentials')
        }

    } catch (err) {
        return res.status(400).json(err)
    }
}
exports.getUser = async (req, res) => {
    try {
        const user = await User.findById(req.user.user).select('-password')
        return res.status(200).json(user)

    } catch (err) {
        return res.status(400).json(err)
    }
}