import React,{ useState} from "react";

const DetailsContext = React.createContext();
function DetailsProvider({ children }) {

  const [logIn,setIsLogged]=useState(true)
  
    return (
      <DetailsContext.Provider value ={{ logIn, setIsLogged }}>
          {children}
      </DetailsContext.Provider>
  
  )
}



export {DetailsContext, DetailsProvider};