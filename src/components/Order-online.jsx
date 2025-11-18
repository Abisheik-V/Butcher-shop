import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/style/style.css';

const OrderOnline = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    items: '',
    date: '',
    timeSlot: 'Any time',
    address: '',
    orderType: 'Home Delivery',
    paymentOption: 'Cash on Delivery',
  });

  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // { type: 'success' | 'error', message: string }

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus(null);

    if (!formData.fullName.trim() || !formData.phone.trim() || !formData.items.trim() || !formData.address.trim()) {
      setStatus({ type: 'error', message: 'Please fill in your name, phone, items to order, and delivery address.' });
      return;
    }

    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setStatus({
        type: 'success',
        message: 'Your order request has been sent. We will call or WhatsApp you shortly to confirm.',
      });

      setFormData({
        fullName: '',
        phone: '',
        email: '',
        items: '',
        date: '',
        timeSlot: 'Any time',
        address: '',
        orderType: 'Home Delivery',
        paymentOption: 'Cash on Delivery',
      });
    }, 700);
  };

  return (
    <div className="butcher-page">
      {/* Navbar */}
      <header className="butcher-navbar shadow-sm">
        <nav className="container d-flex align-items-center justify-content-between py-3">
          <div className="brand d-flex align-items-center gap-2">
            <span className="brand-mark">B</span>
            <div>
              <h1 className="brand-name mb-0">Butcher House</h1>
              <p className="brand-tagline mb-0">Premium meats &amp; cuts</p>
            </div>
          </div>

          {/* Desktop nav */}
          <ul className="nav-links d-none d-md-flex align-items-center gap-4 mb-0">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/cuts" className="nav-link">Our Cuts</Link>
            <Link to="/specials" className="nav-link">Specials</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
            <Link to="/login" className="nav-link">Login</Link>
          </ul>

          {/* Right side: actions + mobile toggle */}
          <div className="d-flex align-items-center gap-2">
            <a href="tel:9500781257" className="btn btn-outline-light btn-sm d-none d-md-inline-flex">
              Call Now
            </a>
            <Link to="/order-online" className="btn primary-btn btn-sm d-none d-md-inline-flex">
              Order Online
            </Link>
            <button
              type="button"
              className="navbar-toggle d-inline-flex d-md-none"
              onClick={() => setIsMobileNavOpen(prev => !prev)}
            >
              <span className="navbar-toggle-line" />
              <span className="navbar-toggle-line" />
            </button>
          </div>
        </nav>

        {/* Mobile nav menu */}
        {isMobileNavOpen && (
          <div className="mobile-nav d-md-none">
            <Link to="/" className="mobile-nav-link" onClick={() => setIsMobileNavOpen(false)}>Home</Link>
            <Link to="/cuts" className="mobile-nav-link" onClick={() => setIsMobileNavOpen(false)}>Our Cuts</Link>
            <Link to="/specials" className="mobile-nav-link" onClick={() => setIsMobileNavOpen(false)}>Specials</Link>
            <Link to="/about" className="mobile-nav-link" onClick={() => setIsMobileNavOpen(false)}>About</Link>
            <Link to="/contact" className="mobile-nav-link" onClick={() => setIsMobileNavOpen(false)}>Contact</Link>
            <Link to="/login" className="mobile-nav-link" onClick={() => setIsMobileNavOpen(false)}>Login</Link>
            <div className="mobile-nav-actions">
              <a href="tel:9500781257" className="btn btn-outline-light btn-sm w-100 mb-2">Call Now</a>
              <Link to="/order-online" className="btn primary-btn btn-sm w-100">Order Online</Link>
            </div>
          </div>
        )}
      </header>

      {/* Online order form */}
      <section className="section-wrapper bg-light">
        <div className="container" data-aos="fade-up">
          <div className="section-header text-center mb-3">
            <h2 className="text-dark">Order Online</h2>
            <p>Place your fresh meat order for home delivery or store pickup.</p>
          </div>

          <div className="row g-4">
            <div className="col-md-7">
              <div className="about-highlight">
                <h3>Your Order Details</h3>
                <form className="row g-3" onSubmit={handleSubmit}>
                  <div className="col-12">
                    <label className="form-label">Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Your name"
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Phone / WhatsApp</label>
                    <input
                      type="text"
                      className="form-control"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91-"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Email (optional)</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                    />
                  </div>

                  <div className="col-12">
                    <label className="form-label">Items to Order</label>
                    <textarea
                      className="form-control"
                      rows="3"
                      name="items"
                      value={formData.items}
                      onChange={handleChange}
                      placeholder="E.g. 2 kg mutton biryani cut, 1 kg chicken drumsticks, 500g smoked sausages..."
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Preferred Delivery / Pickup Date</label>
                    <input
                      type="date"
                      className="form-control"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Preferred Time Slot</label>
                    <select
                      className="form-select"
                      name="timeSlot"
                      value={formData.timeSlot}
                      onChange={handleChange}
                    >
                      <option value="Any time">Any time</option>
                      <option value="7:00 AM – 10:00 AM">7:00 AM – 10:00 AM</option>
                      <option value="10:00 AM – 1:00 PM">10:00 AM – 1:00 PM</option>
                      <option value="1:00 PM – 4:00 PM">1:00 PM – 4:00 PM</option>
                      <option value="4:00 PM – 7:00 PM">4:00 PM – 7:00 PM</option>
                    </select>
                  </div>

                  <div className="col-12">
                    <label className="form-label">Delivery Address</label>
                    <textarea
                      className="form-control"
                      rows="3"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="House number, street, area, city, PIN code"
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Order Type</label>
                    <select
                      className="form-select"
                      name="orderType"
                      value={formData.orderType}
                      onChange={handleChange}
                    >
                      <option value="Home Delivery">Home Delivery</option>
                      <option value="Store Pickup">Store Pickup</option>
                    </select>
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Payment Option</label>
                    <select
                      className="form-select"
                      name="paymentOption"
                      value={formData.paymentOption}
                      onChange={handleChange}
                    >
                      <option value="Cash on Delivery">Cash on Delivery</option>
                      <option value="UPI / QR at Delivery">UPI / QR at Delivery</option>
                      <option value="Card at Store">Card at Store</option>
                    </select>
                  </div>

                  <div className="col-12">
                    <button
                      type="submit"
                      className="btn primary-btn btn-sm w-100"
                      disabled={submitting}
                    >
                      {submitting ? 'Sending your order...' : 'Submit Order Request'}
                    </button>
                    {status && (
                      <div
                        className={`alert mt-2 ${
                          status.type === 'success' ? 'alert-success' : 'alert-danger'
                        }`}
                      >
                        {status.message}
                      </div>
                    )}
                  </div>
                </form>
              </div>
            </div>

            <div className="col-md-5">
              <div className="about-highlight text-dark">
                <h3>How Online Orders Work</h3>
                <p>
                  Once you submit the form, our team will review your request, confirm availability,
                  and call/WhatsApp you back to finalise cuts, weights, and timing.
                </p>
                <ul className="checklist">
                  <li>Orders accepted during store hours (7:00 AM – 10:00 PM).</li>
                  <li>Same‑day delivery available for orders placed before 7:00 PM.</li>
                  <li>All meats are cut fresh just before dispatch.</li>
                  <li>Delivered in insulated packaging to maintain freshness.</li>
                </ul>
                <p className="mt-3" style={{ color: 'var(--butcher)' }}>
                  Prefer to talk directly? Use the Call Now button:
                </p>
                <a href="tel:9500781257" className="btn btn-outline-light btn-sm">
                  Call Now: 9500781257
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer (same as other pages) */}
      <footer id="footer" className="butcher-footer">
        <div className="container footer-grid">
          <div className="footer-column">
            <h3>Butcher House</h3>
            <p>
              Fresh meats, trusted quality, and friendly service.
              Visit our shop or place your order online and we&apos;ll do the rest.
            </p>
          </div>

          <div className="footer-column">
            <h4>Contact</h4>
            <ul className="footer-list">
              <li><strong>Phone:</strong> +91-98765-43210</li>
              <li><strong>WhatsApp:</strong> +91-98765-43211</li>
              <li><strong>Email:</strong> orders@butcherhouse.in</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Visit Us</h4>
            <p>
              12, Market Lane,
              <br />
              Old Town Butcher Street,
              <br />
              Your City, India
            </p>
          </div>

          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/cuts">Our Cuts</Link></li>
              <li><Link to="/specials">Specials</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
            <span>© {new Date().getFullYear()} Butcher House. All rights reserved.</span>
            <span className="small">Made with care for meat lovers.</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default OrderOnline;