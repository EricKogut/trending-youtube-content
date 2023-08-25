'use client';

import { Flex, SimpleGrid, Button } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

import { ChannelInsights } from './components/ChannelInsights';
import { VideoInsights } from './components/VideoInsights';
import Link from 'next/link';

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
          <Link href='/'>
            <SearchIcon />
            <Button
              bgGradient='linear(to-l, gradientStart, gradientEnd, gradientStart, gradientEnd)'
              bgClip='text'
            >
              Find another channel
              <SearchIcon />
            </Button>
          </Link>
          <ChannelInsights />
          <VideoInsights />
        </SimpleGrid>{' '}
      </Flex>
    </>
  );
};
