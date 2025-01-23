import React from "react";
import img3m from './img3m.jpg'; // Replace with the correct path for the marketing image

const Page = () => {
  return (
    <div
      style={{
        backgroundColor: "#000",
        color: "#d4f263",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "50px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ flex: 1, paddingRight: "20px" }}>
        <h1
          style={{
            fontSize: "36px",
            fontWeight: "bold",
            lineHeight: "1.5",
          }}
        >
          POWERFUL CONTENT MARKETING TO BOOST YOUR BUSINESS
        </h1>
        <button
          style={{
            marginTop: "20px",
            padding: "15px 30px",
            backgroundColor: "#c037c5",
            color: "#fff",
            border: "none",
            fontSize: "16px",
            cursor: "pointer",
            borderRadius: "5px",
          }}
        >
          BOOK A SESSION NOW
        </button>
      </div>
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "300px", // Set equal width and height
            height: "300px", // Equal to width for a perfect circle
            borderRadius: "50%", // Makes it circular
            overflow: "hidden",
            border: "5px solid #d4f263", // Border around the circular image
          }}
        >
          <img
            src={img3m}
            alt="Content Marketing"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
