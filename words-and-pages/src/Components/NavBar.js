import { NavLink } from "react-router-dom";



function NavBar() {
  const linkStyles = {
    display: "inline-block",
    width: "80px",
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
        Login
      </NavLink>
      <NavLink
        to="words-and-pages/src/Components/Home.js"
        exact="true"
        style={linkStyles}
        
      >
       Home
      </NavLink>
    </div>
  );
}

export default NavBar;