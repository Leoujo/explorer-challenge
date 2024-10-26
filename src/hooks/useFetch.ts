import { useEffect, useState } from "react";
import api, { TreeNode } from "../api";

export default function useFetch() {
	const [data, setData] = useState<TreeNode | null>(null);
	const [error, setError] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	// Handler loading and error states and call the given async function
	const asyncHandler = async (apiCall: () => Promise<TreeNode>) => {
		setIsLoading(true);
		setError(null);
		try {
			const response = await apiCall();
			setData(response);
		} catch (err) {
			setError("An error occurred while processing the request.");
		} finally {
			setIsLoading(false);
		}
	};

	// Fetches data on component mount
	useEffect(() => {
		asyncHandler(api.getDirectoryTree);
	}, []);

	// Deletes data by id and refreshes the data state
	const deleteDataById = async (id: string) => {
		await asyncHandler(() => api.deleteById(id));
	};

	return { data, error, isLoading, deleteDataById, };
}
