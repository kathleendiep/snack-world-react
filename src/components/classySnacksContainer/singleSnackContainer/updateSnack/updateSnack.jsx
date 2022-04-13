import React from 'react'
const UpdateSnack = (props) => {
    return (
        <div>
            <h4>Update {props.snack.name} </h4>
            <form onSubmit={(e)=> {e.preventDefault(); props.updateSnack(props.snack.id)}}>
                {/* value needs to be added to update -  need to have a button to show edit form, it sets the update snack*/}
                {/* can't access it
                 - values={props.snack.name}
                 - button to open it up, set snack to update 
                 - set a modal                 
                */}
                Name: <input onChange={props.handleUpdateSnackInputChange} name="name" type="text" value={props.updateSnack.name}></input>
                Category: <input onChange={props.handleUpdateSnackInputChange} name="category" type="text" id=""></input>
                City: <input onChange={props.handleUpdateSnackInputChange} name="city" type="text"></input>
                Country: <input onChange={props.handleUpdateSnackInputChange} name="country" type="text"></input>
                Description: <input onChange={props.handleUpdateSnackInputChange} name="description" type="text"></input>
                <button type="submit">SUBMIT</button>
            </form>
        </div>
    )
}
export default UpdateSnack