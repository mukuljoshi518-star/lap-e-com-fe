/* eslint-disable prettier/prettier */
import { lazy } from 'react';

// project imports
import Loadable from 'components/Loadable';
import DashboardLayout from 'layout/Dashboard';
import paths from './path';
import AdminDashboard from '../layout/Dashboard/AdminDashboard';

// render- Dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard/default')));
// const DashboardComDefault = Loadable(lazy(() => import('pages/ecom-dashboard/index.jsx')));
// render - color
const Color = Loadable(lazy(() => import('pages/component-overview/color')));
const Typography = Loadable(lazy(() => import('pages/component-overview/typography')));
const Shadow = Loadable(lazy(() => import('pages/component-overview/shadows')));

// render - sample page
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: paths.dashboardDefault,
  element: <DashboardLayout />,
  children: [
    {
      path: paths.dashboardDefault,
      element: <DashboardDefault />
    },
    {
      path: paths.dashboardDefault,
      children: [
        {
          path: paths.dashboardDefault.replace('/', ''),
          element: <DashboardDefault />
        }
      ]
    },
    {
  path: 'admin',
  children: [
    {
      path: 'admin-dashboard',
      element: <AdminDashboard />
    }
  ]
},
    {
      path: 'typography',
      element: <Typography />
    },
    {
      path: 'color',
      element: <Color />
    },
    {
      path: 'shadow',
      element: <Shadow />
    },
    {
      path: 'sample-page',
      element: <SamplePage />
    }
  ]
};

export default MainRoutes;
