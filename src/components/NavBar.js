import React from "react";
import { Link } from "react-router-dom";
function NavBar({ toggle, login }) {
  return (
    <div className="nav-bar">
      <Link to="/">
        {" "}
        <h3>Home</h3>
      </Link>

      <Link to="/userslist">
        <h3>Users list</h3>
      </Link>
      <button onClick={toggle}>{login ? "Logout" : "Login"} </button>
    </div>
  );
}

export default NavBar;
