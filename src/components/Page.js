import React, { useEffect } from "react";
import img3m from './img3m.jpg'; // Replace with the correct path for the marketing image
import Content from "./Content";
import Marketing from "./marketing";
import Footer from "./Footer";
import Menu from "./Menu";
import { useNavigate } from 'react-router-dom';

const Page = () => {
  useEffect(() => {
    // Dynamically load Google Fonts
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=MuseoModerno:wght@300;500;700&family=Lekton:wght@400;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link); // Cleanup when component unmounts
    };
  }, []);

  const navigate = useNavigate();

  return (
    <div>
      <Menu />
      {/* Page Header Section */}
      <div
        style={{
          backgroundColor: "#000",
          color: "#d4f263",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "50px",
          fontFamily: "'Lekton', sans-serif",
        }}
      >
        <div style={{ flex: 1, paddingRight: "20px" }}>
          <h1
            style={{
              fontFamily: "'MuseoModerno', sans-serif",
              fontSize: "66px",
              fontWeight: "bold",
              lineHeight: "1.5",
            }}
          >
            POWER CONTENT <br /> BOOST YOUR<br /> BUSINESS
          </h1>
          <button
            onClick={() => navigate('/work')}
            style={{
              marginTop: "20px",
              padding: "15px 30px",
              backgroundColor: "#c037c5",
              color: "#fff",
              border: "none",
              fontSize: "30px",
              cursor: "pointer",
              borderRadius: "10px",
              fontFamily: "'Arial', sans-serif",
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
              width: "850px", // Set width
              height: "600px", // Set height to match width
              borderRadius: "50%", // Makes it circular
              overflow: "hidden",
              position: "relative", // Allow positioning within the container
            }}
          >
            <img
              src={img3m}
              alt="Content Marketing"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover", // Ensures the image covers the container fully
              }}
            />
          </div>
        </div>
      </div>

      {/* Additional Components */}
      <Content />
      <Marketing />
      <Footer />
    </div>
  );
};

export default Page;
