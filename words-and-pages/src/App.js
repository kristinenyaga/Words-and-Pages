
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from './Components/Login';
import NavBar from './Components/NavBar';
import Home from './Components/Home';


function App() {
 return (
  <Router>
     <NavBar />
      <Routes>
       <Route path="/" element={<Login />} />
       <Route path="words-and-pages/src/Components/Home.js" element={<Home />} />
                
      </Routes>
  </Router>
 )
 
}

export default App;
