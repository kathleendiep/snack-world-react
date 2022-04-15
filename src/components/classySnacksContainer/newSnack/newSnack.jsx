import React from 'react'
import { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from  'react-bootstrap/Button'
import { Redirect } from 'react-router-dom'
const NewSnack = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [showing, setShowing] = useState(false)
    // 1. function that setShowing function as TRUE! = !true when clicked on 
    const toggleShowing = () => {
    // 2. set variable to the opposite
        setShowing(!showing)
    }
    return(
        // make a modal 
        <div>
            <h5>Create new snack!</h5>
            <form onSubmit={props.createNewSnack}>
                Name: <input onChange={props.handleNewSnackInputChange} name="name" type="text"></input>
                <br></br>
                Category: <input onChange={props.handleNewSnackInputChange} name="category" type="text" id=""></input>
                <br></br>
                City: <input onChange={props.handleNewSnackInputChange} name="city" type="text"></input>
                <br></br>
                Country: <input onChange={props.handleNewSnackInputChange} name="country" type="text"></input>
                Description: <input onChange={props.handleNewSnackInputChange} name="description" type="text"></input>
                Image: <input onChange={props.handleNewSnackInputChange} name="image" type="text"></input>
                <button type="submit">SUBMIT</button>
            </form>
        </div>
    )
}

export default NewSnack