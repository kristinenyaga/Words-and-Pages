import React, { useEffect, useState } from "react";
import AllBooks from "./AllBooks";
import YourReadingList from "./YourReadingList";
import { NavLink } from "react-router-dom";


function Home(){
  const [myBooks,setMyBooks]=useState([])
  const [readingList,setReadingList]=useState([])

  function addBookToList(bookadded){
    const updatedBook = readingList.find((book) => book.id === bookadded.id)
    if (!updatedBook) setReadingList([...readingList,bookadded])
    
   
  }

  function removeBookFromList(deleteBook){
    const bookToRemove=myBooks.find(myBook => myBook.id === deleteBook.id)
    if(bookToRemove){
      setMyBooks(myBooks.filter(myFilteredBook => myFilteredBook.id !== bookToRemove.id ))
    }
    const booksToRemove=readingList.find(myBook => myBook.id === deleteBook.id)
     if(booksToRemove){

      setReadingList(readingList.filter(myFilteredBook => myFilteredBook.id !== booksToRemove.id ))
     }
  }
  useEffect(()=>{
    fetch( 'https://www.googleapis.com/books/v1/volumes?q=flowers&orderBy=newest&key=AIzaSyD92Au7-Uf5gi2Gh7wAbAJhTfaMqpiM53Q&maxResults=40')
    .then(response => response.json())
    .then(response => setMyBooks(response.items))
    .catch(error =>alert(error) )

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
    
    
    <YourReadingList readingList={readingList} removeBookFromList={removeBookFromList}/>
    <h1 className="text-muted text-center">Yohooo....Get your books Here</h1>
    <figure className="text-center">
      <blockquote className="blockquote">
        <p>If you don’t like to read, you haven’t found the right book.</p>
      </blockquote>
      <figcaption className="blockquote-footer">
          <cite title="Source Title">J.K. Rowling</cite>
      </figcaption>
    </figure>
    <AllBooks books={myBooks} addBookToList={addBookToList} removeBookFromList={removeBookFromList}/>
    </>
   

  
  )
}

export default Home;