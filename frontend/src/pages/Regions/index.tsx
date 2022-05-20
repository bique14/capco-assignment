import { useEffect, useState } from 'react';
import { Card } from '../../components';
import { classNames, useCategory } from '../../lib';

interface IRegions {
  id: string;
  title: string;
  description: string;
  image: string;
  created_at: string;
}

const Regions = () => {
  const [regions, setRegions] = useState<IRegions[]>([]);

  const { loading, data } = useCategory('regions');

  useEffect(() => {
    console.log(loading, regions);
    if (!loading) {
      setRegions(data);
    }
  }, [loading, data]);

  return loading ? (
    <div>Loading</div>
  ) : (
    <>
      <h1
        className={classNames([
          'font-bebas text-center text-3xl border-b border-b-black border-t border-t-black mx-4 my-7 pt-4 pb-2',
          'md:my-10 md:text-5xl',
          'lg:text-6xl',
        ])}
      >
        REGIONS
      </h1>
      <div
        className={classNames([
          'grid grid-cols-1 gap-5 mx-4',
          'md:grid-cols-3',
          'lg:grid-cols-4',
        ])}
      >
        {regions.map((n, i) => (
          <Card key={n.id} {...n} index={i} headline />
        ))}
      </div>
    </>
  );
};

export default Regions;
