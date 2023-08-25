'use client';

import { Flex, SimpleGrid } from '@chakra-ui/react';

import { ExplanationCard } from './components/ExplanationCard/ExplanationCard';
import { Hero } from '../common/Hero/Hero';
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
          <Hero primaryText='Youtube Channel' secondaryText='Insights' />
          <ExplanationCard />
          <SearchInput />
        </SimpleGrid>{' '}
      </Flex>
    </>
  );
};
