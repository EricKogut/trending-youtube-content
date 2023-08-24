'use client';

import { Flex, SimpleGrid } from '@chakra-ui/react';

import { Blur } from './components/Blur';
import { ExplanationCard } from './components/ExplanationCard/ExplanationCard';
import { Hero } from './components/Hero/Hero';
import { SearchInput } from './components/SearchInput';
export const Search = () => {
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
          <Hero />
          <ExplanationCard />
          <SearchInput />
          <Blur
            position={'absolute'}
            bottom={0}
            right={-40}
            style={{ filter: 'blur(100px)' }}
            rotate={'45deg'}
          />
          <Blur
            position={'absolute'}
            top={140}
            left={10}
            style={{ filter: 'blur(100px)' }}
            rotate={'45deg'}
          />
        </SimpleGrid>{' '}
      </Flex>
    </>
  );
};
