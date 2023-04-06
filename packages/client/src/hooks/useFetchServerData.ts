import { useEffect } from 'react';

export const useFetchServerData = () => {
  useEffect(() => {
    const fetchServerData = async () => {
      const url = `http://localhost:${SERVER_PORT}/api`;
      const response = await fetch(url);
      const data = await response.json();

      // eslint-disable-next-line no-console
      console.log(data);
    };
    fetchServerData();
  }, []);
};
