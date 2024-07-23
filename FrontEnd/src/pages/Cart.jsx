import React, { useEffect, useState } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardTitle,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
} from "mdb-react-ui-kit";
import { NavLink } from "react-router-dom";
import { MdFlashOn } from "react-icons/md";
import axios from "axios";
import "../pages/cart.css";
import { useDispatch, useSelector } from "react-redux";
import {
  decreament,
  deletecartitem,
  increament,
  viewcart,
} from "../Redux/Thunk/Thunk";
import { MdDeleteOutline } from "react-icons/md";
import Footer from "../components/Footer";
import userconsfig from "../User/Utils/Config";
function Cart() {
  const [totalprice, setTotalprice] = useState(0);

  const userid1 = localStorage.getItem("id");
  const Dispatch = useDispatch();
  const showcart = useSelector((state) => state.ApiSlice.cart);
  console.log(showcart);

  // View cart data
  useEffect(() => {
    Dispatch(viewcart(userid1));
  }, [Dispatch, userid1]);


  // Calculate total price
  useEffect(() => {
    if (Array.isArray(showcart)) {
      const totalPrice = showcart.reduce((acc, item) => {
        return acc + item.Quantity * item.ProductId.ProductPrice;
      }, 0);
      setTotalprice(totalPrice);
    }
  }, [showcart]);

  // Increment quantity
  const fetchIncrement = async (id) => {
    await Dispatch(increament({ id, userid1 }));
    Dispatch(viewcart(userid1));
  };

  // Decrement quantity
  const fetchDecrement = async (id) => {
    await Dispatch(decreament({ id, userid1 }));
    Dispatch(viewcart(userid1));
  };

  // Delete item from cart
  const fetchDelete = async (id) => {
    await Dispatch(deletecartitem({ id, userid1 }));
    Dispatch(viewcart(userid1));
  };

  // Load Razorpay script
  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  // Handle payment using Razorpay
  const handlePayment = async () => {
    const scriptLoaded = await loadRazorpayScript();

    if (!scriptLoaded) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    // Step 1: Create order in backend
    const orderResult = await axios.post(
      `http://localhost:3020/api/users/${userid1}/payment`,{},{headers:userconsfig.headers}
    );

    const { amount, id: order_id, currency } = orderResult.data.data;

    const options = {
      key: "rzp_test_twvZM1CegzR1Qt",
      amount: amount.toString(),
      currency: currency,
      name: "Acme Corp",
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: order_id,
      handler: async function (response) {
        // Step 2: Verify payment
        const paymentData = {
          razorpay_order_id: response.razorpay_order_id,
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_signature: response.razorpay_signature,
        };

        const verificationResult = await axios.post(
          "http://localhost:3020/api/users/verifypayment",
          paymentData,
        );

        if (verificationResult.data.status === "success") {
          alert("Order placed successfully");
        } else {
          alert("Payment verification failed");
        }
      },
      prefill: {
        name: "Gaurav Kumar",
        email: "gaurav.kumar@example.com",
        contact: "9000090000",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.on("payment.failed", function (response) {
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
    });

    rzp1.open();
  };

  return (
    <>
    <div className="cart-container">
      {Array.isArray(showcart) && showcart.length !== 0 ? (
        <>
          {showcart?.map((x, index) => (
            <MDBCard key={index} className="cart-card">
              <MDBCardImage
                src={x.ProductId.ProductImage}
                alt="Product"
                className="cart-image"
              />
              <MDBCardBody className="cart-content">
                <button className="delete-button" onClick={() => fetchDelete(x.ProductId._id)}>
                <MdDeleteOutline/>
                </button>
                <MDBCardTitle className="cart-title">{x.ProductId.ProductTitle}</MDBCardTitle>
                <p className="cart-price">{"₹" + x.ProductId.ProductPrice}</p>
                <MDBCardText className="cart-description">{x.ProductId.ProductDescription}</MDBCardText>
                <div className="cart-quantity">
                  <button className="quantity-button" onClick={() => fetchIncrement(x.ProductId._id)}>+</button>
                  <div className="quantity-display">{x.Quantity}</div>
                  <button className="quantity-button" onClick={() => fetchDecrement(x.ProductId._id)}>-</button>
                </div>
                <div>{"₹" + x.Quantity * x.ProductId.ProductPrice}</div>
                <NavLink to="/payment">
                  <MDBBtn color="black" >
                    <MdFlashOn />
                    BUY NOW
                  </MDBBtn>
                </NavLink>
              </MDBCardBody>
            </MDBCard>
          ))}
          <div className="checkout-section">
            <div className="total-price">Total: {"₹" + totalprice}</div>
            <MDBBtn color="black" onClick={handlePayment} className="place-order-button">
              Place Order
            </MDBBtn>
          </div>
        </>
      ) : (
        <h4 style={{ color: "gray", textAlign: "center", padding: "70px" }}>
          Your cart is empty! Add something now.
        </h4>
      )}
    </div>
    <Footer/>
    </>
  );
}

export default Cart;
