import React from "react";
import img1 from './img2m.jpg'; // Replace with the actual path of the uploaded image

const Info = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${img1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "50px",
        color: "#fff",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          padding: "30px",
          borderRadius: "10px",
          maxWidth: "800px",  // Optional: To control the width of the card
          margin: "0 auto",  // Centers the card
        }}
      >
        <h1
          style={{
            fontSize: "36px",
            fontWeight: "bold",
            lineHeight: "1.5",
            marginBottom: "20px",
            fontFamily: "Arial, sans-serif", // Ensuring the font is consistent
          }}
        >
          WE DON'T WORK FOR YOU, WE WORK WITH YOU
        </h1>
        <p
          style={{
            color: "#000",
            fontSize: "18px",
            lineHeight: "1.6",
            marginBottom: "20px",
            fontFamily: "Arial, sans-serif", // Ensuring the font is consistent
          }}
        >
          ALWAYS.
        </p>
        <p
          style={{
            fontSize: "16px",
            lineHeight: "1.6",
            marginBottom: "20px",
            fontFamily: "Arial, sans-serif", // Ensuring the font is consistent
          }}
        >
          The image portrays hands holding a green card with the word "Service" written on it, set against an open notebook.
        </p>
      </div>
    </div>
  );
};

export default Info;
