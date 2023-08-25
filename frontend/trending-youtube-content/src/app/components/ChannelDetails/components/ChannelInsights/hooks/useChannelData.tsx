import { useState, useEffect } from 'react';
import { axiosGetRequest } from '@/app/utils/axiosGetRequest';
import { useSearchParams } from 'next/navigation';

const useChannelData = () => {
  const searchParams = useSearchParams();
  const channelId = searchParams.get('channelId');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [channelData, setChannelData] = useState<Channel | null>(null);

  useEffect(() => {
    const fetchChannelData = async () => {
      const parts =
        '&part=snippet,contentDetails,statistics,status,topicDetails';
      const endpoint = `/channels?id=${channelId}${parts}`;

      try {
        const {
          loading: loadingResponse,
          errors,
          data: responseData,
        } = await axiosGetRequest({
          type: 'get',
          endpoint,
        });

        setLoading(loadingResponse);
        if (responseData) {
          setChannelData(responseData.items[0]);
        }
        setError(errors as Error | null);
      } catch (error) {
        setError(error as Error | null);
      } finally {
        setLoading(false);
      }
    };

    if (channelId) {
      fetchChannelData();
    }
  }, [channelId]);

  return { loading, channelData, error };
};

export default useChannelData;
