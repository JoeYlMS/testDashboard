import { createBrowserRouter } from 'react-router-dom';
import { Layout, Home } from '../pages';
import { routers } from '../constants/routers';

export const router = createBrowserRouter([
  { path: routers.home, element: <Home /> },
  {
    path: routers.admin,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <h2>Dashboard</h2>,
      },
      {
        path: routers.adminPanel.product,
        element: <h3>product</h3>,
      },
      {
        path: routers.adminPanel.customers,
        element: <h3>customers</h3>,
      },
      {
        path: routers.adminPanel.income,
        element: <h3>income</h3>,
      },
      {
        path: routers.adminPanel.promote,
        element: <h3>promote</h3>,
      },
      {
        path: routers.adminPanel.help,
        element: <h3>help</h3>,
      },
    ],
  },
]);
