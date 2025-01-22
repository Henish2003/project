import React from "react";

function Header() {
  return (
    <header style={headerStyle}>
      <h1>Mázoxi</h1>
      <p>Your One-Stop Solution to Business Problems</p>
      <button style={buttonStyle}>Book a Session Now</button>
    </header>
  );
}

const headerStyle = {
  textAlign: "center",
  padding: "50px",
  backgroundColor: "#f4f4f4",
};

const buttonStyle = {
  padding: "10px 20px",
  marginTop: "20px",
  fontSize: "16px",
  backgroundColor: "#007BFF",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
};

export default Header;
