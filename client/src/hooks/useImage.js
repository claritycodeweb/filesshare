import { useState, useEffect, useRef } from 'react';
import loadImage from '../utils/loadImage';

const cache = new Map();

export const StatusEnum = {
  LOADING: 'loading',
  LOADED: 'loaded',
  FAILED: 'failed',
};

export default function useImage(src) {
  const cachedImg = cache.get(src);
  const initialState = cachedImg ? StatusEnum.LOADED : StatusEnum.LOADING;
  const [status, setStatus] = useState(initialState);
  const mounted = useRef(false);

  useEffect(() => {
    if (!src || status === StatusEnum.LOADED) return;
    mounted.current = true;

    const fetchData = async () => {
      try {
        const image = await loadImage(src);
        if (!mounted.current) return;

        cache.set(src, image);
        setStatus(StatusEnum.LOADED);
      } catch (error) {
        if (!mounted.current) return;

        cache.delete(src);
        setStatus(StatusEnum.FAILED);
      }
    };

    fetchData(src);
    // eslint-disable-next-line consistent-return
    return () => {
      mounted.current = false;
    };
  }, [src, status]);

  return [status, cachedImg];
}
