import { useEffect, useState } from "react"
import api, { TreeNode } from "../api"

// fix: add error and loading handler.
export default function useFetch() {
	const [data, setData] = useState<TreeNode | null>()

	useEffect(() => {
		const fetchData = async () => {
			const response = await api.getDirectoryTree()
			setData(response)
		}
		
		fetchData()
	}, [])

	const deleteData = async (id: string) => {
		const response = await api.deleteById(id)
		setData(response)
	}

	return {data, deleteData};
}