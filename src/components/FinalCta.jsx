const FinalCta = () => {
  return (
    <section className="final-cta-section py-5">
      <div className="container py-3">
        <div className="final-cta-card rounded-4 p-4 p-lg-5 text-center">
          <span className="section-chip mb-3 d-inline-block">Ready To Launch</span>
          <h2 className="fw-bold mb-3">Turn your startup into a growth machine</h2>
          <p className="text-secondary mb-4 mx-auto cta-copy">
            Use this template as your production-ready SaaS landing page and start
            converting visitors into paying customers.
          </p>
          <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
            <a className="btn btn-primary btn-lg px-4" href="#contact">
              Start Free Trial
            </a>
            <a className="btn btn-outline-dark btn-lg px-4" href="#pricing">
              View Pricing
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FinalCta
