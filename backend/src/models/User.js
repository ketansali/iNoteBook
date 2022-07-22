const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name is required']
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'email is required'],
        
    },
    password: {
        type: String,
        required: [true, 'password is required']
    }
}, { timestamps: true })

userSchema.pre('save', async function(next){
    if(!this.isModified('password')){
        return next()
    }
    const salt =await bcrypt.genSalt(10)
     this.password = await bcrypt.hash(this.password,salt)
})
module.exports = mongoose.model('users', userSchema)