import React, { useEffect } from "react";
import holistic from "./holistic.jpg";
import result from "./result.jpg";
import tailor from "./tailor.jpg";

const reasons = [
  {
    title: "Tailored Solutions",
    image: tailor,
  },
  {
    title: "Holistic Approach",
    image: holistic,
  },
  {
    title: "Results Driven",
    image: result,
  },
];

function WhyChooseUs() {
  useEffect(() => {
    // Dynamically load Google Fonts
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Lekton:wght@400;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link); // Cleanup when component unmounts
    };
  }, []);

  return (
    <section style={sectionStyle}>
      <h2 style={headingStyle}>WHY CHOOSE US?</h2>
      <div style={gridStyle}>
        {reasons.map((reason, index) => (
          <div key={index} style={reasonCardStyle}>
            <div style={reasonImageContainerStyle}>
              <img
                src={reason.image}
                alt={reason.title}
                style={reasonImgStyle}
              />
              <div style={overlayTextContainerStyle}>
                <h3 style={overlayTextStyle}>{reason.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const sectionStyle = {
  padding: "30px",
  backgroundColor: "#D0FF86",
  fontFamily: "'Lekton', sans-serif", // Apply Lekton font
};

const headingStyle = {
  fontSize: "60px",
  fontWeight: "bold",
  textAlign: "center",
  marginBottom: "40px",
  textTransform: "uppercase",
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "10px", // Spacing between items
  textAlign: "center",
};

const reasonCardStyle = {
  textAlign: "center",
  transition: "transform 300ms",
};

const reasonImageContainerStyle = {
  position: "relative",
  overflow: "hidden",
  borderRadius: "9999px", // Ensures the container is circular
  margin: "0 auto 1.5rem",
  width: "15rem", // Circle width
  height: "15rem", // Circle height
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "box-shadow 300ms",
};

const reasonImgStyle = {
  width: "100%", // Full width of the container
  height: "100%", // Full height of the container
  objectFit: "cover", // Ensures the image fills the circle proportionally
  borderRadius: "9999px", // Ensures the image stays circular
};

const overlayTextContainerStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
};

const overlayTextStyle = {
  color: "#fff",
  fontWeight: "600",
  fontSize: "40px", // Increased font size for better readability
  textShadow: "1px 1px 2px rgba(0, 0, 0, 0.7)",
  fontFamily:"'Onest', serif",
  
};

export default WhyChooseUs;
