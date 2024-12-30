
import { Navigate } from 'react-router-dom';

export function ProtectedRoute({ children }) {
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    
    if (!isAuthenticated) {
        return <Navigate to="/" />;
    }
    
    return children;
}