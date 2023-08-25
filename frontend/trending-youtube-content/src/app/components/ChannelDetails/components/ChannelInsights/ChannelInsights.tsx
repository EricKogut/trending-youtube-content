'use client';

import useChannelData from './hooks/useChannelData';
import { Hero } from '@/app/components/common/Hero';

import {
  Box,
  Flex,
  Divider,
  chakra,
  Grid,
  GridItem,
  Container,
  Avatar,
  Card,
  Spinner,
  Stack,
  Heading,
  Text,
} from '@chakra-ui/react';

interface StatisticItemProps {
  heading: string;
  text: string | undefined;
}

const StatisticItem = ({ heading, text }: StatisticItemProps) => {
  return (
    <GridItem>
      <chakra.h3 fontSize='xl' fontWeight='600'>
        {heading}
      </chakra.h3>
      <chakra.p>{text}</chakra.p>
    </GridItem>
  );
};

export const ChannelInsights = () => {
  const { loading, channelData, error } = useChannelData();

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <>{error.message}</>;
  }
  console.log(channelData, 'is the data');
  return (
    <Box as={Card} maxW='7xl' mt={14} p={4} background={'white'}>
      <Grid
        templateColumns={{
          base: 'repeat(4, 1fr)',
          sm: 'repeat(4, 1fr)',
          md: 'repeat(4, 1fr)',
        }}
        gap={4}
      >
        <GridItem colSpan={2}>
          <Avatar
            size='2xl'
            name='Segun Adebayo'
            src={channelData?.snippet.thumbnails.high.url}
          />{' '}
          <Hero primaryText={channelData?.snippet.title} />
        </GridItem>
        <GridItem colSpan={1}>
          <Flex>
            <Stack spacing={4} as={Container} textAlign={'center'} mt={12}>
              <Text color={'gray.600'} fontSize={'xl'} noOfLines={12}>
                {'"'}
                {channelData?.snippet.description}
                {'"'}
              </Text>
            </Stack>
          </Flex>
        </GridItem>
        <GridItem colSpan={1}>
          <Flex>
            <Stack spacing={4} as={Container} textAlign={'center'} mt={12}>
              <Heading fontSize={'3xl'}>
                Created: {channelData?.snippet.publishedAt}
              </Heading>
            </Stack>
          </Flex>
        </GridItem>
      </Grid>
      <Divider mt={12} mb={4} />
      <Grid templateColumns={'repeat(4, 1fr)'}>
        <StatisticItem
          heading={'Subscribers'}
          text={channelData?.statistics.subscriberCount}
        />
        <StatisticItem
          heading={'Videos'}
          text={channelData?.statistics.videoCount}
        />
        <StatisticItem
          heading={'Views'}
          text={channelData?.statistics.viewCount}
        />
        <StatisticItem
          heading={'Handle'}
          text={channelData?.snippet.customUrl}
        />
      </Grid>
    </Box>
  );
};
