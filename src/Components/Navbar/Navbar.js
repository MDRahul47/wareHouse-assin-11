import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
    // const [user, loading, error] = useAuthState(auth);
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="Navbar">
            <span className="nav-logo"> BringSart</span>
            <div className={`nav-items ${isOpen && "open"}`}>
                <Link to="/home">Home</Link>
                <Link to="/booking">Booking</Link>
                <Link to="/stock">Stock</Link>
                <Link to="/blogs">Blogs</Link>
                <Link to="/login">Login</Link>
                 <span className="navbar-text">
       {/* {

         user ? <span> {user.displayName}  <button className='btn btn-info' onClick={()=>signOut(auth)}>Sing out</button> </span> : "USER"
       } */}
      </span>
            </div>
            <div
                className={`nav-toggle ${isOpen && "open"}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="bar"></div>
            </div>
        </div>
    );
};

export default Navbar;
