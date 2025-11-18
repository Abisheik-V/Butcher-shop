import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/style/style.css';

const Contact = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

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

      {/* Contact content */}
      <section id="contact" className="section-wrapper bg-light">
        <div className="container" data-aos="fade-up">
          <div className="section-header text-center mb-3">
            <h2 className="text-dark">Contact Us</h2>
            <p>Reach out to place orders, ask questions, or plan your next feast.</p>
          </div>

          <div className="row g-4">
            <div className="col-md-6">
              <h3>Store &amp; Phone</h3>
              <p>
                You can call or WhatsApp us for same‑day orders, special cutting requests,
                or bulk party orders.
              </p>
              <ul className="footer-list">
                <li><strong>Phone:</strong> +91-98765-43210</li>
                <li><strong>WhatsApp:</strong> +91-98765-43211</li>
                <li><strong>Email:</strong> orders@butcherhouse.in</li>
              </ul>

              <h3 className="mt-4">Store Address</h3>
              <p>
                12, Market Lane,
                <br />
                Old Town Butcher Street,
                <br />
                Your City, India
              </p>

              <h3 className="mt-4">Timings</h3>
              <p>Monday – Sunday, 7:00 AM to 10:00 PM</p>
            </div>

            <div className="col-md-6">
              <div className="about-highlight">
                <h3>Send Us a Message</h3>
                <p>
                  Share your requirements and we&apos;ll call you back to confirm cuts,
                  weights, and delivery timing.
                </p>
                <form className="row g-3">
                  <div className="col-12">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" placeholder="Your name" />
                  </div>
                  <div className="col-12">
                    <label className="form-label">Phone / WhatsApp</label>
                    <input type="text" className="form-control" placeholder="+91-" />
                  </div>
                  <div className="col-12">
                    <label className="form-label">What would you like to order?</label>
                    <textarea
                      className="form-control"
                      rows="3"
                      placeholder="E.g. 2 kg mutton biryani cut, 1 kg chicken drumsticks..."
                    />
                  </div>
                  <div className="col-12">
                    <button type="button" className="btn primary-btn btn-sm w-100">
                      Submit Request
                    </button>
                  </div>
                </form>
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

export default Contact;