import React from 'react'
import { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Redirect } from 'react-router-dom'

const SingleModal = (props) => {
    return (
        <Modal show={this.props.show} onHide={this.props.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add a new Snack!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h2 className="card-title">{this.props.snack.name}</h2>
                        <h3>{this.props.snack.category}</h3>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary">Close</Button>
                        <Button variant="primary">Save changes</Button>
                    </Modal.Footer>
                </Modal>
    )
}

export default SingleModal


