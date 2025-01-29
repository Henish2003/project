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
      <h1
          style={{
            fontSize: "50px",
            fontWeight: "bold",
            lineHeight: "1.5",
            marginBottom: "20px",
            fontFamily:"'Lekton', sans-serif",
            textAlign: "center", // Aligns the text to the center of the card 
          }}
        >
          YOUR HANDBOOK FOR SUCCESSFUL<br/> CONTENT MARKETING
        </h1>
      <div
        style={{
          backgroundColor: "rgb(128, 224, 72)", // Fully opaque green color
          padding: "10px",
          borderRadius: "10px",
          maxWidth: "1000px", // Optional: To control the width of the card
          margin: "0 auto", // Centers the card
        }}
      >
        <p
          style={{
            color: "#000",
            fontSize: "32px",
            lineHeight: "1.6",
            marginBottom: "20px",
            textAlign: "center", // Aligns the text to the center of the card
            fontWeight: "bold", // Makes the text bold
          }}
        >
          Would you like some help in the online crowd? Could your<br/> business stand out and attract more customers?
        </p>
        <p
          style={{
            fontSize: "28px",
            lineHeight: "1.6",
            marginBottom: "20px",
            textAlign: "center", // Aligns the text to the center of the card

          }}
        >
          Take advantage of content marketing's power to revolutionize your advertising campaigns. Create captivating content that grabs attention, fosters trust, and encourages customers to engage repeatedly.
        </p>
      </div>
    </div>
  );
};

export default Info;
