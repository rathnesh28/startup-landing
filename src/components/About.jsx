const About = () => {
  return (
    <section id="about" className="about-section py-5">
      <div className="container py-3">
        <div className="row align-items-center g-4 g-lg-5">
          <div className="col-12 col-lg-6">
            <span className="section-chip mb-3 d-inline-block">About LaunchPad</span>
            <h2 className="fw-bold mb-3">Built by operators for startup teams</h2>
            <p className="text-secondary mb-4">
              We combine product strategy, analytics, and execution tooling into one
              platform so founders can move from idea to scale without losing focus.
            </p>
            <div className="row g-3">
              <div className="col-6">
                <div className="about-metric p-3 rounded-3">
                  <p className="small text-secondary mb-1">Teams onboarded</p>
                  <p className="h5 fw-bold mb-0">2,400+</p>
                </div>
              </div>
              <div className="col-6">
                <div className="about-metric p-3 rounded-3">
                  <p className="small text-secondary mb-1">Avg. growth uplift</p>
                  <p className="h5 fw-bold mb-0">31%</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6">
            <div className="about-card rounded-4 p-4 p-lg-5">
              <h3 className="h5 fw-semibold mb-3">What makes us different</h3>
              <ul className="list-unstyled d-grid gap-3 mb-4">
                <li className="d-flex gap-2 text-secondary">
                  <span className="about-dot"></span>
                  Growth-focused workflows, not generic task boards.
                </li>
                <li className="d-flex gap-2 text-secondary">
                  <span className="about-dot"></span>
                  Product, marketing, and revenue metrics in one view.
                </li>
                <li className="d-flex gap-2 text-secondary">
                  <span className="about-dot"></span>
                  Human support from startup operators, 24/7.
                </li>
              </ul>
              <a className="btn btn-primary px-4" href="#contact">
                Talk to Our Team
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
