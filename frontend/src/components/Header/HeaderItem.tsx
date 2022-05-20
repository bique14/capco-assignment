import { useNavigate } from 'react-router-dom';
import { classNames } from '../../lib';

interface HeaderItemProps {
  id: string;
  name: string;
}

const HeaderItem = (props: HeaderItemProps) => {
  const { id, name } = props;
  const navigate = useNavigate();

  return (
    <button
      className={classNames([
        'text-2xl text-right cursor-pointer',
        'md:text-3xl md:w-24 md:text-center md:hover:bg-white md:hover:text-black',
      ])}
      onClick={() => navigate(id, { replace: true })}
    >
      <span>{name}</span>
    </button>
  );
};

export default HeaderItem;
