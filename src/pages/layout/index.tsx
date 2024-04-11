import { Outlet } from 'react-router-dom';
import { Navigation } from '../../components';

export const Layout = () => {
  return (
    <section className='dashboard-content'>
      <Navigation />
      <Outlet />
    </section>
  );
};
