import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function Footer() {
  return (
    <>
      <MDBFooter  className="App-header">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom ">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a href="" className="me-4 text-reset ">
              <MDBIcon color="secondary" fab icon="facebook-f" />
            </a>
            <a href="" className="me-4 text-reset">
              <MDBIcon color="secondary" fab icon="twitter" />
            </a>
            <a href="" className="me-4 text-reset">
              <MDBIcon color="secondary" fab icon="google" />
            </a>
            <a href="" className="me-4 text-reset">
              <MDBIcon color="secondary" fab icon="instagram" />
            </a>
            <a href="" className="me-4 text-reset">
              <MDBIcon color="secondary" fab icon="linkedin" />
            </a>
            <a href="" className="me-4 text-reset">
              <MDBIcon color="secondary" fab icon="github" />
            </a>
          </div>
        </section>

        <section className="">
          <MDBContainer className="text-center text-md-start mt-5">
            <MDBRow className="mt-3">
              <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                <h6
                  style={{ color: "black" }}
                  className="text-uppercase fw-bold mb-4"
                >
                  SHOEZONE
                </h6>
                <p>
                  About CSD CSD Locations CSD Marylebone Lane Store CSD
                  Battersea Power Station Store CSD Notting Hill Store Careers
                  Press Consignor Terms Buyer's Terms & Condition How It Works
                  Security Newsletter Privacy Policy Promotions Sitemap
                </p>
              </MDBCol>

              <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                <h6
                  style={{ color: "black" }}
                  className="text-uppercase fw-bold mb-4"
                >
                  Products
                </h6>
                <p>
                  <a href="#!" className="text-reset">
                    Shoes
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Chappals
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Beutyproducts
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Cloths
                  </a>
                </p>
              </MDBCol>

              <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
                <h6
                  style={{ color: "black" }}
                  className="text-uppercase fw-bold mb-4"
                >
                  Useful links
                </h6>
                <p>
                  <a href="#!" className="text-reset">
                    Pricing
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Settings
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Orders
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Help
                  </a>
                </p>
              </MDBCol>

              <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                <h6
                  style={{ color: "black" }}
                  className="text-uppercase fw-bold mb-4"
                >
                  Contact
                </h6>
                <p>
                  <MDBIcon color="secondary" icon="home" className="me-2" />
                  Kerala, NY 10012, INDIA
                </p>
                <p>
                  <MDBIcon color="secondary" icon="envelope" className="me-3" />
                  anas.p8113@gmail.com
                </p>
                <p>
                  <MDBIcon color="secondary" icon="phone" className="me-3" /> +
                  91 8113847950
                </p>
                <p>
                  <MDBIcon color="secondary" icon="print" className="me-3" />{" "}
                  +91 9747200376
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2024 Copyright:
          <a
            style={{ color: "black" }}
            className="text-reset fw-bold"
            href="https://mdbootstrap.com/"
          >
            SHOEZONE.COM
          </a>
          <img
            style={{ display: "flex", justifyContent: "flex-end" }}
            src="https://websitedemos.net/recycled-shoe-store/wp-content/uploads/sites/983/2021/11/payment-icons.png"
          />
        </div>
      </MDBFooter>
    </>
  );
}
