import "./Header.css"; // import css

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        {/* Left side */}
        <div className="header-left">
          <span className="logo-text">JobTrack</span>
        </div>

        {/* Middle */}
        <nav className="nav-links">
          <a href="#" className="nav-link active">
            Dashboard
          </a>

          {/* Right side */}
          <a href="#" className="nav-link">
            Applications
          </a>
        </nav>
        <button className="btn-primary">+ Add job</button>
      </div>
    </header>
  );
}

export default Header;
