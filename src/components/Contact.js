import React from "react";

function Contact() {
  return (
    <section style={sectionStyle}>
      <h2>Get in Touch</h2>
      <p>Phone: (123) 456-7890</p>
      <p>Email: hello@reallygreatsite.com</p>
      <button style={buttonStyle}>Book a Session Now</button>
    </section>
  );
}

const sectionStyle = {
  padding: "40px",
  textAlign: "center",
};

const buttonStyle = {
  padding: "10px 20px",
  fontSize: "16px",
  backgroundColor: "#28A745",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
};

export default Contact;
