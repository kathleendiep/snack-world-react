import { useState } from 'react'
import UpdateSnack from './updateSnack/updateSnack'
import '../classySnacksContainer.scss'
const SingleSnackContainer = (props) => {
    return(
        <div class="box">
              <i class="fas fa-table-tennis icon"></i>
            <h2>{props.snack.name}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quidem vero tempore molestias repellendus</p>
            <h3>{props.snack.category}</h3>
            <h3>{props.snack.city}</h3>
            <h3>{props.snack.country}</h3>
            <h3>{props.snack.description}</h3>
            <h3>{props.snack.image}</h3>
            <button onClick={()=>{props.deleteSnack(props.snack.id)}}> DELETE </button>
            {/* pass down props to the child */}
            <UpdateSnack snack={props.snack} handleUpdateSnackInputChange={props.handleUpdateSnackInputChange} updateSnack={props.updateSnack}></UpdateSnack>
            {/* make sure to add ID to make it unique */}
        </div> 
    )
}
export default SingleSnackContainer