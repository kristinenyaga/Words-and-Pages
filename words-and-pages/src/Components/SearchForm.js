import { useEffect, useState,useContext } from "react";
import {FaSearch} from "react-icons/fa";
import { DetailsProvider } from "../Context/Context";
function SearchForm(){
  const {setSearchItem} = useContext(DetailsProvider);

  return(
    <div className='search-form'>
    <div className='container'>
      <div className='search-form-content'>
        <form className='search-form' >
          <div className='search-form-elem flex flex-sb bg-white'>
            <input type = "text" className='form-control' placeholder='Pride and Prejudice...'  />
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