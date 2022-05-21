import { useState, useEffect } from 'react';
import { classNames, useCategory } from '../../lib';
import { Card, CardSkeleton } from '../../components';

interface INews {
  id: string;
  title: string;
  description: string;
  image: string;
  created_at: string;
}

interface NewsProps {
  searchQuery: string;
}

const News = (props: NewsProps) => {
  const { searchQuery } = props;

  const [news, setNews] = useState<INews[]>([]);
  const { loading, data } = useCategory('news');

  useEffect(() => {
    console.log(loading, news);
    if (!loading) {
      setNews(data);
    }
  }, [loading, data]);

  const skeletons = [...new Array(8)].fill(0);

  const filtered = news.filter(
    (item: INews) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return loading ? (
    <>
      <h1
        className={classNames([
          'font-bebas text-center text-3xl border-b border-b-black border-t border-t-black mx-4 my-7 pt-4 pb-2',
          'md:my-10 md:text-5xl',
          'lg:text-6xl',
        ])}
      >
        NEWS
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
        NEWS
      </h1>
      {filtered.length === 0 ? (
        <div className="text-center text-xl">Not found</div>
      ) : (
        <div
          className={classNames([
            'grid grid-cols-1 gap-5 mx-4',
            'md:grid-cols-3',
            'lg:grid-cols-4',
          ])}
        >
          {filtered.map((n, i) => (
            <Card key={n.id} {...n} index={i} headline />
          ))}
        </div>
      )}
    </>
  );
};

export default News;
