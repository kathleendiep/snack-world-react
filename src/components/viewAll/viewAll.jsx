import React from 'react'
import Footer from '../footer/footer'
import NavBar from '../navBar/navBar'
import './view.scss'
import ClassySnacksContainer from '../classySnacksContainer/classySnacksContainer';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

class ViewAll extends React.Component {

  render() {
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
    return (
      <>
        <div className="nav-bar">
           <NavBar></NavBar> 
           <section class="col-12">
              <div class="column text">
              <h1>Check out snacks worldwide! </h1>
              </div>
            </section>
          </div> 
<ClassySnacksContainer/>
        <Footer></Footer>
      </>

    )
  }
}

export default ViewAll