import React from 'react'
import { useState } from 'react'
import './footer.scss'
import {  faNavicon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Footer = () => {
    return(
        <footer>
            <div className='wrapper'>
            <ul>
                <li class="facebook"><a href="#"><i class="fa fa-linkedin fa-2x" aria-hidden="true"></i></a></li>
                <li class="twitter"><a href="#"><i class="fa fa-twitter fa-2x" aria-hidden="true"></i></a></li>
                <li class="instagram"><a href="#"><i class="fa fa-github fa-2x" aria-hidden="true"></i></a></li>
                <li class="google"><a href="#"><i class="fa fa-envelope fa-2x" aria-hidden="true"></i></a></li>
                <li class="whatsapp"><a href="#"><i class="fa fa-laptop fa-2x" aria-hidden="true"></i></a></li>
            </ul>
            <p>&copy;2022 Kathleen Diep | All Rights Reserved</p>
            </div>
        </footer> 
    )
}

export default Footer
