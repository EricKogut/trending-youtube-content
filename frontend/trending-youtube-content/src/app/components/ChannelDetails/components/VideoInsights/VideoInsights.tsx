import React from 'react';
import useVideoData from './hooks/useVideoData';

export const VideoInsights = () => {
  const { loading, videoData, error } = useVideoData();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }
  console.log(videoData, 'is the data');

  return null;
};
