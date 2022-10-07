import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { DetailsContext } from "../Context/Context";


function NavBar() {
  const {logIn} = useContext(DetailsContext);

  const linkStyles = {
    display: "inline-block",
    width: "120px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "black",
    textDecoration: "none",
    color: "white",
  };
  return (
    <div>
      <NavLink
        to="/"
        exact="true"
        style={linkStyles}
        
      >
        {logIn? "Login":"LogOut"}
       
      </NavLink>
      {/* <NavLink
        to="words-and-pages/src/Components/Home.js/*"
        exact="true"
        style={linkStyles}
        
      >
       Home
      </NavLink>
      <NavLink
        to="words-and-pages/src/Components/MyBooks.js"
        exact="true"
        style={linkStyles}
        
      >
       SearchBook
      </NavLink> */}
    </div>
  );
}

export default NavBar;