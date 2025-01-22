import React from "react";
import bgm from './bgm.jpg'; // Replace with the correct relative path to your image
import img3m from './img3m.jpg'; // Replace with the correct path for the marketing image
import logo from './logom.jpg';

function AboutUs() {
  return (
    <div
      style={{
        fontFamily: "'Poppins', sans-serif",
        backgroundImage: `url(${bgm})`, // Use the imported background image
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minHeight: "100vh",
        padding: "30px",
        position: "relative", // To position the button absolutely within this container
      }}
    >
      {/* Logo and Navigation */}
      <div
        style={{
          fontSize: "24px",
          fontWeight: "bold",
          color: "#000",
          textAlign: "left",
        }}
      >
        {/* Logo image */}
        <img
          src={logo} // Use the imported logo image
          alt="Mázoxi Logo"
          style={{
            width: "150px", // Increased the width of the logo
            height: "auto", // Maintain aspect ratio
            borderRadius: "10px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        />
      </div>

      {/* Menu Button in the Top-Right Corner */}
      <div
        style={{
          position: "absolute",
          top: "30px", // Adjust distance from the top
          right: "30px", // Adjust distance from the right edge
          cursor: "pointer", // Change cursor to indicate it's clickable
        }}
      >
        {/* Hamburger Icon (3 vertical lines) */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="30" // Adjust size of the icon
          height="30"
          fill="#fff" // Set color to white
        >
          <path d="M3 12h18M3 6h18M3 18h18" stroke="#fff" strokeWidth="2" />
        </svg>

      </div>

      {/* Main Section */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          alignItems: "center",
          marginTop: "30px", // Added margin for spacing
        }}
      >
        {/* Text Content */}
        <div style={{ flex: "1 1 45%", margin: "10px" }}>
          <h1
            style={{
              fontSize: "40px",
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

      {/* Marketing Image and Purpose-Driven Company Section Side by Side */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start", // Align items at the top
          flexWrap: "wrap",
          marginTop: "40px", // Space between sections
        }}
      >
        {/* Marketing Image Section */}
        <div
          style={{
            textAlign: "center",
            margin: "20px auto",
            width: "45%", // Adjusted for the image's container
            padding: "10px",
          }}
        >
          <img
            src={img3m} // Use the imported marketing image
            alt="Marketing Strategies"
            style={{
              width: "100%", // Make it responsive
              height: "auto", // Maintain aspect ratio
              maxWidth: "400px", // Set max width for a rectangle effect
              borderRadius: "8px",
              border: "5px solid green", // Green border
              boxShadow: "0 4px 6px rgba(0,0,0,0.2)",
            }}
          />
        </div>

        {/* Purpose-Driven Company Section */}
        <div
          style={{
            backgroundColor: "#9C27B0",
            padding: "10px",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgb(27, 26, 26)",
            textAlign: "center",
            maxWidth: "700px", // Set max width for the content card
            margin: "20px",
            color: "#fff", // Set text color to white
          }}
        >
          <h2>A Purpose-Driven Company</h2>
          <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#fff" }}>
            At Mázoxi, we specialize in empowering businesses to thrive in today’s
            competitive landscape. Whether you’re a budding startup or an
            established enterprise, our bespoke services in digital and in-person
            marketing, business analysis, financial analysis, market research,
            and IT support are designed to help you achieve your goals.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
