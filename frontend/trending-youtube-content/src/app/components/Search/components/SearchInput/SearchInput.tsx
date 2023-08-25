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
import useChannelQueryString from './hooks/useChannelQueryString'; // Update the path to your hook

export const SearchInput = () => {
  //Input data
  const [URLInput, setURLInput] = useState<string>('');
  const [inputError, setInputError] = useState(false);

  // Handling request data
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [channelData, setChannelData] = useState<Channel | null>(null);

  const showErrorToast = useErrorToast();

  // Updating the URL with the proper channelId slug
  const { createQueryString } = useChannelQueryString(channelData);

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
      const endpoint = `/search?part=snippet&type=channel&q=@${username}`;

      const {
        loading: loadingResponse,
        errors,
        data: responseData,
      } = await axiosGetRequest({
        type: 'get',
        endpoint,
      });

      if (responseData && responseData.pageInfo.totalResults) {
        setChannelData(responseData?.items[0]);
      } else {
        showErrorToast(
          'There was an error fetching the data, or the channel does not exist'
        );
      }

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
  return (
    <InputGroup size='lg'>
      <Input
        pr='4.5rem'
        placeholder='Channel URL     ie. https://www.youtube.com/@name'
        maxWidth='40rem'
        onChange={handleChange}
        boxShadow={'lg'}
        isInvalid={inputError}
        errorBorderColor='crimson'
      />
      <InputRightElement width='4.5rem'>
        <Button
          size='lg'
          onClick={handleQuery}
          variant={'ghost'}
          isLoading={loading}
        >
          {' '}
          Send
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};
