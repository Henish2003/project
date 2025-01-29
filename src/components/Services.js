import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import overlayImage from "./img4m.jpg"; // Replace with the correct relative path to your overlay image

function Services() {
  const servicesRef = useRef([]); // Create a ref to store references to service cards
  const navigate = useNavigate(); // Create a navigate function

  const services = [
    {
      title: "Digital Marketing",
      description:
        "Stay ahead of the curve with data-driven strategies that connect your brand with the right audience. From SEO and social media campaigns to PPC and email marketing, we craft solutions that deliver measurable results.",
      path: "/dig", // Path to navigate to when clicked
    },
    {
      title: "Business Analysis",
      description:
        "Unlock insights to streamline operations and identify growth opportunities. Our experts evaluate your business processes and provide actionable recommendations tailored to your objectives.",
      path: "/business",
    },
    {
      title: "Market Research and Strategy",
      description:
        "Make informed decisions with our comprehensive market research. We analyze industry trends, customer behaviors, and competitor activities to give you a strategic edge.",
      path: "/research",
    },
    {
      title: "Branding",
      description:
        "Define your identity and stand out from the competition. We create cohesive branding strategies, including logo design, brand messaging, and visual identity, to resonate with your target audience.",
      path: "/brands",
    },
    {
      title: "Content Production & Management",
      description:
        "Unlock insights to streamline operations and identify growth opportunities. Our experts evaluate your business processes and provide actionable recommendations tailored to your objectives.",
      path: "/production",
    },
    {
      title: "Web Development with SEO Emphasis",
      description:
        "Elevate your online presence with user-friendly, responsive websites. Our team specializes in creating websites that are not only visually stunning but also optimized for performance and functionality.",
      path: "/dev",
    },
  ];

  const handleCardClick = (index) => {
    const card = servicesRef.current[index];
    card.style.transform = "scale(1.1)";
    setTimeout(() => {
      card.style.transform = "scale(1)";
    }, 200);
    navigate(services[index].path); // Navigate to the specific path
  };

  return (
    <section style={sectionStyle}>
      <h2
        style={{
          fontFamily: "'Lekton', sans-serif",
          color: "#000",
          fontSize: "50px",
          fontWeight: "700",
          marginBottom: "0px", // Remove extra space
          textAlign: "center",
        }}
      >
        SERVICES WE PROVIDE YOUR BUSINESS
      </h2>
      <div style={gridStyle}>
        {services.map((service, index) => (
          <div
            key={index}
            ref={(el) => (servicesRef.current[index] = el)}
            style={serviceBoxStyle}
            onClick={() => handleCardClick(index)}
          >
            <h3 style={serviceTitleStyle}>{service.title}</h3>
            <p style={serviceDescriptionStyle}>{service.description}</p>
          </div>
        ))}
      </div>
      <div style={footerContainerStyle}>
        <button style={buttonStyle}>LET'S TALK</button> 
        <div style={{ display: "inline-block", width: "100px" }} /> {/* Add space between button and text */}
        <p style={footerTextStyle}>WE ARE HERE TO <br/>WORK WITH YOU</p>
      </div>
    </section>
  );
}

const sectionStyle = {
  padding: "50px",
  backgroundColor: "#D0FF86",
  fontFamily: "'Arial', sans-serif",
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)", // Two columns
  gap: "20px",
  textAlign: "center",
};

const serviceBoxStyle = {
  border: "8px solid #ec4899", // Thickened border
  padding: "20px",
  backgroundColor: "#e7ffd3",
  textAlign: "left", // Align all content (title and description) to the left
  animation: "fadeIn 1s ease-in-out", // Animation on load
  transition: "transform 0.3s", // Smooth transition
};

const serviceTitleStyle = {
  fontSize: "20px",
  fontWeight: "bold",
  marginBottom: "10px",
  textAlign: "left", // Align titles to the left
  fontFamily: "'Poppins', serif",
  fontWeight: 700,
  fontStyle: "normal",
};

const serviceDescriptionStyle = {
  fontSize: "20px",
  lineHeight: "1.5",
  fontFamily: "'Lekton', sans-serif",
};

const footerContainerStyle = {
  marginTop: "40px",
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const buttonStyle = {
  padding: "15px 30px",
  backgroundColor: "#ec4899", // Pinkish background
  color: "#D0FF86", // Neon green font color
  border: "10px solid #A0FF8A", // Thicker green border
  cursor: "pointer",
  fontSize: "40px",
  fontWeight: "bold",
  fontFamily: "'Lekton', sans-serif", // Default fallback font
  borderRadius: "25px", // Rounded corners
  textTransform: "uppercase",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Adds depth
  marginRight: "20px", // Add margin to the right to space out elements
};

const footerTextStyle = {
  display: "inline-block",
  fontSize: "40px",
  fontWeight: "bold",
  color: "#000",
  fontFamily: "'Lekton', sans-serif",
  textTransform: "uppercase",
  marginBottom: "30px",
};

const overlayStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundImage: `url(${overlayImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  opacity: 0.5, // Adjust opacity as needed
  zIndex: 0, // Ensure the overlay is below content
};

// Add keyframes for the fade-in animation
const fadeInAnimation = `
  @keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
`;

// Inject the keyframes into the document's styles
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(fadeInAnimation, styleSheet.cssRules.length);

export default Services;
