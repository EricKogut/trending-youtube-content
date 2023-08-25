import React from 'react';
import { SimpleGrid } from '@chakra-ui/react';
import { VideoCard } from './components/VideoCard';

interface VideoFeedProps {
  videos: Video[];
}

export const VideoFeed = ({ videos }: VideoFeedProps) => {
  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing='4'>
      {videos.map((video: Video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </SimpleGrid>
  );
};
