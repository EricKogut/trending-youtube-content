import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

interface HeroProps {
  primaryText?: string | undefined;
  secondaryText?: string | undefined;
}

export const Hero: React.FC<HeroProps> = ({ primaryText, secondaryText }) => {
  return (
    <Box>
      <Heading
        fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
        lineHeight={'110%'}
        bgGradient='linear(to-l, gradientStart, gradientEnd, gradientStart, gradientEnd)'
        bgClip='text'
        pb={6}
      >
        {primaryText}
        <br />
        <Text as={'span'} color={'black'}>
          {secondaryText}
        </Text>
      </Heading>
    </Box>
  );
};
