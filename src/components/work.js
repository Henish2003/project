import React from "react";
import img1 from './img2m.jpg'; // Replace with the actual path of the uploaded image
import Contact from "./Contact";
import Footer from "./Footer";
import Menu from "./Menu";

const Info = () => {
  return (
    <div>
      {/* Include the menu here */}
      <Menu />

      <div
        style={{
          position: "relative", // Enables overlay positioning
          height: "70vh", // Set height for the background section
          display: "flex",
          alignItems: "center", // Vertically center the text
          color: "#fff",
          fontFamily: "MuseoModerno, Arial, sans-serif", // Updated to use MuseoModerno font
        }}
      >
        {/* Background Image */}
        <div
          style={{
            backgroundImage: `url(${img1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "absolute", // Positions the image relative to the container
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0, // Ensures it's below the content
          }}
        ></div>

        {/* Dark Overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.6)", // Black overlay with 60% opacity
            zIndex: 1, // Places it above the background image
          }}
        ></div>

        {/* Content */}
        <div
          style={{
            position: "relative", // Ensures content stays above the overlay
            zIndex: 2, // Places it above the overlay
            padding: "30px",
            borderRadius: "10px",
            maxWidth: "100%", // Allow the heading to use full width
          }}
        >
          <h1
            style={{
              fontSize: "120px",
              fontWeight: 400,
              lineHeight: "1.2", // Reduced line spacing for a compact look
              marginBottom: "20px",
              textAlign: "left", // Align text to the left
              whiteSpace: "nowrap", // Prevent the text from breaking into pieces
              overflow: "hidden", // Handle overflow gracefully
              textOverflow: "ellipsis", // Adds ellipsis if text overflows
            }}
          >
            WE DON'T WORK FOR YOU <br /> WE WORK WITH YOU,<br /> ALWAYS.
          </h1>
        </div>
      </div>

      {/* Including Contact and Footer components */}
      <Contact />
      <Footer />
    </div>
  );
};

export default Info;
