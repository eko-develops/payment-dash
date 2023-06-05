import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { Icon } from '@chakra-ui/react';

interface ToggleSidebarProps {
	collapse: boolean;
	setCollapse: React.Dispatch<React.SetStateAction<boolean>>;
}

function ToggleSidebar({ collapse, setCollapse }: ToggleSidebarProps) {
	const handleSlider = () => {
		if (collapse) {
			setCollapse(false);
		} else {
			setCollapse(true);
		}
	};
	return (
		<>
			{collapse ? (
				<Icon
					as={BsArrowRightShort}
					_hover={{ cursor: 'pointer' }}
					boxSize="20px"
					onClick={handleSlider}
					position="relative"
					right="2px"
				/>
			) : (
				<Icon
					as={BsArrowLeftShort}
					_hover={{ cursor: 'pointer' }}
					boxSize="20px"
					onClick={handleSlider}
					position="relative"
					right="2px"
				/>
			)}
		</>
	);
}

export default ToggleSidebar;
