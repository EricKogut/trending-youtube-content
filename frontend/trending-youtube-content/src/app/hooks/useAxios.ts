import { useState, useEffect } from 'react';

import axios from 'axios';

declare type operation = 'get';

export interface Props {
  type?: operation;
  endpoint: string;
}

export const useAxios = ({ type = 'get', endpoint }: Props) => {
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState(null);
  const [data, setData] = useState(null);

  async function fetchData() {
    try {
      setData(null);
      setLoading(true);
      setErrors(null);

      const res = await axios[type](
        `https://www.googleapis.com/youtube/v3${endpoint}&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`
      );

      setData(res.data);
    } catch (error: any) {
      setErrors(error);
    } finally {
      setLoading(false);
    }
  }

  const refetch = () => {
    fetchData();
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [endpoint, type]);

  return { loading, errors, data, refetch };
};
