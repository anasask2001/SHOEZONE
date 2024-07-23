import React from "react";
import { Container } from "react-bootstrap";
import { FaLeaf } from "react-icons/fa";
import { FaCat } from "react-icons/fa";
import { FaHands } from "react-icons/fa";
import ads from "../pages/Ads1.mp4";
import Footer from "../components/Footer";
function Ourstory() {
  return (
    <>
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          fontSize: "clamp(16px, 4vw, 50px)",
          letterSpacing: "-1px",
          color: "#262b2c",
          marginTop: "2%",
        }}
      >
        <h1 style={{ fontSize: "clamp(32px, 8vw, 48px)", fontWeight: "bold" }}>
          Our Story
        </h1>
        <h3
          style={{
            fontSize: "clamp(14px, 4vw, 20px)",
            lineHeight: "1.4em",
            fontWeight: "500",
            letterSpacing: "2px",
            textAlign: "center",
            margin: "10px 0",
          }}
        >
          Taking a stylish and sustainable footwear
          <br />
          with a focus on creating a positive impact
          <br />
          on both the world and the people
        </h3>
      </div>

      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          maxWidth: "75%",
        }}
      >
        <div
          style={{
            position: "relative",
            paddingBottom: "56.25%",
            width: "100%",
            height: "0",
          }}
        >
          <video autoPlay muted loop style={{ width: "100%", height: "auto" }}>
            <source src={ads} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </Container>

      <br />

      <div
        style={{
          width: "100%",
          height: "250px",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <div style={{ width: "20%", height: "200px" }}>
          <span>
            <FaHands />
          </span>
          <h5>Ethics and equality</h5>
          <p>
            Pellentesque quam convallis massa enim, faucibus ornare sollicitudin
            gravida justo sit suspendisse pellentesque.
          </p>
        </div>

        <div style={{ width: "20%", height: "200px" }}>
          <span>
            <FaLeaf />
          </span>
          <h5>Eco-design</h5>
          <p>
            Risus leo molestie a aliquam amet urna orci nisl dignissim elementum
            nibh felis ultrices vitae consectetur.
          </p>
        </div>

        <div style={{ width: "20%", height: "200px" }}>
          <span>
            {" "}
            <FaCat />
          </span>
          <h5>Wildlife Preservation</h5>
          <p>
            Pellentesque nunc ante augue adipiscing sed suspendisse amet sed
            pellentesque convallis erat nibh vivamus.
          </p>
        </div>
      </div>

      <div
        style={{
          width: "90%",
          height: "150px",
          display: "flex",
          justifyContent: "space-around",
          margin: "50px",
        }}
      >
        <p>
          Eu eget felis erat mauris aliquam mattis lacus, arcu leo aliquam
          sapien pulvinar laoreet vulputate sem aliquet phasellus egestas felis,
          est, vulputate morbi massa mauris vestibulum dui odio.
        </p>
        <img
          style={{ width: "104px", height: "104px" }}
          src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-badge-3.svg"
          alt=""
        />
        <img
          style={{ width: "104px", height: "104px" }}
          src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-badge-2.svg"
          alt=""
        />
        <img
          style={{ width: "104px", height: "104px" }}
          src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-badge-1.svg"
          alt=""
        />
      </div>

      <div
        style={{
          width: "100%",
          height: "150px",
          margin: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            height: "400px",
            width: "80%",
          }}
        >
          <h4>Mission</h4>
          <p>
            Pulvinar sed nunc ultrices consequat adipiscing sagittis feugiat at
            dui, arcu nec id non pellentesque dolor feugiat dolor ac ac sem
            semper nulla dis vitae, quis elit odio nunc dignissim aliquam ipsum.
          </p>

          <h4>Vision</h4>
          <p>
            Sit etiam est, nunc sollicitudin malesuada tincidunt senectus
            venenatis, adipiscing nulla vel diam, lorem donec sit blandit nec
            tortor, diam cras ut velit nulla purus ullamcorper ornare elit
            bibendum augue.
          </p>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Ourstory;
