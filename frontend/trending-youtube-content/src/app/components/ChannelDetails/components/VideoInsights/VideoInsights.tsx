import React, { useState, useMemo } from 'react';
import useVideoDetails from './hooks/useVideoDetails';
import { Spinner, Switch, Card, Box } from '@chakra-ui/react';
import { VideoFeed } from './components/VideoFeed';

export const VideoInsights = () => {
  const { loading, videoDetails, error } = useVideoDetails();
  const [sortByRecent, setSortByRecent] = useState(false);

  const computeVideosWithRatio = (videos: Video[]) => {
    return videos.map((video: Video) => ({
      ...video,
      likeToViewRatio:
        parseFloat(video.statistics.likeCount) /
        parseFloat(video.statistics.viewCount),
    }));
  };

  const computeSortedVideos = (videos: Video[]) => {
    return [...videos].sort(
      (a: any, b: any) => b.likeToViewRatio - a.likeToViewRatio
    );
  };

  const computeAverageRatio = (videos: Video[]) => {
    const totalRatio = videos.reduce(
      (sum, video) => sum + video.likeToViewRatio,
      0
    );
    return totalRatio / videos.length;
  };

  const videosWithRatio = useMemo(
    () => computeVideosWithRatio(videoDetails),
    [videoDetails]
  );
  const sortedVideos = useMemo(
    () => computeSortedVideos(videosWithRatio),
    [videosWithRatio]
  );

  const displayedVideos = sortByRecent ? videosWithRatio : sortedVideos;

  const averageRatio = computeAverageRatio(displayedVideos);

  const videosWithPercentageDifference = displayedVideos.map((video: Video) => {
    const difference = video.likeToViewRatio - averageRatio;
    const percentageDifference = ((difference / averageRatio) * 100).toFixed(2); // Rounded to 2 decimal places
    return {
      ...video,
      percentageDifference: parseFloat(percentageDifference), // Convert back to a number
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
        Sort by {sortByRecent ? 'Most Recent' : 'Most Viral'}
      </Switch>
      <Box as={Card} maxW='7xl' mt={4} p={4} background={'white'}>
        <VideoFeed videos={videosWithPercentageDifference} />
      </Box>
    </div>
  );
};
