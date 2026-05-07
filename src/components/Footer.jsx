const Footer = () => {
  return (
    <footer id="site-footer" className="footer-section py-5">
      <div className="container">
        <div className="footer-main rounded-4 p-4 p-lg-5">
          <div className="row gy-4 align-items-start">
            <div className="col-12 col-lg-6">
              <h3 className="h5 mb-2 fw-bold footer-brand">LaunchPad</h3>
              <p className="text-secondary mb-4 footer-lead">
                Modern operating system for ambitious startup teams.
              </p>
              <div className="d-flex gap-2">
                <a className="footer-social text-decoration-none" href="#home" aria-label="X">
                  X
                </a>
                <a className="footer-social text-decoration-none" href="#home" aria-label="LinkedIn">
                  in
                </a>
                <a className="footer-social text-decoration-none" href="#home" aria-label="GitHub">
                  GH
                </a>
              </div>
            </div>
            <div className="col-6 col-md-3 col-lg-2">
              <p className="footer-link-title mb-2">Product</p>
              <div className="d-flex flex-column gap-2">
                <a className="text-decoration-none text-secondary" href="#features">
                  Features
                </a>
                <a className="text-decoration-none text-secondary" href="#pricing">
                  Pricing
                </a>
                <a className="text-decoration-none text-secondary" href="#contact">
                  Contact
                </a>
                <a className="text-decoration-none text-secondary" href="#about">
                  About
                </a>
              </div>
            </div>
            <div className="col-6 col-md-3 col-lg-2">
              <p className="footer-link-title mb-2">Resources</p>
              <div className="d-flex flex-column gap-2">
                <a className="text-decoration-none text-secondary" href="#home">
                  Docs
                </a>
                <a className="text-decoration-none text-secondary" href="#home">
                  Blog
                </a>
                <a className="text-decoration-none text-secondary" href="#home">
                  Support
                </a>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-2">
              <p className="footer-link-title mb-2">Contact</p>
              <p className="text-secondary mb-1">hello@launchpad.com</p>
              <p className="text-secondary mb-0">+1 (555) 014-9876</p>
            </div>
          </div>

          <div className="footer-bottom pt-3 mt-4">
            <div className="d-flex flex-column flex-md-row justify-content-between gap-2">
              <p className="mb-0 text-secondary small">
                (c) {new Date().getFullYear()} LaunchPad. All rights reserved.
              </p>
              <div className="d-flex gap-3">
                <a className="small text-secondary text-decoration-none" href="#home">
                  Privacy
                </a>
                <a className="small text-secondary text-decoration-none" href="#home">
                  Terms
                </a>
                <a className="small text-secondary text-decoration-none" href="#home">
                  Cookies
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
