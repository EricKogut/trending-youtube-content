import { useToast } from '@chakra-ui/react';

export const useErrorToast = () => {
  const toast = useToast();

  return (errorMessage: string) => {
    toast({
      title: 'Input error.',
      description: errorMessage,
      status: 'error',
      duration: 5000,
      isClosable: true,
    });
  };
};
