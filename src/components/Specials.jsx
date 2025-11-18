import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/style/style.css';

const SpecialsPage = () => {
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

      {/* Specials hero / header */}
      <section id="specials" className="section-wrapper specials-section">
        <div className="container" data-aos="fade-up">
          <div className="section-header text-center mb-3">
            <h2>Today&apos;s Specials</h2>
            <p>Hand-picked limited offers for today only.</p>
          </div>

          <p
            className="text-center mb-4"
            style={{ maxWidth: '640px', margin: '0 auto', color: 'var(--butcher-muted)' }}
          >
            These specials are prepared in limited batches every morning. Reserve your favourites early
            or pre-order for the weekend. Prices and availability may vary by day.
          </p>
        </div>
      </section>

      {/* Specials grid */}
      <section className="section-wrapper">
        <div className="container" data-aos="fade-up">
          <div className="specials-grid">
            <div className="special-card">
              <span className="badge badge-best">Chef&apos;s Pick</span>
              <h3>Butcher&apos;s Mixed Grill Box</h3>
              <p>
                Assorted chicken, mutton, and beef cuts marinated for the grill.
                Ideal for 4–6 people.
              </p>
              <span className="price">₹1,899 / box</span>
            </div>

            <div className="special-card">
              <span className="badge badge-hot">Hot</span>
              <h3>Spicy Peri-Peri Chicken</h3>
              <p>
                Whole chicken or leg pieces marinated in our signature peri-peri blend,
                ready to roast or grill.
              </p>
              <span className="price">₹549 / 750g</span>
            </div>

            <div className="special-card">
              <span className="badge badge-new">New</span>
              <h3>Smoked Mutton Chops</h3>
              <p>
                Tender mutton chops lightly smoked and marinated, perfect for pan-searing.
              </p>
              <span className="price">₹799 / 500g</span>
            </div>

            <div className="special-card">
              <span className="badge badge-hot">Limited</span>
              <h3>Bone Broth Pack</h3>
              <p>
                Mix of marrow and joint bones for slow-cooked, nutrient-rich broths and soups.
              </p>
              <span className="price">₹399 / pack</span>
            </div>
          </div>

          <div className="text-center mt-4">
            <p className="mb-2" style={{ color: 'var(--butcher-muted)' }}>
              Want to pre-book any special for an event or party?
            </p>
            <a href="tel:9500781257" className="btn primary-btn btn-lg">
              Call to Reserve
            </a>
          </div>
        </div>
      </section>

      {/* Footer (same as home) */}
      <footer id="contact" className="butcher-footer">
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

export default SpecialsPage;