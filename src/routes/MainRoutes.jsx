import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import Dashboard from 'layout/Dashboard';

const DashboardChucVu = Loadable(lazy(() => import('pages/dashboard/chucvu/index')));
const DashboardPhongHoc = Loadable(lazy(() => import('pages/dashboard/phonghoc/index')));
const DashboardKhoaHoc = Loadable(lazy(() => import('pages/dashboard/khoahoc/index')));
const DashboardLinhVuc = Loadable(lazy(() => import('pages/dashboard/linhvuc/index')));
const DashboardLienHe = Loadable(lazy(() => import('pages/dashboard/lienhe/index')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <Dashboard />,
  children: [
    {
      path: '/chucvu',
      element: <DashboardChucVu />
    },
    {
      path: '/phonghoc',
      element: <DashboardPhongHoc />
    },
    {
      path: '/khoahoc',
      element: <DashboardKhoaHoc />
    },
    {
      path: '/linhvuc',
      element: <DashboardLinhVuc />
    },
    {
      path: '/lienhe',
      element: <DashboardLienHe />
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
