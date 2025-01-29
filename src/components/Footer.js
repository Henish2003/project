import React from "react";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import footer from "./footer1.png";

function Footer() {
  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={footerContentStyle}>
          <div style={contactStyle}>
            <div style={headingWithLogoStyle}>
              <h3 style={contactTitleStyle}>Get a quote or set<br></br> up a consultation.</h3>
              <img src={footer} alt="Logo" style={headingLogoStyle} />
            </div>
          </div>
          <div style={contactDetailContainerStyle}>
            <div style={contactDetailLeftStyle}>
              <p style={contactLabelStyle}>PHONE:</p>
              <p style={contactInfoStyle}>(123) 456-7890</p>
            </div>
            <div style={contactDetailMiddleStyle}>
              <p style={contactLabelStyle}>EMAIL:</p>
              <p style={contactInfoStyle}>hello@reallygreatsite.com</p>
            </div>
            <div style={contactDetailRightStyle}>
              <p style={contactLabelStyle}>SOCIAL:</p>
              <div style={socialIconsContainerStyle}>
                <a href="#" style={iconLinkStyle}>
                  <Instagram style={iconStyle} />
                </a>
                <a href="#" style={iconLinkStyle}>
                  <Facebook style={iconStyle} />
                </a>
                <a href="#" style={iconLinkStyle}>
                  <Twitter style={iconStyle} />
                </a>
                <a href="#" style={iconLinkStyle}>
                  <Linkedin style={iconStyle} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div style={footerBottomStyle}>
          <p>&copy; 2024 Mázoxi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

const footerStyle = {
  backgroundColor: "#000000",
  color: "#FFFFFF",
  padding: "3rem 0",
  fontFamily: "Arial, sans-serif",
};

const containerStyle = {
  maxWidth: "1280px",
  margin: "0 auto",
  padding: "0 1rem",
};

const footerContentStyle = {
  display: "flex",
  flexDirection: "column",
};

const contactStyle = {
  marginBottom: "2rem",
};

const headingWithLogoStyle = {
  display: "flex",
  justifyContent: "space-between", // Ensures the text is on the left and image is on the right
  alignItems: "center", // Vertically center align text and image
};

const contactTitleStyle = {
  fontSize: "50px", // Increased font size for the heading
  fontWeight: 500,
  color: "#A3E635",
  margin: 0, // Remove default margin for better alignment
  fontFamily: "'MuseoModerno', cursive", // Added MuseoModerno font
  lineHeight: "1.2", // Reduced line-height for tighter spacing
};

const headingLogoStyle = {
  width: "300px", // Increased size of the image
  height: "auto",
  marginLeft: "1rem", // Add spacing between the heading and the image
};

const contactDetailContainerStyle = {
  display: "flex",
  justifyContent: "space-between", // Spread Phone, Email, and Social horizontally
  alignItems: "center",
  marginBottom: "2rem",
};

const contactDetailLeftStyle = {
  textAlign: "left",
};

const contactDetailMiddleStyle = {
  textAlign: "left",
};

const contactDetailRightStyle = {
  textAlign: "left",
};

const contactLabelStyle = {
  color: "#FFFFFF",
  fontSize: "18px",
  fontWeight: "bold",
  fontFamily: "'Exo', sans-serif", // Added Exo font for labels
};

const contactInfoStyle = {
  color: "#9C27B0",
  fontSize: "16px",
  fontFamily: "'Exo', sans-serif", // Added Exo font for information
};

const socialIconsContainerStyle = {
  display: "flex",
  gap: "1rem",
  border: "2px solid #FFFFFF", // White border instead of background
  padding: "0.5rem",
  borderRadius: "5px",
};

const iconLinkStyle = {
  color: "#9C27B0",
  transition: "color 300ms",
};

const iconStyle = {
  width: "24px",
  height: "24px",
};

const footerBottomStyle = {
  marginTop: "2rem",
  paddingTop: "2rem",
  borderTop: "1px solid #2D3748",
  textAlign: "center",
  color: "#CBD5E0",
};

export default Footer;
