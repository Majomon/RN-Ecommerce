import axios from 'axios';
import {useEffect, useState} from 'react';

export const useFetch = () => {
  const [data, setData] = useState([]);
  const [isLoading, isSetLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);

  const fetchData = async () => {
    isSetLoading(true);
    try {
      const response = await axios.get('http://192.168.0.6:3000/api/products');
      setData(response.data);
      isSetLoading(false);
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error)) {
        setError(error.message);
      } else {
        setError('An unexpected error occurred');
      }
      isSetLoading(false);
    } finally {
      isSetLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {data, isLoading, error, fetchData};
};
