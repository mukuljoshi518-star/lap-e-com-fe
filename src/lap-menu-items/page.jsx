/* eslint-disable prettier/prettier */
// assets
import { LoginOutlined, ProfileOutlined } from '@ant-design/icons';
import { paths } from '../routes/path';

// icons
const icons = {
  LoginOutlined,
  ProfileOutlined
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const pages = {
  id: 'authentication',
  title: 'Authentication',
  type: 'group',
  children: [
    {
      id: 'login1',
      title: 'Login',
      type: 'item',
      url: paths.login,
      icon: icons.LoginOutlined,
      target: true
    },
    {
      id: 'register1',
      title: 'Register',
      type: 'item',
      url: paths.register,
      icon: icons.ProfileOutlined,
      target: true
    },
     {
      id: 'admin',
      title: 'Login Admin',
      type: 'item',
      url: paths.AdminDashboard,
      icon: icons.LoginOutlined,
      target: false
    },
  ]
};

export default pages;
