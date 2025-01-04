import { useState } from "react";
import "./Navbar.css"; // Include the styles here

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img
          src="dance-school\assets\latados DA.jpg"
          alt="Latados"
        />
        <h1>בית ספר לריקוד</h1>
      </div>
      <ul className="desktop-menu">
        <li><a href="#bride-groom">ריקוד חתן כלה</a></li>
        <li><a href="#barmitzvah">ריקוד בר/בת מצווה</a></li>
        <li><a href="#private-lessons">שיעורים פרטיים</a></li>
        <li><a href="#groups">קבוצות מבוגרים</a></li>
        <li><a href="#groups">קבוצות ילדים</a></li>
      </ul>
      <div className="hamburger" onClick={toggleMenu}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
    </nav>
  );
}

export default Navbar;