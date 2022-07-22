
const { createNote, getNotes, updateNote, deleteNote } = require('../controller/notes')
const { requireSignIn } = require('../middleware/auth')
const { noteValidation, errorMsg } = require('../validator/note')


const router = require('express').Router()

router.post('/note/createNote',requireSignIn,noteValidation,errorMsg,createNote)
router.post('/note/updateNote/:id',requireSignIn,updateNote)
router.post('/note/deleteNote/:id',requireSignIn,deleteNote)

router.get('/note/getNotes',requireSignIn,getNotes)


module.exports = router