import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteperoductadmin, specificitem, updateproductadmin } from "../Redux/Thunk/Thunk";
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn
} from "mdb-react-ui-kit";

const Updateitem = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();

  const [update, Setupdate] = useState({
    ProductTitle: "",
    ProductDescription: "",
    ProductPrice: "",
    ProductCategory: "",
    ProductImage: ""
  });

  

  // Update product
  const updateProduct = (e) => {
    e.preventDefault(); 
  
    dispatch(updateproductadmin({ id, update}))
    .then(()=> navigate("/adminproduct"))
   
  };

  // Delete product 
  const deleteProduct = () => {
    dispatch(deleteperoductadmin(id))
    .then(()=>navigate("/adminproduct"))
    console.log("deleted",id);

  };

  // Fetch specific product
  useEffect(() => {
    dispatch(specificitem(id));
  }, [dispatch, id]);

  const itemfound = useSelector((state) => state.ApiSlice.singleproduct);



  
  // Update state when item is fetched
  useEffect(() => {
    if (itemfound) {
      Setupdate({
        ProductTitle: itemfound.ProductTitle || "",
        ProductDescription: itemfound.ProductDescription || "",
        ProductPrice: itemfound.ProductPrice || "",
        ProductCategory: itemfound.ProductCategory || "",
        // ProductImage: itemfound.ProductImage || ""
      });
    }
  }, [itemfound]);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <MDBContainer className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
        <MDBCard style={{ maxWidth: "800px", width: "100%" }}>
          <MDBRow className="g-0">
            <MDBCol md="4">
              <MDBCardImage src={itemfound.ProductImage} alt="Product Image" className="img-fluid" />
            </MDBCol>
            <MDBCol md="8">
              <MDBCardBody>
                <MDBCardTitle className="text-center mb-4">Update Product</MDBCardTitle>
                <form onSubmit={updateProduct}>
                  <MDBInput
                    label="Product Title"
                    type="text"
                    onChange={(e) => Setupdate({ ...update, ProductTitle: e.target.value })}
                    value={update.ProductTitle}
                    className="mb-4"
                  />
                  <MDBInput
                    label="Product Description"
                    type="text"
                    onChange={(e) => Setupdate({ ...update, ProductDescription: e.target.value })}
                    value={update.ProductDescription}
                    className="mb-4"
                  />
                  <MDBInput
                    label="Product Price"
                    type="text"
                    onChange={(e) => Setupdate({ ...update, ProductPrice: e.target.value })}
                    value={update.ProductPrice}
                    className="mb-4"
                  />
                  <MDBInput
                    label="Product Category"
                    type="text"
                    onChange={(e) => Setupdate({ ...update, ProductCategory: e.target.value })}
                    value={update.ProductCategory}
                    className="mb-4"
                  />
                  {/* <MDBInput
                    label="Product Image"
                    type="file"
                    onChange={(e) => Setupdate({ ...update, ProductImage: e.target.files[0] })}
                    className="mb-4"
                  /> */}
                  <div className="d-flex justify-content-between">
                    <MDBBtn color="dark" type="submit">
                      Update
                    </MDBBtn>
                    <MDBBtn color="danger" onClick={deleteProduct}>
                      Delete
                    </MDBBtn>
                  </div>
                </form>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </MDBContainer>
    </div>
  );
};

export default Updateitem;
