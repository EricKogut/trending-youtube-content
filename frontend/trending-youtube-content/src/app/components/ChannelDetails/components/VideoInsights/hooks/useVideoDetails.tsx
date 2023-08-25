import { useState, useEffect } from 'react';
import { axiosGetRequest } from '@/app/utils/axiosGetRequest';
import { useSearchParams } from 'next/navigation';
import useVideoData from './useVideoData';

const useVideoDetails = () => {
  const {
    loading: videoDataLoading,
    videoIds,
    error: videoDataError,
  } = useVideoData();
  const [loading, setLoading] = useState(true);
  const [videoDetails, setVideoDetails] = useState<Video[]>([]);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchVideoDetails = async () => {
      if (!videoDataLoading && videoIds) {
        const endpoint = `/videos?id=${videoIds}&part=snippet,statistics`;

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
            setVideoDetails(responseData.items);
          }
          setLoading(loadingResponse);
          setError(errors as Error | null);
        } catch (error) {
          setError(error as Error | null);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchVideoDetails();
  }, [videoIds, videoDataLoading]);

  return { loading, videoDetails, error: videoDataError || error };
};

export default useVideoDetails;
