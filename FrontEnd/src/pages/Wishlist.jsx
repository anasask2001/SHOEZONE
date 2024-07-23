import React, { useEffect } from "react";
import { MDBListGroup, MDBListGroupItem } from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import { deletewishlist, fetchwishlistitems } from "../Redux/Thunk/Thunk";
import { MdDelete } from "react-icons/md";
import "./Wishlist.css"; // Import the CSS file
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

export const Wishlist = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate()

  const userid = localStorage.getItem("id");
  const wishlist = useSelector((state) => state.ApiSlice.Wislist);
  

  useEffect(() => {
    dispatch(fetchwishlistitems({ userid }));
  }, [dispatch, userid]);

  const fetchdelete = async (id) => {
    await dispatch(deletewishlist({ userid, id }));
    dispatch(fetchwishlistitems({ userid }));
  };

  return (
    <>
    <div className="wishlist-container">
      {Array.isArray(wishlist) && wishlist.length !== 0 ? (
        <MDBListGroup>
          {wishlist.map((x) => (
            <MDBListGroupItem key={x.ProductId._id} className="wishlist-item">
              
              <div className="wishlist-content" onClick={()=>Navigate(`/${x.ProductId._id}`)} >
                <img
                  src={x.ProductId.ProductImage}
                  alt={x.ProductId.ProductTitle}
                  className="wishlist-image"
                />
                <div className="wishlist-info">
                  <p className="wishlist-title">{x.ProductId.ProductTitle}</p>
                  <p className="wishlist-price">{"₹" + x.ProductId.ProductPrice}</p>
                </div>
                <MdDelete
                  className="wishlist-delete"
                  onClick={() => fetchdelete(x.ProductId._id)}
                />
              </div>
            </MDBListGroupItem>
          ))}
        </MDBListGroup>
      ) : (
        <h4 className="wishlist-empty-message">
          Your Wishlist is empty! Add something now.
        </h4>
      )}
    </div>
    <Footer/>
    </>
  );
};

export default Wishlist;
