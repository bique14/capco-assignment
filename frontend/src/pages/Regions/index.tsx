import { useEffect } from 'react';
import { useCategory } from '../../lib';

const Regions = () => {
  const { loading, data: regions } = useCategory('regions');

  useEffect(() => {
    console.log(loading, regions);
  }, [loading, regions]);

  return <div>Regions</div>;
};

export default Regions;
