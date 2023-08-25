import React from 'react';
import useVideoData from './hooks/useVideoData';
import useVideoDetails from './hooks/useVideoDetails';

export const VideoInsights = () => {
  const { loading, videoDetails, error } = useVideoDetails();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return null;
};
