import React, { useEffect, useState } from "react";
import AllBooks from "./AllBooks";
import YourReadingList from "./YourReadingList";
import { NavLink } from "react-router-dom";


function Home(){
  const [myBooks,setMyBooks]=useState([])
  const [readingList,setReadingList]=useState([])
  function addBookToList(bookadded){
    setReadingList([...readingList,bookadded])
    console.log(bookadded)
  }
  useEffect(()=>{
    fetch( 'https://www.googleapis.com/books/v1/volumes?q=flowers&orderBy=newest&key=AIzaSyD92Au7-Uf5gi2Gh7wAbAJhTfaMqpiM53Q'+'&maxResults=40')
    .then(response => response.json())
    .then(response => setMyBooks(response.items))

  },[])
  const linkStyles = {
    display: "inline-block",
    width: "120px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "black",
    textDecoration: "none",
    color: "white",
  };
  return(
    <>
    <div className="display-flex">
    <NavLink
        to="/words-and-pages/src/Components/Home.js/"
        exact="true" style={linkStyles}> Home
      </NavLink>
      <NavLink
        to="/words-and-pages/src/Components/MyBooks.js"
        exact="true" style={linkStyles}>SearchBook
      </NavLink>

    </div>
    
    
    <YourReadingList readingList={readingList}/>
    <h1 className="text-muted text-center">Yohooo....Get your books Here</h1>
    <figure className="text-center">
      <blockquote className="blockquote">
        <p>If you don’t like to read, you haven’t found the right book.</p>
      </blockquote>
      <figcaption className="blockquote-footer">
          <cite title="Source Title">J.K. Rowling</cite>
      </figcaption>
    </figure>
    <AllBooks books={myBooks} addBookToList={addBookToList} />
    </>
   

  
  )
}

export default Home;