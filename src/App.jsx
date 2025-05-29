import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar.jsx";
import Home from "./Home/Home.jsx";
import About from "./About/About.jsx";
import Contact from "./Contact/Contact.jsx";
import { Navigate } from 'react-router-dom';


function App() {
  return (
      <div>
        
        <Navbar />
        <Routes>
        <Route path="/" element={<Navigate to="/" replace />} />
          <Route path='/home' element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
  );
}
export default App;