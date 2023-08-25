import { useState, useEffect } from 'react';
import { axiosGetRequest } from '@/app/utils/axiosGetRequest';

const useVideoComments = (videoId: string) => {
  const [loading, setLoading] = useState(true);
  const [videoComments, setVideoComments] = useState();
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchVideoIds = async () => {
      const endpoint = `/commentThreads?textFormat=plainText&part=snippet&videoId=${videoId}&maxResults=9`;

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
          setVideoComments(responseData.items);
        }
        setLoading(loadingResponse);
        setError(errors as Error | null);
      } catch (error) {
        setError(error as Error | null);
      } finally {
        setLoading(false);
      }
    };

    if (videoId) {
      fetchVideoIds();
    }
  }, [videoId]);

  return { loading, videoComments, error };
};

export default useVideoComments;
