import BookItem from "./BookItem"
import {useNavigate} from 'react-router-dom'
import { useState} from "react";

function BookDetails({books}){
  const navigate=useNavigate()
  const [newBooks,setBook]=useState([])


  function getBookId(book){
  const returnedbooks= [...newBooks,book]
    setBook(returnedbooks)
    // console.log(returnedbooks)
    console.log(newBooks)
   navigate("/words-and-pages/src/Components/EachBookDetails.js/");
   

  }
 
  return (
    <>
    <h1 className="text-muted text-center">Results</h1>
    <div className="row d-flex justify-content-around">
    {books.map(book =>{
      return <BookItem key={book.id} book={book} getBookId={getBookId}/>
    })}
    </div>
    
    </>
    
  )
}

export default BookDetails