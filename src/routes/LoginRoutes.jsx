import { lazy } from 'react';
import { paths } from './path';
// project imports
import Loadable from 'components/Loadable';

// jwt auth
const LoginPage = Loadable(lazy(() => import('pages/auth/Login')));
const RegisterPage = Loadable(lazy(() => import('pages/auth/Register')));

// ==============================|| AUTH ROUTING ||============================== //

const LoginRoutes = {
  path: '/authentication',
  children: [
    {
      path: paths.login.replace('/authentication/', ''),
      element: <LoginPage />
    },
    {
      path: paths.register.replace('/authentication/', ''),
      element: <RegisterPage />
    },
    // {
    //   path: paths.forgotPassword.replace('/authentication/', ''),
    //   element: <ForgotPassword />
    // }
  ]
};

export default LoginRoutes;
