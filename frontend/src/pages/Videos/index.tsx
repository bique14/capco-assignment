import { useEffect, useState } from 'react';
import { classNames, useCategory } from '../../lib';

interface IVideo {
  id: string;
  title: string;
  url: string;
}

const Videos = () => {
  const [videos, setVideos] = useState<IVideo[]>([]);

  const { loading, data } = useCategory('videos');

  useEffect(() => {
    console.log(loading, videos);
    if (!loading) {
      setVideos(data);
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
        VIDEOS
      </h1>
      <div
        className={classNames([
          'grid grid-cols-1 gap-5 mx-4',
          'md:grid-cols-3',
          'lg:grid-cols-3',
        ])}
      >
        {videos.map(video => (
          <VideoItem key={video.id} {...video} />
        ))}
      </div>
    </>
  );
};

interface VideoItemProps {
  id: string;
  title: string;
  url: string;
}

const VideoItem = (props: VideoItemProps) => {
  const { id, title, url } = props;

  return (
    <div className="tv-card font-prompt border rounded flex flex-col cursor-pointer">
      <div>
        <iframe
          className="rounded-t"
          width="305"
          height="342"
          src={url}
          title={`YouTube video player ${id}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="px-5 py-3 text-center">
        <span className="font-bold text-center mb-3">{title}</span>
      </div>
    </div>
  );
};

export default Videos;
