import React, { useContext, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { MdFlashOn } from "react-icons/md";
import { MDBBtn } from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import { Addtocart, Addtowishlist, deletewishlist, getCartlength, showitembyid } from "../Redux/Thunk/Thunk";
import Footer from "../components/Footer";

function Singleitem() {
  const { id } = useParams();
 
  const [isInWishlist, setIsInWishlist] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const Dispatch = useDispatch()

  const userid = localStorage.getItem("id");



//add to cart
  const addToCart = async (id) => {
   Dispatch(Addtocart({userid,id}))
   Dispatch(getCartlength(userid))
   
  };
  const showcart = useSelector((state) => state.ApiSlice.cart);
  console.log(showcart);
  
//add to wishlist
const addToWishlist = async (id) => {
  Dispatch(Addtowishlist({userid,id}))
 };

 //deletewishlist
 const removeFromWishlist = async (id) => {
  Dispatch(deletewishlist({userid,id}))
    
 };



  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
      
        Dispatch(showitembyid(id))
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id, userid]);


const showitem = useSelector(state=>state.ApiSlice.SingleProduct)


  return (
    <>
    
    <div className="container" style={{ minHeight: "90vh" }}>
      {isLoading ? (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ minHeight: "60vh" }}
        >
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="row">
          <div className="col-12 col-md-6">
            <img
              src={showitem?.ProductImage}
              className="img-fluid"
              alt={showitem?.ProductTitle}
            />
          </div>
          <div
            className="col-12 col-md-6 d-flex align-items-center"
            style={{ padding: "20px" }}
          >
            <div>
              <h3>{showitem?.ProductTitle}</h3>
              <h6>{"₹" + showitem?.ProductPrice}</h6>
              <p>{showitem?.ProductDescription}</p>
              <FaHeart
                className="mx-1"
                style={{
                  color: isInWishlist ? "red" : "black",
                  fontSize: "30px",
                  cursor: "pointer",
                }}
                onClick={() =>
                  isInWishlist
                    ? removeFromWishlist(showitem._id)
                    : addToWishlist(showitem._id)
                }
              />
              <MDBBtn
                className="mx-2"
                color="black"
                onClick={() => addToCart(showitem._id)}
              >
                <FaShoppingCart />
                ADD TO CART
              </MDBBtn>
           
                <MDBBtn color="black">
                  <MdFlashOn />
                  BUY NOW
                </MDBBtn>
              
            </div>
          </div>
        </div>
      )}
    </div>
    <Footer/>
    </>
  );
}

export default Singleitem;
