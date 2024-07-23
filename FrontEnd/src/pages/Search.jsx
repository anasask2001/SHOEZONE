import React, { useContext } from "react";
import { Data } from "../App";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

function Search() {
  const { Result1 } = useContext(Data);
  const navigate = useNavigate();


  return (
    <>
    <div>
      {Result1?.map((item) => (
        <MDBCard
          key={item.id}
          style={{
            display: "flex",
            flexDirection: "row",
            margin: "20px",
            height: "20%",
          }}
        >
          <MDBCardImage
            style={{
              position: "relative",
              width: "20%",
              padding: "25px",
              objectFit: "contain",
            }}
            src={item.ProductImage}
            position="top"
            alt={item.ProductTitle}
          />
          <MDBCardBody>
            <MDBCardTitle>{item.ProductTitle}</MDBCardTitle>
            <p>{"₹" + item.ProductPrice}</p>
            <MDBCardText>{item.ProductDescription}</MDBCardText>
            <MDBBtn color="black" onClick={() => navigate(`/${item._id}`)}>
              Show
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      ))}
    </div>
    <Footer/>
    </>
  );
}

export default Search;
