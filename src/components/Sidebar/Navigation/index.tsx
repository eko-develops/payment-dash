import { Flex } from '@chakra-ui/react';
import NavLink from './NavLink';
import { RxDashboard } from 'react-icons/rx';
import { ImSpinner11 } from 'react-icons/im';
import { MdOutlinePayments } from 'react-icons/md';

interface NavigationProps {
	collapse: boolean;
}

function Navigation({ collapse }: NavigationProps) {
	const getLabelText = (label: string) => {
		return collapse ? '' : label;
	};
	const dashboardLabel = getLabelText('Dashboard');
	const processPayments = getLabelText('Process Payments');
	const payments = getLabelText('Payments');
	return (
		<Flex as="nav" marginTop="2rem" flexDirection="column">
			<NavLink to="/" label={dashboardLabel} icon={RxDashboard} />
			<NavLink
				to="/process-payments"
				label={processPayments}
				icon={ImSpinner11}
			/>
			<NavLink to="/payments" label={payments} icon={MdOutlinePayments} />
		</Flex>
	);
}

export default Navigation;
