import { Box, Heading, Text } from '@chakra-ui/react';

export const Hero = () => {
  return (
    <Box>
      <Heading
        // fontWeight={800}
        fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
        lineHeight={'110%'}
        bgGradient='linear(to-l, gradientStart, gradientEnd, gradientStart, gradientEnd)'
        bgClip='text'
      >
        Youtube Channel
        <br />
        <Text as={'span'} color={'black'}>
          Insights
        </Text>
      </Heading>
    </Box>
  );
};
