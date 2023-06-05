import { createContext, useState, ReactNode } from 'react';

interface IThemeContext {
	theme: string;
	setTheme: React.Dispatch<React.SetStateAction<string>>;
}

interface ThemeProviderProps {
	children: ReactNode;
}

export const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
	const [theme, setTheme] = useState('dark');

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
