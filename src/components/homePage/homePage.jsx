import React from 'react'
import { useState } from 'react'
import NavBar from '../navBar/navBar';
import ClassySnacksContainer from '../classySnacksContainer/classySnacksContainer';
import SearchBar from '../searchBar/searchBar'
import Footer from '../footer/footer';
import MainBanner from './mainBanner'
import { Link } from "react-router-dom";
import './homePage.scss'
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
      <MainBanner></MainBanner>
      <SearchBar></SearchBar>
      {/* assign the input to inputText */}
      <ClassySnacksContainer input={inputText}></ClassySnacksContainer>
      <Footer></Footer>
    </div>
  )
}
export default HomePage


