import { AuthProvider } from './contexts/AuthContext';

import { Box, useColorMode } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import Login from './components/Login';
import ProtectedRoutes from './components/ProtectedRoutes';
import ToggleColourMode from './components/ToggleColourMode';
import MainLayout from './components/Layouts/MainLayout';

function App() {
	const { colorMode } = useColorMode();

	const bgColor = {
		light: '#eee',
		dark: '#111',
	};

	const textColor = {
		light: '#333',
		dark: '#fff',
	};

	return (
		<AuthProvider>
			<Box
				backgroundColor={bgColor[colorMode]}
				minHeight="100vh"
				minWidth="100%"
				color={textColor[colorMode]}
			>
				<ToggleColourMode />
				<Routes>
					<Route element={<ProtectedRoutes />}>
						<Route
							path="/"
							element={
								<MainLayout>
									<Home />
								</MainLayout>
							}
						/>
					</Route>
					<Route path="/login" element={<Login />} />
				</Routes>
			</Box>
		</AuthProvider>
	);
}

export default App;
