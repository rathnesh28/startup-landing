const plans = [
  {
    name: 'Starter',
    price: '$19',
    subtitle: 'Perfect for early-stage teams',
    cycle: '/month',
    description: 'Launch quickly with essential workflows and analytics.',
    features: ['Up to 5 teammates', 'Basic analytics', 'Email support'],
    cta: 'Get Starter',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$49',
    subtitle: 'Built for scaling startups',
    cycle: '/month',
    description: 'Advanced insights and faster execution for growth teams.',
    features: ['Up to 25 teammates', 'Advanced analytics', 'Priority support'],
    cta: 'Start Pro',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: '$99',
    subtitle: 'For high-growth organizations',
    cycle: '/month',
    description: 'Custom workflows, security controls, and dedicated success.',
    features: ['Custom workflows', 'SSO & compliance', 'Dedicated manager'],
    cta: 'Talk to Sales',
    highlighted: false,
  },
]

const Pricing = () => {
  return (
    <section id="pricing" className="py-5 pricing-v2">
      <div className="container py-3">
        <div className="row justify-content-center text-center mb-4 mb-lg-5">
          <div className="col-12 col-lg-8">
            <span className="section-chip mb-3 d-inline-block">Pricing Plans</span>
            <h2 className="fw-bold mb-3">Simple, transparent pricing</h2>
            <p className="text-secondary mb-0">Pick the right plan and scale with confidence.</p>
          </div>
        </div>

        <div className="row g-4">
          {plans.map((plan) => (
            <div key={plan.name} className="col-12 col-md-6 col-lg-4">
              <article
                className={`h-100 p-4 rounded-4 border pricing-card-v2 ${
                  plan.highlighted ? 'pricing-card-v2-pro' : ''
                }`}
              >
                {plan.highlighted && (
                  <span className="badge pricing-badge-v2 mb-3">Most Popular</span>
                )}
                <p className="pricing-subtitle-v2 mb-2">{plan.subtitle}</p>
                <h3 className="h5 fw-semibold mb-1">{plan.name}</h3>
                <div className="d-flex align-items-end gap-2 mb-3">
                  <p className="display-6 fw-bold mb-0">{plan.price}</p>
                  <p className="small text-secondary mb-1">{plan.cycle}</p>
                </div>
                <p className="text-secondary mb-4">{plan.description}</p>
                <ul className="list-unstyled d-grid gap-2 mb-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="text-secondary d-flex align-items-center gap-2">
                      <span className="pricing-check-v2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  className={`btn w-100 ${plan.highlighted ? 'btn-primary' : 'btn-outline-primary'}`}
                  href="#contact"
                >
                  {plan.cta}
                </a>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
