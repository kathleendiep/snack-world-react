import React from 'react'
import { useState } from 'react'
import { Link } from "react-router-dom";
import './navBar.css'
import { faNavicon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const NavBar = () => {
  // default - false, will show bar icon
  // true will show the whole thing
  const [showing, setShowing] = useState(false)
  const toggleShowing = () => {
    // sets it as true and will show 
    setShowing(!showing)
  }
  return (

    <>
      <div class="nav-header">
        <div class="nav-brand">
          <img src="https://s3-us-west-2.amazonaws.com/parallax-theme/assets/bradlogo2.png"></img>
        </div>
        <i class="fa fa-bars fa-3x"></i>
        <div class="header-links">
          <ul>
            <li data-menuanchor="fourthPage"><Link to="/">Home</Link></li>
            <li data-menuanchor="thirdPage"><Link to="/about">About</Link></li>
            <li data-menuanchor="secondPage"><Link to="/viewall">Snacks</Link></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default NavBar















