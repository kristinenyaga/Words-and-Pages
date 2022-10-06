import React, { useState } from "react";
import {FaSearch} from "react-icons/fa";
function SearchForm({sendSearchItem}){

  const [searchnewItem,setSearchNewItem]=useState("")
  function handleSubmit(e){
    e.preventDefault()
    sendSearchItem(searchnewItem)
    
  }

  function handleChange(searchedResult){
   setSearchNewItem(searchedResult)
  }

  
  return(
    <div className='search-form'onSubmit={handleSubmit}>
    <div className='container'>
      <div className='search-form-content'>
        <form className='search-form' >
          <div className='search-form-elem flex flex-sb bg-white'>
            <input type = "text" className='form-control' placeholder='Pride and Prejudice...' 
            value={searchnewItem} onChange={(e)=>handleChange(e.target.value)} />
            <button type = "submit" className='flex flex-c' >
              <FaSearch className='text-purple' size = {32} />
            </button>
            
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}

export default SearchForm