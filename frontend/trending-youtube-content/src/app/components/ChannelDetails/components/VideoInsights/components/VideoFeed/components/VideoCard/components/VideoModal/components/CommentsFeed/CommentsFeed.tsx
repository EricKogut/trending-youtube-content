'use client';

import { Flex, Stack, Container, Spinner, Link } from '@chakra-ui/react';

import { ExternalLinkIcon } from '@chakra-ui/icons';
import useVideoComments from './hooks/useVideoComments';
import { Comment } from './components/Comment';
import { Hero } from '@/app/components/common/Hero';
import { CommentResponse } from './components/CommentResponse';

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
  return (
    <Flex textAlign={'center'} pt={10} overflow={'hidden'}>
      <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
        <Stack align={'center'}>
          <Hero primaryText='What your viewers are saying'></Hero>
          <Link href={'https://www.youtube.com/watch?v=' + videoId} isExternal>
            View the video <ExternalLinkIcon mx='2px' />
          </Link>
        </Stack>
        <Stack direction={'column'} spacing={10}>
          {displayedComments.map((videoComment: any) => (
            <Stack direction={'row'} key={videoComment.id}>
              {/* The actual comment */}
              <Comment videoComment={videoComment} />
              <CommentResponse videoComment={videoComment} />
            </Stack>
          ))}
        </Stack>
      </Container>
    </Flex>
  );
};
