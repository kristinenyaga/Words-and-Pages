
import BookContainer from "./BookContainer"

function AllBooks({books,addBookToList,removeBookFromList}){
  return(
    <>
     <div className="row d-flex justify-content-around">
     {books.map(book =>{
      return <BookContainer key={book.id} book={book} addBookToList={addBookToList} removeBookFromList={removeBookFromList}/>
     }
    )}

     </div> 
    </>
   
  )
}

export default AllBooks