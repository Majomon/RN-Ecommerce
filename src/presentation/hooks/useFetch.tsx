import axios from 'axios';
import {useEffect, useState} from 'react';
import {Item} from '../../interfaces/item.interface';

export const useFetch = () => {
  const [data, setData] = useState<Item[]>([]);
  const [isLoading, isSetLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);

  const fetchData = async () => {
    isSetLoading(true);
    try {
      const response = await axios.get('https://back-rn-ecommerce.vercel.app/api/products');
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
