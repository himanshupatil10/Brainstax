import React, { useState } from 'react'
import Signup from './Components/Signup.jsx';

export default function App() {
  const [currentPage, setCurrentPage] = useState('signup'); // 'signin' or 'signup'

  return (
    <div>
      {currentPage === 'signup' ? (
        <Signin onSwitchToSignup={() => setCurrentPage('signup')} />
      ) : 
    }
      
      
    </div>
  );
}
