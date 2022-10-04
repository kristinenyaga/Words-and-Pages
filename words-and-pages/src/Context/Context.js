import React,{ useState,useEffect } from "react";

const DetailsContext = React.createContext();
function DetailsProvider({ children }) {

  const [books,setBooks]=useState([])
  // const[loading,setLoading]=useState("true")

  const URL = "http://openlibrary.org/search.json?title="
  const [searchItem,setSearchItem]=useState("the lost world")


  useEffect(()=>{
    fetch(`${URL}${searchItem}`)
    .then(response => response.json())
    .then(data =>{
      const {docs}=data
      if(docs){
        const newBooks= docs.slice(0,20).map((bookItem)=>{
          const {key,author_name,edition_count,cover_i,title,number_of_pages_median} = bookItem
          return{
            key:key,
            author_name:author_name,
            coverId:cover_i,
            title:title,
            editionCount:edition_count,
            numberOfPages:number_of_pages_median

          }
        })
        setBooks(newBooks)
      }
      else{
        setBooks([])
      }
    })
    .catch(error => console.log(error))
  },[searchItem])

  
    return (
      <DetailsContext.Provider value = {{
         books, setSearchItem
      }}>
          {children}
      </DetailsContext.Provider>
  
  )
}

export { DetailsContext, DetailsProvider };