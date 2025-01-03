import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './index.css';
import { LoginPage } from './pages/Login';
import { PasswordResetPage } from './pages/PasswordResetPage';
import Dashboard from './pages/Dashboard';
import UserTable from './pages/UserList';
import LoginForm from './pages/SetNewPassword';
import Blank from './pages/Blank';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/password-reset" element={<PasswordResetPage />} />
        <Route path="/set-new-password" element={<LoginForm />} />
        
        {/* Protected Routes */}
        <Route path="*" element={<ProtectedRoute />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="users" element={<UserTable />} />
          <Route path="gift" element={<Blank />} />
          <Route path="profile" element={<Blank />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
