import React from "react";

function Footer() {
  return (
    <footer style={footerStyle}>
      <p>&copy; 2025 Mázoxi. All rights reserved.</p>
    </footer>
  );
}

const footerStyle = {
  textAlign: "center",
  padding: "20px",
  backgroundColor: "#222",
  color: "#fff",
};

export default Footer;
