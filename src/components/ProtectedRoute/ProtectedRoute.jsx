import React from 'react';
import { Navigate } from "react-router-dom";
import Preloader from '../Preloader/Preloader';

function ProtectedRouteElement({ isLoggedIn , isCheckAuth, children }) {
  return (
    <>
      { isCheckAuth ? <Preloader/> : isLoggedIn ?  children : <Navigate to="/" replace />}
    </>
  );
}

export default ProtectedRouteElement;
