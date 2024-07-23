import React, { useState, useEffect } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardTitle } from 'mdb-react-ui-kit';

export const Adminhome = () => {
  const [keralaTime, setKeralaTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Kolkata',
        hour12: true, 
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
      };
      setKeralaTime(now.toLocaleString('en-IN', options));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) {
      return 'Good morning ☀️';
    } else if (hour >= 12 && hour < 18) {
      return 'Good afternoon 🌤️';
    } else if (hour >= 18 && hour < 22) {
      return 'Good evening 🌙';
    } else {
      return 'Good night 🌙';
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <MDBContainer fluid className="p-0">
        <MDBRow className="justify-content-center">
          <MDBCol md="8" xl="6" xxl="5" className="mt-5">
            <MDBCard className="shadow-lg">
              <MDBCardBody>
                <MDBCardTitle tag="h3" className="text-center mb-4">
                  HELLO... {getGreeting()}
                </MDBCardTitle>
                <MDBRow className="justify-content-center mb-4">
                  <MDBCol sm="6" className="text-center">
                    <h5>Admin ID: admin</h5>
                  </MDBCol>
                  <MDBCol sm="6" className="text-center">
                    <h5>Email: admin@gmail.com</h5>
                  </MDBCol>
                </MDBRow>
                <MDBRow className="justify-content-center mb-4">
                  
                </MDBRow>
                <MDBRow className="justify-content-center mb-4">
                  <MDBCol sm="12" className="text-center">
                    <h5>  {keralaTime}</h5>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};
