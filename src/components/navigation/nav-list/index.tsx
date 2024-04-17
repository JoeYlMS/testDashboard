import { Link, useLocation } from 'react-router-dom';

import { IconArrow } from '../../../assets/icons';

interface INavListProps {
  name: string;
  path: string;
  Svg: React.FC;
}

export const NavList: React.FC<INavListProps> = ({ Svg, name, path }) => {
  const { pathname } = useLocation();

  return (
    <li className='naw-list'>
      <Link to={path} className={path === pathname ? 'list-item active' : 'list-item '}>
        <Svg />
        <p>{name}</p>
        <IconArrow />
      </Link>
    </li>
  );
};
