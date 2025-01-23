import React from "react";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

function Footer() {
  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={footerContentStyle}>
          <div style={contactStyle}>
            <h3 style={contactTitleStyle}>Get a quote or set up a consultation.</h3>
            <div style={contactDetailContainerStyle}>
              <div style={contactDetailStyle}>
                <p style={contactLabelStyle}>PHONE:</p>
                <p style={contactInfoStyle}>(123) 456-7890</p>
              </div>
              <div style={contactDetailStyle}>
                <p style={contactLabelStyle}>EMAIL:</p>
                <p style={contactInfoStyle}>hello@reallygreatsite.com</p>
              </div>
            </div>
            <div style={contactDetailStyle}>
              <p style={contactLabelStyle}>SOCIAL:</p>
              <div style={socialIconsStyle}>
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
          <div style={logoContainerStyle}>
            <div style={logoStyle}>Mázoxi</div>
          </div>
        </div>
        <div style={footerBottomStyle}>
          <p>&copy; 2024 Mizoxi. All rights reserved.</p>
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
  justifyContent: "space-between",
  alignItems: "flex-start",
};

const contactStyle = {
  maxWidth: "60%",
};

const contactTitleStyle = {
  fontSize: "24px",
  fontWeight: "bold",
  marginBottom: "1rem",
};

const contactDetailContainerStyle = {
  display: "flex",
  gap: "2rem",
  marginBottom: "1rem",
};

const contactDetailStyle = {
  marginBottom: "1rem",
};

const contactLabelStyle = {
  color: "#FFFFFF",
  fontSize: "18px",
  fontWeight: "bold",
};

const contactInfoStyle = {
  color: "#9C27B0",
  fontSize: "16px",
  marginLeft: "10px",
};

const socialIconsStyle = {
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
};

const iconLinkStyle = {
  color: "#9C27B0",
  transition: "color 300ms",
};

const iconStyle = {
  width: "24px",
  height: "24px",
};

const logoContainerStyle = {
  textAlign: "right",
};

const logoStyle = {
  fontSize: "36px",
  fontWeight: "bold",
  color: "#A3E635",
  textShadow: "2px 2px 0 #9C27B0",
};

const footerBottomStyle = {
  marginTop: "2rem",
  paddingTop: "2rem",
  borderTop: "1px solid #2D3748",
  textAlign: "center",
  color: "#CBD5E0",
};

export default Footer;
