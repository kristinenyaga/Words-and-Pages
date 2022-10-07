import { BsFillFileExcelFill } from "react-icons/bs";
function BookContainer({book,addBookToList,removeBookFromList}){
  function handleClick(book){
    addBookToList(book)
  }
  function handleDelete(deleteBook){
    
    // /e.target.parentNode.parentNode.parentNode.parentNode.remove()
    removeBookFromList(deleteBook)
  }
  return(
    <div className="card mb-3 flex-direction-parent shadow-lg p-3 mb-5 bg-body rounded d-grid gap-3 px-2 "   >
      <div className="row g-0 flex-direction">
        <div className="col-md-4">
            <img src={book.volumeInfo.imageLinks.smallThumbnail} className="img-fluid rounded-start" alt="..."/>
        </div>
        <div className="col-md-8">
          <div className="card-body">
          <BsFillFileExcelFill onClick={()=>handleDelete(book)} className='text-purple' size = {32} />
            <h4 className="card-title text-muted text-center"><span className="text-dark">TITLE:</span> {book.volumeInfo.title}</h4>
            <h5 className="card-title"> <span className="text-primary">SUBTITLE:</span> {book.volumeInfo.subtitle}</h5>
            <h6><span className="text-primary">PUBLISHEDATE: </span>{book.volumeInfo.publishedDate}</h6>
            <p><span className="text-primary">PAGECOUNT:</span> {book.volumeInfo.pageCount}</p>
            <button type="button" className="btn btn-dark" onClick={()=>handleClick(book)}>
             Add to YourReadingList
            </button>

          </div>
        </div>
      </div>
    </div>
  )
}

export default BookContainer