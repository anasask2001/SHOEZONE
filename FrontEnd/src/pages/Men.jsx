import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from "mdb-react-ui-kit";
import { Getproducts } from "../Redux/Thunk/Thunk";
import Footer from "../components/Footer";
import './Men.css';

function Men() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Getproducts());
  }, [dispatch]);

  const products = useSelector((state) => state.ApiSlice.Products.Product);

  return (
    <>
      <div className="product-container">
        {products?.map((x) => {
          if (x.ProductCategory === "MEN") {
            return (
              <MDBCard key={x._id} className="product-card"   onClick={() => navigate(`/${x._id}`)}>
                <MDBCardImage
                  src={x.ProductImage}
                  position="top"
                  alt={x.ProductTitle}
                  className="product-image"
                />
                <MDBCardBody>
                  <MDBCardTitle className="product-title">{x.ProductTitle}</MDBCardTitle>
                  <MDBCardText className="product-price"><b>{"₹" + x.ProductPrice}</b></MDBCardText>
                  <MDBCardText className="product-description">{x.ProductDescription}</MDBCardText>
                
                </MDBCardBody>
              </MDBCard>
            );
          }
          return null; 
        })}
      </div>
      <Footer />
    </>
  );
}

export default Men;
