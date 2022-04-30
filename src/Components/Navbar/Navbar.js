import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import "./Navbar.css";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";
const Navbar = () => {
    const [user] = useAuthState(auth);

    const handleSignout = () => {
        signOut(auth)
    }
    // const [user, loading, error] = useAuthState(auth);
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="Navbar">
            <span className="nav-logo"> Rahul Cars</span>
            <div className={`nav-items ${isOpen && "open"}`}>
                <Link to="/home">Home</Link>
                <Link to="/booking">Booking</Link>
                <Link to="/stock">Stock</Link>
                <Link to="/blogs">Blogs</Link>
               
                
                 {

user ? <a className="logout" onClick={handleSignout}>Sign-out</a> : <Link className="logout" to='/login'>Login</Link>


}
      
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
