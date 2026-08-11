import React, { useState } from 'react';
import { Eye, EyeOff, Check } from 'lucide-react';
import './Signin.css';

export default function Signin({ onSwitchToSignup }) {
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
      {/* Left Banner Section */}
      <div className="banner-section">
        {/* Background SVG Vector Layer (World Map + Pins + Shipping Boxes) */}
        <div className="banner-graphics-layer">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 500 650"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
          >
            {/* World Map Vector Path Outline */}
            <g opacity="0.12" fill="#7E22CE">
              <path d="M40 120 Q 80 100 120 130 T 160 180 Q 140 220 90 240 T 40 180 Z" />
              <path d="M120 280 Q 160 300 150 360 T 110 440 Q 90 400 100 320 Z" />
              <path d="M220 100 Q 300 70 380 90 T 440 160 Q 400 240 320 220 T 240 180 Z" />
              <path d="M230 220 Q 280 230 290 320 T 240 420 Q 210 360 215 280 Z" />
              <path d="M380 340 Q 440 330 450 380 T 390 420 Q 360 400 380 340 Z" />
            </g>

            {/* Connecting Dashed Flight Arcs */}
            <path
              d="M120 160 C 200 90, 280 90, 360 140"
              stroke="#9333EA"
              strokeOpacity="0.25"
              strokeWidth="2"
              strokeDasharray="5 5"
              fill="none"
            />
            <path
              d="M360 140 C 340 260, 320 320, 310 400"
              stroke="#9333EA"
              strokeOpacity="0.25"
              strokeWidth="2"
              strokeDasharray="5 5"
              fill="none"
            />

            {/* Map Pin 1 */}
            <g transform="translate(115, 140)">
              <circle cx="12" cy="12" r="16" fill="#7E22CE" fillOpacity="0.1" />
              <path
                d="M12 2C7.58 2 4 5.58 4 10C4 16 12 22 12 22C12 22 20 16 20 10C20 5.58 16.42 2 12 2Z"
                fill="#D8B4FE"
              />
              <circle cx="12" cy="10" r="3.5" fill="#7E22CE" />
            </g>

            {/* Map Pin 2 */}
            <g transform="translate(345, 115)">
              <circle cx="20" cy="20" r="24" fill="#7E22CE" fillOpacity="0.12" />
              <path
                d="M20 4C12.27 4 6 10.27 6 18C6 28.5 20 39 20 39C20 39 34 28.5 34 18C34 10.27 27.73 4 20 4Z"
                fill="#C084FC"
              />
              <circle cx="20" cy="18" r="6" fill="#FFFFFF" />
            </g>

            {/* Map Pin 3 */}
            <g transform="translate(295, 380)">
              <circle cx="16" cy="16" r="20" fill="#7E22CE" fillOpacity="0.1" />
              <path
                d="M16 4C10.48 4 6 8.48 6 14C6 21 16 30 16 30C16 30 26 21 26 14C26 8.48 21.52 4 16 4Z"
                fill="#E9D5FF"
              />
              <circle cx="16" cy="14" r="4" fill="#7E22CE" />
            </g>

            {/* Bottom-Left Shipping Boxes Illustration */}
            <g transform="translate(10, 440)" opacity="0.25">
              <rect x="0" y="80" width="130" height="90" rx="4" fill="#7E22CE" fillOpacity="0.3" />
              <line x1="20" y1="80" x2="20" y2="170" stroke="#7E22CE" strokeWidth="2" />
              <line x1="40" y1="80" x2="40" y2="170" stroke="#7E22CE" strokeWidth="2" />
              <line x1="60" y1="80" x2="60" y2="170" stroke="#7E22CE" strokeWidth="2" />
              <line x1="80" y1="80" x2="80" y2="170" stroke="#7E22CE" strokeWidth="2" />
              <line x1="100" y1="80" x2="100" y2="170" stroke="#7E22CE" strokeWidth="2" />
              <path d="M-10 140 H30 V165 H-10 Z" fill="#7E22CE" />
              <circle cx="0" cy="165" r="8" fill="#6B21A8" />
              <circle cx="20" cy="165" r="8" fill="#6B21A8" />
              <rect x="140" y="60" width="80" height="110" rx="2" fill="#7E22CE" fillOpacity="0.2" />
              <rect x="140" y="0" width="80" height="60" rx="2" fill="#7E22CE" fillOpacity="0.15" />
              <line x1="180" y1="0" x2="180" y2="170" stroke="#7E22CE" strokeWidth="1.5" strokeDasharray="3 3" />
            </g>
          </svg>
        </div>

        {/* Center Brainstax Branding Logo */}
        <div className="banner-logo-wrapper">
          <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8 6C8 3.79086 9.79086 2 12 2H16C18.2091 2 20 3.79086 20 6V36C20 38.2091 18.2091 40 16 40H12C9.79086 40 8 38.2091 8 36V6Z"
              fill="#7E22CE"
            />
            <path
              d="M24 10C24 7.79086 25.7909 6 28 6H30C33.3137 6 36 8.68629 36 12V18C36 20.2091 34.2091 22 32 22H28C25.7909 22 24 20.2091 24 18V10Z"
              fill="#7E22CE"
            />
            <path
              d="M24 26C24 23.7909 25.7909 22 28 22H32C34.2091 22 36 23.7909 36 26V30C36 33.3137 33.3137 36 30 36H28C25.7909 36 24 34.2091 24 32V26Z"
              fill="#7E22CE"
            />
          </svg>
          <span className="logo-text">Brainstax</span>
        </div>
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
                  alert('Forgot password clicked');
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
            <span>|</span>
            <a href="#privacy" className="footer-link">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
