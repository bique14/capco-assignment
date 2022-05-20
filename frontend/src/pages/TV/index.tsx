import { useEffect } from 'react';
import { useCategory } from '../../lib';

const TV = () => {
  const { loading, data: tv } = useCategory('tv');

  useEffect(() => {
    console.log(loading, tv);
  }, [loading, tv]);

  return <div>TV</div>;
};

export default TV;
