import React, { createContext, useState } from "react";
import Nav from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import Login from "./User/Login";
import Registration from "./User/Registration";
import Home from "./components/Home";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Collection from "./pages/Collection";
import Lookbook from "./pages/Lookbook";
import Contact from "./pages/Contact";
import Ourstory from "./pages/Ourstory";
import Cart from "./pages/Cart";
import Singleitem from "./pages/Singleitem";
import Profile from "./pages/Profile";
import { Adminhome } from "./Admin/Adminhome";
import Adminproduct from "./Admin/Adminproduct";
import { Userscheck } from "./Admin/Userscheck";
import "./App.css";
import { Toaster } from "react-hot-toast";
import Updateitem from "./Admin/Updateitem";
import AddProduct from "./Admin/AddProduct";
import { Logout } from "./Admin/Logout";
import { Usersingle } from "./Admin/Usersingle";
import Wishlist from "./pages/Wishlist";
import Search from "./pages/Search";
import { Orders } from "./Admin/Orders";
import UserOrder from "./pages/UserOrder";



export const Data = createContext();

function App() {
  const [isuser, setisuser] = useState(null);
  const [isloged, setisloged] = useState(false);
  const [cart, setcart] = useState([]);
  const [search, setsearch] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [Search1, setSearch1] = useState("");
  const [Result1, setResult1] = useState([]);
  const [order, setorder] = useState();
  const [adminnav, setadminnav] = useState(null);

  return (
    <>
      <Data.Provider
        value={{
          cart,
          setcart,
          setsearch,
          search,
          wishlist,
          setWishlist,
          isuser,
          setisuser,
          isloged,
          setisloged,
          adminnav,
          setadminnav,
          order,
          setorder,
          Search1,
          setSearch1,
          Result1,
          setResult1,
        }}
      >
        <header className="App-header">
          <Nav />
          <Toaster />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/men" element={<Men />} />
            <Route path="/women" element={<Women />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/lookbook" element={<Lookbook />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/ourstory" element={<Ourstory />} />
            <Route path="/cart" element={<Cart />} /> :
            <Route path="/:id" element={<Singleitem />} />
            <Route path="/search" element={<Search />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/Usersingle/:id" element={<Usersingle />} />
            <Route path="/Logout" element={<Logout />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/userorders/:Id" element={<UserOrder />} />
            {/* ============================================================================================================================ */}
            <Route path="/adminhome" element={<Adminhome />} />
            <Route path="/updateitem/:id" element={<Updateitem />} />
            <Route path="/addproduct" element={<AddProduct />} />
            <Route path="/checkordersdetiles" element={<Orders />} />
           
            <Route path="/userscheck" element={<Userscheck />} />
            <Route path="/adminproduct" element={<Adminproduct />} />
          </Routes>
        </header>
      </Data.Provider>
    </>
  );
}

export default App;
