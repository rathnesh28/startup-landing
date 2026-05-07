const features = [
  {
    title: 'Automation Workflows',
    description:
      'Automate repetitive tasks and keep teams moving with fewer blockers.',
    icon: 'AW',
  },
  {
    title: 'Team Collaboration',
    description:
      'Stay aligned with real-time updates, smart comments, and clear ownership.',
    icon: 'TC',
  },
  {
    title: 'Data Insights',
    description:
      'Get actionable analytics on acquisition, engagement, and revenue trends.',
    icon: 'DI',
  },
]

const Features = () => {
  return (
    <section id="features" className="py-5 bg-white">
      <div className="container py-3">
        <div className="row justify-content-center text-center mb-4 mb-lg-5">
          <div className="col-12 col-lg-8">
            <h2 className="fw-bold mb-3">Everything you need to grow</h2>
            <p className="text-secondary mb-0">
              Powerful features designed for modern startup teams.
            </p>
          </div>
        </div>

        <div className="row g-4">
          {features.map((feature) => (
            <div key={feature.title} className="col-12 col-md-6 col-lg-4">
              <article className="h-100 p-4 rounded-4 border feature-card">
                <div className="feature-icon mb-3">
                  <span>{feature.icon}</span>
                </div>
                <h3 className="h5 fw-semibold mb-2">{feature.title}</h3>
                <p className="text-secondary mb-0">{feature.description}</p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
