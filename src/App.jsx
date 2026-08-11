import React, { useState } from 'react';
import Signin from './Components/Signin.jsx';
import Signup from './Components/Signup.jsx';
import Forgotpassword from './Components/Forgotpassword.jsx';
import Otpverification from './Components/Otpverification.jsx';

export default function App() {
  const [currentPage, setCurrentPage] = useState('otp'); // 'signin', 'signup', 'forgotpassword', 'otp'

  return (
    <div>
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
          onVerifySuccess={() => setCurrentPage('signin')}
        />
      )}
    </div>
  );
}
