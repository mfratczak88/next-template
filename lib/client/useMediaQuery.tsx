import { useEffect, useState } from 'react';

export enum Query {
  sm = '(max-width:640px)',
  md = '(max-width:768px)',
  lg = '(max-width:1024px)',
  xl = '(max-width:1280px)',
}
export const useMediaQuery = (query: Query) => {
  const getMatches = (query: Query): boolean => {
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches;
    }
    return false;
  };

  const [matches, setMatches] = useState<boolean>(getMatches(query));

  function handleChange() {
    setMatches(getMatches(query));
  }

  useEffect(() => {
    const matchMedia = window.matchMedia(query);
    handleChange();
    matchMedia.addEventListener('change', handleChange);

    return () => {
      matchMedia.removeEventListener('change', handleChange);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return matches;
};

export default useMediaQuery;
