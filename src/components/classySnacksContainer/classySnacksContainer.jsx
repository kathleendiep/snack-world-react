import React from 'react'
import SingleSnackContainer from './singleSnackContainer/singleSnackContainer'
import NewSnack from './newSnack/newSnack'
import './classySnacksContainer.scss'
import { Navigate, Link, useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


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
                description: "",
                image: ""
                // reminder: do not include id for forms
            }
            // // should change update in state to now be that one 
            // updateSnack: {
            //     name: "",
            //     category: "",
            //     city: "",
            //     country: "",
            //     description: "",
            //     image:"" 
            //     // make sure to put ID?
            // }
        }
        // // event handler - component is "this"
        // this.handleClick = this.handleClick.bind(this);
        console.log("constructors")
    }

    // handle change for NEW snack - add this to the child input(newSnackComponent)
    handleNewSnackInputChange = (e) => {
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
        const apiResponse = await fetch(`https://snacksworld-api.herokuapp.com/api/snacks/`, {
            method: "POST",
            body: JSON.stringify(this.state.newSnack),
            headers: {
                'Content-Type': "application/json"
            }
        })
        if (apiResponse.status == 201) {
            const creationResponseParsed = await apiResponse.json()
            console.log(creationResponseParsed)
            this.setState({
                // use spread operator to list out snacks then return the one from database
                // Make sure to set the state 
                snacks: [creationResponseParsed, ...this.state.snacks]
            })
            // const navigate = useNavigate();
            // navigate('/');
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
        const deleteResponse = await fetch(`https://snacksworld-api.herokuapp.com/api/snacks/${idToDelete}`, {
            method: "DELETE"
        })
        console.log(deleteResponse.status)
        if (deleteResponse.status == 204) {
            this.setState({
                // returns snacks only if it does not equal the idToDelete 
                snacks: this.state.snacks.filter(s => s.id !== idToDelete)
            })
        }
        const parsedDeleteResponse = await deleteResponse.json()
        console.log(parsedDeleteResponse)
    }

    viewSnack = async (id) => {
        const viewSnackInfo = await fetch(`https://snacksworld-api.herokuapp.com/api/snacks/${id}`, {
            method: "GET"
        })
        const parsedSnack = await viewSnackInfo.json();
        console.log(parsedSnack)
        // setting the id to snack 
        this.setState({
            snack: parsedSnack
        })
    }

// UPDATE: PUT
// STORE STATE IN PARENT
// FORM IN CHILD
// SEND ID TO UPDATE 
// PUT THIS IN SINGLESNACKS first
// handleUpdateSnackInputChange = (e) => {
//     console.log(e.target.value)
//     this.setState({
//         updateSnack: {
//             ...this.state.updateSnack,
//             [e.target.name]: e.target.value
//         }
//     })
// }

// // should i do an setUpdateSnack
// updateSnack = async (idToUpdate) => {
//     console.log(this.state.updateSnack)
//     // get id from child and put it together
//     const apiResponse = await fetch(`https://snacksworld-api.herokuapp.com/api/snacks/${idToUpdate}`, {
//         method: "PUT",
//         body: JSON.stringify(this.state.updateSnack),
//         headers: {
//             "Content-Type": "application/json"
//         }
//     })
//     if (apiResponse.status == 200) {
//         const parsedResponse = await apiResponse.json()
//         this.setState({
//             // if its equal to idToUpdate, give me it, else give old response 
//             snacks: this.state.snacks.map(s => s.id === idToUpdate ? parsedResponse : s)
//         })
//     }
//     console.log(apiResponse.status)
// }
// this gets called last - when component mounts - do this
componentDidMount() {
    // refer to object holding method 
    this.getSnacks()
    console.log("doing our api calls now that it has been Rendered")
}
// must have render() and define render - this is what will render component
render() {
    console.log("Rendering");
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    function HomeButton() {
        let history = useNavigate()

        function handleClick() {
            history.push("/home")
        }

        return (
            <button type="button" onClick={handleClick}>
                Go home
            </button>
        )
    }
    return (
        <div className="animate__animated animate__fadeInRight animate__delay-1s">
            <NewSnack
                handleNewSnackInputChange={this.handleNewSnackInputChange}
                createNewSnack={this.createNewSnack}
            >
                <hr></hr>
            </NewSnack>

            <Carousel

                className=" outer-container"
                swipeable={false}
                draggable={false}
                responsive={responsive}
                ssr
                // showDots
                containerClass="container-with-dots"
                itemClass="image-item"
                deviceType={this.props.deviceType}
            >
                {this.state.snacks.map((snack) => {
                    return <SingleSnackContainer
                        className={this.props.inner}
                        key={`snack-${snack.id}`}
                        snack={snack}
                        deleteSnack={this.deleteSnack}
                        updateSnack={this.updateSnack}
                        snacks={this.state.snacks}
                        viewSnack={this.viewSnack}
                    >
                        {JSON.stringify(this.snacks)}
                    </SingleSnackContainer>
                })}
            </Carousel>
            <Button variant="primary" className="button see-more">
                <Link to="/viewall">See more! </Link>
            </Button>
        </div>
    )
}
}

// still need to add this 
export default ClassySnacksContainer

