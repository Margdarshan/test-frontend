import { useState } from "react";
import api from '../../../../api';

const useDeleteData = (url) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const deleteData = async () => {
    setLoading(true);
    setError(null);
    try {
        const response = await api.delete(url);
        return response;
    } catch (err) {
      setError(err.message);
      console.error("Error deleting data:", err);
    } finally {
      setLoading(false);
    }
  };

  return { deleteData, loading, error };
};

export default useDeleteData;