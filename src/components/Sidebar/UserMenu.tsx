import {
	IconButton,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
} from '@chakra-ui/react';
import { MdOutlineMoreHoriz } from 'react-icons/md';
import { showToast } from '../../utils/toastHandler';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { BiLogOut } from 'react-icons/bi';

function UserMenu() {
	const { setIsLoggedIn } = useContext(AuthContext);
	const handleLogout = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();

		const fetchOptions = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			credentials: 'include' as RequestCredentials,
		};
		fetch(import.meta.env.VITE_LOGOUT_ENDPOINT, fetchOptions)
			.then((res) => {
				if (res.status === 401) {
					throw new Error('unauthorized');
				} else if (res.ok) {
					return res.json();
				} else {
					throw new Error(`unhandled response status code: ${res.status}`);
				}
			})
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			.then((_data) => {
				// console.log(data);
				showToast('Logout Success!', 'success');
				setIsLoggedIn(false);
			})
			.catch((err) => {
				if (err.message === 'unauthorized') {
					// handle in the case there was an error logging out
				} else {
					// handle unhandled response status codes
				}
			});
	};
	return (
		<Menu>
			<MenuButton
				as={IconButton}
				aria-label="Options"
				icon={<MdOutlineMoreHoriz />}
				borderRadius="full"
				color="gray.400"
				variant="ghost"
				fontSize={20}
			/>
			<MenuList>
				<MenuItem icon={<BiLogOut />} onClick={handleLogout}>
					Logout
				</MenuItem>
			</MenuList>
		</Menu>
	);
}

export default UserMenu;
