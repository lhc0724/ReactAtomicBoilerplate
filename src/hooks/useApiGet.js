import { useState } from 'react';
import httpClient from '../utils/http-client';

const useApiGet = () => {
  const [response, setResponse] = useState(undefined);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const operation = async url => {
    try {
      setLoading(true);
      const res = await httpClient.get(url);
      setResponse(res.data);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  return { response, error, loading, operation };
};

export default useApiGet;
