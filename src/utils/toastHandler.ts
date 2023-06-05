import { createStandaloneToast } from '@chakra-ui/react';

interface ShowToastFunc {
	(
		title: string,
		status?: 'info' | 'warning' | 'success' | 'error' | 'loading' | undefined,
		description?: string,
		duration?: number,
		isClosable?: boolean
	): void;
}

export const { ToastContainer } = createStandaloneToast();

export const showToast: ShowToastFunc = (
	title,
	status = undefined,
	description = '',
	duration = 3000,
	isClosable = true
) => {
	const { toast } = createStandaloneToast();

	toast({
		title,
		description,
		status,
		duration,
		isClosable,
		position: 'top',
	});
};
