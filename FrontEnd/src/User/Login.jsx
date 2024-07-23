import React, { useState } from "react";
import { MDBBtn } from "mdb-react-ui-kit";
import { Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Profile from "../pages/Profile";
import { useDispatch } from "react-redux";
import { adminlogin, userlogin } from "../Redux/Thunk/Thunk";
import Footer from "../components/Footer";


function Login() {
  const [login, setLogin] = useState({ Email: "", Password: "" });

 


  const navigate = useNavigate();
  const Dispatch = useDispatch()


  const Loginclick = async (e) => {
    e.preventDefault();
 
    if(login.Email === "admin@gmail.com" || login.Password ==="admin"){
      await Dispatch(adminlogin(login))
    }else{
      await Dispatch(userlogin(login))
    }
  
    const userid = localStorage.getItem("id");
    if(userid){
      navigate("/")
    }else{
      navigate("/login")
    }


    const admininfo = localStorage.getItem("admin")
   if(admininfo){
      navigate("/adminhome")
    }else{
      navigate("/login")
    }

  };
  const userid = localStorage.getItem("id");


  return (
    <>
      {userid ? (
        <Profile />
      ) : (
        <div
          className="d-flex"
          style={{
            height: "90vh",
            alignItems: "center",
          }}
        >
          <Container
            style={{
              display: "flex",
              flexDirection: "column",
              height: "80vh",
              width: "70vh",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#F0F0F0",
              borderRadius: "20px",
            }}
          >
            <input
              style={{
                borderRadius: "5px",
                border: "none",
                paddingLeft: "5px",
                marginBottom: "5px",
                width: "40vh",
              }}
              type="text"
              placeholder="Email"
              onChange={(e) => setLogin({ ...login, Email: e.target.value })}
            />
            <input
              style={{
                borderRadius: "5px",
                border: "none",
                paddingLeft: "5px",
                marginBottom: "5px",
                width: "40vh",
              }}
              type="password"
              placeholder="Password"
              onChange={(e) => setLogin({ ...login, Password: e.target.value })}
            />
            <br />
         

            <MDBBtn className="text-light" color="black" onClick={Loginclick}>
              Login
            </MDBBtn>

            <p style={{ fontSize: "15px", fontFamily: "Satoshi" }}>
              Don't have an account{" "}
              <Link to="/registration">
                <u>Signup?</u>
              </Link>
            </p>

            
          </Container>
   
        </div>
      
      )}
             <Footer/>
    </>
  );
}

export default Login;
