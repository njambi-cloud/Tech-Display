import React from "react"
import { NavLink } from "react-router-dom";

const linkStyles = {
    display: "inline-block",
    width: "60px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white",
    fontSize: "19px",
    fontWeight: "bold"
  };

function NavBar () {
    return (
        <div>
        <NavLink
        to="/"
        exact
        style={linkStyles}
        activeStyle={{
        background: "darkblue",
        }}
      >
        Home
      </NavLink>

      <NavLink
        to="/about"
        exact
        style={linkStyles}
        activeStyle={{
        background: "darkblue",
        }}
      >
        About
      </NavLink>

      <NavLink
        to="/techlist"
        exact
        style={linkStyles}
        activeStyle={{
        background: "darkblue",
        }}
      >
        Technologies
      </NavLink>
        </div>
    )
}
export default NavBar