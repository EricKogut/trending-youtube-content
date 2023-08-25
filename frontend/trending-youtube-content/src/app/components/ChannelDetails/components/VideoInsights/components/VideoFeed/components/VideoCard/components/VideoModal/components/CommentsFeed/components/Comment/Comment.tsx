import {
  Flex,
  chakra,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react';

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

export const Comment = ({ videoComment }: any) => {
  return <CommentContent videoComment={videoComment} />;
};
