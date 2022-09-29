import { Navigate, Outlet } from 'react-router-dom';
import { useMySelector } from '../../utils/types';

export const ProtectedRoute = () => {
  const { isAuth } = useMySelector((store) => store.profile);
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
}




