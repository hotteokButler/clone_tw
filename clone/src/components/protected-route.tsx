import { Navigate } from 'react-router-dom';
import { auth } from '../app/firebase_init';
import React, { useState, useEffect } from 'react';
import LoadingScreen from './loading';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [isLoggedIn]);

  if (isLoading) {
    return <LoadingScreen />;
  } else {
    if (!isLoggedIn) {
      return <Navigate to="/login" />;
    }
    return children;
  }
}

export default ProtectedRoute;
