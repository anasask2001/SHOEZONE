import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBFile,
} from "mdb-react-ui-kit";
import { addproductadmin } from "../Redux/Thunk/Thunk";
import "bootstrap/dist/css/bootstrap.min.css";

function AddProduct() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [newproduct, Setnewproduct] = useState({
    ProductTitle: "",
    ProductDescription: "",
    ProductPrice: "",
    ProductCategory: "",
    ProductImage: "",
  });

  const addnewproduct = async (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("ProductTitle", newproduct.ProductTitle);
    formdata.append("ProductDescription", newproduct.ProductDescription);
    formdata.append("ProductPrice", newproduct.ProductPrice);
    formdata.append("ProductCategory", newproduct.ProductCategory);
    formdata.append("image", newproduct.ProductImage);

  
    dispatch(addproductadmin(formdata))
    .then(()=> navigate("/adminproduct"))
   

  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
    <MDBContainer className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
        <MDBRow>
          <MDBCol md="12">
            <h2 className="text-center mb-4">Add New Product</h2>
            <form onSubmit={addnewproduct}>
              <MDBInput
              required
                label="Product Name"
                type="text"
                onChange={(e) =>
                  Setnewproduct({ ...newproduct, ProductTitle: e.target.value })
                }
                
                className="mb-4"
              />
              <MDBInput
              required
                label="Product Description"
                type="text"
                onChange={(e) =>
                  Setnewproduct({
                    ...newproduct,
                    ProductDescription: e.target.value,
                  })
                }
                className="mb-4"
              />
              <MDBInput
              required
                label="Product Price"
                type="text"
                onChange={(e) =>
                  Setnewproduct({ ...newproduct, ProductPrice: e.target.value })
                }
                className="mb-4"
              />
              
      <div className="mb-4">
        
        <select
        required
          id="categorySelect"
          className="form-select"
          name="ProductCategory"
          onChange={(e) =>
            Setnewproduct({ ...newproduct, ProductCategory: e.target.value })
          }
        >
          <option value="">Select category...</option>
          <option value="MEN">MEN</option>
          <option value="WOMEN">WOMEN</option>
        </select>
      </div>
              <MDBFile
              required
                label="Product Image"
                onChange={(e) =>
                  Setnewproduct({
                    ...newproduct,
                    ProductImage: e.target.files[0],
                  })
                }
                className="mb-4"
              />
              <MDBBtn type="submit" color="dark" className="w-100">
                Add Product
              </MDBBtn>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default AddProduct;
