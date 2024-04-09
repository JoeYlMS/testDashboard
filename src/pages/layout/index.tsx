import { Outlet } from 'react-router-dom';
import { Navigation } from '../../components';

export const Layout = () => {
  return (
    <>
      <Navigation />
      <Outlet />
      <footer>Footer</footer>
    </>
  );
};
