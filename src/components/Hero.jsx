const Hero = () => {
  return (
    <section id="home" className="hero-section py-5 py-lg-6">
      <div className="container py-4">
        <div className="row align-items-center g-4 g-lg-5">
          <div className="col-12 col-lg-7">
            <span className="badge rounded-pill bg-primary-subtle text-primary mb-3">
              Built for fast-growing startups
            </span>
            <h1 className="display-4 fw-bold mb-3">
              Scale your startup with confidence
            </h1>
            <p className="lead text-secondary mb-4">
              LaunchPad helps your team ship faster, collaborate better, and
              grow revenue with a single modern platform.
            </p>
            <div className="d-flex flex-column flex-sm-row gap-3">
              <a className="btn btn-primary btn-lg px-4" href="#contact">
                Start Free Trial
              </a>
              <a className="btn btn-outline-dark btn-lg px-4" href="#features">
                Watch Demo
              </a>
            </div>
            <div className="trust-strip mt-4">
              <p className="small text-secondary mb-2">Trusted by teams from</p>
              <div className="d-flex flex-wrap gap-2">
                <span className="trust-pill">NovaTech</span>
                <span className="trust-pill">CloudSprint</span>
                <span className="trust-pill">MetricFlow</span>
                <span className="trust-pill">ScaleLabs</span>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-5">
            <div className="hero-panel p-4 p-md-5 rounded-4 shadow-sm bg-white border">
              <h3 className="h5 fw-semibold mb-3">Growth Snapshot</h3>
              <p className="mb-4 text-secondary">
                Track product and revenue metrics in one clean dashboard.
              </p>
              <div className="row g-3">
                <div className="col-6">
                  <div className="metric-card p-3 rounded-3 border">
                    <p className="small text-secondary mb-1">Monthly Users</p>
                    <p className="h5 fw-bold mb-0">48K</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="metric-card p-3 rounded-3 border">
                    <p className="small text-secondary mb-1">Growth Rate</p>
                    <p className="h5 fw-bold mb-0">+23%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
