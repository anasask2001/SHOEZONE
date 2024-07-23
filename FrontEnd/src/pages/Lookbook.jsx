import React from "react";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardOverlay,
  MDBCardImage,
} from "mdb-react-ui-kit";
import { Container } from "react-bootstrap";
import Footer from "../components/Footer";

function Lookbook() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: "48px",
          letterSpacing: "-2px",
          color: "#262b2c",
          top: "20%",
          justifyItems: "center",
        }}
      >
        {" "}
        <h1>Lookbook</h1>{" "}
      </div>
      <Container>
        <MDBCard background="dark" className="text-white">
          <MDBCardOverlay style={{ color: "black" }}></MDBCardOverlay>
          <MDBCardImage
            overlay
            src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-lookbook-cover-image-4.jpg"
            alt="..."
          />
        </MDBCard>
        <MDBCardTitle>Fall/Winter 2021</MDBCardTitle>
        <MDBCardText>
          Elementum donec leo vulputate sit proin suspendisse malesuada neque
          proin gravida ut platea vitae duis hac hac vel id ipsum ultricies ut
          faucibus ultrices.
        </MDBCardText>
      </Container>

      <br />
      <Container>
        <MDBCard background="dark" className="text-white">
          <MDBCardOverlay style={{ color: "black" }}></MDBCardOverlay>
          <MDBCardImage
            overlay
            src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-lookbook-cover-image-2.jpg"
            alt="..."
          />
        </MDBCard>
        <MDBCardTitle>Go & Play</MDBCardTitle>
        <MDBCardText>
          Elementum donec leo vulputate sit proin suspendisse malesuada neque
          proin gravida ut platea vitae duis hac hac vel id ipsum ultricies ut
          faucibus ultrices.
        </MDBCardText>
      </Container>
      <br />
      <Container>
        <MDBCard background="dark" className="text-white">
          <MDBCardOverlay style={{ color: "black" }}></MDBCardOverlay>
          <MDBCardImage
            overlay
            src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-lookbook-cover-image-3.jpg"
            alt="..."
          />
        </MDBCard>
        <MDBCardTitle>Spring/Summer 2021</MDBCardTitle>
        <MDBCardText>
          Elementum donec leo vulputate sit proin suspendisse malesuada neque
          proin gravida ut platea vitae duis hac hac vel id ipsum ultricies ut
          faucibus ultrices.
        </MDBCardText>
      </Container>

      <br />
      <Container>
        <MDBCard background="dark" className="text-white">
          <MDBCardOverlay style={{ color: "black" }}></MDBCardOverlay>

          <MDBCardImage
            overlay
            src="https://airlinestime.com/wp-content/uploads/2021/08/best-hiking-boots-for-wide-feet-1024x576.jpg"
            alt="..."
          />
        </MDBCard>
        <MDBCardTitle>Adventurer Gear</MDBCardTitle>
        <MDBCardText>
          Elementum donec leo vulputate sit proin suspendisse malesuada neque
          proin gravida ut platea vitae duis hac hac vel id ipsum ultricies ut
          faucibus ultrices.
        </MDBCardText>
      </Container>

      <div />
      <Footer/>
    </>
  );
}

export default Lookbook;
