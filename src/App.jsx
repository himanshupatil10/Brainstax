import React, { useState } from 'react';
import Signin from './Components/Signin.jsx';
import Signup from './Components/Signup.jsx';
import Forgotpassword from './Components/Forgotpassword.jsx';
import Otpverification from './Components/Otpverification.jsx';
import Underapproval from './Components/Underapproval.jsx';

export default function App() {
  const [currentPage, setCurrentPage] = useState('underapproval'); // 'signin', 'signup', 'forgotpassword', 'otp', 'underapproval'

  return (
    <div>
      {/* Top Demo View Selector Pill Bar */}
      <div
        style={{
          position: 'fixed',
          bottom: '16px',
          right: '16px',
          zIndex: 9999,
          background: 'rgba(30, 27, 75, 0.92)',
          backdropFilter: 'blur(8px)',
          padding: '6px 12px',
          borderRadius: '30px',
          display: 'flex',
          gap: '6px',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.25)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
        }}
      >
        <button
          onClick={() => setCurrentPage('signin')}
          style={{
            background: currentPage === 'signin' ? '#7E22CE' : 'transparent',
            color: '#FFFFFF',
            border: 'none',
            padding: '6px 12px',
            borderRadius: '20px',
            fontSize: '0.75rem',
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          Sign In
        </button>
        <button
          onClick={() => setCurrentPage('signup')}
          style={{
            background: currentPage === 'signup' ? '#7E22CE' : 'transparent',
            color: '#FFFFFF',
            border: 'none',
            padding: '6px 12px',
            borderRadius: '20px',
            fontSize: '0.75rem',
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          Sign Up
        </button>
        <button
          onClick={() => setCurrentPage('forgotpassword')}
          style={{
            background: currentPage === 'forgotpassword' ? '#7E22CE' : 'transparent',
            color: '#FFFFFF',
            border: 'none',
            padding: '6px 12px',
            borderRadius: '20px',
            fontSize: '0.75rem',
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          Forgot Password
        </button>
        <button
          onClick={() => setCurrentPage('otp')}
          style={{
            background: currentPage === 'otp' ? '#7E22CE' : 'transparent',
            color: '#FFFFFF',
            border: 'none',
            padding: '6px 12px',
            borderRadius: '20px',
            fontSize: '0.75rem',
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          OTP Verification
        </button>
        <button
          onClick={() => setCurrentPage('underapproval')}
          style={{
            background: currentPage === 'underapproval' ? '#7E22CE' : 'transparent',
            color: '#FFFFFF',
            border: 'none',
            padding: '6px 12px',
            borderRadius: '20px',
            fontSize: '0.75rem',
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          Under Approval
        </button>
      </div>

      {currentPage === 'signin' && (
        <Signin
          onSwitchToSignup={() => setCurrentPage('signup')}
          onSwitchToForgot={() => setCurrentPage('forgotpassword')}
        />
      )}

      {currentPage === 'signup' && (
        <Signup
          onSwitchToSignin={() => setCurrentPage('signin')}
        />
      )}

      {currentPage === 'forgotpassword' && (
        <Forgotpassword
          onSwitchToSignin={() => setCurrentPage('signin')}
          onSendOtpSuccess={() => setCurrentPage('otp')}
        />
      )}

      {currentPage === 'otp' && (
        <Otpverification
          onSwitchToSignin={() => setCurrentPage('signin')}
          onVerifySuccess={() => setCurrentPage('underapproval')}
        />
      )}

      {currentPage === 'underapproval' && (
        <Underapproval
          onBackToSignin={() => setCurrentPage('signin')}
        />
      )}
    </div>
  );
}
