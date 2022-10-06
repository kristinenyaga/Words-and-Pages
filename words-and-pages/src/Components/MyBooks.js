import React, { useState } from "react";
import BookDetails from "./BookDetails";
import SearchForm from "./SearchForm";
import {NavLink} from "react-router-dom"

function MyBooks(){
  const linkStyles = {
    display: "inline-block",
    width: "120px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "black",
    textDecoration: "none",
    color: "white",
  };
  
  const [books,setBooks]=useState([])
  function sendSearchItem(searchnewItem){
    console.log(searchnewItem)
    fetch( `https://www.googleapis.com/books/v1/volumes?q=${searchnewItem}&key=AIzaSyD92Au7-Uf5gi2Gh7wAbAJhTfaMqpiM53Q`)
    .then(response => response.json())
    .then(response => setBooks(response.items))

  }
  return(
    <>
    <NavLink
        to="/words-and-pages/src/Components/Home.js/"
        exact="true" style={linkStyles}> Home
      </NavLink>
    <div className='holder'>
        <header className='header'>
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>Good books are just like good friends.</h2><br />
                <p className='header-text fs-18 fw-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam beatae sapiente quibusdam consequatur perspiciatis facere laboriosam non nesciunt at id repudiandae, modi iste? Eligendi, rerum!</p>
                <SearchForm sendSearchItem={sendSearchItem} />
            </div>
            
        </header>
        <BookDetails books={books}/>
    </div>
    </>
    
  
  )
}

export default MyBooks;