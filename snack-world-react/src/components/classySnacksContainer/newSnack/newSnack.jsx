import React from 'react'

const NewSnack = (props) => {
    return(
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
                
                <button type="submit">SUBMIT</button>
            </form>
        </div>
    )
}

export default NewSnack