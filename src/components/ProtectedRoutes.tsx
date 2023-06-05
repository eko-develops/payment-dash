import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { AuthContext } from '../contexts/AuthContext';

function ProtectedRoutes() {
	const { isLoggedIn } = useContext(AuthContext);

	return isLoggedIn ? <Outlet /> : <Navigate to="/login" replace={true} />;
}

export default ProtectedRoutes;
