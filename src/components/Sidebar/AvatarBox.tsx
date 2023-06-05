import { Avatar, Flex, Text } from '@chakra-ui/react';
import UserMenu from './UserMenu';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

interface AvatarBoxProps {
	collapse: boolean;
}

function AvatarBox({ collapse }: AvatarBoxProps) {
	const { user } = useContext(AuthContext);
	return (
		<Flex
			borderWidth={collapse ? 0 : 1}
			borderColor="gray.100"
			borderRadius="full"
			width="full"
			padding="2px"
			alignItems="center"
			justifyContent="space-between"
			gap="10px"
			flexDirection={collapse ? 'column-reverse' : 'row'}
		>
			{!collapse && (
				<>
					<Avatar name={user?.username.charAt(0)} bg="teal.300" />

					<Flex
						width="full"
						flexDirection="column"
						gap="18px"
						justifyContent="center"
						alignItems="flex-start"
					>
						<Text as="small" color="gray.500" fontSize={12} lineHeight={0}>
							Logged in as
						</Text>
						<Text fontSize="sm" fontWeight="bold" pb="0" lineHeight={0}>
							{user?.username}
						</Text>
					</Flex>
				</>
			)}

			<UserMenu />
		</Flex>
	);
}

export default AvatarBox;
