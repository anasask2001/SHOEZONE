import React, {  useState } from "react";
import { MDBBtn } from "mdb-react-ui-kit";
import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { userregister } from "../Redux/Thunk/Thunk";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [registerData, setRegisterData] = useState({
    UserName: "",
    Email: "",
    Password: "",
    ConfirmPassword: "",
    ProfileImg: "",
  });

  const handleClick = async (e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append("UserName", registerData.UserName);
    formData.append("Email", registerData.Email);
    formData.append("Password", registerData.Password);
    formData.append("ConfirmPassword", registerData.ConfirmPassword);
    formData.append("image", registerData.ProfileImg);

    dispatch(userregister(formData))
    .then(()=>navigate("/login"))
    
  };

  return (
    <>
    <div className="d-flex" style={{ height: "90vh", alignItems: "center" }}>
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
        <form onSubmit={handleClick}>
          <input
            required
            style={{
              borderRadius: "5px",
              border: "none",
              paddingLeft: "5px",
              marginBottom: "5px",
              width: "40vh",
            }}
            type="text"
            placeholder="UserName"
            onChange={(e) =>
              setRegisterData({ ...registerData, UserName: e.target.value })
            }
          />

          <br />

          <input
            required
            style={{
              borderRadius: "5px",
              border: "none",
              paddingLeft: "5px",
              marginBottom: "5px",
              width: "40vh",
            }}
            type="email"
            placeholder="Email"
            onChange={(e) =>
              setRegisterData({ ...registerData, Email: e.target.value })
            }
          />

          <br />

          <input
            required
            placeholder="Password"
            style={{
              borderRadius: "5px",
              border: "none",
              paddingLeft: "5px",
              marginBottom: "5px",
              width: "40vh",
            }}
            type="password"
            onChange={(e) =>
              setRegisterData({ ...registerData, Password: e.target.value })
            }
          />

          <br />

          <input
            required
            placeholder="Confirm Password"
            style={{
              borderRadius: "5px",
              border: "none",
              paddingLeft: "5px",
              marginBottom: "5px",
              width: "40vh",
            }}
            type="password"
            onChange={(e) =>
              setRegisterData({
                ...registerData,
                ConfirmPassword: e.target.value,
              })
            }
          />

          <br />

          <input
            type="file"
            onChange={(e) =>
              setRegisterData({
                ...registerData,
                ProfileImg: e.target.files[0],
              })
            }
          />

          <div
            className="container"
            style={{
              marginTop: "20px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <MDBBtn type="submit" className="text-light" color="black">
              Signup
            </MDBBtn>
          </div>
        </form>
      </Container>

    </div>
   <Footer/>
    </>
  );
};

export default Register;
