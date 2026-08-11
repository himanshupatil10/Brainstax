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
      {/* Left Lavender Banner Section */}
      <div className="banner-section">
        {/* Background SVG Vector Layer */}
        <div className="banner-graphics-layer">
          <svg viewBox="0 0 360 650" fill="none" xmlns="http://www.w3.org/2000/svg" className="banner-svg">
            {/* World Map Silhouette Watermark */}
            <g fill="#7E22CE" opacity="0.07">
              <path d="M10 130 C 40 100, 90 110, 120 150 C 140 190, 80 230, 40 220 C 10 210, -10 160, 10 130 Z" />
              <path d="M200 110 C 260 70, 340 90, 360 150 C 350 220, 270 250, 220 200 C 190 170, 180 130, 200 110 Z" />
              <path d="M90 270 C 120 280, 130 340, 100 390 C 80 420, 60 380, 70 320 Z" />
              <path d="M200 220 C 250 230, 270 320, 230 400 C 200 360, 190 300, 200 220 Z" />
              <path d="M300 330 C 340 320, 350 380, 310 410 C 280 390, 280 350, 300 330 Z" />
            </g>

            {/* Connecting Curved Dashed Shipping Route */}
            <path
              d="M 80 160 C 140 120, 210 110, 255 135"
              stroke="#7E22CE"
              strokeOpacity="0.22"
              strokeWidth="2"
              strokeDasharray="5 5"
              fill="none"
            />

            {/* Map Pin 1 */}
            <g transform="translate(62, 122)">
              <path
                d="M20 0 C8.95 0 0 8.95 0 20 C0 32 20 52 20 52 C20 52 40 32 40 20 C40 8.95 31.05 0 20 0 Z"
                fill="#E4D3FD"
                fillOpacity="0.85"
              />
              <circle cx="20" cy="20" r="9" fill="#F4ECFE" />
            </g>

            {/* Map Pin 2 (Giant Top Right Pin) */}
            <g transform="translate(210, 80)">
              <path
                d="M32 0 C14.33 0 0 14.33 0 32 C0 52 32 84 32 84 C32 84 64 52 64 32 C64 14.33 49.67 0 32 0 Z"
                fill="#E4D3FD"
                fillOpacity="0.9"
              />
              <circle cx="32" cy="32" r="16" fill="#F4ECFE" />
            </g>

            {/* Map Pin 3 */}
            <g transform="translate(245, 485)">
              <path
                d="M16 0 C7.16 0 0 7.16 0 16 C0 26 16 42 16 42 C16 42 32 26 32 16 C32 7.16 24.84 0 16 0 Z"
                fill="#E4D3FD"
                fillOpacity="0.85"
              />
              <circle cx="16" cy="16" r="7" fill="#F4ECFE" />
            </g>

            {/* Delivery Truck Outline */}
            <g transform="translate(0, 540)" fill="#7E22CE" opacity="0.06">
              <rect x="0" y="20" width="80" height="60" rx="2" />
              <line x1="12" y1="20" x2="12" y2="80" stroke="#7E22CE" strokeWidth="2" opacity="0.8" />
              <line x1="28" y1="20" x2="28" y2="80" stroke="#7E22CE" strokeWidth="2" opacity="0.8" />
              <line x1="44" y1="20" x2="44" y2="80" stroke="#7E22CE" strokeWidth="2" opacity="0.8" />
              <line x1="60" y1="20" x2="60" y2="80" stroke="#7E22CE" strokeWidth="2" opacity="0.8" />
              <path d="M80 40 L100 40 L115 55 L115 80 L80 80 Z" />
              <rect x="85" y="45" width="18" height="15" fill="#F4ECFE" />
              <circle cx="20" cy="84" r="9" />
              <circle cx="20" cy="84" r="4" fill="#F4ECFE" />
              <circle cx="40" cy="84" r="9" />
              <circle cx="40" cy="84" r="4" fill="#F4ECFE" />
              <circle cx="95" cy="84" r="9" />
              <circle cx="95" cy="84" r="4" fill="#F4ECFE" />
            </g>

            {/* Stacked Cargo Shipping Boxes */}
            <g transform="translate(220, 495)" fill="#7E22CE" opacity="0.06">
              <rect x="0" y="60" width="120" height="90" rx="3" />
              <line x1="60" y1="60" x2="60" y2="150" stroke="#7E22CE" strokeWidth="2" strokeDasharray="4 4" opacity="0.6" />
              <rect x="25" y="0" width="95" height="60" rx="3" />
              <path d="M45 0 L72.5 18 L100 0" stroke="#7E22CE" strokeWidth="2" fill="none" opacity="0.8" />
              <line x1="72.5" y1="18" x2="72.5" y2="60" stroke="#7E22CE" strokeWidth="2" strokeDasharray="3 3" opacity="0.6" />
            </g>
          </svg>
        </div>

        {/* Center Brainstax Branding Logo */}
        <div className="banner-logo-wrapper">
          <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 14 L18 6 V38 H10 Z" fill="#6B21A8" />
            <path d="M22 22 L30 14 V38 H22 Z" fill="#6B21A8" />
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
