import { useEffect, useCallback } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

const useChannelQueryString = (channelData: Channel | null) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams()!;

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  const getChannelId = useCallback(() => {
    if (channelData) {
      return channelData.id.channelId;
    } else {
      return null;
    }
  }, [channelData]);

  useEffect(() => {
    const channelId = getChannelId();

    if (channelId) {
      // Update the URL with the channelId as a query parameter
      router.push(pathname + '?' + createQueryString('channelId', channelId));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [channelData]);

  return {
    createQueryString,
    getChannelId,
  };
};

export default useChannelQueryString;
