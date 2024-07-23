import React from "react";
import {
  MDBCarousel,
  MDBCarouselItem,
  MDBCardImage,
} from "mdb-react-ui-kit";
import ads2 from "../Assets/ads2.jpg";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import "../components/Home.css";
import { FaLock } from "react-icons/fa";
import { FaShippingFast } from "react-icons/fa";
import { FaArrowsRotate } from "react-icons/fa6";
import Footer from "./Footer";

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
    <div>
      <MDBCarousel showIndicators showControls fade>
        <MDBCarouselItem itemId={1}>
          <img
            className="imgshoe"
            src="https://images.unsplash.com/photo-1534069523039-4c09db4ac4bb?q=80&w=1938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="..."
            style={{ height: "85vh", objectFit: "cover" }}
            onClick={() => navigate("/22")}
          />
        </MDBCarouselItem>

        <MDBCarouselItem itemId={ads2}>
          <img
            className="imgshoe"
            src="https://images.unsplash.com/photo-1520902980812-1e65704af11e?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="..."
            style={{ height: "85vh", objectFit: "cover" }}
            onClick={() => navigate("/32")}
          />
        </MDBCarouselItem>

        <MDBCarouselItem itemId={3}>
          <img
            src="https://images.unsplash.com/photo-1535659513767-f1a7b068ebc1?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="d-block w-100"
            alt="..."
            style={{ height: "85vh", objectFit: "cover" }}
            onClick={() => navigate("/27")}
          />
        </MDBCarouselItem>

        <MDBCarouselItem itemId={4}>
          <img
            src="https://images.unsplash.com/photo-1633966849409-15619ac38fff?q=80&w=2006&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="d-block w-100"
            alt="..."
            style={{ height: "85vh", objectFit: "cover" }}
            onClick={() => navigate("/8")}
          />
        </MDBCarouselItem>
      </MDBCarousel>

      <Container>
        <div
          className="icons-mein"
          style={{ width: "100%", height: "150px", display: "flex" }}
        >
          <div
            className="icon_text"
            style={{
              height: "150px",
              width: "17%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span>AS SEEN IN:</span>
          </div>
          <div
            style={{
              height: "150px",
              width: "15%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              className="icons"
              style={{ height: "100px" }}
              src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-featured-in-logo-5.svg"
            />
          </div>
          <div
            style={{
              height: "150px",
              width: "15%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              className="icons"
              style={{ height: "100px" }}
              src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-featured-in-logo-4.svg"
            />
          </div>
          <div
            style={{
              height: "150px",
              width: "15%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              className="icons"
              style={{ height: "100px" }}
              src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-featured-in-logo-3.svg"
            />
          </div>
          <div
            style={{
              height: "150px",
              width: "15%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              className="icons"
              style={{ height: "100px" }}
              src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-featured-in-logo-2.svg"
            />
          </div>
          <div
            style={{
              height: "150px",
              width: "15%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              className="icons"
              style={{ height: "100px" }}
              src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-featured-in-logo-1.svg"
            />
          </div>
        </div>
      </Container>

      <div
        className="parant-head"
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "50px",
        }}
      >
        <div style={{ margin: "40px" }} class="card1">
          <img
            className="imgcard1"
            src="https://i.pinimg.com/564x/fd/9c/da/fd9cdae001bd797db7313a6704c5b1a9.jpg"
            alt=""
            onClick={() => navigate("/3")}
          />
        </div>

        <div style={{ margin: "40px" }} className="card22" class="card1">
          <img
            className="imgcard1"
            src="https://i.pinimg.com/564x/59/95/b8/5995b80dcc1e2639b31b5aacd38af030.jpg"
            alt=""
            onClick={() => navigate("/5")}
          />
        </div>

        <div style={{ margin: "40px" }} class="card1">
          <img
            className="imgcard1"
            src="https://images.pexels.com/photos/19374318/pexels-photo-19374318/free-photo-of-nike-air-jordan-i-in-with-green-elements.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            onClick={() => navigate("/5")}
          />
        </div>
      </div>

      <br />

      <br />

      <Container>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div className="bg-image hover-zoom">
            <MDBCardImage
              className="w70 round_img"
              style={{ width: "150px", height: "150px", borderRadius: "150px" }}
              src="https://images.pexels.com/photos/5496580/pexels-photo-5496580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              position="top"
              alt="..."
            />
          </div>
          <div className="bg-image hover-zoom">
            <MDBCardImage
              className="w70  round_img"
              style={{ width: "150px", height: "150px", borderRadius: "150px" }}
              src="https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?q=80&w=1785&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              position="top"
              alt="..."
            />
          </div>
          <div className="bg-image hover-zoom">
            <MDBCardImage
              className="w70  round_img"
              style={{ width: "150px", height: "150px", borderRadius: "150px" }}
              src="https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              position="top"
              alt="..."
            />
          </div>
          <div className="bg-image hover-zoom">
            <MDBCardImage
              className="w70  round_img"
              style={{ width: "150px", height: "150px", borderRadius: "150px" }}
              src="https://images.unsplash.com/photo-1678192568444-78b428b7cd1a?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              position="top"
              alt="..."
            />
          </div>
          <div className="bg-image hover-zoom">
            <MDBCardImage
              className="w70  round_img"
              style={{ width: "150px", height: "150px", borderRadius: "150px" }}
              src="https://images.unsplash.com/photo-1534653299134-96a171b61581?q=80&w=1875&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              position="top"
              alt="..."
            />
          </div>
        </div>
      </Container>

      <div
        className="shoee"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <button
          className="butt"
          style={{ marginLeft: "30px" }}
          onClick={() => navigate("/men")}
        >
          SHOP MEN
        </button>
        <button className="butt" onClick={() => navigate("/women")}>
          SHOP WOMEN
        </button>
      </div>

      <div
        style={{
          width: "100%",
          height: "60px",
          display: "flex",
          justifyContent: "space-evenly",
          bottom: "10px",
        }}
      >
        <div
          className="App-header"
          style={{
            height: "70px",
            width: "17%",
            display: "flex",
            alignItems: "center",
          }}
        >
          {" "}
          <FaLock className="App-header" style={{ fontSize: "20px" }} />
          <span className="App-header">Secure Payment</span>{" "}
        </div>

        <div
          className="App-header"
          style={{
            height: "70px",
            width: "17%",
            display: "flex",
            alignItems: "center",
          }}
        >
          {" "}
          <FaShippingFast className="App-header" style={{ fontSize: "20px" }} />
          <span className="App-header">Express Shipping</span>
        </div>

        <div
          className="App-header"
          style={{
            height: "70px",
            width: "17%",
            display: "flex",
            alignItems: "center",
          }}
        >
          {" "}
          <FaArrowsRotate className="App-header" style={{ fontSize: "20px" }} />
          <span className="App-header">Free Return</span>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}
