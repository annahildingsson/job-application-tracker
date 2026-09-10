import "./Header.css";
import { Link, useLocation } from "react-router-dom"; 

function Header({ onAddJob }) {
  const location = useLocation(); 

  return (
    <header className="header">
      <div className="header-container">
        {/* Left side */}
        <div className="header-left">
          <Link to="/" className="logo-text">JobTrack</Link>
        </div>

        {/* Middle*/}
        <nav className="nav-links">
          <Link 
            to="/" 
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
          >
            Dashboard
          </Link>

          <Link 
            to="/applications" 
            className={`nav-link ${location.pathname === '/applications' ? 'active' : ''}`}
          >
            Applications
          </Link>
        </nav>

        {/* Right side */}
        <button className="btn-primary" onClick={onAddJob}>
          + Add new job
        </button>
      </div>
    </header>
  );
}

export default Header;