// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <nav>
//       <ul style={{ display: 'flex', gap: '20px', listStyle: 'none' }}>
//         <li><Link to="/home">Home</Link></li>
//         <li><Link to="/about">About</Link></li>
//         <li><Link to="/contact">Contact</Link></li>
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;
import { Link } from "react-router-dom";
import { useState } from 'react';

const Navbar = () => {
  const [hoveredLink, setHoveredLink] = useState(null);

  const linkStyle = {
    textDecoration: 'none',
    color: '#333',
    fontWeight: '500',
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    transition: 'all 0.3s ease',
  };

  const hoverStyle = {
    backgroundColor: '#e9ecef',
    color: '#007bff'
  };

  return (
    <nav style={{
      backgroundColor: '#f8f9fa',
      padding: '1rem',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <ul style={{
        display: 'flex',
        gap: '2rem',
        listStyle: 'none',
        margin: 0,
        padding: 0,
        justifyContent: 'center'
      }}>
        <li>
          <Link 
            to="/home" 
            style={{
              ...linkStyle,
              ...(hoveredLink === 'home' ? hoverStyle : {})
            }}
            onMouseEnter={() => setHoveredLink('home')}
            onMouseLeave={() => setHoveredLink(null)}
          >
            Home
          </Link>
        </li>
        <li>
          <Link 
            to="/about" 
            style={{
              ...linkStyle,
              ...(hoveredLink === 'about' ? hoverStyle : {})
            }}
            onMouseEnter={() => setHoveredLink('about')}
            onMouseLeave={() => setHoveredLink(null)}
          >
            About
          </Link>
        </li>
        <li>
          <Link 
            to="/contact" 
            style={{
              ...linkStyle,
              ...(hoveredLink === 'contact' ? hoverStyle : {})
            }}
            onMouseEnter={() => setHoveredLink('contact')}
            onMouseLeave={() => setHoveredLink(null)}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
