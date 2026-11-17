import {
  Avatar,
  Badge,
  Button,
  Input,
  Space,
  Typography,
} from "antd";

import {
  BellOutlined,
  SearchOutlined,
  UserOutlined,
} from "@ant-design/icons";

import "./Header.css";

const { Text } = Typography;

function Header() {
  return (
    <header className="app-header">

      <div className="header-left">

        <div className="header-logo">
          <div className="logo-icon">E</div>
          <Text strong className="logo-text">
            EMPMAN
          </Text>
        </div>

      </div>

      <div className="header-right">

        <Input
          placeholder="Search..."
          prefix={<SearchOutlined />}
          className="header-search"
        />

        <Button
          type="text"
          shape="circle"
          icon={
            <Badge dot color="#16a34a">
              <BellOutlined />
            </Badge>
          }
        />

        <Space className="header-profile">

          <Avatar
            icon={<UserOutlined />}
            style={{ backgroundColor: "#168653" }}
          />

          <div className="profile-details">
            <Text strong>Bala</Text>
            <Text type="secondary">Administrator</Text>
          </div>

        </Space>

      </div>

    </header>
  );
}

export default Header;