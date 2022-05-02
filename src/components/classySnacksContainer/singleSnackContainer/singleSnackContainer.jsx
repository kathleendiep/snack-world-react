import React from 'react'
import UpdateSnack from './updateSnack/updateSnack'
import './singleSnackContainer.scss'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import CloseButton from 'react-bootstrap/CloseButton'
import SingleModal from './singleModal'

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
            },
            show: false,
        }
    }

    handleClose = async () => {
        this.setState({
            show: false,
        })
    }
    // show modal 
    handleShow = async () => {
        this.setState({
            // to show modal 
            show: true,
        })
        console.log(this.state.show)
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
                snacks: this.props.snacks.map(s => s.id === idToUpdate ? parsedResponse : s)
            })
        }
        console.log(apiResponse.status)
    }
    // to have modal pop up 

    render() {
        return (

            <div className="single-item-component">
                <div class="cards">
                    <div onClick={this.handleShow}>
                        <div class="card" id={this.props.snack.id} onClick={() => this.props.viewSnack(this.props.snack.id)}>
                            <div class="img">
                                <img className="image-voyager" src={this.props.snack.image}></img>
                            </div>
                            <div class="card__body">
                                <div class="card__color-picker">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <h2 className="card-title">{this.props.snack.name}</h2>
                                <h3 >{this.props.snack.category}</h3>
                                <li className="card-jobtitle">{this.props.snack.country}</li>
                                <div class="card-content">
                                    <div class="card-subtitle">ABOUT</div>
                                    <p class="card-desc">{this.props.snack.description}</p>
                                </div>
                                {/* UPDATE AND DELETE BUTTONS */}
                                <div class="card-buttons">
                                    <button onClick={() => { this.props.deleteSnack(this.props.snack.id) }}> DELETE </button>
                                    {/* pass down the snack, event handler, and update snack function */}
                                    <UpdateSnack
                                        snack={this.props.snack}
                                        updatedSnack={this.state.updatedSnack}
                                        handleUpdateSnackInputChange={this.handleUpdateSnackInputChange}
                                        updateSnack={this.updateSnack}>
                                    </UpdateSnack>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* set modal here */}
                    <Modal show={this.state.show} onHide={this.handleClose} className="special_modal">
                        <Modal.Header className="modal-header" closeButton >
                            <Modal.Title id="example-custom-modal-styling-title">{this.props.snack.name}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body >
                        <div class="img">
                                <img className="image-voyager" src={this.props.snack.image}></img>
                            </div>
                            <div class="card__body">
                                <div class="card__color-picker">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <h2 className="card-title">{this.props.snack.name}</h2>
                                <h3 >{this.props.snack.category}</h3>
                                <li className="card-jobtitle">{this.props.snack.country}</li>
                                <div class="card-content">
                                    <div class="card-subtitle">ABOUT</div>
                                    <p class="card-desc">{this.props.snack.description}</p>
                                </div>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                                {/* UPDATE AND DELETE BUTTONS */}
                                <div class="card-buttons">
                                    <button onClick={() => { this.props.deleteSnack(this.props.snack.id) }}> DELETE </button>
                                    {/* pass down the snack, event handler, and update snack function */}
                                    <UpdateSnack
                                        snack={this.props.snack}
                                        updatedSnack={this.state.updatedSnack}
                                        handleUpdateSnackInputChange={this.handleUpdateSnackInputChange}
                                        updateSnack={this.updateSnack}>
                                    </UpdateSnack>
                                </div>
                        </Modal.Footer>
                    </Modal>

                </div>

            </div>

        )
    }
}






export default SingleSnackContainer

