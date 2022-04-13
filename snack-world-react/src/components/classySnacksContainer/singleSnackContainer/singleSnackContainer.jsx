import { useState } from 'react'
import UpdateSnack from './updateSnack/updateSnack'

const SingleSnackContainer = (props) => {
    return(
        <div>
            <h3>{props.snack.name}</h3>
            <h3>{props.snack.category}</h3>
            <h3>{props.snack.city}</h3>
            <h3>{props.snack.country}</h3>
            <h3>{props.snack.description}</h3>
            <button onClick={()=>{props.deleteSnack(props.snack.id)}}> DELETE </button>
            {/* pass down props to the child */}
            <UpdateSnack snack={props.snack} handleUpdateSnackInputChange={props.handleUpdateSnackInputChange} updateSnack={props.updateSnack}></UpdateSnack>
            {/* make sure to add ID to make it unique  */}
        </div> 
    )
}

export default SingleSnackContainer