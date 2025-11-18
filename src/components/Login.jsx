import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/style/style.css';

const Login = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('login'); // 'login' | 'signup'

  const [loginData, setLoginData] = useState({
    identifier: '',
    password: '',
    rememberMe: false,
  });

  const [signupData, setSignupData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
  });

  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // { type: 'success' | 'error', message: string }

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const handleLoginChange = (e) => {
    const { name, type, checked, value } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    setSignupData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus(null);

    if (activeTab === 'login') {
      if (!loginData.identifier.trim() || !loginData.password.trim()) {
        setStatus({ type: 'error', message: 'Please enter your email/phone and password to login.' });
        return;
      }
    } else {
      if (!signupData.name.trim() || !signupData.email.trim() || !signupData.phone.trim() || !signupData.password.trim()) {
        setStatus({ type: 'error', message: 'Please fill in name, email, phone, and password to create an account.' });
        return;
      }
    }

    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      if (activeTab === 'login') {
        setStatus({ type: 'success', message: 'Login successful. (Demo only, no real account yet.)' });
        setLoginData({ identifier: '', password: '', rememberMe: false });
      } else {
        setStatus({ type: 'success', message: 'Account created. You can now login. (Demo only, not stored.)' });
        setSignupData({ name: '', email: '', phone: '', password: '' });
        setActiveTab('login');
      }
    }, 600);
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

      {/* Login / Signup content */}
      <section className="section-wrapper bg-light">
        <div className="container" data-aos="fade-up">
          <div className="section-header text-center mb-3">
            <h2 className="text-dark">Account</h2>
            <p>Login to your account or create a new one.</p>
          </div>

          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="about-highlight">
                {/* Tabs */}
                <div className="d-flex justify-content-center mb-3 text-dark">
                  <button
                    type="button"
                    className={`btn btn-sm me-2 ${activeTab === 'login' ? 'btn-light' : 'btn-outline-light'}`}
                    onClick={() => setActiveTab('login')}
                  >
                    Login
                  </button>
                  <button
                    type="button"
                    className={`btn btn-sm ${activeTab === 'signup' ? 'btn-light' : 'btn-outline-light'}`}
                    onClick={() => setActiveTab('signup')}
                  >
                    Sign Up
                  </button>
                </div>

                <form className="row g-3" onSubmit={handleSubmit}>
                  {/* Login form */}
                  {activeTab === 'login' && (
                    <>
                      <div className="col-12">
                        <label className="form-label">Email / Phone</label>
                        <input
                          type="text"
                          className="form-control"
                          name="identifier"
                          value={loginData.identifier}
                          onChange={handleLoginChange}
                          placeholder="you@example.com or +91-"
                        />
                      </div>
                      <div className="col-12">
                        <label className="form-label">Password</label>
                        <input
                          type="password"
                          className="form-control"
                          name="password"
                          value={loginData.password}
                          onChange={handleLoginChange}
                          placeholder="••••••••"
                        />
                      </div>
                      <div className="col-12 d-flex justify-content-between align-items-center">
                        <div>
                          <input
                            type="checkbox"
                            id="rememberMe"
                            name="rememberMe"
                            className="form-check-input me-1"
                            checked={loginData.rememberMe}
                            onChange={handleLoginChange}
                          />
                          <label htmlFor="rememberMe" className="form-check-label small">
                            Remember me
                          </label>
                        </div>
                        <span className="small" style={{ color: 'var(--butcher)' }}>
                          Forgot password?
                        </span>
                      </div>
                    </>
                  )}

                  {/* Signup form */}
                  {activeTab === 'signup' && (
                    <>
                      <div className="col-12">
                        <label className="form-label">Name</label>
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          value={signupData.name}
                          onChange={handleSignupChange}
                          placeholder="Your name"
                        />
                      </div>
                      <div className="col-12">
                        <label className="form-label">Email</label>
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          value={signupData.email}
                          onChange={handleSignupChange}
                          placeholder="you@example.com"
                        />
                      </div>
                      <div className="col-12">
                        <label className="form-label">Phone</label>
                        <input
                          type="text"
                          className="form-control"
                          name="phone"
                          value={signupData.phone}
                          onChange={handleSignupChange}
                          placeholder="+91-"
                        />
                      </div>
                      <div className="col-12">
                        <label className="form-label">Password</label>
                        <input
                          type="password"
                          className="form-control"
                          name="password"
                          value={signupData.password}
                          onChange={handleSignupChange}
                          placeholder="Create a password"
                        />
                      </div>
                    </>
                  )}

                  <div className="col-12">
                    <button
                      type="submit"
                      className="btn primary-btn btn-sm w-100 text-dark"
                      disabled={submitting}
                    >
                      {submitting
                        ? activeTab === 'login'
                          ? 'Signing you in...'
                          : 'Creating your account...'
                        : activeTab === 'login'
                        ? 'Login'
                        : 'Create Account'}
                    </button>
                  </div>

                  {status && (
                    <div
                      className={`alert mt-2 ${
                        status.type === 'success' ? 'alert-success' : 'alert-danger'
                      }`}
                    >
                      {status.message}
                    </div>
                  )}
                </form>

                <p className="mt-3 mb-0 small" style={{ color: 'var(--butcher)' }}>
                  By continuing, you agree to our terms of service and privacy policy.
                </p>
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

export default Login;