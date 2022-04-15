import React from 'react'
import { useState } from 'react'
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
                    <div>
                        <h4>Update {props.snack.name} </h4>
                        <form onSubmit={(e) => { e.preventDefault(); props.updateSnack(props.updatedSnack.id) }}>
                            Name: <input onChange={props.handleUpdateSnackInputChange} name="name" type="text" value={props.updatedSnack.name}></input>
                            Category: <input onChange={props.handleUpdateSnackInputChange} name="category" type="text" id=""></input>
                            City: <input onChange={props.handleUpdateSnackInputChange} name="city" type="text"></input>
                            Country: <input onChange={props.handleUpdateSnackInputChange} name="country" type="text"></input>
                            Description: <input onChange={props.handleUpdateSnackInputChange} name="description" type="text"></input>
                            Image: <input onChange={props.handleUpdateSnackInputChange} name="image" type="text"></input>
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