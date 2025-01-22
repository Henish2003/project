import React from "react";

const reasons = [
  {
    title: "Tailored Solutions",
    image: "https://illustrations.popsy.co/amber/solution.svg",
  },
  {
    title: "Holistic Approach",
    image: "https://illustrations.popsy.co/amber/strategy.svg",
  },
  {
    title: "Results Driven",
    image: "https://illustrations.popsy.co/amber/growth.svg",
  },
];

const Choose = () => {
  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>WHY CHOOSE US?</h2>
      <div style={gridStyle}>
        {reasons.map((reason, index) => (
          <div key={index} style={cardStyle}>
            <div style={imageContainerStyle}>
              <img
                src={reason.image}
                alt={reason.title}
                style={imageStyle}
              />
            </div>
            <h3 style={titleStyle}>{reason.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

const containerStyle = {
  padding: "50px 20px",
  backgroundColor: "#d4f263",
  fontFamily: "Arial, sans-serif",
  textAlign: "center",
};

const headingStyle = {
  fontSize: "36px",
  fontWeight: "bold",
  marginBottom: "40px",
};

const gridStyle = {
  display: "flex",
  justifyContent: "center",
  gap: "40px",
  flexWrap: "wrap",
};

const cardStyle = {
  textAlign: "center",
  width: "150px",
};

const imageContainerStyle = {
  width: "120px",
  height: "120px",
  borderRadius: "50%",
  overflow: "hidden",
  margin: "0 auto 20px",
  backgroundColor: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
};

const imageStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
};

const titleStyle = {
  fontSize: "18px",
  fontWeight: "bold",
};

export default Choose;
