import React from 'react';
import bannerImg from '../assets/brainstax-banner.png';
import './Underapproval.css';

export default function Underapproval({ onBackToSignin }) {
  return (
    <div className="page-card">
      {/* Left Lavender Banner Section */}
      <div className="banner-section">
        <img src={bannerImg} alt="Brainstax Banner" className="banner-image" />
      </div>

      {/* Right Content Section */}
      <div className="form-section">
        <div className="form-content-container review-status-container">
          {/* Document Magnifying Glass Review Illustration */}
          <div className="review-icon-wrapper">
            <div className="review-icon-bg">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Document Sheet */}
                <rect x="16" y="10" width="32" height="42" rx="4" stroke="#7E22CE" strokeWidth="2.5" fill="#FFFFFF" />
                <line x1="22" y1="18" x2="38" y2="18" stroke="#7E22CE" strokeWidth="2" strokeLinecap="round" />
                <line x1="22" y1="24" x2="34" y2="24" stroke="#7E22CE" strokeWidth="2" strokeLinecap="round" />
                <line x1="22" y1="30" x2="30" y2="30" stroke="#7E22CE" strokeWidth="2" strokeLinecap="round" />
                <line x1="22" y1="36" x2="28" y2="36" stroke="#7E22CE" strokeWidth="2" strokeLinecap="round" />

                {/* Magnifying Glass Overlay */}
                <circle cx="38" cy="38" r="9" stroke="#7E22CE" strokeWidth="2.5" fill="#FFFFFF" />
                <line x1="44.5" y1="44.5" x2="52" y2="52" stroke="#7E22CE" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>
          </div>

          <h1 className="form-title review-title">Profile Under Review</h1>
          
          <p className="review-subtitle">
            Once approved, you can view and manage your business!
          </p>

          {onBackToSignin && (
            <div style={{ textAlign: 'center', marginTop: '24px' }}>
              <span className="register-link" onClick={onBackToSignin} style={{ cursor: 'pointer' }}>
                Back to Sign In
              </span>
            </div>
          )}
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
