import { Heading, Icon } from '@chakra-ui/react';
import { BiLayer } from 'react-icons/bi';

interface BrandProps {
	collapse: boolean;
}

function Brand({ collapse }: BrandProps) {
	return (
		<Heading
			display="flex"
			alignItems="center"
			whiteSpace="nowrap"
			size="1.25rem"
			height="50px"
		>
			<Icon
				as={BiLayer}
				position="relative"
				right="2px"
				marginRight="0.5rem"
				boxSize="20px"
			/>
			{!collapse && 'Markeetz Dashboard'}
		</Heading>
	);
}

export default Brand;
