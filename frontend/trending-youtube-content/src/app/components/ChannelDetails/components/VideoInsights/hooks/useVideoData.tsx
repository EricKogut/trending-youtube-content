import { useState, useEffect } from 'react';
import { axiosGetRequest } from '@/app/utils/axiosGetRequest';
import { useSearchParams } from 'next/navigation';

const useVideoData = () => {
  const searchParams = useSearchParams();
  const channelId = searchParams.get('channelId');
  const uploadsId = channelId?.slice(0, 1) + 'U' + channelId?.slice(2);

  const [loading, setLoading] = useState(true);
  const [videoIds, setVideoIds] = useState<string>('');
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchVideoIds = async () => {
      const endpoint = `/playlistItems?playlistId=${uploadsId}&part=snippet&maxResults=50`;

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
          const ids = responseData.items
            .map((item: any) => item.snippet.resourceId.videoId)
            .join(',');
          setVideoIds(ids);
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
      fetchVideoIds();
    }
  }, [channelId]);

  return { loading, videoIds, error };
};

export default useVideoData;
