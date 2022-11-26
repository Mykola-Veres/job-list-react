import { useEffect, useState } from 'react';
import * as JobDataAPI from '../services/fetchJobData';

type TItem = {
  address: string;
  benefits: Array<string>;
  createdAt: string;
  description: string;
  email: string;
  employment_type: string[];
  id: string;
  location: object;
  name: string;
  phone: string;
  pictures: Array<string>;
  salary: string;
  title: string;
  updatedAt: string;
};

export const useFetchJobDataAPI = () => {
  const [items, setItems] = useState<TItem[]>([]);
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
