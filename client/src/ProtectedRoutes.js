import React from 'react';
import { Outlet } from 'react-router-dom';
import LoginPage from './pages/LoginPage';


const ProtectedRoutes = ({ user }) => {

    return user ? <Outlet /> : <LoginPage />
};

export default ProtectedRoutes;