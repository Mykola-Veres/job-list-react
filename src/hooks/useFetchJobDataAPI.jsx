import { useEffect, useState } from 'react';
import * as JobDataAPI from '../services/fetchJobData';

export const useFetchJobDataAPI = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchJobDataAPI() {
      setLoading(true);
      try {
        const items = await JobDataAPI.fetchJobData();
        setItems(items);
        console.log(items);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    }
    fetchJobDataAPI();
  }, []);
  return { items, loading };
};
