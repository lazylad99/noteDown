import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login")
  } 
   const location = useLocation();


  return (
    <nav className="navbar navbar-expand-lg d-flex">
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <span className="logo material-symbols-outlined mx-1">note_alt</span>
          noteDown
        </Link>
        <button
          className="navbar-toggler btn btn-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === "/" ? "active" : ""
                  }`}
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === "/about" ? "active" : ""
                  }`}
                to="/about"
              >
                About
              </Link>
            </li>
          </ul>
           {!localStorage.getItem("token") ? <ul className="navbar-nav ms-auto">  
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === "/login" ? "active" : ""
                  }`}
                to="/login"
              >
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === "/signup" ? "active" : ""
                  }`}
                to="/signup"
              >
                SignUp
              </Link>
            </li>
          </ul> : 
          <ul className="navbar-nav ms-auto"> 
          <li className="nav-item">
              <button
                className="nav-link"
                onClick={handleLogout}
              >
                Log Out
              </button>
            </li> 
            </ul> }
        </div>
      </div>
    </nav>
  );
}
