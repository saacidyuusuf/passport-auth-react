import React from "react";
import { Link } from "react-router-dom";

const Header = ({ user }) => {
  const logout = () => {
    window.open("http://localhost:5000/auth/logout", "_self");
  };
  return (
    <div className="navbar">
      <Link to="/">
        <h1 className="logo">BaxarFlow</h1>
      </Link>
      {user && (
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>Saacid</li>
            <li>
              <li onClick={logout}>logout</li>
            </li>
          </ul>
        </nav>
      )}
      {!user && (
        <Link to="/login">
          <li>Login</li>
        </Link>
      )}
    </div>
  );
};

export default Header;
