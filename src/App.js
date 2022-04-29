
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Singup from './Components/SingUp/Singup';
import Stock from './Components/Stock/Stock';
import Booking from './Components/Booking/Booking';
import Blog from './Components/Blog/Blog';



function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/singup" element={<Singup />} />
        <Route path="/stock" element={<Stock />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    <Footer></Footer>
    </div>
  );
}

export default App;
