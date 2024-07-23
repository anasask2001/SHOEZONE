import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { MDBBtn } from "mdb-react-ui-kit";
import "../pages/Contact.css";
import Footer from "../components/Footer";

function Contact() {
  const form = useRef();
  const [errorMessage, setErrorMessage] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const userName = formData.get("user_name");
    const userEmail = formData.get("user_email");
    const userMessage = formData.get("user_message");

    // Check if any of the fields are empty
    if (!userName || !userEmail || !userMessage) {
      setErrorMessage("Please fill out all fields");
      return;
    }

    emailjs
      .sendForm("service_apg3s8n", "template_f1s55qc", form.current, {
        publicKey: "QBs261zIZck7V-nzj",
      })
      .then(
        (result) => {
          console.log("SUCCESS!");
          console.log(result.text);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "150px",
          marginRight: "100px",
        }}
      >
        <h1 style={{ fontSize: "1.5em", boxSizing: "inherit" }}>
          We are shoezone and we are here to serve! <br />
          How can we help you?
        </h1>
      </div>

      <div
        style={{
          width: "700px",
          display: "flex",
          justifyContent: "center",
          marginTop: "50px",
        }}
      >
        <form
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
          ref={form}
          onSubmit={sendEmail}
        >
          <div>
            <h1 style={{ display: "flex", justifyContent: "center" }}>
              CONTACT US
            </h1>
          </div>

          <label className="text1">NAME</label>
          <input className="size" type="text" name="user_name" />
          <label className="text1">E-MAIL</label>
          <input className="size" type="email" name="user_email" />
          <label className="text1">COMMENT</label>
          <textarea className="size" name="user_message" />

          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
          <br />

          <MDBBtn color="black" className="size" type="submit" value="send">
            SEND MESSAGE
          </MDBBtn>
        </form>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Contact;
