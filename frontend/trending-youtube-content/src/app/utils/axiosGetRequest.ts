import axios from 'axios';

declare type operation = 'get';

export interface Props {
  type?: operation;
  endpoint: string;
}

export const axiosGetRequest = async ({ type = 'get', endpoint }: Props) => {
  try {
    const res = await axios[type](
      `https://www.googleapis.com/youtube/v3${endpoint}&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`
    );
    return { data: res.data, loading: false, errors: null };
  } catch (error) {
    return { data: null, loading: false, errors: error };
  }
};
