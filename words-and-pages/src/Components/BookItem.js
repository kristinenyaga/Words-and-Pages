import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
function BookItem({book,getBookId,thumbnail="https://images.unsplash.com/photo-1519682337058-a94d519337bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",amount}){
  
  return(
    <>
    <div className="card mb-3 flex-direction-parent shadow-lg p-3 mb-5 bg-body rounded d-grid gap-3 px-2"  >
      <div className="row g-0 flex-direction">
        <div className="col-md-4">
            <img src={thumbnail} className="img-fluid rounded-start" alt="..."/>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h4 className="card-title text-muted text-center"><span className="text-dark">TITLE:</span> {book.volumeInfo.title}</h4>
            <h5 className="card-title"><span className="text-primary">SUBTITLE:</span>{book.volumeInfo.subtitle}</h5>
            <h6><span className="text-primary">PUBLISHEDATE: </span> {book.volumeInfo.publishedDate}</h6>
            <p><span className="text-primary">PAGECOUNT:</span> {book.volumeInfo.pageCount}</p>
            <p className="amount">{amount}</p>
            <button type="button" className="btn btn-dark" onClick={()=>getBookId(book)}>More
            </button>

          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default BookItem