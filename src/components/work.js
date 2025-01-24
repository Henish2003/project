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
          backgroundImage: `url(${img1})`,  // Apply image to this div only
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "50px",
          color: "#fff",
          fontFamily: "Arial, sans-serif",
          height: "36vh",  // Ensure this only affects the 'Info' section
        }}
      >
        <div
          style={{
            padding: "30px",
            borderRadius: "10px",
            maxWidth: "800px",  // Optional: To control the width of the card
            margin: "0 auto",  // Centers the card
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background to improve text visibility
          }}
        >
          <h1
            style={{
              fontSize: "36px",
              fontWeight: "bold",
              lineHeight: "1.5",
              marginBottom: "20px",
            }}
          >
            WE DON'T WORK FOR YOU, WE WORK WITH YOU
          </h1>
          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.6",
              marginBottom: "20px",
              fontWeight: "lighter", // To contrast with the title
            }}
          >
            ALWAYS.
          </p>
          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.6",
              marginBottom: "20px",
            }}
          >
            The image portrays hands holding a green card with the word "Service" written on it, set against an open notebook.
          </p>
        </div>
      </div>

      {/* Including Contact and Footer components */}
      <Contact />
      <Footer />
    </div>
  );
};

export default Info;
