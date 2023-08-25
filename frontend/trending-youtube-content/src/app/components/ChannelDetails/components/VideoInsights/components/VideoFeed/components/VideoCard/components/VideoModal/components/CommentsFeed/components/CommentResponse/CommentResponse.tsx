import {
  Flex,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Textarea,
} from '@chakra-ui/react';

import useSuggestedCompletion from './hooks/useSuggestedCompletion';

export const CommentResponse = ({ videoComment }: any) => {
  // TODO: add some actual async logic to get the comment data
  const { loading, error, response } = useSuggestedCompletion(videoComment);

  if (error) {
    return error?.message;
  }

  return (
    <Stack
      boxShadow={'lg'}
      maxW={'640px'}
      direction='column'
      width={'full'}
      p={10}
      justifyContent={'space-between'}
    >
      <InputGroup size='lg'>
        <Textarea placeholder={response} size='sm' />
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
        <Button variant={'outline'}>Like</Button>
        <Button variant={'outline'}>Share</Button>
        <Button variant={'outline'}>Report</Button>
      </Flex>
    </Stack>
  );
};
