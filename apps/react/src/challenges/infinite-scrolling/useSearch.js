import { useEffect, useState } from 'react';

import axios from 'axios';

export default function useSearch(pageNumber) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancel;

    axios({
      method: 'GET',
      url: 'https://jsonplaceholder.typicode.com/photos',
      params: { _page: pageNumber, _limit: 10 },
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        setItems((prevItems) => [...new Set([...prevItems, ...res.data.map((b) => b.title)])]);
        setHasMore(!(res.data.at(-1)?.id === 5000 || res.data.length === 0));
        setLoading(false);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setError(true);
      });

    return () => cancel();
  }, [pageNumber]);

  return { loading, error, items, hasMore };
}
