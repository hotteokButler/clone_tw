import { Navigate } from 'react-router-dom';
import { auth } from '../app/firebase_init';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const user = auth.currentUser;
  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
}

export default ProtectedRoute;
