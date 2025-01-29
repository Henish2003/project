import React, { useEffect } from "react";
import img1 from "./Branding.png"; // Background image for Branding
import Menu from "../Menu";
import { useNavigate } from 'react-router-dom';

const Branding = () => {
    const navigate = useNavigate();
  
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

  const styles = {
    container: {
      backgroundImage: `url(${img1})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      position: "relative",
    },
    overlay: {
      position: "absolute",
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      paddingLeft: "80px",
    },
    content: {
      textAlign: "left",
    },
    title: {
      fontSize: "6rem",
      fontWeight: 500,
      textTransform: "uppercase",
      letterSpacing: "2px",
      fontFamily: "'MuseoModerno', sans-serif",
      color: "white",
      margin: "2px 0",
      lineHeight: 1.1,
    },
    subtitle: {
      fontSize: "3rem",
      fontFamily: "'Lekton', sans-serif",
      color: "white",
      margin: "1px 0",
      lineHeight: 1,
    },
  };

  return (
    <div>
      <Menu />
      <div style={styles.container}>
        <div style={styles.overlay}>
          <div style={styles.content}>
            <h1 style={styles.title}>BRANDING</h1>
            <br />
            <h2 style={styles.subtitle}>BUILD A STRONG BRAND</h2>
            <h2 style={styles.subtitle}>AND IDENTITY</h2>
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
        </div>
      </div>
    </div>
  );
};

export default Branding;
