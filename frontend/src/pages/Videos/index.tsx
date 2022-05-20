import { useEffect } from 'react';
import { useCategory } from '../../lib';

const Videos = () => {
  const { loading, data: videos } = useCategory('videos');

  useEffect(() => {
    console.log(loading, videos);
  }, [loading, videos]);

  return <div>Videos</div>;
};

export default Videos;
