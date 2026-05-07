const Navbar = ({ theme, onToggleTheme }) => {
  return (
    <nav className="navbar navbar-expand-lg sticky-top">
      <div className="container py-3">
        <div className="navbar-shell w-100 d-flex align-items-center">
          <a className="navbar-brand fw-bold d-flex align-items-center gap-2" href="#home">
            <span className="brand-dot" aria-hidden="true"></span>
            LaunchPad
          </a>

          <button
            className="navbar-toggler ms-auto"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
            aria-controls="mainNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mainNavbar">
            <ul className="navbar-nav mx-auto nav-pill mb-3 mb-lg-0 align-items-lg-center gap-lg-2">
              <li className="nav-item">
                <a className="nav-link" href="#features">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#pricing">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
            </ul>

            <div className="d-flex flex-column flex-lg-row gap-2 ms-lg-3 nav-actions">
              <button
                type="button"
                className="btn btn-outline-secondary px-3 theme-toggle-btn"
                onClick={onToggleTheme}
                aria-label="Toggle theme preset"
              >
                {theme === 'dark' ? 'Light' : 'Dark'}
              </button>
              <a className="btn btn-outline-primary px-4" href="#contact">
                Book Demo
              </a>
              <a className="btn btn-primary px-4" href="#contact">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
