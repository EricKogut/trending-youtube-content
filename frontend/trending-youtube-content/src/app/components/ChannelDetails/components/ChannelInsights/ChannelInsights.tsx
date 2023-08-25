import React from 'react';
import useChannelData from './hooks/useChannelData';

export const ChannelInsights = () => {
  const { loading, channelData, error } = useChannelData();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }
  console.log(channelData, 'is the data');

  return null;
};
