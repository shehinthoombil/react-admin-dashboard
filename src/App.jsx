import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import './index.css';
import { LoginPage } from './pages/Login';
import { PasswordResetPage } from './pages/PasswordResetPage';
import Dashboard from './pages/Dashboard';
import UserTable from './pages/UserList';
import LoginForm from './pages/SetNewPassword';
import { ProtectedRoute } from './Components/ProtectedRoute';
import { ToastContainer } from "react-toastify";
function App() {

  return (

    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/password-reset" element={<PasswordResetPage />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/users"
          element={
            <ProtectedRoute>
              <UserTable />
            </ProtectedRoute>
          }
        />
        <Route path="/set-new-password" element={<LoginForm />} />
      </Routes>
    </Router>

  )
}

export default App
