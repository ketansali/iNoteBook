const Notes = require('../models/Notes')

exports.getNotes = async (req, res) => {
    try {
        const user = await Notes.find({user:req.user.user})
        return res.status(200).json(user)

    } catch (err) {
        return res.status(400).json(err)
    }
}
exports.createNote = async (req, res) => {
    try {
        const {title,description,tag} = req.body
        const note = await Notes.create({title,description,tag,user:req.user.user})
        return res.status(201).json(note)

    } catch (err) {
        return res.status(400).json(err)
    }
}
exports.updateNote = async (req, res) => {
    try {
        const id = req.params.id
        const {title,description,tag} = req.body
        const note = await Notes.findByIdAndUpdate(id,{title,description,tag},{new:true})
        return res.status(200).json(note)

    } catch (err) {
        return res.status(400).json(err)
    }
}
exports.deleteNote = async (req, res) => {
    try {
        const id = req.params.id
        await Notes.findByIdAndDelete(id)
        return res.status(200).json({message : "Note has been deleted"})

    } catch (err) {
        return res.status(400).json(err)
    }
}