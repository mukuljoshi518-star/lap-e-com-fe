import { lazy } from 'react';
import Loadable from 'components/Loadable';
import DashboardLayout from 'layout/ComDashboard';
import { paths } from './path';

// Lazy pages
const DashboardComDefault = Loadable(lazy(() => import('pages/ecom-dashboard/index.jsx')));
const Color = Loadable(lazy(() => import('pages/component-overview/color')));
const Typography = Loadable(lazy(() => import('pages/component-overview/typography')));
const Shadow = Loadable(lazy(() => import('pages/component-overview/shadows')));
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: paths.DashboardComDefault,
  element: <DashboardLayout />,
  children: [
    {
      path: paths.dashboard,
      element: <DashboardComDefault />
    },
    {
      path: paths.dashboardDefault,
      element: <DashboardComDefault />
    },
    {
      path: paths.typography,
      element: <Typography />
    },
    {
      path: paths.color,
      element: <Color />
    },
    {
      path: paths.shadow,
      element: <Shadow />
    },
    {
      path: paths.sample,
      element: <SamplePage />
    }
  ]
};

export default MainRoutes;
