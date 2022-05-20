import { classNames } from '../../lib';

interface CardSkeletonProps {
  index: number;
}

const CardSkeleton = (props: CardSkeletonProps) => {
  const { index } = props;

  const isHeadline = index === 0;
  const headlineClasses = isHeadline ? 'card-headline ' : '';

  return (
    <div
      className={`card font-prompt border rounded flex flex-col ${headlineClasses}`}
    >
      <div
        className={classNames([
          'skeleton-item',
          'h-56 bg-gray-200',
          isHeadline ? 'lg:flex-1' : 'lg:h-64',
        ])}
      ></div>
      <div
        className={classNames([
          'p-2',
          isHeadline
            ? 'md:flex md:flex-col md:justify-center' + ' ' + 'lg:h-52'
            : 'flex flex-1 flex-col justify-around ',
          'md:p-3',
          'lg:h-28',
        ])}
      >
        {isHeadline ? (
          <div
            className={classNames([
              'skeleton-item',
              'w-52 h-6 bg-gray-200',
              'md:w-80 md:h-10',
            ])}
          ></div>
        ) : (
          <div className="skeleton-item w-40 h-6 bg-gray-200"></div>
        )}
        <div className="flex flex-col gap-2 mt-4">
          {isHeadline ? (
            <>
              <div
                className={classNames([
                  'skeleton-item',
                  'w-64 h-5 bg-gray-200',
                  'md:w-96',
                ])}
              ></div>
              <div
                className={classNames([
                  'skeleton-item',
                  'w-56 h-5 bg-gray-200',
                  'md:w-80',
                ])}
              ></div>
              <div
                className={classNames([
                  'skeleton-item',
                  'w-32 h-5 bg-gray-200',
                  'md:w-40',
                ])}
              ></div>
            </>
          ) : (
            <>
              <div
                className={classNames([
                  'skeleton-item',
                  'w-64 h-5 bg-gray-200',
                  'md:w-48',
                ])}
              ></div>
              <div
                className={classNames([
                  'skeleton-item',
                  'w-56 h-5 bg-gray-200',
                  'md:w-40',
                ])}
              ></div>
              <div
                className={classNames([
                  'skeleton-item',
                  'w-32 h-5 bg-gray-200',
                  'md:w-28',
                ])}
              ></div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardSkeleton;
