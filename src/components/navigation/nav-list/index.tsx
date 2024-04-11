import { Link } from 'react-router-dom';
import { IconArrow } from '../../../assets/icons';

interface INavListProps {
  id: string;
  name: string;
  path: string;
  Svg: React.FC;
  setIsActiveList?: () => void;
}

export const NavList: React.FC<INavListProps> = ({ name, path, Svg, setIsActiveList }) => {
  return (
    <li className='naw-list'>
      <Link to={path} className='list-item'>
        <Svg />
        <p>{name}</p>
        <IconArrow />
      </Link>
    </li>
  );
};
