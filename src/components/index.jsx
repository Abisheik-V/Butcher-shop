import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/style/style.css'; // make sure this path is correct

const ButcherShopHome = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
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
              <Link to="/order-online" className="btn primary-btn btn-sm w-100">Order Online</Link>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <div className="container hero-grid">
          <div className="hero-text" data-aos="fade-right">
            <h2>Fresh, Local, Hand-Cut Meats Every Day.</h2>
            <p>
              From farm to table, we prepare every cut with care. Prime beef,
              tender lamb, farm-raised poultry, and artisanal sausages ready
              for your kitchen.
            </p>

            <div className="hero-actions">
              <Link to="/cuts" className="btn primary-btn btn-lg">
                View Today&apos;s Cuts
              </Link>
              <Link to="/contact" className="btn btn-outline-light btn-lg">
                Visit Our Store
              </Link>
            </div>

            <div className="hero-highlights">
              <div>
                <h3>25+</h3>
                <span>Years in business</span>
              </div>
              <div>
                <h3>100%</h3>
                <span>Halal &amp; hygienic</span>
              </div>
              <div>
                <h3>4.9★</h3>
                <span>Customer rating</span>
              </div>
            </div>
          </div>

          <div className="hero-image" data-aos="fade-left">
            <div className="meat-card main-cut">
              <div className="meat-label">Prime Beef Ribeye</div>
              <div className="meat-price">₹1,399 / kg</div>
            </div>
            <div className="meat-card secondary-cut top-left">
              <div className="meat-label">Mutton Curry Cut</div>
              <div className="meat-price">₹899 / kg</div>
            </div>
            <div className="meat-card secondary-cut bottom-right">
              <div className="meat-label">Chicken Breast</div>
              <div className="meat-price">₹349 / kg</div>
            </div>
          </div>
        </div>
      </section>

      {/* Cuts Section */}
      <section id="cuts" className="section-wrapper bg-light">
        <div className="container" data-aos="fade-up">
          <div className="section-header text-center mb-4">
            <h2 className="text-dark">Signature Cuts <span className="text-dark">(Today)</span></h2>
            <p>Carefully selected and trimmed to perfection.</p>
          </div>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="info-card h-100">
                <h3>Beef &amp; Veal</h3>
                <p>
                  Ribeye, tenderloin, sirloin, mince, and more. Ideal for
                  grills, steaks, and slow-cooked dishes.
                </p>
                <span className="badge">Grass-fed options</span>
              </div>
            </div>

            <div className="col-md-4">
              <div className="info-card h-100">
                <h3>Mutton &amp; Lamb</h3>
                <p>
                  Classic curry and biryani cuts, chops, racks, and keema for
                  every traditional recipe.
                </p>
                <span className="badge">Locally sourced</span>
              </div>
            </div>

            <div className="col-md-4">
              <div className="info-card h-100">
                <h3>Chicken &amp; Poultry</h3>
                <p>
                  Skinless, bone-in, drumsticks, wings, and marinated options
                  ready to cook.
                </p>
                <span className="badge">Daily fresh</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specials Section */}
      <section id="specials" className="section-wrapper specials-section">
        <div className="container" data-aos="fade-up">
          <div className="section-header text-center mb-4">
            <h2>Today&apos;s Specials</h2>
            <p>Limited quantity, hand-picked for the day.</p>
          </div>

          <div className="specials-grid">
            <div className="special-card">
              <span className="badge badge-hot">Hot</span>
              <h3>Smoked Chicken Sausages</h3>
              <p>Perfect for grills and breakfast platters.</p>
              <span className="price">₹499 / 500g</span>
            </div>

            <div className="special-card">
              <span className="badge badge-new">New</span>
              <h3>Herb Marinated Drumsticks</h3>
              <p>Marinated in-house with fresh herbs &amp; spices.</p>
              <span className="price">₹429 / 500g</span>
            </div>

            <div className="special-card">
              <span className="badge badge-best">Best Seller</span>
              <h3>Mutton Seekh Kebabs</h3>
              <p>Ready-to-grill seekh kebabs, frozen for convenience.</p>
              <span className="price">₹599 / 6 pcs</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-wrapper bg-light">
        <div className="container" data-aos="fade-up">
          <div className="row align-items-center g-4">
            <div className="col-md-6">
              <h2>Why Choose Our Butchery?</h2>
              <p>
                We are a family-run butcher shop committed to quality,
                hygiene, and transparent sourcing. Our master butchers cut to
                your preference and help you choose the best meat for every
                recipe.
              </p>
              <ul className="checklist">
                <li>Daily fresh stock, never old frozen inventory.</li>
                <li>Strict cold-chain and hygiene practices.</li>
                <li>Custom cuts for grills, curries, roasts, and biryanis.</li>
                <li>Doorstep delivery in insulated packaging.</li>
              </ul>
            </div>

            <div className="col-md-6">
              <div className="about-highlight">
                <h3>Store Timings</h3>
                <p>Monday – Sunday, 7:00 AM to 10:00 PM</p>

                <h3 className="mt-3">Same-Day Delivery</h3>
                <p>Order before 7:00 PM for same-day home delivery.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / Footer */}
      <footer id="contact" className="butcher-footer">
        <div className="container footer-grid">
          <div className="footer-column">
            <h3>Butcher House</h3>
            <p>
              Fresh meats, trusted quality, and friendly service. Visit our
              shop or place your order online and we&apos;ll do the rest.
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
              <li><a href="#hero">Home</a></li>
              <li><a href="#cuts">Our Cuts</a></li>
              <li><a href="#specials">Specials</a></li>
              <li><a href="#about">About</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
            <span>
              © {new Date().getFullYear()} Butcher House. All rights reserved.
            </span>
            <span className="small">Made with care for meat lovers.</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ButcherShopHome;