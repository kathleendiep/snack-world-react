import React from 'react'
import { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Redirect } from 'react-router-dom'

const NewSnack = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [showing, setShowing] = useState(false)
    const [isValidState, setIsValidState] = useState({valid: true, message: ""})
    // 1. function that setShowing function as TRUE! = !true when clicked on 
    const toggleShowing = () => {
        // 2. set variable to the opposite
        setShowing(!showing)
    }
    return (

        <>
            <div class="section-head col-sm-12">
                <h4><span>Add a snack!</span></h4>

            </div>
            <Button variant="primary" onClick={handleShow} className="button">
                Create!
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add a new Snack!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* this will make the showing set from true to false and close out the div */}
                    {/* create the onSubmit form */}
                    <Form onSubmit={props.createNewSnack}>
                        {/* if isValidState.valid return null, else - show an error  */}
                        {isValidState.valid ? null : <p className="form-error">{isValidState.message}</p>}
                        {/* if there is a server error then show there is an error */}
                        {props.newItemServerError ? <p className="form-error">{props.newItemsServerError}</p> : null}
                        {/* onChange listens to whats in here based on function - put this on both*/}
                        {/* name needs to be same as model schema */}
                        {/* data binding - backend and front end sync */}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name:</Form.Label>
                            <Form.Control onChange={props.handleNewSnackInputChange} name="name" type="text"/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Category:</Form.Label>
                            <Form.Control onChange={props.handleNewSnackInputChange} name="category" type="text" id=""/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>City:</Form.Label>
                            <Form.Control onChange={props.handleNewSnackInputChange} name="city" type="text" id=""/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Country:</Form.Label>
                            <Form.Control onChange={props.handleNewSnackInputChange} name="country" type="text"/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Description:</Form.Label>
                            <Form.Control onChange={props.handleNewSnackInputChange} name="description" type="text"/>
                        </Form.Group>
                         <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Image:</Form.Label>
                            <Form.Control onChange={props.handleNewSnackInputChange} name="image" type="text"/>
                        </Form.Group>
                        <Button type="submit">
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default NewSnack


