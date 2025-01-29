import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import bgm from './bgm.jpg'; // Replace with the correct relative path to your image
import img3m from './1st.jpg'; // Replace with the correct path for the marketing image
import logo from './logom.jpg';
import Services from "./Services";
import Choose from "./Choose";
import Footer from "./Footer";
import Menu from "./Menu"; // Import the Menu component

function AboutUs() {
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle the menu
  const navigate = useNavigate(); // Use the useNavigate hook for navigation

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

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the menu visibility
  };

  const navigateTo = (path) => {
    navigate(path); // Navigate to the specified route
    setMenuOpen(false); // Close the menu after navigation
  };

  return (
    <div>
      <Menu /> {/* Add the Menu component here */}

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
                fontSize: "80px",
                fontWeight: 300, // Decrease font weight
                color: "#000",
                textAlign: "left",
                lineHeight: "1.2",
                padding: "10px",
                borderRadius: "8px",
                fontFamily: "'MuseoModerno', sans-serif", // Apply MuseoModerno font
              }}
            >
              ONE-STOP SOLUTION <br /> TO YOUR BUSINESS <br /> PROBLEMS
            </h1>
            <button
              onClick={() => navigate('/work')}
              style={{
                marginTop: "20px",
                marginLeft: "10px", // Adjust the left margin for alignment
                backgroundColor: "#9C27B0",
                color: "#fff",
                border: "none",
                padding: "15px 25px",
                borderRadius: "8px",
                fontSize: "28px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              BOOK A SESSION NOW
            </button>
          </div>
        </div>


        {/* Marketing Image and Purpose-Driven Section */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center", // Center align the image and the box
            flexWrap: "wrap",
            marginTop: "40px",
          }}
        >
          <div
            style={{
              textAlign: "center",
              margin: "20px auto",
              width: "50%",
              padding: "5px",
            }}
          >
            <img
              src={img3m}
              alt="Marketing Strategies"
              style={{
                width: "90%",
                maxWidth: "800px",
                height: "100%",
                maxHeight: "800px",
                borderRadius: "8px",
                border: "5px solid green",
                boxShadow: "0 4px 6px rgba(0,0,0,0.2)",
                objectFit: "cover",
              }}
            />
          </div>
          
          <div style={{ width: "40%", textAlign: "left", margin: "20px auto" }}>
            <h2
              style={{
                fontFamily: "'Lekton', sans-serif",
                color: "#000",
                fontSize: "50px",
                fontWeight: "700",
                marginBottom: "0px", // Remove extra space
                textAlign: "left"
              }}
            >
              A PURPOSE-DRIVEN 
              <br />
              COMPANY
            </h2>
            <div
              style={{
                backgroundColor: "#9C27B0",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgb(27, 26, 26)",
                color: "#fff",
              }}
            >
              <p
                style={{
                  fontFamily: "'Lekton', sans-serif",
                  fontSize: "20px",
                  lineHeight: "1.8",
                  color: "#fff",
                  textAlign:"justify",
                }}
              >
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
      </div>

      {/* Other Components */}
      <Services />
      <Choose />
      <Footer />
    </div>
  );
}

export default AboutUs;
