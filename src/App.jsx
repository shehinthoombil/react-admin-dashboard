import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css';
import {LoginPage} from './pages/Login';
import { PasswordResetPage } from './pages/PasswordResetPage';
import Dashboard from './pages/Dashboard';
import UserTable from './pages/UserList';

function App() {

  return (
    <>
      <LoginPage/>
      <PasswordResetPage/>
      <Dashboard/>
      <UserTable/>
      
    </>
  )
}

export default App
