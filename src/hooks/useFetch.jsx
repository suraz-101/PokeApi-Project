import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      setLoading(true);
      const controller = new AbortController();
      const signal = controller.signal;
      const getData = async () => {
        const { data } = await axios.get(url, { signal });

        setData(data);
      };

      getData();

      return () => {
        controller.abort;
      };
    } catch (error) {
      setError(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }, [url]);

  return { data, loading, error };
};
