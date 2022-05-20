import { useEffect, useState } from 'react';
import { Card, CardSkeleton } from '../../components';
import { classNames, useCategory } from '../../lib';

interface IRegions {
  id: string;
  title: string;
  description: string;
  image: string;
  created_at: string;
}

interface RegionsProps {
  searchQuery: string;
}

const Regions = (props: RegionsProps) => {
  const { searchQuery } = props;

  const [regions, setRegions] = useState<IRegions[]>([]);

  const { loading, data } = useCategory('regions');

  useEffect(() => {
    console.log(loading, regions);
    if (!loading) {
      setRegions(data);
    }
  }, [loading, data]);

  const skeletons = [...new Array(8)].fill(0);

  return loading ? (
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
        {skeletons.map((_, i) => (
          <CardSkeleton key={i.toString()} index={i} headline />
        ))}
      </div>
    </>
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
        {regions
          .filter(
            (item: IRegions) =>
              item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
              item.description
                .toLowerCase()
                .includes(searchQuery.toLowerCase()),
          )
          .map((n, i) => (
            <Card key={n.id} {...n} index={i} headline />
          ))}
      </div>
    </>
  );
};

export default Regions;
