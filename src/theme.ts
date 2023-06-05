import '@fontsource/roboto';
import '@fontsource/raleway/400.css';
import '@fontsource/open-sans/700.css';

import { ThemeConfig, extendTheme } from '@chakra-ui/react';

const config: ThemeConfig = {
	initialColorMode: 'dark',
	useSystemColorMode: true,
};

const fonts = {
	heading: `'Open Sans', sans-serif`,
	body: `Raleway, sans-serif`,
};

const colors = {
	brand: {
		tm: 'tomato',
		tl: 'teal',
	},
};

const theme = extendTheme({
	config,
	fonts,
	colors,
});

export default theme;
