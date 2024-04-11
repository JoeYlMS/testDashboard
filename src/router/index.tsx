import { createBrowserRouter } from 'react-router-dom';
import { Layout, Home, Customers, Product, Income, Promote, Help } from '../pages';
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
        element: <Product />,
      },
      {
        path: routers.adminPanel.customers,
        element: <Customers />,
      },
      {
        path: routers.adminPanel.income,
        element: <Income />,
      },
      {
        path: routers.adminPanel.promote,
        element: <Promote />,
      },
      {
        path: routers.adminPanel.help,
        element: <Help />,
      },
    ],
  },
]);
