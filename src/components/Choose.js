import React from "react";
import holistic from './holistic.jpg';
import result from './result.jpg';
import tailor from './tailor.jpg';

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
  padding: "50px",
  backgroundColor: "#D0FF86",
  fontFamily: "Arial, sans-serif",
};

const headingStyle = {
  fontSize: "36px",
  fontWeight: "bold",
  textAlign: "center",
  marginBottom: "40px",
  textTransform: "uppercase",
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "40px", // Increased gap between items for better spacing
  textAlign: "center",
};

const reasonCardStyle = {
  textAlign: "center",
  transition: "transform 300ms",
};

const reasonImageContainerStyle = {
  position: "relative",
  overflow: "hidden",
  borderRadius: "9999px",
  margin: "0 auto 1.5rem",
  backgroundColor: "white",
  padding: "1.5rem", // Increased padding for larger circles
  width: "15rem", // Increased width
  height: "15rem", // Increased height
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "box-shadow 300ms",
};

const reasonImgStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  transition: "transform 300ms",
  borderRadius: "9999px",
};

const overlayTextContainerStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center", // Ensure text is centered
};

const overlayTextStyle = {
  color: "#fff",
  fontWeight: "bold",
  fontSize: "16px", // Increased font size for better readability
  textShadow: "1px 1px 2px rgba(0, 0, 0, 0.7)",
};

export default WhyChooseUs;
