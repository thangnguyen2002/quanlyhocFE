import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import Dashboard from 'layout/Dashboard';

const DashboardDefault = Loadable(lazy(() => import('pages/dashboard/index')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <Dashboard />,
  children: [
    {
      path: '/chucvu',
      element: <DashboardDefault />
    },
    // {
    //   path: 'chucvu',
    //   children: [
    //     {
    //       path: '/',
    //       element: <DashboardDefault />
    //     }
    //   ]
    // }
  ]
};

export default MainRoutes;
