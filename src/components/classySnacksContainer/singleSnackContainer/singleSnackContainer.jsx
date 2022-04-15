import { useState } from 'react'
import React from 'react'
import UpdateSnack from './updateSnack/updateSnack'
import ClassySnacksContainer from '../classySnacksContainer'
// import '../classySnacksContainer/classySnacksContainer.scss'
class SingleSnackContainer extends React.Component {
// get snack from parent, then pass down updated snack to child
// set snack update 
    constructor(props) { 
        super(props)
        this.updateSnack = this.updateSnack.bind(this);
        this.state = {
            updatedSnack: {
                id: props.snack.id,
                name: props.snack.name,
                category: props.snack.category,
                city: props.snack.city,
                country: props.snack.country,
                description: props.snack.description,
                image: props.snack.image
            }
        }
    }

    handleUpdateSnackInputChange = (e) => {
        console.log(e.target.value)
        this.setState({
            updatedSnack: {
                ...this.state.updatedSnack,
                [e.target.name]: e.target.value
            }
        })
    }
        // should i do an setUpdateSnack
    updateSnack = async (idToUpdate) => {
        console.log(this.state.updatedSnack)
        // get id from child and put it together
        const apiResponse = await fetch(`https://snacksworld-api.herokuapp.com/api/snacks/${idToUpdate}`, {
            method: "PUT",
            body: JSON.stringify(this.state.updatedSnack),
            headers: {
                "Content-Type": "application/json"
            }
        })
        if (apiResponse.status == 200) {
            const parsedResponse = await apiResponse.json()
            this.setState({
                // if its equal to idToUpdate, give me it, else give old response 
                snacks: this.state.props.snacks.map(s => s.id === idToUpdate ? parsedResponse : s)
            })
        }
        console.log(apiResponse.status)
    }

    render() {
       return(
            <div class="box">
                <i class="fas fa-table-tennis icon"></i>
                <h2>{this.props.snack.name}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quidem vero tempore molestias repellendus</p>
                <h3>{this.props.snack.category}</h3>
                <h3>{this.props.snack.city}</h3>
                <h3>{this.props.snack.country}</h3>
                <h3>{this.props.snack.description}</h3>
                <h3>{this.props.snack.image}</h3>
                {/* make sure to add ID to make it unique  */}
                <button onClick={() => { this.props.deleteSnack(this.props.snack.id) }}> DELETE </button>
                {/* pass down the snack, event handler, and update snack function */}
                <UpdateSnack 
                snack={this.props.snack}
                updatedSnack={this.state.updatedSnack}
                handleUpdateSnackInputChange={this.handleUpdateSnackInputChange}
                updateSnack={this.props.updateSnack}>
                </UpdateSnack>
            </div>
            )
    }
}



export default SingleSnackContainer