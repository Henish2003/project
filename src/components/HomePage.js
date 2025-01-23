import React, { useState } from "react";
import bgm from './bgm.jpg'; // Replace with the correct relative path to your image
import img3m from './1st.jpg'; // Replace with the correct path for the marketing image
import logo from './logom.jpg';
import Services from "./Services";
import Choose from "./Choose";
import Page from "./Page";
import Content from "./Content";
import Marketing from "./marketing";
import Work from "./work";
import Contact from "./Contact";
import Footer from "./Footer";

function AboutUs() {
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle the menu

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the menu visibility
  };

  const navigateTo = (section) => {
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false); // Close the menu after navigation
  };

  return (
    <div>
      {/* Wrapper for AboutUs-specific styles */}
      <div
        style={{
          fontFamily: "'Poppins', sans-serif",
          backgroundImage: `url(${bgm})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          minHeight: "100vh",
          padding: "20px",
          position: "relative",
        }}
      >
        {/* Logo */}
        <div
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            color: "#000",
            textAlign: "left",
          }}
        >
          <img
            src={logo}
            alt="Mázoxi Logo"
            style={{
              width: "150px",
              height: "auto",
              borderRadius: "10px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          />
        </div>

        {/* Menu Button */}
        <div
          style={{
            position: "absolute",
            top: "30px",
            right: "30px",
            cursor: "pointer",
            zIndex: "1000",
          }}
          onClick={toggleMenu} // Add toggleMenu function here
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="30"
            height="30"
            fill="#fff"
          >
            <path d="M3 12h18M3 6h18M3 18h18" stroke="#fff" strokeWidth="2" />
          </svg>
        </div>

        {/* Dropdown Menu */}
        {menuOpen && (
          <div
            style={{
              position: "absolute",
              top: "70px",
              right: "20px",
              backgroundColor: "#fff",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              borderRadius: "8px",
              zIndex: "1000",
              padding: "10px 20px",
            }}
          >
            <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
              <li
                style={{
                  margin: "10px 0",
                  cursor: "pointer",
                  color: "#000",
                  fontWeight: "bold",
                }}
                onClick={() => navigateTo("about-section")}
              >
                About Us
              </li>
              <li
                style={{
                  margin: "10px 0",
                  cursor: "pointer",
                  color: "#000",
                  fontWeight: "bold",
                }}
                onClick={() => navigateTo("services-section")}
              >
                Services
              </li>
              <li
                style={{
                  margin: "10px 0",
                  cursor: "pointer",
                  color: "#000",
                  fontWeight: "bold",
                }}
                onClick={() => navigateTo("contact-section")}
              >
                Contact Us
              </li>
            </ul>
          </div>
        )}



        {/* Main Section */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            alignItems: "center",
            marginTop: "30px",
          }}
        >
          <div style={{ flex: "1 1 45%", margin: "10px" }}>
            <h1
              style={{
                fontSize: "60px",
                fontWeight: "700",
                color: "#000",
                textAlign: "left",
                lineHeight: "1.2",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              ONE-STOP SOLUTION <br /> TO YOUR BUSINESS <br /> PROBLEMS
            </h1>
            <button
              style={{
                marginTop: "20px",
                backgroundColor: "#9C27B0",
                color: "#fff",
                border: "none",
                padding: "15px 25px",
                borderRadius: "8px",
                fontSize: "18px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Book a Session Now
            </button>
          </div>
        </div>

        {/* Marketing Image and Purpose-Driven Section */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            marginTop: "40px",
          }}
        >
          <div
            style={{
              textAlign: "center",
              margin: "20px auto",
              width: "40%",
              padding: "5px",
            }}
          >
            <img
            src={img3m} // Use the imported marketing image
            alt="Marketing Strategies"
            style={{
              width: "50%", // Make it responsive
              height: "auto", // Maintain aspect ratio
              maxWidth: "300px", // Increased max width for a larger image
              borderRadius: "8px",
              border: "5px solid green", // Green border
              boxShadow: "0 4px 6px rgba(0,0,0,0.2)",
            }}
          />
          </div>

          <div
            style={{
              backgroundColor: "#9C27B0",
              padding: "10px",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgb(27, 26, 26)",
              textAlign: "center",
              maxWidth: "700px",
              margin: "20px",
              color: "#fff",
            }}
          >
            <h2>A Purpose-Driven Company</h2>
            <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#fff" }}>
              At Mázoxi, we specialize in empowering businesses to thrive in
              today’s competitive landscape. Whether you’re a budding startup or
              an established enterprise, our bespoke services in digital and
              in-person marketing, business analysis, financial analysis, market
              research, and IT support are designed to help you achieve your
              goals.
            </p>
          </div>
        </div>
      </div>

      {/* Other Components */}
      <Services />
      <Choose />
      <Page />
      <Content />
      <Marketing />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default AboutUs;
