// import { useState } from 'react';
import { Link } from 'react-router-dom';

import { NavList } from './nav-list';
import { IconLogo } from '../../assets/icons';

import './style.scss';

import { routers } from '../../constants/routers';
import { mocksNavigation } from '../../mocks';
import UserIcon from '../../assets/img/user-icon.png';
import { BurgerIcon } from './burger-icon';

export const Navigation = () => {
  //   const [isActiveList, setIsActiveList] = useState(-1);
  return (
    <section className='nav-box'>
      <Link to={routers.admin} className='logo-box d-flex'>
        <IconLogo className='logo' />
        <h2>Dashboard</h2>
        <span>v.01</span>
      </Link>
      <nav className='nav-lists'>
        <BurgerIcon />
        <ul className='nav-lists-box'>
          {mocksNavigation.map((list, index) => {
            return (
              <NavList
                {...list}
                Svg={list.icon}
                key={list.id + index}
                // setIsActiveList={setIsActiveList}
              />
            );
          })}
        </ul>
      </nav>
      <div className='nav-user-data'>
        <img src={UserIcon} alt='User Icon' className='user-icon' />
        <div className='user-data'>
          <h4 className='user-name'>Evano</h4>
          <p className='user-position'>Project Manager</p>
        </div>
      </div>
    </section>
  );
};
