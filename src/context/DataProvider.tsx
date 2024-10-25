import React, { createContext, ReactNode, useContext } from 'react';
import useFetch from '../hooks/useFetch';

interface DataContextType {
	data: any;
	deleteDataById: (id: string) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

interface DataProviderProps {
	children: ReactNode;
}

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
	const { data, deleteDataById } = useFetch();
	return (
		<DataContext.Provider value={{ data, deleteDataById }}>
			{children}
		</DataContext.Provider>
	);
};

export const useDataContext = (): DataContextType => {
	const context = useContext(DataContext);
	if (!context) {
		throw new Error('useDataContext must be used within a DataProvider');
	}
	return context;
};
