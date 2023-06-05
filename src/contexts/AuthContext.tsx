import { createContext, useState, ReactNode } from 'react';

interface IUser {
	id: number;
	username: string;
}

interface IAuthContext {
	isLoggedIn: boolean;
	setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
	user: IUser | null;
	setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
}

interface AuthProviderProps {
	children: ReactNode;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider = ({ children }: AuthProviderProps) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [user, setUser] = useState<IUser | null>(null);

	return (
		<AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, user, setUser }}>
			{children}
		</AuthContext.Provider>
	);
};
