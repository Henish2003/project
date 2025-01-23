import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    website: '',
    contact: '',
    budget: '',
    enquiry: '',
    message: '',
  });

  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSuccessMessage('Thank you! Your message has been sent.');
    setFormData({
      name: '',
      company: '',
      email: '',
      website: '',
      contact: '',
      budget: '',
      enquiry: '',
      message: '',
    });
  };

  return (
    <div
      className="form-wrapper"
      style={{
        backgroundColor: '#D0FF86', // Background color outside the card
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <div
        className="form-container"
        style={{
          backgroundColor: '#F96F00', // Card background color
        padding: '40px',
        borderRadius: '15px',
        width: '100%',
        maxWidth: '800px',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
        }}
      >
        <h1
          style={{
            color: 'black', // Font color for "LET'S GET IN TOUCH"
          textAlign: 'center',
          marginBottom: '30px',
          fontSize: '2.5em',
            fontWeight: 'bold',
          }}
        >
          LET'S GET IN TOUCH
        </h1>
        
        {successMessage && (
          <p
            style={{
              textAlign: 'center',
              color: 'green',
              fontWeight: 'bold',
              marginBottom: '20px',
            }}
          >
            {successMessage}
          </p>
        )}

        <form
          onSubmit={handleSubmit}
          style={{
          display: 'flex',
          flexDirection: 'column',
            gap: '20px',
          }}
        >
          <div
            style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '20px',
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
                width: '100%',
                padding: '12px',
                border: 'none',
                borderRadius: '5px',
                fontSize: '16px',
              }}
            />
            <input
              type="text"
              name="company"
              placeholder="Company"
              value={formData.company}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '12px',
                border: 'none',
                borderRadius: '5px',
                fontSize: '16px',
              }}
            />
            <input
              type="email"
              name="email"
              placeholder="Email*"
              required
              value={formData.email}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '12px',
                border: 'none',
                borderRadius: '5px',
                fontSize: '16px',
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
                width: '100%',
                padding: '12px',
                border: 'none',
                borderRadius: '5px',
                fontSize: '16px',
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
                width: '100%',
                padding: '12px',
                border: 'none',
                borderRadius: '5px',
                fontSize: '16px',
              }}
            />
            <select
              name="budget"
              required
              value={formData.budget}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '12px',
                border: 'none',
                borderRadius: '5px',
                fontSize: '16px',
                backgroundColor: 'white',
              }}
            >
              <option value="" disabled>
                Please select Monthly Budget*
              </option>
              <option value="1">Less than $1000</option>
              <option value="2">$1000 - $5000</option>
              <option value="3">$5000 - $10000</option>
              <option value="4">More than $10000</option>
            </select>
          </div>
          
          <select
            name="enquiry"
            required
            value={formData.enquiry}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '12px',
              border: 'none',
              borderRadius: '5px',
              fontSize: '16px',
              backgroundColor: 'white',
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
          
          <textarea
            name="message"
            placeholder="Message*"
            required
            value={formData.message}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '12px',
              border: 'none',
              borderRadius: '5px',
              fontSize: '16px',
              minHeight: '100px',
            }}
          />
          
          <button
            type="submit"
            style={{
              backgroundColor: '#8A2BE2',
              color: 'white',
              padding: '15px 30px',
              border: 'none',
              borderRadius: '25px',
              fontSize: '16px',
              cursor: 'pointer',
              display: 'block',
              margin: '30px auto 0',
              transition: 'background-color 0.3s ease',
              fontWeight: 'bold'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#7B1FA2'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#8A2BE2'}
          >
            BOOK A SESSION NOW
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
