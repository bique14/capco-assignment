import { classNames } from '../../lib';
import './index.css';

interface CardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  created_at: string;
  index?: number;
  headline?: boolean;
}

const Card = (props: CardProps) => {
  const { id, title, description, image, created_at, index, headline } = props;

  const isHeadline = index === 0 && headline;
  const headlineClasses = isHeadline ? 'card-headline ' : '';

  return (
    <div
      className={`font-prompt border rounded flex flex-col ${headlineClasses}`}
    >
      <div
        className={classNames(['h-56', isHeadline ? 'lg:flex-1' : 'lg:h-64'])}
      >
        <img
          className="h-full w-full rounded object-cover"
          alt={id}
          src={image}
        />
      </div>
      <div
        className={classNames([
          'p-2 ',
          isHeadline
            ? 'md:h-full md:flex md:flex-col md:justify-around' +
              ' ' +
              'lg:h-56'
            : 'flex flex-1 flex-col justify-around ',
          'md:p-3',
          // 'lg:h-28',
        ])}
      >
        <span
          className={`font-bold ${
            isHeadline ? 'md:text-2xl lg:text-4xl' : 'text-base'
          }`}
        >
          {title}
        </span>
        <p
          className={classNames([
            'text-xs text-gray-500',
            'md:text-base',
            isHeadline ? 'lg:text-lg' : '',
          ])}
          style={{
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
