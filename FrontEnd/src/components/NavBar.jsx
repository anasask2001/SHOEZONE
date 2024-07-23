import React, { useContext, useEffect, useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBInputGroup,
  MDBCollapse,
  MDBSwitch 
} from "mdb-react-ui-kit";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaUser, FaShoppingCart, FaHeart } from "react-icons/fa";
import { RiLoginBoxFill } from "react-icons/ri";
import axios from "axios";
import { Data } from "../App";
import "./NavBar.css";
import "../Admin/Adminhome.css";
import { useDispatch, useSelector } from "react-redux";
import { getCartlength } from "../Redux/Thunk/Thunk";
import { FaBoxOpen } from "react-icons/fa";


export default function NavBar() {
  const [openBasic, setOpenBasic] = useState(false);
  const { Search1, setSearch1, setResult1 } = useContext(Data);
  const navigate = useNavigate();
  const username = localStorage.getItem("username");
  const userid = localStorage.getItem("id");
  const admininfo = localStorage.getItem("admin");


  const dispatch = useDispatch();
  const cartCount = useSelector((state) => state.ApiSlice.cartlength);

  useEffect(() => {
    dispatch(getCartlength(userid));
    
  }, [dispatch,userid]);
  
  

  const setDarkMode = () => {
    document.querySelector("header").setAttribute("data-theme", "dark");
  };

  const setLightMode = () => {
    document.querySelector("header").setAttribute("data-theme", "light");
  };

  const toggleTheme = (e) => {
    if (e.target.checked) {
      setDarkMode();
    } else {
      setLightMode();
    }
  };

  const fetchSearch = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3020/api/users/products/category/${Search1}`
      );
      navigate("/search");
      setResult1(response.data.category);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <>
      <div>
        {!admininfo ? (
          <MDBNavbar expand="lg">
            <MDBContainer fluid>
              <MDBNavbarBrand>
                <Link style={{ color: "black" }} to="/">
                  <img
                    src="https://th.bing.com/th/id/OIP.zKH4xQIcRsdxitKagAA3BgAAAA?rs=1&pid=ImgDetMain"
                    height="30"
                    alt="Logo"
                    loading="lazy"
                  />
                  <span className="App-header">SHOEZONE</span>
                </Link>
              </MDBNavbarBrand>

              <MDBNavbarToggler
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                onClick={() => setOpenBasic(!openBasic)}
              >
                <MDBIcon className="App-header" icon="bars" fas />
              </MDBNavbarToggler>

              <MDBCollapse navbar open={openBasic}>
                <MDBNavbarNav
                  className="mr-auto mb-2 mb-lg-0"
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    paddingTop: "9px",
                  }}
                >
                  {[
                    "men",
                    "women",
                    "collection",
                    "lookbook",
                    "ourstory",
                    "contact",
                  ].map((link) => (
                    <MDBNavbarItem key={link}>
                      <MDBNavbarLink
                        aria-current="page"
                        style={{ textDecoration: "none" }}
                      >
                        <NavLink style={{ color: "black" }} to={`/${link}`}>
                          <span className="App-header">
                            {link.toUpperCase()}
                          </span>
                        </NavLink>
                      </MDBNavbarLink>
                    </MDBNavbarItem>
                  ))}
                  <div>
                    <MDBInputGroup className="d-flex w-auto mb-3">
                      <input
                        type="search"
                        className="form-control"
                        placeholder="Search products..."
                        aria-label="Search"
                        onChange={(e) => setSearch1(e.target.value)}
                      />
                      <MDBBtn
                        color="black"
                        onClick={fetchSearch}
                        style={{ boxShadow: "none" }}
                      >
                        Search
                      </MDBBtn>
                    </MDBInputGroup>
                  </div>
                  <MDBNavbarItem>
                    <MDBNavbarLink>
                      <NavLink to={userid ? "/wishlist" : "/login"}>
                        <FaHeart className="App-header" />
                      </NavLink>
                    </MDBNavbarLink>
                  </MDBNavbarItem>
                  <MDBNavbarItem>
                    <MDBNavbarLink>
                      <MDBSwitch
                        className="App-header"
                        id="darkmode-toggle"
                        onClick={toggleTheme}
                      />
                    </MDBNavbarLink>
                  </MDBNavbarItem>
                  <MDBNavbarItem>
      <MDBNavbarLink>
        <NavLink to={userid ? `/userorders/${userid}` : "/login"}>
          {userid && <FaBoxOpen className="App-header" />}
        </NavLink>
      </MDBNavbarLink>
    </MDBNavbarItem>
                
                  <MDBNavbarItem>
                    <MDBNavbarLink>
                      <NavLink
                        style={{ color: "black" }}
                        to={userid ? "/cart" : "/login"}
                      >
                        <FaShoppingCart className="App-header" />
                        {username && (
                          <span className="badge">{cartCount}</span>
                        )}
                      </NavLink>
                    </MDBNavbarLink>
                  </MDBNavbarItem>
                  <MDBNavbarItem>
                    <MDBNavbarLink>
                      <NavLink  style={{ color: "black" }} to="/login">
                        {!username ? (
                          <FaUser className="App-header" />
                        ) : (
                          <div>
                            <p className="App-header">
                              
                              <RiLoginBoxFill className="App-header" />
                            </p>
                          </div>
                        )}
                      </NavLink>
                    </MDBNavbarLink>
                  </MDBNavbarItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBContainer>
          </MDBNavbar>
        ) : (
        
          <div className="admin-dashboard float-left">
            <MDBNavbar expand="lg" dark bgColor="dark" className="admin-sidebar">
              <MDBContainer fluid>
                <MDBNavbarNav className="flex-column">
                  <MDBNavbarItem>
                    <MDBNavbarLink>
                      <Link to="/adminhome" className="text-white">
                        <MDBIcon fas icon="home" className="me-2" />
                        Admin Home
                       </Link>
                    </MDBNavbarLink>
                  </MDBNavbarItem>
                  <MDBNavbarItem>
                    <MDBNavbarLink>
                      <Link to="/userscheck" className="text-white">
                        <MDBIcon fas icon="users" className="me-2" />
                        Users
                      </Link>
                    </MDBNavbarLink>
                  </MDBNavbarItem>
                  <MDBNavbarItem>
                    <MDBNavbarLink>
                      <Link to="/adminproduct" className="text-white">
                        <MDBIcon fas icon="box" className="me-2" />
                        Products
                      </Link>
                    </MDBNavbarLink>
                  </MDBNavbarItem>
                  <MDBNavbarItem>
                    <MDBNavbarLink>
                      <Link to="/checkordersdetiles" className="text-white">
                        <MDBIcon fas icon="shopping-cart" className="me-2" />
                        Orders
                      </Link>
                    </MDBNavbarLink>
                  </MDBNavbarItem>
                  <MDBNavbarItem>
                    <MDBNavbarLink>
                      <Link to="/Logout" className="text-white">
                        <MDBIcon fas icon="user" className="me-2" />
                        Admin Profile
                      </Link>
                    </MDBNavbarLink>
                  </MDBNavbarItem>
                </MDBNavbarNav>
              </MDBContainer>
            </MDBNavbar>
          </div>
        )}
      </div>
    </>
  );
}
