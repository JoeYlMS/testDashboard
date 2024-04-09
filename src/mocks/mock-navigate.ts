import {
  IconCustomers,
  IconDashboard,
  IconHelp,
  IconIncome,
  IconProduct,
  IconPromote,
} from '../assets/icons';
import { routers } from '../constants/routers';

interface IMocksNavigationProps {
  id: string;
  path: string;
  name: string;
  icon: React.FC;
}

export const mocksNavigation: IMocksNavigationProps[] = [
  {
    id: 'Dashboard',
    path: routers.admin,
    name: 'Dashboard',
    icon: IconDashboard,
  },
  {
    id: 'Product',
    path: routers.adminPanel.product,
    name: 'Product',
    icon: IconProduct,
  },
  {
    id: 'Customers',
    path: routers.adminPanel.customers,
    name: 'Customers',
    icon: IconCustomers,
  },
  {
    id: 'Income',
    path: routers.adminPanel.income,
    name: 'Income',
    icon: IconIncome,
  },
  {
    id: 'Promote',
    path: routers.adminPanel.promote,
    name: 'Promote',
    icon: IconPromote,
  },
  {
    id: 'Help',
    path: routers.adminPanel.help,
    name: 'Help',
    icon: IconHelp,
  },
];
