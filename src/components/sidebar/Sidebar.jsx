
import { Layout, Menu, Typography } from "antd";

import {
  DashboardOutlined,
  TeamOutlined,
  CalendarOutlined,
  BarChartOutlined,
  SettingOutlined,
  FileTextOutlined,
} from "@ant-design/icons";

import { useNavigate, useLocation } from "react-router-dom";

import "./Sidebar.css";

const { Sider } = Layout;
const { Text } = Typography;

const menuItems = [
  {
    key: "/dashboard",
    icon: <DashboardOutlined />,
    label: "Dashboard",
  },
  {
    key: "/people",
    icon: <TeamOutlined />,
    label: "People",
  },
  {
    key: "/attendance",
    icon: <CalendarOutlined />,
    label: "Attendance",
  },
  {
    key: "/reports",
    icon: <BarChartOutlined />,
    label: "Reports",
  },
  {
    key: "/settings",
    icon: <SettingOutlined />,
    label: "Settings",
  },
];

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Sider width={245} theme="light" className="app-sidebar">

      <div className="sidebar-content">

        <Menu
          mode="inline"
          selectedKeys={[location.pathname]}
          items={menuItems}
          onClick={({ key }) => navigate(key)}
          className="sidebar-menu"
        />

        <div className="sidebar-divider" />

        <Text className="sidebar-section-title">
          SUPPORT
        </Text>

        <Menu
          mode="inline"
          selectable={false}
          items={[
            {
              key: "documentation",
              icon: <FileTextOutlined />,
              label: "Documentation",
            },
          ]}
          className="sidebar-menu"
        />

      </div>

      <div className="sidebar-footer">
        <Text strong>Employee Management</Text>
        <Text type="secondary">Version 1.0.0</Text>
      </div>

    </Sider>
  );
}

export default Sidebar;
