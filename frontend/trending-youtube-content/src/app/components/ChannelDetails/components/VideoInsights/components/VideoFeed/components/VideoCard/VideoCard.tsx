import React from 'react';
import {
  Box,
  Image,
  Text,
  Flex,
  Stat,
  StatGroup,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
} from '@chakra-ui/react';
import { VideoModal } from './components/VideoModal';

interface VideoCardProps {
  video: Video;
}

export const VideoCard = ({ video }: VideoCardProps) => {
  return (
    <Box borderWidth='1px' borderRadius='md' p='4'>
      <Flex ml='2' justify='space-between' align='center'>
        <Image
          src={video.snippet.thumbnails.default.url}
          alt={video.snippet.title}
        />
        <Text mt='2' fontSize='md' fontWeight='bold'>
          {video.snippet.title}
        </Text>
      </Flex>
      <StatGroup>
        <Stat>
          <StatLabel>Views</StatLabel>
          <StatNumber>
            {' '}
            <Text>{video.statistics.viewCount}</Text>
          </StatNumber>
        </Stat>

        <Stat>
          <StatLabel>Likes</StatLabel>
          <StatNumber> {video.statistics.likeCount}</StatNumber>
        </Stat>
        <Stat>
          <StatLabel>Virality index </StatLabel>
          <StatNumber></StatNumber>

          {video.percentageDifference > 0 ? (
            <StatHelpText>
              <StatArrow type='increase' />
              {video.percentageDifference}%
            </StatHelpText>
          ) : (
            <StatHelpText>
              <StatArrow type='decrease' />
              {video.percentageDifference}%
            </StatHelpText>
          )}
        </Stat>
      </StatGroup>
      <VideoModal videoId={video.id} />
    </Box>
  );
};
