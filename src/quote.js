import { useState, useEffect } from 'react';

const Fetch = () => {
  const url = 'https://api.api-ninjas.com/v1/quotes/';
  const key = 'yj0Xw/DIenEajxw9a1+DDw==FN5kIwIOGDaLUI7p';

  const [quote, setQuote] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchQuote = async () => {
      setIsLoading(true);
      try {
        const head = {
          headers: { 'X-API-key': `${key}` },
        };
        const res = await fetch(url, head);
        const json = await res.json();
        setQuote(json);
      } catch (error) {
        setHasError(true);
      }
      setIsLoading(false);
    };
    fetchQuote();
  }, [setQuote, setIsLoading]);

  if (hasError) return <div>Something went wrong!</div>;

  if (isLoading) return <div className="load">Loading...</div>;

  return (
    <ul className="quote">
      {quote.map((item) => (
        <li key={item.id}>
          <q>{item.quote}</q>
              &nbsp;&nbsp;
          <b>{item.author}</b>
        </li>
      ))}
    </ul>
  );
};

export default Fetch;
