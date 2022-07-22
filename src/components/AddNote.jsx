
import { Container, Form, Button } from 'react-bootstrap'
import noteContext from '../context/notes/noteContext';
import React, { useContext, useState } from 'react'
const AddNote = () => {
    const context = useContext(noteContext)
    const { addNote,getNotes } = context
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [tag, setTag] = useState('')
    const handleClick = (e) => {
        e.preventDefault()
        addNote(title,description,tag)
        setTitle('')
        setDescription('')
        setTag('')
        getNotes()
    }
   
    return (
        <Container className='my-3'>
            <h1>Add a Note</h1>
            <Form>
                <Form.Group className="mb-3" controlId="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="title" value={title} onChange={(e)=>setTitle(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" placeholder="Description" value={description} onChange={(e)=>setDescription(e.target.value)}   />
                </Form.Group>
                <Form.Group className="mb-3" controlId="tag">
                    <Form.Label>Tag</Form.Label>
                    <Form.Control type="text" placeholder="tag" value={tag} onChange={(e)=>setTag(e.target.value)}   />
                </Form.Group>

                <Button variant="primary" type="submit" onClick={handleClick}>
                    Add
                </Button>
            </Form>
        </Container>
    )
}

export default AddNote