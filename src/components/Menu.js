import { useState } from 'react'; // Import useState to manage menu state
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false); // Manage menu state
  const [servicesOpen, setServicesOpen] = useState(false); // Manage services dropdown state
  const navigate = useNavigate(); // Initialize the navigate function

  // Toggle menu visibility
  const toggleMenu = () => {
    setMenuOpen(prevState => !prevState);
    if (menuOpen) {
      setServicesOpen(false); // Close services dropdown if menu is closed
    }
  };

  // Toggle services dropdown visibility
  const toggleServices = () => {
    setServicesOpen(prevState => !prevState);
  };

  // Navigate to a different route
  const navigateTo = (path) => {
    navigate(path); // Use the navigate function to go to the specified path
  };

  return (
    <div>
      <div
        style={{
          position: "absolute",
          top: "30px",
          right: "30px",
          cursor: "pointer",
          zIndex: "1000",
        }}
        onClick={toggleMenu} // Toggle menu visibility on click
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="30"
          height="30"
          fill="#fff"
        >
          <path d="M3 12h18M3 6h18M3 18h18" stroke="#fff" strokeWidth="2" />
        </svg>
      </div>

      {/* Conditionally render menu */}
      {menuOpen && (
        <div
          style={{
            position: "absolute",
            top: "70px",
            right: "20px",
            backgroundColor: "#fff",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            borderRadius: "8px",
            zIndex: "1000",
            padding: "10px 20px",
          }}
        >
          <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
            <li
              style={{
                margin: "10px 0",
                cursor: "pointer",
                color: "#000",
                fontWeight: "bold",
              }}
              onClick={() => navigateTo("/")} // Navigate to Home route
            >
              Home
            </li>
            <li
              style={{
                margin: "10px 0",
                cursor: "pointer",
                color: "#000",
                fontWeight: "bold",
              }}
              onClick={toggleServices} // Toggle services dropdown visibility
            >
              Services
            </li>
            {/* Conditionally render services dropdown */}
            {servicesOpen && (
              <ul style={{ listStyle: "none", margin: 0, padding: "0 0 0 20px" }}>
                <li
                  style={{
                    margin: "10px 0",
                    cursor: "pointer",
                    color: "#000",
                    fontWeight: "bold",
                  }}
                  onClick={() => navigateTo("/dev")} // Navigate to Web Development with SEO Emphasis route
                >
                  Web Development with SEO Emphasis
                </li>
                <li
                  style={{
                    margin: "10px 0",
                    cursor: "pointer",
                    color: "#000",
                    fontWeight: "bold",
                  }}
                  onClick={() => navigateTo("/dig")} // Navigate to Digital Marketing route
                >
                  Digital Marketing
                </li>
                <li
                  style={{
                    margin: "10px 0",
                    cursor: "pointer",
                    color: "#000",
                    fontWeight: "bold",
                  }}
                  onClick={() => navigateTo("/business")} // Navigate to Business Analysis route
                >
                  Business Analysis
                </li>
                <li
                  style={{
                    margin: "10px 0",
                    cursor: "pointer",
                    color: "#000",
                    fontWeight: "bold",
                  }}
                  onClick={() => navigateTo("/research")} // Navigate to Market Research and Strategy route
                >
                  Market Research and Strategy
                </li>
                <li
                  style={{
                    margin: "10px 0",
                    cursor: "pointer",
                    color: "#000",
                    fontWeight: "bold",
                  }}
                  onClick={() => navigateTo("/production")} // Navigate to Content Production & Management route
                >
                  Content Production & Management
                </li>
                <li
                  style={{
                    margin: "10px 0",
                    cursor: "pointer",
                    color: "#000",
                    fontWeight: "bold",
                  }}
                  onClick={() => navigateTo("/brands")} // Navigate to Branding route
                >
                  Branding
                </li>
              </ul>
            )}
            <li
              style={{
                margin: "10px 0",
                cursor: "pointer",
                color: "#000",
                fontWeight: "bold",
              }}
              onClick={() => navigateTo("/page")} // Navigate to Contact Us route
            >
              Content Marketing
            </li>
            <li
              style={{
                margin: "10px 0",
                cursor: "pointer",
                color: "#000",
                fontWeight: "bold",
              }}
              onClick={() => navigateTo("/work")} // Navigate to Contact Us route
            >
              Contact Us
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Menu;
