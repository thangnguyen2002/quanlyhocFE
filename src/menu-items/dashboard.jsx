// assets
import { DashboardOutlined } from '@ant-design/icons';

// icons
const icons = {
  DashboardOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
  id: 'dashboard',
  title: '',
  type: 'group',
  children: [
    {
      id: 'chucvu',
      title: 'Quản lý chức vụ',
      type: 'item',
      url: '/chucvu',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    },
    {
      id: 'giangvien',
      title: 'Quản lý giảng viên',
      type: 'item',
      url: '/admin/giangvien',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    }
  ]
};

export default dashboard;
