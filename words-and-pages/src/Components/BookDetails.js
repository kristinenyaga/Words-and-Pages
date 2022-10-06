
import BookItem from "./BookItem";
import EachBookDetails from "./EachBookDetails";
import {Route, Routes} from "react-router-dom";
import {useNavigate} from 'react-router-dom'
import { useState,useRef } from "react";

function BookDetails({books}){
  const navigate=useNavigate()
  const [newBooks,setBook]=useState([])
  console.log(newBooks)
  function getBookId(book){
  const returnedbooks= [...newBooks,book]
    setBook(returnedbooks)
    // console.log(returnedbooks)
    console.log(newBooks)
   navigate("/words-and-pages/src/Components/EachBookDetails.js/");
   

  }
  <EachBookDetails book={newBooks}/>
  return (
    <>
    <h1>Results</h1>
    <div className="row d-flex justify-content-around">
    {books.map(book =>{
      return <BookItem key={book.id} book={book} getBookId={getBookId}/>
    })}
    </div>
    
    </>
    
  )
}

export default BookDetails