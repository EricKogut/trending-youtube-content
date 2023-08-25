import { useState, useEffect } from 'react';

const useSuggestedCompletion = (comment: any) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [response, setResponse] = useState<any | null>(null);

  useEffect(() => {
    const fetchChatCompletion = async () => {
      setLoading(true);
      setError(null);

      try {
        const completion = `Thanks for your comment ${comment.snippet.topLevelComment.snippet.authorDisplayName}`;
        setResponse(completion);
        setLoading(false);
      } catch (err) {
        setError(err as Error);
      }

      setLoading(false);
    };

    fetchChatCompletion();
  }, []);

  return { loading, error, response };
};

export default useSuggestedCompletion;
