import React, { useContext, useEffect } from 'react'
import NoteItems from './NoteItems'
import { Row, Col, Container } from 'react-bootstrap'
import AddNote from './AddNote'
import noteContext from '../context/notes/noteContext'

const Notes = () => {
    const context = useContext(noteContext)
    const { getNotes, notes } = context
    useEffect(() => {
        getNotes()
        // eslint-disable-next-line
    }, [notes])

    return (
        <>
            <AddNote />
            <Container className='my-3'>
                <h1>Your Notes</h1>
                <Row >
                    {
                        notes && notes.map((note) => {
                            return <Col className='col-3' key={note._id} >
                                <NoteItems  note={note} />
                            </Col>
                        })
                    }

                </Row>
            </Container>
        </>

    )
}

export default Notes