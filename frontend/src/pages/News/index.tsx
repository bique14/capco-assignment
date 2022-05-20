import { useState, useEffect } from 'react';
import { classNames, useCategory } from '../../lib';
import { Card } from '../../components';

interface INews {
  id: string;
  title: string;
  description: string;
  image: string;
  created_at: string;
}

const News = () => {
  const [news, setNews] = useState<INews[]>([]);
  const { loading, data } = useCategory('news');

  useEffect(() => {
    console.log(loading, news);
    if (!loading) {
      setNews(data);
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
        NEWS
      </h1>
      <div
        className={classNames([
          'grid grid-cols-1 gap-5 mx-4',
          'md:grid-cols-3',
          'lg:grid-cols-4',
        ])}
      >
        {news.map((n, i) => (
          <Card key={n.id} {...n} index={i} headline />
        ))}
      </div>
    </>
  );
};

export default News;
