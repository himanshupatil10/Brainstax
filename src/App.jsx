import React, { useState } from 'react';
import Signin from './Components/Signin.jsx';
import Signup from './Components/Signup.jsx';
import Forgotpassword from './Components/Forgotpassword.jsx';

export default function App() {
  const [currentPage, setCurrentPage] = useState('forgotpassword'); // 'signin', 'signup', or 'forgotpassword'

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
          onSwitchToSignup={() => setCurrentPage('signup')}
        />
      )}
    </div>
  );
}
