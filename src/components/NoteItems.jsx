import React, { useContext, useState } from 'react'
import { Card,Form } from 'react-bootstrap'
import { MdDeleteOutline } from 'react-icons/md'
import { AiOutlineEdit } from 'react-icons/ai'
import noteContext from '../context/notes/noteContext'
import { Model } from './Model'
const NoteItems = (props) => {
    let { title, description, _id,tag } = props.note
    const context = useContext(noteContext)
    const { deleteNote, getNotes,editNote } = context
    const [show, setShow] = useState(false);
    const [etitle, setTitle] = useState('')
    const [edescription, setDescription] = useState('')
    const [etag, setTag] = useState('')
    const [id, setId] = useState('')

  const handleClose = () => setShow(false);
  
    const handleDelete = (_id) => {
        deleteNote(_id)
        getNotes()
    }
    const handleshow = (_id,title,description,tag) => {
        setTitle(title)
        setDescription(description)
        setTag(tag)
        setId(_id)
        setShow(true)
    }
    const handleUpdate = ()=>{
        editNote(id,etitle,edescription,etag)
        setShow(false)
        getNotes()
    }
    return (
        <>
        <Model show={show} handleClose={handleClose} handleUpdate={handleUpdate}>
        <Form>
                <Form.Group className="mb-3" controlId="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="title" value={etitle} onChange={(e)=>setTitle(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" placeholder="Description" value={edescription} onChange={(e)=>setDescription(e.target.value)}   />
                </Form.Group>
                <Form.Group className="mb-3" controlId="tag">
                    <Form.Label>Tag</Form.Label>
                    <Form.Control type="text" placeholder="tag" value={etag} onChange={(e)=>setTag(e.target.value)}   />
                </Form.Group>

            </Form>
        </Model>
            {/* <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Note Edit</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form>
                <Form.Group className="mb-3" controlId="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="title" value={etitle} onChange={(e)=>setTitle(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" placeholder="Description" value={edescription} onChange={(e)=>setDescription(e.target.value)}   />
                </Form.Group>
                <Form.Group className="mb-3" controlId="tag">
                    <Form.Label>Tag</Form.Label>
                    <Form.Control type="text" placeholder="tag" value={etag} onChange={(e)=>setTag(e.target.value)}   />
                </Form.Group>

            </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleUpdate}>
                        Edit
                    </Button>
                </Modal.Footer>
            </Modal> */}
            <Card style={{ width: '18rem' }} className="my-3">
                <Card.Body>
                    <div className='d-flex'>
                        <div className='p-1 flex-fill'>
                            <Card.Title>{title}</Card.Title>
                        </div>
                        <div className='p-1 flex-fill'>
                            <MdDeleteOutline onClick={() => handleDelete(_id)} size={20} />
                            <AiOutlineEdit onClick={() => handleshow(_id,title,description,tag)} size={20} />
                        </div>

                    </div>
                    <Card.Text>
                        {description}
                    </Card.Text>

                </Card.Body>
            </Card>
        </>

    )
}

export default NoteItems