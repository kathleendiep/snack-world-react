import React from 'react'
import Footer from '../footer/footer'
import NavBar from '../navBar/navBar'
import ClassySnacksContainer from '../classySnacksContainer/classySnacksContainer';
const ViewAll = () => {
    return(
         <div className="nav-bar">
           <NavBar></NavBar> 
           <section class="col-2">
              <div class="column text">
              <h1>Check out snacks worldwide! </h1>
              </div>
            </section>
            <ClassySnacksContainer></ClassySnacksContainer>
            <Footer></Footer>
         </div>
    )
}

export default ViewAll