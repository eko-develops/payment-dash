import { Icon, Link, Text } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { Link as RRLink } from 'react-router-dom';

interface NavLinkProps {
	label: string;
	to: string;
	icon: IconType;
}

function NavLink({ label, to, icon }: NavLinkProps) {
	return (
		<Link
			display="flex"
			alignItems="center"
			whiteSpace="nowrap"
			size="1.25rem"
			height="50px"
			to={to}
			as={RRLink}
			fontWeight="600"
		>
			<Icon as={icon} />
			<Text marginLeft="0.5rem">{label}</Text>
		</Link>
	);
}

export default NavLink;
