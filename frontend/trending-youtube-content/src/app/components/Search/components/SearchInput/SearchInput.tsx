'use client';
import { useState } from 'react';

import {
  Spinner,
  InputRightElement,
  Button,
  Input,
  InputGroup,
} from '@chakra-ui/react';

import { axiosGetRequest } from '@/app/utils/axiosGetRequest';
import validateURL from './utils/validateURL';
import { useErrorToast } from '@/app/hooks/useErrorToast';

export const SearchInput = () => {
  const showErrorToast = useErrorToast();

  //Input data
  const [URLInput, setURLInput] = useState<string>('');
  const [inputError, setInputError] = useState(false);

  // Handling request data
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [channelData, setChannelData] = useState<Channel | null>(null);

  // Handling inputs and query
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setURLInput(event.target.value);
    setInputError(false);
  };
  const handleQuery = async () => {
    const username = validateURL(URLInput);

    if (!username) {
      setInputError(true);
      showErrorToast("Hmm, that URL doesn't seem right...");

      return;
    }

    setLoading(true);

    try {
      const endpoint = `/channels?forUsername=${URLInput}`;

      const {
        loading: loadingResponse,
        errors,
        data: responseData,
      } = await axiosGetRequest({
        type: 'get',
        endpoint,
      });

      setChannelData(responseData);
      setLoading(loadingResponse);
      setError(errors as Error | null);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  };

  if (error) {
    return <>oops, an error has occurred</>;
  }

  if (loading) {
    return <Spinner />;
  }

  return (
    <InputGroup size='lg'>
      <Input
        pr='4.5rem'
        placeholder='Enter the channel URL'
        maxWidth='40rem'
        onChange={handleChange}
        boxShadow={'lg'}
        isInvalid={inputError}
        errorBorderColor='crimson'
      />
      <InputRightElement width='4.5rem'>
        <Button size='lg' onClick={handleQuery} variant={'ghost'}>
          {' '}
          Send
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};
