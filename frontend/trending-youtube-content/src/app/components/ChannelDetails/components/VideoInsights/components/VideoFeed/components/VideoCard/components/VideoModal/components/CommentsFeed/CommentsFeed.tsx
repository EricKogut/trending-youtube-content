'use client';

import {
  Box,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  chakra,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
  Spinner,
  Button,
  Textarea,
} from '@chakra-ui/react';

interface Props {
  children: React.ReactNode;
}

import useVideoComments from './hooks/useVideoComments';
import { Hero } from '@/app/components/common/Hero';

const CommentAvatar = ({ src, name }: { src: string; name: string }) => {
  return (
    <Flex align={'center'} mt={8} direction={'column'}>
      <Avatar src={src} mb={2} />
      <Stack spacing={-1} align={'center'}>
        <Text fontWeight={600}>{name}</Text>
      </Stack>
    </Flex>
  );
};

const CommentContent = ({ videoComment }: any) => {
  console.log(videoComment);
  return (
    <Flex
      boxShadow={'lg'}
      maxW={'640px'}
      width={'full'}
      rounded={'xl'}
      p={10}
      justifyContent={'space-between'}
      position={'relative'}
      bg={useColorModeValue('white', 'gray.800')}
    >
      <Flex
        direction={'column'}
        textAlign={'left'}
        justifyContent={'space-between'}
      >
        {videoComment.snippet.topLevelComment.snippet.textOriginal}

        <chakra.p fontWeight={'medium'}>
          {'Posted'}
          <chakra.span fontWeight={'medium'} color={'gray.500'}>
            {' '}
            - {videoComment.snippet.topLevelComment.snippet.publishedAt}
          </chakra.span>
        </chakra.p>
      </Flex>
      <CommentAvatar
        src={videoComment.snippet.topLevelComment.snippet.authorProfileImageUrl}
        name={videoComment.snippet.topLevelComment.snippet.authorDisplayName}
      />
    </Flex>
  );
};
interface CommentsFeedProps {
  videoId: string;
}

export const CommentsFeed = ({ videoId }: CommentsFeedProps) => {
  const { loading, videoComments, error } = useVideoComments(videoId);

  // This is kinda bad, don't have good typings for this, but had to supress map error
  const displayedComments: any[] = videoComments || [];

  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return 'An error has occurred';
  }
  console.log(videoComments, 'are the comments');
  return (
    <Flex textAlign={'center'} pt={10} overflow={'hidden'}>
      <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
        <Stack align={'center'}>
          <Hero primaryText='What your viewers are saying'></Hero>
        </Stack>
        <Stack direction={'column'} spacing={10}>
          {displayedComments.map((videoComment: any) => (
            <Stack direction={'row'} key={videoComment.id}>
              <CommentContent videoComment={videoComment} />

              <Stack
                boxShadow={'lg'}
                maxW={'640px'}
                direction='column'
                width={'full'}
                p={10}
                justifyContent={'space-between'}
              >
                <InputGroup size='lg'>
                  <Textarea
                    placeholder={`Thanks for your comment ${videoComment.snippet.topLevelComment.snippet.authorDisplayName}!`}
                    size='sm'
                  />

                  <InputRightElement width='4.5rem'>
                    <Button size='sm' variant={'ghost'}>
                      Send
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <Flex
                  direction={'row'}
                  justifyContent={'space-between'}
                  position={'relative'}
                >
                  <Button>Like</Button>

                  <Button>Share</Button>
                  <Button>Report</Button>
                </Flex>
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Container>
    </Flex>
  );
};
