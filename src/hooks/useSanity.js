import { useState, useEffect } from 'react';
import { fetchSanity } from '../lib/sanity';

export function useSanity(query, deps = []) {
  const [data, setData]       = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(null);

  useEffect(() => {
    if (!query) { setLoading(false); return; }
    let cancelled = false;
    setLoading(true);

    fetchSanity(query)
      .then((result) => {
        if (!cancelled) { setData(result); setLoading(false); }
      })
      .catch((err) => {
        if (!cancelled) { setError(err); setLoading(false); }
      });

    return () => { cancelled = true; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, ...deps]);

  return { data, loading, error };
}
