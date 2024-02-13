import { useState } from 'react';
import httpClient from '../utils/http-client';

const useApiPut = () => {
  const [response, setResponse] = useState(undefined);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const operation = async (url, data) => {
    try {
      setLoading(true);
      const res = await httpClient.put(url, data);
      setResponse(res.data);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  return { response, error, loading, operation };
};

export default useApiPut;
