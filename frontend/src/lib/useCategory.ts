import { useEffect, useState } from 'react';
import { BACKEND_URL } from '../constant';

export const useCategory = (category: string) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetching = async () => {
      const response = await fetch(`${BACKEND_URL}/api/${category}`);
      const result = await response.json();

      console.log(result);
      setData(result);
      setLoading(false);
    };

    fetching();
  }, []);

  return { loading, data };
};
