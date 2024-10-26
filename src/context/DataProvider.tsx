import React, { createContext, ReactNode, useContext } from 'react';
import useFetch from '../hooks/useFetch';
import { TreeNode } from '../api';

interface DataContextType {
	data: TreeNode | null;
	error: string | null
	isLoading: boolean;
	deleteDataById: (id: string) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);
interface DataProviderProps {
	children: ReactNode;
}

// DataProvider component provides the context to children components
export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
	const { data, deleteDataById, isLoading, error } = useFetch();

	return (
		<DataContext.Provider value={{ data, error, isLoading, deleteDataById }}>
			{children}
		</DataContext.Provider>
	);
};

// Custom hook to access DataContext values
export const useDataContext = (): DataContextType => {
	const context = useContext(DataContext);

	if (!context) {
		throw new Error('useDataContext must be used within a DataProvider');
	}
	return context;
};
