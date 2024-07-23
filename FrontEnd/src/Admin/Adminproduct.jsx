import React, { useEffect } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { IoAddCircleSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { viewallproducts } from "../Redux/Thunk/Thunk";

const Adminproduct = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(viewallproducts());
  }, [dispatch]);

  const products= useSelector((state) => state.ApiSlice.adminproducts);


  return (
    <>
    <div style={{width:'1300px',height:'100vh',overflow:'scroll', display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "20px", padding: "20px" }}>
      {products?.map((x) => (
        <MDBCard key={x._id} style={{ width: "250px", marginBottom: "20px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", borderRadius: "10px", overflow: "hidden", position: "relative" }}>
          <MDBCardImage src={x.ProductImage} position="top" alt="Product" style={{ height: "200px", objectFit: "cover" }} />
          <MDBCardBody style={{ padding: "20px" }}>
            <MDBCardTitle style={{ fontSize: "1.25rem", fontWeight: "bold" }}>{x.ProductTitle}</MDBCardTitle>
            <MDBCardText style={{ fontSize: "0.9rem", color: "#555" }}><b>{x.ProductCategory}</b></MDBCardText>
           <b> <p style={{ color: "#888", margin: "10px 0" }}>{"₹" + x.ProductPrice}</p></b>
           <div style={{width:'200px',height:'120px',overflow:'hidden'}}>
            <MDBCardText style={{ fontSize: "0.9rem", color: "#555" }}>{x.ProductDescription}</MDBCardText>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
              <MDBBtn
                color="dark"
                style={{ width: '100%', fontSize: "0.9rem" }}
                onClick={() => navigate(`/updateitem/${x._id}`)}
              >
                Show
              </MDBBtn>
            </div>
          </MDBCardBody>
        </MDBCard>
      ))}

      <Button
        onClick={() => navigate("/addproduct")}
        style={{
          backgroundColor: 'white',
          position: "fixed",
          bottom: 40,
          right: 40,
          border: "none"
        }}
      >
        <IoAddCircleSharp style={{ color: 'black', fontSize: '40px' }} />
      </Button>
    </div>
  </>
  );
};

export default Adminproduct;
