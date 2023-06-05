import { Box, Flex } from '@chakra-ui/react';
import Sidebar from '../Sidebar';
import { ReactNode } from 'react';

interface MainLayoutProps {
	children: ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
	return (
		<Flex flexDirection="row" minHeight="100vh" width="100%" padding="1rem">
			<Sidebar />
			<Box
				as="main"
				backgroundColor="white"
				padding="1rem"
				width="100%"
				transition="ease-in-out .2s"
				borderRadius="3xl"
				boxShadow="md"
				marginLeft="1rem"
			>
				{children}
			</Box>
		</Flex>
	);
}

export default MainLayout;
