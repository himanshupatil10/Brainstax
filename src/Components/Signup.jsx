import React, { useState } from 'react';
import { Eye, EyeOff, Calendar, Check } from 'lucide-react';
import bannerImg from '../assets/brainstax-banner.png';
import './Signup.css';

export default function Signup({ onSwitchToSignin }) {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [verifyPassword, setVerifyPassword] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const [showVerifyPassword, setShowVerifyPassword] = useState(false);
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Signing up account for ${name} (${email})`);
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
          <h1 className="form-title">Sign Up</h1>

          <form onSubmit={handleSubmit}>
            {/* Your Name */}
            <div className="input-group">
              <div className="floating-field">
                <input
                  type="text"
                  id="name"
                  className={`field-input ${name ? 'has-value' : ''}`}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder=" "
                  required
                />
                <label htmlFor="name" className="floating-label">
                  Your Name
                </label>
              </div>
            </div>

            {/* Date of Birth */}
            <div className="input-group">
              <div className="floating-field">
                <input
                  type="text"
                  id="dob"
                  className={`field-input ${dob ? 'has-value' : ''}`}
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  placeholder=" "
                  required
                />
                <label htmlFor="dob" className="floating-label">
                  Date of Birth
                </label>
                <div className="input-icon-btn">
                  <Calendar size={18} />
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="input-group">
              <div className="floating-field">
                <input
                  type="email"
                  id="signup-email"
                  className={`field-input ${email ? 'has-value' : ''}`}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder=" "
                  required
                />
                <label htmlFor="signup-email" className="floating-label">
                  Email
                </label>
              </div>
            </div>

            {/* Mobile Number */}
            <div className="input-group">
              <div className="floating-field">
                <input
                  type="tel"
                  id="mobile"
                  className={`field-input ${mobile ? 'has-value' : ''}`}
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  placeholder=" "
                />
                <label htmlFor="mobile" className="floating-label">
                  Mobile Number
                </label>
              </div>
            </div>

            {/* Password */}
            <div className="input-group">
              <div className="floating-field">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="signup-password"
                  className={`field-input ${password ? 'has-value' : ''}`}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder=" "
                  required
                />
                <label htmlFor="signup-password" className="floating-label">
                  Password
                </label>
                <button
                  type="button"
                  className="input-icon-btn"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
                </button>
              </div>
            </div>

            {/* Verify Password */}
            <div className="input-group">
              <div className="floating-field">
                <input
                  type={showVerifyPassword ? 'text' : 'password'}
                  id="verify-password"
                  className={`field-input ${verifyPassword ? 'has-value' : ''}`}
                  value={verifyPassword}
                  onChange={(e) => setVerifyPassword(e.target.value)}
                  placeholder=" "
                  required
                />
                <label htmlFor="verify-password" className="floating-label">
                  Verify Password
                </label>
                <button
                  type="button"
                  className="input-icon-btn"
                  onClick={() => setShowVerifyPassword(!showVerifyPassword)}
                  aria-label="Toggle verify password visibility"
                >
                  {showVerifyPassword ? <Eye size={18} /> : <EyeOff size={18} />}
                </button>
              </div>
            </div>

            {/* Primary Action Button */}
            <button type="submit" className="btn-primary">
              Sign up
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
              Already have an account?
              <span
                className="register-link"
                onClick={onSwitchToSignin}
              >
                Sign In
              </span>
            </div>
          </form>
        </div>

        {/* Footer info matching exact single-line Figma layout */}
        <div className="card-footer">
          <div className="footer-left">
            © copyright @Brainstax 2025 | All Rights Reserved
          </div>
          <div className="footer-right">
            <a href="#terms" className="footer-link">Terms & Conditions</a>
            <span className="footer-divider">|</span>
            <a href="#privacy" className="footer-link">Privacy Policy</a>
          </div>
        </div>
      </div>
    </div>
  );
}
