import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/style/style.css';

const CutsPage = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
      <div className="butcher-page">
        {/* Navbar (same structure as home) */}
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
                onClick={() => setIsMobileNavOpen((prev) => !prev)}
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
                <Link to="/order-online" className="btn primary-btn btn-sm w-100"></Link>
              </div>
            </div>
          )}
        </header>

        {/* Cuts hero / heading */}
        <section id="cuts" className="section-wrapper">
          <div className="container" data-aos="fade-up">
            <div className="section-header text-center mb-3">
              <h2>Our Cuts</h2>
              <p>Select from our most popular categories and cuts.</p>
            </div>

            <p className="text-center mb-4" style={{ maxWidth: '640px', margin: '0 auto', color: 'var(--butcher-muted)' }}>
              Every piece is trimmed to order by our butchers. Tell us your recipe and we will suggest
              the best cut and thickness—from grills and BBQ to curries, biryanis, and slow roasts.
            </p>
          </div>
        </section>

        {/* Cuts grid */}
        <section className="section-wrapper bg-light">
          <div className="container" data-aos="fade-up">
            <div className="row g-4">
              <div className="col-md-4">
                <div className="info-card h-100">
                  <h3>Beef &amp; Veal</h3>
                  <ul className="checklist">
                    <li>Ribeye / T-bone / Tenderloin steaks</li>
                    <li>Boneless curry &amp; stew cuts</li>
                    <li>Minced beef (regular / lean)</li>
                    <li>Soup bones &amp; marrow</li>
                  </ul>
                  <span className="badge">Prime &amp; choice grades</span>
                </div>
              </div>

              <div className="col-md-4">
                <div className="info-card h-100">
                  <h3>Mutton &amp; Lamb</h3>
                  <ul className="checklist">
                    <li>Biryani &amp; curry cut (bone-in)</li>
                    <li>Boneless leg &amp; shoulder</li>
                    <li>Chops, ribs &amp; shanks</li>
                    <li>Keema (minced mutton)</li>
                  </ul>
                  <span className="badge">Tender young animals</span>
                </div>
              </div>

              <div className="col-md-4">
                <div className="info-card h-100">
                  <h3>Chicken &amp; Poultry</h3>
                  <ul className="checklist">
                    <li>Whole chicken (cut to style)</li>
                    <li>Breast, thighs &amp; drumsticks</li>
                    <li>Wings &amp; lollipops</li>
                    <li>Skinless / with-skin options</li>
                  </ul>
                  <span className="badge">Daily fresh stock</span>
                </div>
              </div>
            </div>

            <div className="row g-4 mt-3">
              <div className="col-md-6">
                <div className="info-card h-100">
                  <h3>Marinated &amp; Ready-to-Cook</h3>
                  <p>
                    Pre-marinated kebabs, drumsticks, wings, and tikka cuts with our in-house spice blends.
                    Perfect for BBQ nights and quick party menus.
                  </p>
                  <span className="badge">Chef-style flavours</span>
                </div>
              </div>

              <div className="col-md-6">
                <div className="info-card h-100">
                  <h3>Custom Cutting Service</h3>
                  <p>
                    Need extra-thin steaks, specific cube sizes, or special trimming? Share your requirement at
                    the counter or while ordering online and we will cut it to your exact preference.
                  </p>
                  <span className="badge">Cut to your recipe</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer (same as home) */}
        <footer id="contact" className="butcher-footer">
          <div className="container footer-grid">
            <div className="footer-column">
              <h3>Butcher House</h3>
              <p>
                Fresh meats, trusted quality, and friendly service. Visit our shop or place your order online and we&apos;ll
                do the rest.
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
                <li><a href="#cuts">Our Cuts</a></li>
                <li><a href="#specials">Specials</a></li>
                <li><a href="#about">About</a></li>
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

export default CutsPage;

