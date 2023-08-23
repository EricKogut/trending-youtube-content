'use client';
import React, { useState, useEffect } from 'react';

import { Box, Heading, Spinner } from '@chakra-ui/react';
import { useAxios } from './hooks/useAxios';
export const Home = () => {
  const [channelData, setChannelData] = useState<Channel | null>(null); // Initialize with null or an initial value

  const endpoint = '/channels?forUsername=aragusea';

  const { loading, errors, data, refetch } = useAxios({
    type: 'get',
    endpoint,
  });

  useEffect(() => {
    if (data) {
      setChannelData(data);
    }
  }, [data]);

  if (errors) {
    return <>oops, an error has occurred</>;
  }

  if (loading) {
    return <Spinner />;
  }

  return (
    <Box>
      <Heading>This is the landing page</Heading>
    </Box>
  );
};

export default Home;
