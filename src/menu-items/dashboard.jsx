// assets
import { DashboardOutlined } from '@ant-design/icons';

// icons
const icons = {
  DashboardOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
  id: 'admin',
  title: '',
  type: 'group',
  children: [
    {
      id: 'nhanvien',
      title: 'Quản lý nhân viên',
      type: 'item',
      url: '/admin/nhanvien',
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
