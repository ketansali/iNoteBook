import React from 'react'
import { Modal,Button } from 'react-bootstrap'
export const Model = (props) => {
    const {show,handleClose,handleUpdate} = props
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Note Edit</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {props.children}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleUpdate}>
                    Edit
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
