import {
  Avatar,
  chakra,
  Flex,
  useColorModeValue,
  AvatarGroup,
} from '@chakra-ui/react';

export const ExplanationCard = () => {
  return (
    <Flex
      boxShadow={'lg'}
      maxW={'640px'}
      direction={{ base: 'column-reverse', md: 'row' }}
      width={'full'}
      rounded={'xl'}
      p={10}
      justifyContent={'space-between'}
      position={'relative'}
      bg={useColorModeValue('white', 'gray.800')}
    >
      <Flex
        direction={'row'}
        textAlign={'left'}
        justifyContent={'space-between'}
      >
        <chakra.p fontWeight={'medium'} fontSize={'15px'} pb={4}>
          Learn about your favourite content creators,
        </chakra.p>
        <AvatarGroup size='md' max={3}>
          <Avatar
            name='Logan Paul'
            src='https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/rockcms/2023-07/230709-logan-paul-jm-1233-102ef8.jpg'
          />
          <Avatar
            name='Jimmy Donaldson'
            src='https://www.the-sun.com/wp-content/uploads/sites/6/2023/03/AS_MR-BEAST_OP.jpg?strip=all&quality=100&w=1080&h=1080&crop=1'
          />
          <Avatar
            name='Kent Dodds'
            src='https://i.guim.co.uk/img/media/2ae376bc65832b5156edc85e7f5cb05ead87e252/0_896_4912_2948/master/4912.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=26d07db5ae858007f0e1bb6f6fc3db4b'
          />
          <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
          <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
        </AvatarGroup>
      </Flex>
    </Flex>
  );
};
