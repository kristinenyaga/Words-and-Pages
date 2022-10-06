import BookContainer from "./BookContainer"
function YourReadingList({readingList}){
  return(
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
      <h1 className="text-center ">YourReadingList</h1>

        <div className="row bot-army-row gap-3">
       
          {readingList.map(book =>{
              return <BookContainer key={book.id} book={book}/>
          })}
      
        </div>
      </div>
    </div>
  )
}

export default YourReadingList