import React from 'react'
import './App.css';
// importing components from react-router-dom packagewe are in v5
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
// include this for bootstrap 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import ClassySnacksContainer from './components/classySnacksContainer/classySnacksContainer';
import HomePage from './components/homePage/homePage';
import Footer from './components/footer/footer';
function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/" element={<Navigate replace to="/home" />} />
          </Routes>
        </Router>
        <ClassySnacksContainer></ClassySnacksContainer>
        <Footer></Footer>
    </div>
  )
}
export default App