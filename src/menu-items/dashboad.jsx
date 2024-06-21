// assets
import { DashboardOutlined } from '@ant-design/icons';

// icons
const icons = {
  DashboardOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
  id: 'dashboard',
  title: 'Dashboard',
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
      id: 'phonghoc',
      title: 'Quản lý phòng học',
      type: 'item',
      url: '/phonghoc',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    },
    {
      id: 'khoahoc',
      title: 'Quản lý khóa học',
      type: 'item',
      url: '/khoahoc',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    },
    {
      id: 'linhvuc',
      title: 'Quản lý lĩnh vực',
      type: 'item',
      url: '/linhvuc',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    },
    {
      id: 'lienhe',
      title: 'Quản lý liên hệ',
      type: 'item',
      url: '/lienhe',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    },
    {
      id: 'baiviet',
      title: 'Quản lý bài viết',
      type: 'item',
      url: '/baiviet',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    },
    {
      id: 'nhanvien',
      title: 'Quản lý nhân viên',
      type: 'item',
      url: '/nhanvien',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    },
    {
      id: 'taikhoan',
      title: 'Quản lý tài khoản',
      type: 'item',
      url: '/taikhoan',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    },
  ]
};

export default dashboard;
