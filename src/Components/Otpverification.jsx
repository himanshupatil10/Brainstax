import React, { useState, useRef } from 'react';
import bannerImg from '../assets/brainstax-banner.png';
import './Otpverification.css';

export default function Otpverification({ onSwitchToSignin, onVerifySuccess }) {
  const [otp, setOtp] = useState(['4', '', '', '', '', '']);
  const inputRefs = useRef([]);

  const handleChange = (index, value) => {
    if (isNaN(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    // Auto-focus next input box
    if (value && index < 5 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    // Backspace auto-focus previous input box
    if (e.key === 'Backspace' && !otp[index] && index > 0 && inputRefs.current[index - 1]) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredOtp = otp.join('');
    if (enteredOtp.length < 6) {
      alert('Please enter complete 6-digit OTP code');
      return;
    }
    alert(`OTP Verified successfully: ${enteredOtp}`);
    if (onVerifySuccess) onVerifySuccess();
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
          <h1 className="form-title">OTP Verification</h1>

          {/* User Email & Mobile Info Pill */}
          <div className="user-info-pill">
            <div className="pill-icon-circle">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="#7E22CE" strokeWidth="2" />
                <circle cx="12" cy="12" r="4" fill="#7E22CE" />
              </svg>
            </div>
            <div className="pill-text-details">
              <div className="pill-email">jonas_kahnwald@gmail.com</div>
              <div className="pill-phone">+91 86578 765789</div>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            {/* 6 Digit OTP Inputs */}
            <div className="otp-inputs-row">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className={`otp-digit-box ${digit ? 'has-digit' : ''}`}
                  autoFocus={index === 1}
                />
              ))}
            </div>

            {/* Verify Button */}
            <button type="submit" className="btn-primary" style={{ marginTop: '24px' }}>
              Verify
            </button>

            {/* Account Switcher */}
            <div className="register-text" style={{ marginTop: '48px' }}>
              Already have an account?
              <span className="register-link" onClick={onSwitchToSignin}>
                Sign In
              </span>
            </div>
          </form>
        </div>

        {/* Footer info at bottom */}
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
