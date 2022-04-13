import React from 'react'
import SingleSnackContainer from './singleSnackContainer/singleSnackContainer'
import NewSnack from './newSnack/newSnack'
// extends = inherit
// child class CLassySnackContainer extends from parent - React.Component
class ClassySnacksContainer extends React.Component {
    constructor(props) {
        // super - load parents first
        super(props)
        // just had one state 
        // use this BEFORE other objects
        this.state = {
            snacks: [],
            newSnack: {
                name: "",
                category: "", 
                city: "",
                country: "",
                description:""
                // reminder: do not include id for forms
            },
            updateSnack: {
                name: "",
                category: "", 
                city: "",
                country: "",
                description:""
                // make sure to put ID
            }
        }
        // // event handler - component is "this"
        // this.handleClick = this.handleClick.bind(this);
        console.log("constructors")
    }
    // handle change for NEW snack - add this to the child input(newSnackComponent)
    handleNewSnackInputChange =(e) => {
        console.log(this)
        console.log(e.target.value)
        this.setState({
            newSnack: {
                ...this.state.newSnack,
                [e.target.name]: e.target.value
            }
        })
    }
    createNewSnack = async (e) => {
        // value vs reference
        // react - make COPY through ...spread operater, passed by reference when they're objects and arrays
        // primitive data types gets values past
        e.preventDefault();
        // make sure it has the slash!! 
        const apiResponse = await fetch(`http://localhost:8000/api/snacks/`,{
            method: "POST",
            body: JSON.stringify(this.state.newSnack),
            headers: {
                'Content-Type': "application/json"
            }
        })
        if(apiResponse.status == 201){
            const creationResponseParsed = await apiResponse.json()
            console.log(creationResponseParsed)
            this.setState({
                // use spread operator to list out snacks then return the one from database
                snacks: [...this.state.snacks, this.state.snacks]
            })
        } 
        // to do: ELSE
    }
    // fetch API METHOD
    // similar to SnacksContainer const getSnacks
    async getSnacks() {
        // this comes from api > url.py > connect to backend 
        // make sure it has the slash!! 
        const getSnacksApiResponse = await fetch("https://snacksworld-api.herokuapp.com/api/snacks/")
        const parsedSnacks = await getSnacksApiResponse.json();
        // set the State
        this.setState({
            snacks: parsedSnacks
        })
    }

    deleteSnack = async (idToDelete) => {
        const deleteResponse = await fetch(`https://snacksworld-api.herokuapp.com/api/snacks/${idToDelete}`,{
            method: "DELETE"
        })
        console.log(deleteResponse.status)
        if(deleteResponse.status == 204){
            this.setState({
                // returns snacks only if it does not equal the idToDelete 
                snacks: this.state.snacks.filter( s => s.id !== idToDelete)
            })
        }
        const parsedDeleteResponse = await deleteResponse.json()
        console.log(parsedDeleteResponse)
    }
    // UPDATE: PUT
    // STORE STATE IN PARENT
    // FORM IN CHILD
    // SEND ID TO UPDATE 
    handleUpdateSnackInputChange =(e) => {
        console.log(e.target.value)
        this.setState({
            updateSnack: {
                ...this.state.updateSnack,
                [e.target.name]: e.target.value
            }
        })
    }
    updateSnack = async (idToUpdate) => {
         // get id from child and put it together
         const apiResponse = await fetch(`http://localhost:8000/api/snacks/${idToUpdate}`,{
             method: "PUT",
             body: JSON.stringify(this.state.updateSnack),
             headers: {
                 "Content-Type": "application/json"
             }
        })
        if(apiResponse.status == 200){
            const parsedResponse = await apiResponse.json()
            this.setState({
                // if its equal to idToUpdate, give me it, else give old response 
                snacks: this.state.snacks.map( s => s.id === idToUpdate ? parsedResponse : s )
            }) 
        }
            console.log(apiResponse.status)
    }
    // this gets called last - when component mounts - do this
    componentDidMount() {
        // refer to object holding method 
        this.getSnacks()
        console.log("doing our api calls now that it has been Rendered")
    }
    // must have render() and define render - this is what will render component
    render() {
        console.log("rendering")
        return (
            <div>
                <h1>Hello this is a classy container</h1>
                <NewSnack
                handleNewSnackInputChange={this.handleNewSnackInputChange}
                createNewSnack={this.createNewSnack}
                >
                <hr></hr>
                </NewSnack>
                {/* add this.state this is object, belongs to parent*/}
                {this.state.snacks.map((snack) => {
                    return <SingleSnackContainer key={`snack-${snack.id}`} snack={snack} deleteSnack={this.deleteSnack} updateSnack={this.updateSnack} handleUpdateSnackInputChange={this.handleUpdateSnackInputChange}> {JSON.stringify(this.snacks)}</SingleSnackContainer>
                })}
            </div>
        )
    }
}

// still need to add this 
export default ClassySnacksContainer