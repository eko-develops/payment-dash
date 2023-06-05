import { useState, useContext } from 'react';

import { Button, Heading, Text, VStack, Link } from '@chakra-ui/react';
import { useNavigate, Link as RRLink } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';
import LoginFormControl from './LoginFormControl';
import { showToast } from '../../utils/toastHandler';

function Login() {
	const { setIsLoggedIn, setUser } = useContext(AuthContext);
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(false);

	const [input, setInput] = useState({
		username: '',
		password: '',
	});

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const name = e.target.name;
		const value = e.target.value;
		if (name === 'username') {
			setInput((prev) => {
				return { ...prev, username: value };
			});
		} else if (name === 'password') {
			setInput((prev) => ({ ...prev, password: value }));
		}
	};

	const handleSubmit = (e: React.FormEvent<HTMLDivElement>) => {
		e.preventDefault();

		setIsLoading(true);

		const fetchOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(input),
			credentials: 'include' as RequestCredentials,
		};

		fetch(import.meta.env.VITE_LOGIN_ENDPOINT, fetchOptions)
			.then((res) => {
				if (res.status === 401) {
					throw new Error('unauthorized');
				} else if (res.ok) {
					return res.json();
				} else {
					throw new Error(`unhandled response status: ${res.status}`);
				}
			})
			.then((data) => {
				setUser(data.user);
				setIsLoading(false);
				showToast('Login Success!', 'success');
				navigate('/');
				setIsLoggedIn(true);
			})
			.catch((err) => {
				if (err.message === 'unauthorized') {
					// display login failed stuff here
				} else {
					// unhandled response status errors
				}
				setTimeout(() => {
					showToast('Login Error!', 'error');
					setIsLoading(false);
				}, 2000);
			});
	};

	return (
		<>
			<VStack
				as="form"
				onSubmit={(e) => handleSubmit(e)}
				minWidth={{ base: '100%', sm: '480px' }}
				minHeight="100vh"
				justifyContent="center"
			>
				<VStack
					padding="1rem"
					spacing="1rem"
					minWidth={{ base: '100%', sm: '400px' }}
				>
					<Heading as="h1" fontSize={{ base: '24px', md: '32px' }}>
						Login
					</Heading>
					<LoginFormControl
						label="Username"
						type="text"
						value={input.username}
						name="username"
						onChange={handleInputChange}
						required={true}
					/>
					<LoginFormControl
						label="Password"
						type="password"
						value={input.password}
						name="password"
						onChange={handleInputChange}
						required={true}
					/>
					<Button
						isLoading={isLoading}
						width={{ base: 'full' }}
						type="submit"
						colorScheme="facebook"
					>
						Login
					</Button>
				</VStack>
				<Text fontSize={{ base: '0.9rem' }}>
					Not a user? Sign up{' '}
					<Link as={RRLink} to="/register">
						here
					</Link>
				</Text>
			</VStack>
		</>
	);
}

export default Login;
