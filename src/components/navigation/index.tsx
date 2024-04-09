import { useState } from 'react';
import { Link } from 'react-router-dom';

import { NavList } from './nav-list';
import { IconLogo } from '../../assets/icons';

import './style.scss';

import { routers } from '../../constants/routers';
import { mocksNavigation } from '../../mocks';

export const Navigation = () => {
  //   const [isActiveList, setIsActiveList] = useState(-1);
  return (
    <div className='nav-box'>
      <Link to={routers.admin} className='logo-box d-flex'>
        <IconLogo className='logo' />
        <h2>Dashboard</h2>
        <span>v.01</span>
      </Link>
      <nav>
        <ul>
          {mocksNavigation.map((list, index) => {
            return (
              <NavList
                key={list.id + index}
                {...list}
                Svg={list.icon}
                // setIsActiveList={setIsActiveList}
              />
            );
          })}
        </ul>
      </nav>
    </div>
  );
};
