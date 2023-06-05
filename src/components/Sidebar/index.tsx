import { Flex } from '@chakra-ui/react';
import Brand from './Brand';
import Navigation from './Navigation';
import AvatarBox from './AvatarBox';
import { useState } from 'react';
import ToggleSidebar from './ToggleSidebar';

function Sidebar() {
	const [collapse, setCollapse] = useState(false);

	return (
		<Flex
			backgroundColor="white"
			as="aside"
			minHeight="100%"
			width={collapse ? '46px' : '300px'}
			padding="1rem"
			alignItems="start"
			flexDirection="column"
			justifyContent="space-between"
			transition="ease-in-out .2s"
			borderRadius="3xl"
			boxShadow="md"
		>
			<Flex flexDirection="column">
				<ToggleSidebar collapse={collapse} setCollapse={setCollapse} />
				<Brand collapse={collapse} />
				<Navigation collapse={collapse} />
			</Flex>
			<AvatarBox collapse={collapse} />
		</Flex>
	);
}

export default Sidebar;
