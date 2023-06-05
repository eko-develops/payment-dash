import { Button, useColorMode } from '@chakra-ui/react';
import { useContext } from 'react';
import { BsMoonFill, BsFillSunFill } from 'react-icons/bs';
import { AuthContext } from '../contexts/AuthContext';
function ToggleColourMode() {
	const { isLoggedIn } = useContext(AuthContext);
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<Button
			position="absolute"
			right={isLoggedIn ? '30px' : '20px'}
			top={isLoggedIn ? '25px' : '20px'}
			onClick={() => toggleColorMode()}
			boxShadow="md"
		>
			{colorMode === 'dark' ? <BsFillSunFill /> : <BsMoonFill />}
		</Button>
	);
}

export default ToggleColourMode;
