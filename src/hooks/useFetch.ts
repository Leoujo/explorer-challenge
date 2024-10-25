import { useEffect, useState, useCallback } from "react";

import api, { TreeNode } from "../api";

// Encapsulates api logic
export default function useFetch() {
  const [data, setData] = useState<TreeNode | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await api.getDirectoryTree();
        setData(response);
      } catch (err) {
        setError("Failed to fetch directory tree.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const deleteDataById = useCallback(async (id: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.deleteById(id);
      setData(response);
    } catch (err) {
      setError("Failed to delete the item.");
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, deleteDataById, loading, error };
}
