import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    website: "",
    contact: "",
    budget: "",
    enquiry: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSuccessMessage("Thank you! Your message has been sent.");
    setFormData({
      name: "",
      company: "",
      email: "",
      website: "",
      contact: "",
      budget: "",
      enquiry: "",
      message: "",
    });
  };

  return (
    <div
      style={{
        backgroundColor: "#c4ec55",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          backgroundColor: "#F96F00",
          padding: "50px",
          borderRadius: "20px",
          width: "100%",
          maxWidth: "1000px", // Increased width
          boxShadow: "0 10px 40px rgba(0, 0, 0, 0.2)",
        }}
      >
        <h1
          style={{
            color: "black",
            textAlign: "center",
            marginBottom: "40px",
            fontSize: "2.8em",
            fontWeight: "bold",
          }}
        >
          LET'S GET IN TOUCH
        </h1>

        {successMessage && (
          <p
            style={{
              textAlign: "center",
              color: "green",
              fontWeight: "bold",
              marginBottom: "20px",
              fontSize: "1.2em",
            }}
          >
            {successMessage}
          </p>
        )}

        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "30px", // Added consistent gap between rows
          }}
        >
          {/* Row 1 */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "45px", // Added spacing between input fields
            }}
          >
            <input
              type="text"
              name="name"
              placeholder="Name*"
              required
              value={formData.name}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "15px",
                border: "none",
                borderRadius: "10px",
                fontSize: "18px",
                fontWeight: "500",
              }}
            />
            <input
              type="text"
              name="company"
              placeholder="Company"
              value={formData.company}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "15px",
                border: "none",
                borderRadius: "10px",
                fontSize: "18px",
                fontWeight: "500",
              }}
            />
            <input
              type="url"
              name="website"
              placeholder="Website URL*"
              required
              value={formData.website}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "15px",
                border: "none",
                borderRadius: "10px",
                fontSize: "18px",
                fontWeight: "500",
              }}
            />
          </div>

          {/* Row 2 */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "45px", // Added spacing between input fields
            }}
          >
            <input
              type="email"
              name="email"
              placeholder="Email*"
              required
              value={formData.email}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "15px",
                border: "none",
                borderRadius: "10px",
                fontSize: "18px",
                fontWeight: "500",
              }}
            />
            <input
              type="tel"
              name="contact"
              placeholder="Contact Number*"
              required
              value={formData.contact}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "15px",
                border: "none",
                borderRadius: "10px",
                fontSize: "18px",
                fontWeight: "500",
              }}
            />
            <select
              name="budget"
              required
              value={formData.budget}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "15px",
                border: "none",
                borderRadius: "10px",
                fontSize: "18px",
                backgroundColor: "white",
                fontWeight: "500",
              }}
            >
              <option value="" disabled>
                Please select Monthly Budget*
              </option>
              <option value="1">Less than RM1000</option>
              <option value="2">RM1000 - RM5000</option>
              <option value="3">RM5000 - RM10000</option>
              <option value="4">More than RM10000</option>
            </select>
          </div>

          {/* Row 3 */}
          <select
            name="enquiry"
            required
            value={formData.enquiry}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "15px",
              border: "none",
              borderRadius: "10px",
              fontSize: "18px",
              backgroundColor: "white",
              fontWeight: "500",
            }}
          >
            <option value="" disabled>
              Please select Your Enquiry*
            </option>
            <option value="1">General Inquiry</option>
            <option value="2">Technical Support</option>
            <option value="3">Billing</option>
            <option value="4">Other</option>
          </select>

          {/* Message */}
          <textarea
            name="message"
            placeholder="Message*"
            required
            value={formData.message}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "15px",
              border: "none",
              borderRadius: "10px",
              fontSize: "18px",
              fontWeight: "500",
              minHeight: "120px",
            }}
          />

          {/* Button */}
          <button
            type="submit"
            style={{
              backgroundColor: "#8A2BE2",
              color: "white",
              padding: "20px 50px", // Increased button size
              border: "none",
              borderRadius: "25px",
              fontSize: "20px",
              cursor: "pointer",
              display: "block",
              margin: "30px auto 0",
              transition: "background-color 0.3s ease",
              fontWeight: "bold",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#7B1FA2")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#8A2BE2")}
          >
            BOOK A SESSION NOW
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
