import React from 'react';
import ReactDOM from 'react-dom/client';
import theme from './theme';
import App from './App.tsx';
import { ToastContainer } from './utils/toastHandler.ts';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ChakraProvider theme={theme}>
			<BrowserRouter>
				<App />
				<ColorModeScript initialColorMode={theme.config.initialColorMode} />
				<ToastContainer />
			</BrowserRouter>
		</ChakraProvider>
	</React.StrictMode>
);
