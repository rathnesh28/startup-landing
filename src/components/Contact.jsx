import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    emailAddress: '',
    companyName: '',
    messageText: '',
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    const { id, value } = event.target
    setFormData((currentData) => ({ ...currentData, [id]: value }))
    setErrors((currentErrors) => ({ ...currentErrors, [id]: '' }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = {}

    if (!formData.fullName.trim()) nextErrors.fullName = 'Please enter your full name.'
    if (!formData.emailAddress.trim()) {
      nextErrors.emailAddress = 'Please enter your email address.'
    } else if (!/\S+@\S+\.\S+/.test(formData.emailAddress)) {
      nextErrors.emailAddress = 'Please enter a valid email address.'
    }
    if (!formData.companyName.trim()) nextErrors.companyName = 'Please enter your company name.'
    if (!formData.messageText.trim()) nextErrors.messageText = 'Please add your message.'

    setErrors(nextErrors)

    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true)
      setFormData({
        fullName: '',
        emailAddress: '',
        companyName: '',
        messageText: '',
      })
    } else {
      setSubmitted(false)
    }
  }

  return (
    <section id="contact" className="contact-section py-5">
      <div className="container py-3">
        <div className="row g-4 g-lg-5 align-items-stretch">
          <div className="col-12 col-lg-5">
            <div className="contact-info-card p-4 p-lg-5 rounded-4 h-100">
              <span className="section-chip mb-3 d-inline-block">Contact Us</span>
              <h2 className="fw-bold mb-3">Let us build your growth engine</h2>
              <p className="text-secondary mb-4">
                Share your goals and our team will get back within 24 hours.
              </p>

              <div className="d-grid gap-3">
                <div className="contact-point p-3 rounded-3">
                  <p className="small text-secondary mb-1">Response Time</p>
                  <p className="mb-0 fw-semibold">Under 24 hours</p>
                </div>
                <div className="contact-point p-3 rounded-3">
                  <p className="small text-secondary mb-1">Email</p>
                  <p className="mb-0 fw-semibold">hello@launchpad.com</p>
                </div>
                <div className="contact-point p-3 rounded-3">
                  <p className="small text-secondary mb-1">Office Hours</p>
                  <p className="mb-0 fw-semibold">Mon - Fri, 9AM - 7PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-7">
            <div className="contact-card p-4 p-lg-5 rounded-4 h-100">
              {submitted && (
                <div className="alert alert-success contact-success mb-3" role="status">
                  Thanks, your message has been received. We will reach out shortly.
                </div>
              )}
              <form className="row g-3" noValidate onSubmit={handleSubmit}>
                <div className="col-12 col-md-6">
                  <label htmlFor="fullName" className="form-label fw-semibold">
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    className={`form-control form-control-lg ${errors.fullName ? 'is-invalid' : ''}`}
                    placeholder="Alex Morgan"
                    value={formData.fullName}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.fullName)}
                  />
                  {errors.fullName && <div className="invalid-feedback d-block">{errors.fullName}</div>}
                </div>
                <div className="col-12 col-md-6">
                  <label htmlFor="emailAddress" className="form-label fw-semibold">
                    Work Email
                  </label>
                  <input
                    id="emailAddress"
                    type="email"
                    className={`form-control form-control-lg ${errors.emailAddress ? 'is-invalid' : ''}`}
                    placeholder="alex@company.com"
                    value={formData.emailAddress}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.emailAddress)}
                  />
                  {errors.emailAddress && (
                    <div className="invalid-feedback d-block">{errors.emailAddress}</div>
                  )}
                </div>
                <div className="col-12">
                  <label htmlFor="companyName" className="form-label fw-semibold">
                    Company
                  </label>
                  <input
                    id="companyName"
                    type="text"
                    className={`form-control form-control-lg ${errors.companyName ? 'is-invalid' : ''}`}
                    placeholder="Acme Labs"
                    value={formData.companyName}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.companyName)}
                  />
                  {errors.companyName && (
                    <div className="invalid-feedback d-block">{errors.companyName}</div>
                  )}
                </div>
                <div className="col-12">
                  <label htmlFor="messageText" className="form-label fw-semibold">
                    Message
                  </label>
                  <textarea
                    id="messageText"
                    rows="4"
                    className={`form-control ${errors.messageText ? 'is-invalid' : ''}`}
                    placeholder="Tell us about your product, team size, and goals."
                    value={formData.messageText}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.messageText)}
                  ></textarea>
                  {errors.messageText && (
                    <div className="invalid-feedback d-block">{errors.messageText}</div>
                  )}
                </div>
                <div className="col-12 d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 pt-2">
                  <p className="small text-secondary mb-0">
                    By submitting this form, you agree to our privacy policy.
                  </p>
                  <button type="submit" className="btn btn-lg contact-submit px-4">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
