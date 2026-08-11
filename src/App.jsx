import React, { useState } from 'react';
import Signin from './Components/Signin.jsx';
import Signup from './Components/Signup.jsx';

export default function App() {
  const [currentPage, setCurrentPage] = useState('signup'); // 'signin' or 'signup'

  return (
    <div>
      {currentPage === 'signin' ? (
        <Signin onSwitchToSignup={() => setCurrentPage('signup')} />
      ) : (
        <Signup onSwitchToSignin={() => setCurrentPage('signin')} />
      )}
    </div>
  );
}
