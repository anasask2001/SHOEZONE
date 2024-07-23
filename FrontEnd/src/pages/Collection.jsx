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
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import Footer from "../components/Footer";
import { Getproducts } from "../Redux/Thunk/Thunk";

function Collection() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Getproducts());
  }, [dispatch]);

  const products = useSelector((state) => state.ApiSlice.Products.Product);

  return (
    <>
      <MDBContainer className="my-3">
        <MDBRow className="g-4">
          {products?.map((product) => (
            <MDBCol md="4" key={product._id}>
              <MDBCard className="h-100 shadow-sm">
                <div className="bg-image hover-zoom">
                  <MDBCardImage
                    top
                    src={product.ProductImage}
                    alt={product.ProductTitle}
                    className="w-100"
                  />
                </div>
                <MDBCardBody className="text-center">
                  <MDBCardTitle className="mb-3" >
                    {product.ProductTitle}
                  </MDBCardTitle>
                  <MDBCardText className="fw-bold mb-2">
                    ₹{product.ProductPrice}
                  </MDBCardText>
                  <MDBCardText className="text-muted">
                    {product.ProductDescription}
                  </MDBCardText>
                  <MDBBtn
                    color="dark"
                    onClick={() => navigate(`/${product._id}`)}
                  >
                    View Details
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          ))}
        </MDBRow>
      </MDBContainer>
      <Footer />
    </>
  );
}

export default Collection;
