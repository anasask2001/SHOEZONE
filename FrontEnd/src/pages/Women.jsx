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
import './Women.css'; 

function Women() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Getproducts());
  }, [dispatch]);

  const products = useSelector((state) => state.ApiSlice.Products.Product);

  return (
    <>
      <div className="women-container">
        <div className="product-container">
          {products?.map((product) => {
            if (product.ProductCategory === "WOMEN") {
              return (
                <MDBCard key={product._id} className="product-card"    onClick={() => navigate(`/${product._id}`)}>
                  <div className="bg-image hover-zoom">
                    <MDBCardImage
                      src={product.ProductImage}
                      position="top"
                      alt={product.ProductTitle}
                      className="product-image"
                    />
                  </div>
                  <MDBCardBody>
                    <MDBCardTitle className="product-title">{product.ProductTitle}</MDBCardTitle>
                    <p className="product-price"><b>{"₹" + product.ProductPrice}</b></p>
                    <MDBCardText className="product-description">{product.ProductDescription}</MDBCardText>
                  
                  </MDBCardBody>
                </MDBCard>
              );
            }
            return null; 
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Women;
