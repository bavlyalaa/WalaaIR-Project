import { useQuery } from "@tanstack/react-query";
import { axiosInstance, useAuth } from "../service/AuthProvider";
import { useDataState } from "../Components/common/data-state.context";

const useAxiosQuery = ({ endpoint, params = {}, queryKeyExtra = [], enabled = true }) => {
  const { token, isAuthReady } = useAuth();
  const { setError, setHasData } = useDataState();

  const fetchData = async () => {
    try {
      setError(null);
      const queryParams = new URLSearchParams(params).toString();
      const url = `${endpoint}?${queryParams}`;
      const { data } = await axiosInstance.get(url);

      if (Array.isArray(data) && data.length === 0) {
        setHasData(false);
      } else {
        setHasData(true);
      }

      return data;
    } catch (err) {
      setError(err.message || "Unknown error");
      throw err;
    }
  };

  const queryKey = [endpoint, ...queryKeyExtra];

  return useQuery({
    queryKey,
    queryFn: fetchData,
    enabled: isAuthReady && !!token && enabled,
    staleTime: 5 * 60 * 1000,
  });
};

export default useAxiosQuery;