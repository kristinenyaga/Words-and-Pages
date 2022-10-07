import BookContainer from "./BookContainer"
function YourReadingList({readingList,removeBookFromList}){
  return(
    <div className="ui segment inverted olive book-list">
      <div className="ui five column grid">
      <h1 className="text-center ">YourReadingList</h1>

        <div className="row book-list-row gap-3">
       
          {readingList.map(book =>{
              return <BookContainer key={book.id} book={book} removeBookFromList={removeBookFromList}/>
          })}
      
        </div>
      </div>
    </div>
  )
}

export default YourReadingList