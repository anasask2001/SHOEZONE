import React, { useEffect } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBTable,
  MDBTableHead,
  MDBTableBody
} from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import { Orderstotal, status } from "../Redux/Thunk/Thunk";
import { useNavigate,} from "react-router-dom";

export const Orders = () => {
  const navigate = useNavigate(); // Rename Navigate to navigate (standard naming convention)
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(status());
    dispatch(Orderstotal());
  }, [dispatch]);

  const { totals, orderstotal } = useSelector((state) => state.ApiSlice);


  const handleViewOrderStatus = (userId) => {
    navigate(`/orderStatus/${userId}`);
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <MDBContainer>
          <MDBRow className="justify-content-center">
            <MDBCol md="6">
              <MDBCard className="mb-4">
                <MDBCardBody>
                  <MDBCardTitle>Total Revenue</MDBCardTitle>
                  <MDBCardText>₹{totals?.data?.totalRevenue}</MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol md="6">
              <MDBCard className="mb-4">
                <MDBCardBody>
                  <MDBCardTitle>Total Quantity Purchased</MDBCardTitle>
                  <MDBCardText>{totals?.data?.totalProduct}</MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>

      <div>
        <MDBCard>
          <MDBCardBody>
            <MDBTable align="middle" hover responsive>
              <MDBTableHead color="light">
                <tr>
                  <th scope="col">Order ID</th>
                  <th scope="col">Date</th>
                  <th scope="col">Total</th>
                  <th scope="col">Time</th>
                  <th scope="col">UserId</th>
                  <th scope="col">Status</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                {orderstotal.map((order) => (
                  <tr key={order.OrderId}>
                    <td>{order.OrderId}</td>
                    <td>{new Date(order.PurchaseDate).toLocaleDateString()}</td>
                    <td>
                      {order.TotalPrice !== undefined ? `₹${order.TotalPrice.toFixed(2)}` : 'N/A'}
                    </td>
                    <td>{order.OrderTime}</td>
                    <td>{order.UserId}</td>
                    <td>
                    <b style={{color:"green"}}>SUCCESS</b>
                    </td>
                  </tr>
                ))}
              </MDBTableBody>
            </MDBTable>
          </MDBCardBody>
        </MDBCard>
      </div>
    </>
  );
};
