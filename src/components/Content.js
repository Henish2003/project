import React from "react";
import img1 from './img1.jpg'; // Replace with the actual path of the uploaded image

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
          backgroundColor: "rgb(128, 224, 72)", // Fully opaque green color
          padding: "30px",
          borderRadius: "10px",
          maxWidth: "800px", // Optional: To control the width of the card
          margin: "0 auto", // Centers the card
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
          YOUR HANDBOOK FOR SUCCESSFUL CONTENT MARKETING
        </h1>
        <p
          style={{
            color: "#000",
            fontSize: "18px",
            lineHeight: "1.6",
            marginBottom: "20px",
          }}
        >
          Would you like some help in the online crowd? Could your business stand out and attract more customers?
        </p>
        <p
          style={{
            fontSize: "16px",
            lineHeight: "1.6",
            marginBottom: "20px",
          }}
        >
          Take advantage of content marketing's power to revolutionize your advertising campaigns. Create captivating content that grabs attention, fosters trust, and encourages customers to engage repeatedly.
        </p>
      </div>
    </div>
  );
};

export default Info;
