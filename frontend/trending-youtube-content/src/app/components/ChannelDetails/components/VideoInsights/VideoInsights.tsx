import React, { useState, useMemo } from 'react';
import useVideoDetails from './hooks/useVideoDetails';
import { Spinner, Switch, Card, Box } from '@chakra-ui/react';
import { VideoFeed } from './components/VideoFeed';
import {
  computeVideosWithRatio,
  computeSortedVideos,
  computeAverageRatio,
} from './utils/videoAnalysis';

export const VideoInsights = () => {
  const { loading, videoDetails, error } = useVideoDetails();
  const [sortByRecent, setSortByRecent] = useState(false);

  // Compute the ratio of likes to views
  const videosWithRatio = useMemo(
    () => computeVideosWithRatio(videoDetails),
    [videoDetails]
  );

  // Sort the videos based on the ratio copmuted
  const sortedVideos = useMemo(
    () => computeSortedVideos(videosWithRatio),
    [videosWithRatio]
  );

  // Determine if user wants the most recent videos or videos with ratio
  const displayedVideos = sortByRecent ? videosWithRatio : sortedVideos;

  const averageRatio = computeAverageRatio(displayedVideos);

  // Add the % difference between the videos, based on teh ratio of lieks to views
  const videosWithPercentageDifference = displayedVideos.map((video: Video) => {
    const difference = video.likeToViewRatio - averageRatio;
    const percentageDifference = ((difference / averageRatio) * 100).toFixed(2); // Round
    return {
      ...video,
      percentageDifference: parseFloat(percentageDifference), // Convert back to number
    };
  });

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <Switch
        mt={4}
        isChecked={sortByRecent}
        onChange={() => setSortByRecent(!sortByRecent)}
      >
        Switch to {sortByRecent ? 'Most Viral' : 'Most Recent'}
      </Switch>
      <Box as={Card} maxW='7xl' mt={4} p={4} background={'white'}>
        <VideoFeed videos={videosWithPercentageDifference} />
      </Box>
    </div>
  );
};
