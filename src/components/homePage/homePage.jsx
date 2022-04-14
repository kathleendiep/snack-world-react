import React from 'react'
import { useState } from 'react'
import SnacksContainer from '../snacksContainer/snacksContainer';
import NavBar from '../navBar/navBar';
import SearchBar from '../searchBar/searchBar'
import Footer from '../footer/footer';
import { Link } from "react-router-dom";
import './homePage.css'
import 'animate.css';

const HomePage = () => {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    const lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  }
  return (
    <div className="nav-bar">
      <NavBar></NavBar>
      <section class="animate__animated animate__bounce">
        <div class="column text">
          <h2 class="animate__animated animate__bounce">Snack World</h2>
          <p>Taste the world! </p>
        </div>
        <button className="button text-link"><Link to="/about">About</Link></button>
      </section>
      <SearchBar></SearchBar>
      {/* assign the input to inputText */}
      <SnacksContainer input={inputText}></SnacksContainer>
      <Footer></Footer>
    </div>
  )
}

export default HomePage