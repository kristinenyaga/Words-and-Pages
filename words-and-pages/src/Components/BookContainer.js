function BookContainer({book,addBookToList}){
  function handleClick(book){
    addBookToList(book)
  }
  return(
    <div className="card mb-3 flex-direction-parent shadow-lg p-3 mb-5 bg-body rounded d-grid gap-3 px-2 "   >
      <div className="row g-0 flex-direction">
        <div className="col-md-4">
            <img src={book.volumeInfo.imageLinks.smallThumbnail} className="img-fluid rounded-start" alt="..."/>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">TITLE: {book.volumeInfo.title}</h5>
            <h4 className="card-title">SUBTITLE: {book.volumeInfo.subtitle}</h4>
            <h6>PUBLISHEDATE: {book.volumeInfo.publishedDate}</h6>
            <p>PAGECOUNT: {book.volumeInfo.pageCount}</p>
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