'use client';

import { Flex, SimpleGrid } from '@chakra-ui/react';
import { ChannelInsights } from './components/ChannelInsights';
import { VideoInsights } from './components/VideoInsights';

export const ChannelDetails = () => {
  return (
    <>
      <Flex
        textAlign={'center'}
        pt={10}
        justifyContent={'center'}
        direction={'column'}
        width={'full'}
        mb={20}
      >
        <SimpleGrid columns={{ base: 1 }} spacing={'4'} mt={16} mx={'auto'}>
          <ChannelInsights />
          <VideoInsights />
        </SimpleGrid>{' '}
      </Flex>
    </>
  );
};
