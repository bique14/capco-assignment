import { useEffect } from 'react';
import HeaderItem from './HeaderItem';
import SearchInput from './SearchInput';

import { PAGE } from '../../App';
import { classNames } from '../../lib';

interface Category {
  id: string;
  name: string;
}

interface HeaderProps {
  _onChange: (query: string) => void;
}

const Header = (props: HeaderProps) => {
  const { _onChange } = props;

  const categories: Category[] = [
    { id: PAGE.NEWS, name: 'News' },
    { id: PAGE.REGIONS, name: 'Regions' },
    { id: PAGE.TV, name: 'TV' },
    { id: PAGE.VIDEOS, name: 'Video' },
  ];

  useEffect(() => {
    const header = document.getElementById('header');
    const sticky = header?.offsetTop;

    function handleScroll() {
      if (window.pageYOffset > (sticky || 0)) {
        header?.classList.add('sticky');
      } else {
        header?.classList.remove('sticky');
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="header" className="bg-black text-white font-bebas px-6 py-5">
      <div
        className={classNames(['mx-auto', 'md:w-11/12', 'lg:w-4/5 lg:mx-auto'])}
      >
        <div className="flex justify-between items-center">
          <div
            className={classNames(['text-4xl cursor-default', 'md:text-6xl'])}
          >
            CAPCO
          </div>
          <div className="flex items-center gap-5">
            <div className={classNames(['flex gap-3', 'md:gap-1'])}>
              {categories.map(category => (
                <HeaderItem key={category.id} {...category} />
              ))}
            </div>
            <div className={classNames(['hidden', 'md:block md:w-44'])}>
              <SearchInput _onChange={_onChange} />
            </div>
          </div>
        </div>
        <div className={classNames(['block w-full mt-2', 'md:hidden'])}>
          <SearchInput _onChange={_onChange} />
        </div>
      </div>
    </div>
  );
};

export default Header;
