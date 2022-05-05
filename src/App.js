
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Singup from './Components/SingUp/Singup';
import Blog from './Components/Blog/Blog';
import RequerAuth from './Components/RequerAuth/RequerAuth';
import Inventory from './Components/Inventory/Inventory';
import Manageinventory from './Components/Manageinventory/Manageinventory';
import AddIteams from './Components/AddIteams/AddIteams';
import MyIteams from './Components/MyIteams/MyIteams';



function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/singup" element={<Singup />} />
        <Route path="/inventory" element={
          <RequerAuth>
            <Inventory />
          </RequerAuth>
        } />
        <Route path="/addIteams" element={
          <RequerAuth>
            <AddIteams />
          </RequerAuth>
        } />
        <Route path="/myIteams" element={
          <RequerAuth>
            <MyIteams />
          </RequerAuth>
        } />
        <Route path="/manageinventory" element={
          <RequerAuth>
            <Manageinventory />
          </RequerAuth>
        } />
        <Route path="/blogs" element={<Blog />} />
      </Routes>
    <Footer></Footer>
    </div>
  );
}

export default App;
