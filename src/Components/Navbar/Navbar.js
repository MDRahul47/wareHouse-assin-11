
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

    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light ">
  <div class="container-fluid ms-5">
    <h2 class="navbar-brand me-5" >Rahul Cars</h2>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse navbar" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
        <Link className="text-black nav-link" to="/home">Home</Link>
        </li>
        <li class="nav-item">
        <Link className="text-black nav-link" to="/inventory">Inventory</Link>
        </li>
        <li class="nav-item">
        <Link className="text-black nav-link" to="/booking">Booking</Link>
        </li>
        <li class="nav-item">
        <Link className="text-black nav-link " to="/blogs">Blogs</Link>
        </li>
        <li class="nav-item">
          
{

user ? <a className="logout nav-link text-black" onClick={handleSignout}>Sign-out</a> : <Link className="logout nav-link text-black " to='/login'>Login</Link>


}
        </li>
      </ul>
    </div>
  </div>
</nav>
    );
};

export default Navbar;





// <Link to="/home">Home</Link>
//                 <Link to="/booking">Booking</Link>
//                 <Link to="/stock">Stock</Link>
//                 <Link to="/blogs">Blogs</Link>

