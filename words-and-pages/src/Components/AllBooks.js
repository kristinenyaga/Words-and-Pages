
import BookContainer from "./BookContainer"

function AllBooks({books,addBookToList}){
  return(
    <>
     <div className="row d-flex justify-content-around">
     {books.map(book =>{
      return <BookContainer key={book.id} book={book} addBookToList={addBookToList}/>
     }
    )}

     </div> 
    </>
   
  )
}

export default AllBooks