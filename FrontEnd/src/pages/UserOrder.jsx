import React, { useEffect } from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBSpinner,
  MDBCardImage,
  MDBCardHeader,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { userorder } from '../Redux/Thunk/Thunk';
import Footer from '../components/Footer';


const UserOrders = () => {
  const dispatch = useDispatch();
  const { Id } = useParams();
   const Navigate = useNavigate()

  useEffect(() => {
    if (Id) {
      dispatch(userorder(Id));
    }
  }, [Id, dispatch]);

  const userOrders = useSelector((state) => state.ApiSlice.userorder);
  

  return (
    <>
      <div className="user-orders">
        <MDBContainer style={{width:"100%"}}>
          <MDBRow className="my-2">
           
          </MDBRow>
          {!userOrders || userOrders.length === 0 ? (
            <MDBRow>
              <MDBCol>
                <p>No orders found.</p>
              </MDBCol>
            </MDBRow>
          ) : (
            userOrders.map((order) => (
              <MDBRow key={order.id} className="mb-1">
                <MDBCol>
                  <MDBCard className="order-card">
                    <MDBCardHeader>

 <MDBCardText className="text-sm text-gray-600" >
  <strong>Tracking Id:</strong> {order.OrderId}
  <br />
  <strong>Date:</strong> {order.PurchaseDate ? new Date(order.PurchaseDate).toLocaleDateString() : 'N/A'}
  <br />
  <strong>Time:</strong> {order.OrderTime}
  <br />
  <strong>Total:</strong> ₹{order.TotalPrice ? order.TotalPrice.toFixed(2) : '0.00'}
  <br />
  <strong>Transaction Id:</strong> {order.PaymentId}
  <br />
  <strong>Status:</strong> <span style={{color:"green"}}>Delivered</span>
</MDBCardText>
        </MDBCardHeader>
                    <MDBCardBody>
                    
                    
                      <MDBListGroup>
                        {order.Products && order.Products.length > 0 ? (
                          order.Products.map((item) => (
                           
                            <MDBListGroupItem key={item.id}>
                              
                              <MDBRow className="align-items-center" onClick={()=>Navigate(`/${item.ProductId._id}`)}>
                                <MDBCol md="1">
                                  <MDBCardImage src={item.ProductId.ProductImage} alt={item.ProductId.ProductTitle} fluid />
                                </MDBCol>
                                <MDBCol md="2">
                                  <strong>{item.ProductId.ProductTitle}</strong>
                                  <br />
                                  {item.ProductId.ProductPrice ? `₹${item.ProductId.ProductPrice.toFixed(2)}` : 'N/A'} x {item.Quantity}
                                </MDBCol>
                              </MDBRow>
                              
                            </MDBListGroupItem>
                          ))
                        ) : (
                          <MDBListGroupItem>No items found.</MDBListGroupItem>
                        )}
                      </MDBListGroup>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            ))
          )}
        </MDBContainer>
      </div>
      <Footer />
    </>
  );
};

export default UserOrders;
