import { FormControl, FormLabel, Input, useColorMode } from '@chakra-ui/react';

interface LoginFormControlProps {
	label: string;
	type: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	name: string;
	required: boolean;
}

function LoginFormControl({
	label,
	type,
	value,
	onChange,
	name,
	required,
}: LoginFormControlProps) {
	const { colorMode } = useColorMode();

	const inputBorder = {
		light: '1px solid rgba(0, 0, 0, 0.5)',
		dark: '1px solid rgba(255, 255, 255, 0.5)',
	};

	return (
		<FormControl>
			<FormLabel fontWeight="bold">{label}</FormLabel>
			<Input
				border={inputBorder[colorMode]}
				type={type}
				value={value}
				onChange={(e) => onChange(e)}
				name={name}
				required={required}
			/>
		</FormControl>
	);
}

export default LoginFormControl;
