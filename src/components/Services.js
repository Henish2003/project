import React from "react";

function Services() {
  const services = [
    {
      title: "Digital Marketing",
      description:
        "Stay ahead of the curve with data-driven strategies that connect your brand with the right audience. From SEO and social media campaigns to PPC and email marketing, we craft solutions that deliver measurable results.",
    },
    {
      title: "Business Analysis",
      description:
        "Unlock insights to streamline operations and identify growth opportunities. Our experts evaluate your business processes and provide actionable recommendations tailored to your objectives.",
    },
    {
      title: "Market Research and Strategy",
      description:
        "Make informed decisions with our comprehensive market research. We analyze industry trends, customer behaviors, and competitor activities to give you a strategic edge.",
    },
    {
      title: "Branding",
      description:
        "Define your identity and stand out from the competition. We create cohesive branding strategies, including logo design, brand messaging, and visual identity, to resonate with your target audience.",
    },
    {
      title: "Content Production & Management",
      description:
        "Unlock insights to streamline operations and identify growth opportunities. Our experts evaluate your business processes and provide actionable recommendations tailored to your objectives.",
    },
    {
      title: "Web Development with SEO Emphasis",
      description:
        "Elevate your online presence with user-friendly, responsive websites. Our team specializes in creating websites that are not only visually stunning but also optimized for performance and functionality.",
    },
  ];

  return (
    <section style={sectionStyle}>
      <h2 style={headingStyle}>SERVICES WE PROVIDE YOUR BUSINESS</h2>
      <div style={gridStyle}>
        {services.map((service, index) => (
          <div key={index} style={serviceBoxStyle}>
            <h3 style={serviceTitleStyle}>{service.title}</h3>
            <p style={serviceDescriptionStyle}>{service.description}</p>
          </div>
        ))}
      </div>
      <div style={footerContainerStyle}>
        <button style={buttonStyle}>LET'S TALK</button>
        <p style={footerTextStyle}>WE ARE HERE TO WORK WITH YOU</p>
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
  gap: "20px",
  textAlign: "center",
};

const serviceBoxStyle = {
  border: "5px solid #ec4899", // Thickened border
  padding: "20px",
  backgroundColor: "#e7ffd3",
};


const serviceTitleStyle = {
  fontSize: "20px",
  fontWeight: "bold",
  marginBottom: "10px",
};

const serviceDescriptionStyle = {
  fontSize: "16px",
  lineHeight: "1.5",
};

const footerContainerStyle = {
  marginTop: "40px",
  textAlign: "center",
};

const buttonStyle = {
  padding: "15px 30px",
  backgroundColor: "#9C27B0",
  color: "#D0FF86",
  border: "none",
  cursor: "pointer",
  fontSize: "18px",
  borderRadius: "10px",
  textTransform: "uppercase",
  display: "inline-block",
  marginRight: "20px",
};

const footerTextStyle = {
  display: "inline-block",
  fontSize: "18px",
  fontWeight: "bold",
  color: "#000",
  textTransform: "uppercase",
};

export default Services;
