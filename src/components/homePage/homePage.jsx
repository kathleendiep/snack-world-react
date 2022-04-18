import React from 'react'
import { useState } from 'react'
import NavBar from '../navBar/navBar';
import ClassySnacksContainer from '../classySnacksContainer/classySnacksContainer';
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
      <section class="animate__animated animate__fadeInDown ">
        <div class="column text">
          <h2 class="animate__animated animate__bounce animate__delay-.5s">Snack World</h2>
          <p>Explore the world with different snacks! </p>
        </div>
        <button className="button text-link"><Link to="/about">About</Link></button>
      </section>
      <SearchBar></SearchBar>
      {/* assign the input to inputText */}
      <ClassySnacksContainer input={inputText}></ClassySnacksContainer>
      <Footer></Footer>
    </div>
  )
}

export default HomePage