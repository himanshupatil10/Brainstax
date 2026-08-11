import React, { useState } from 'react';
import { Eye, EyeOff, Check } from 'lucide-react';
import bannerImg from '../assets/brainstax-banner.png';
import './Signin.css';

export default function Signin({ onSwitchToSignup, onSwitchToForgot }) {
  const [email, setEmail] = useState('jonas_kahnwald@gmail.com');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Signing in as ${email}`);
  };

  return (
    <div className="page-card">
      {/* Left Lavender Banner Section */}
      <div className="banner-section">
        <img src={bannerImg} alt="Brainstax Banner" className="banner-image" />
      </div>

      {/* Right Form Section */}
      <div className="form-section">
        <div className="form-content-container">
          <h1 className="form-title">Sign In</h1>

          <form onSubmit={handleSubmit}>
            {/* Email Field */}
            <div className="input-group">
              <div className="floating-field">
                <input
                  type="email"
                  id="email"
                  className={`field-input ${email ? 'has-value' : ''}`}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder=" "
                  required
                />
                <label htmlFor="email" className="floating-label">
                  Email
                </label>
              </div>
            </div>

            {/* Password Field */}
            <div className="input-group" style={{ marginBottom: '4px' }}>
              <div className="floating-field">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  className={`field-input ${password ? 'has-value' : ''}`}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder=" "
                  required
                />
                <label htmlFor="password" className="floating-label">
                  Password
                </label>

                <button
                  type="button"
                  className="password-toggle-btn"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
                </button>
              </div>
            </div>

            {/* Forgot Password Link */}
            <div className="forgot-password-wrapper">
              <a
                href="#forgot"
                className="forgot-password-link"
                onClick={(e) => {
                  e.preventDefault();
                  if (onSwitchToForgot) onSwitchToForgot();
                }}
              >
                Forgot Password?
              </a>
            </div>

            {/* Primary Action Button */}
            <button type="submit" className="btn-primary">
              Sign in
            </button>

            {/* Keep me logged in Checkbox */}
            <label className="remember-me-group">
              <input
                type="checkbox"
                checked={keepLoggedIn}
                onChange={(e) => setKeepLoggedIn(e.target.checked)}
              />
              <span className="custom-checkbox">
                {keepLoggedIn && <Check size={12} color="#FFFFFF" strokeWidth={3} />}
              </span>
              <span className="checkbox-label">Keep me logged in</span>
            </label>

            {/* Divider */}
            <div className="divider-container">
              <div className="divider-line"></div>
              <span className="divider-text">or</span>
              <div className="divider-line"></div>
            </div>

            {/* Google Sign In Button */}
            <button type="button" className="btn-google" onClick={() => alert('Signing in with Google...')}>
              <span>Sign in with Google</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
                  fill="#4285F4"
                />
                <path
                  d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.23v3.15C3.21 21.36 7.32 24 12 24z"
                  fill="#34A853"
                />
                <path
                  d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.23C.44 8.16 0 9.99 0 12s.44 3.84 1.23 5.42l4.05-3.15z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.32 0 3.21 2.64 1.23 6.58l4.05 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                  fill="#EA4335"
                />
              </svg>
            </button>

            {/* Bottom Register Switcher */}
            <div className="register-text">
              Do not have an account?
              <span
                className="register-link"
                onClick={onSwitchToSignup}
              >
                Create one
              </span>
            </div>
          </form>
        </div>

        {/* Footer info at bottom right */}
        <div className="card-footer">
          <div className="footer-left">
            © copyright @Brainstax 2025 | All Rights Reserved
          </div>
          <div className="footer-right">
            <a href="#terms" className="footer-link">
              Terms & Conditions
            </a>
            <span className="footer-divider">|</span>
            <a href="#privacy" className="footer-link">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
