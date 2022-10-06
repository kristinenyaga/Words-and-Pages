
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from './Components/Login';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import MyBooks from './Components/MyBooks'
import EachBookDetails from './Components/EachBookDetails';

function App() {
 return (
  <Router>
     <NavBar />
      <Routes>
       <Route exact path="/" element={<Login />} />
       <Route exact path="/words-and-pages/src/Components/MyBooks.js/" element={<MyBooks />} />
       <Route exact path="/words-and-pages/src/Components/Home.js/" element={<Home />} />
       <Route exact path="/words-and-pages/src/Components/EachBookDetails.js/" element={<EachBookDetails />} />
       
                
      </Routes>
  </Router>
 )
 
}

export default App;
