import { useEffect, useState } from 'react';
import { CardSkeleton } from '../../components';
import { classNames, useCategory } from '../../lib';

interface ITV {
  id: string;
  title: string;
  image: string;
}

interface TVProps {
  searchQuery: string;
}

const TV = (props: TVProps) => {
  const { searchQuery } = props;

  const [tvChannel, setTVChannel] = useState<ITV[]>([]);

  const { loading, data } = useCategory('tv');

  useEffect(() => {
    console.log(loading, tvChannel);
    if (!loading) {
      setTVChannel(data);
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
        TV
      </h1>
      <div
        className={classNames([
          'grid grid-cols-1 gap-5 mx-4',
          'md:grid-cols-3',
          'lg:grid-cols-4',
        ])}
      >
        {skeletons.map((_, i) => (
          <CardSkeleton key={i.toString()} index={i} />
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
        TV
      </h1>
      <div
        className={classNames([
          'grid grid-cols-1 gap-5 mx-4',
          'md:grid-cols-3',
          'lg:grid-cols-4',
        ])}
      >
        {tvChannel
          .filter(
            (item: ITV) =>
              item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
              item.title
                .toLowerCase()
                .replace(/ /g, '')
                .includes(searchQuery.toLowerCase()),
          )
          .map((ch, i) => (
            <Channel key={ch.id} {...ch} />
          ))}
      </div>
    </>
  );
};

interface ChannelProps {
  id: string;
  title: string;
  image: string;
}

const Channel = (props: ChannelProps) => {
  const { id, title, image } = props;

  return (
    <div className="tv-card font-prompt border rounded flex flex-col cursor-pointer">
      <div className={classNames(['h-56', 'lg:h-64'])}>
        <img
          className="h-full w-full rounded object-contain"
          alt={id}
          src={image}
        />
      </div>

      <span className="font-bold text-center mb-3">{title}</span>
    </div>
  );
};

export default TV;
