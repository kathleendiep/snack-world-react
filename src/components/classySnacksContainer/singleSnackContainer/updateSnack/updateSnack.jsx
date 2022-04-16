import React from 'react'
import { useState } from 'react'
import './updateSnack.css'
const UpdateSnack = (props) => {
    // create modal if true, open up form 
    const [showing, setShowing] = useState(false)
    const toggleShowing = () => {
        setShowing(!showing)
    }
    return (
        <>
            {
                showing
                    ?
                    <div className="update-form-container">
                        <h4>Update {props.snack.name} </h4>
                        <form className="update-form" onSubmit={(e) => { e.preventDefault(); props.updateSnack(props.updatedSnack.id) }}>
                            Name: <input onChange={props.handleUpdateSnackInputChange} name="name" type="text" value={props.updatedSnack.name}></input>
                            Category: <input onChange={props.handleUpdateSnackInputChange} name="category" type="text" id="" value={props.updatedSnack.category}></input>
                            City: <input onChange={props.handleUpdateSnackInputChange} name="city" type="text"value={props.updatedSnack.city}></input>
                            Country: <input onChange={props.handleUpdateSnackInputChange} name="country" type="text"value={props.updatedSnack.country}></input>
                            Description: <input onChange={props.handleUpdateSnackInputChange} name="description" type="text"value={props.updatedSnack.description}></input>
                            Image: <input onChange={props.handleUpdateSnackInputChange} name="image" type="text"value={props.updatedSnack.image}></input>
                            <button type="submit">SUBMIT</button>
                        </form>
                    </div>
                    :
                    <button onClick={toggleShowing}> Update Item </button>
            }
        </>
    )
}
export default UpdateSnack