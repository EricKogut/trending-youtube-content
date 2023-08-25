import { useState, useEffect } from 'react';
import { axiosGetRequest } from '@/app/utils/axiosGetRequest';
import { useSearchParams } from 'next/navigation';

const useVideoData = () => {
  const searchParams = useSearchParams();
  const channelId = searchParams.get('channelId');

  const [loading, setLoading] = useState(true);
  const [videoData, setVideoData] = useState<[Video] | []>([]);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchVideoData = async () => {
      const endpoint = `/search?channelId=${channelId}&part=snippet,id&order=date&maxResults=50`;

      try {
        const {
          loading: loadingResponse,
          errors,
          data: responseData,
        } = await axiosGetRequest({
          type: 'get',
          endpoint,
        });

        if (responseData) {
          setVideoData(responseData.items);
        }
        setLoading(loadingResponse);
        setError(errors as Error | null);
      } catch (error) {
        setError(error as Error | null);
      } finally {
        setLoading(false);
      }
    };

    if (channelId) {
      fetchVideoData();
    }
  }, [channelId]);

  return { loading, videoData, error };
};

export default useVideoData;
