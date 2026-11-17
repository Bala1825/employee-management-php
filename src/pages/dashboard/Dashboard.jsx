
import { Card, Col, Row, Typography } from "antd";
import { useNavigate } from "react-router-dom";

import {
  CalendarOutlined,
  TeamOutlined,
  BarChartOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

import "./Dashboard.css";

const { Title, Text } = Typography;

const dashboardItems = [
  {
    title: "Attendance",
    description: "Manage employee attendance and track daily check-ins.",
    icon: <CalendarOutlined />,
    path: "/attendance",
    color: "#1677ff",
  },
  {
    title: "People",
    description: "View, add, and manage employee information.",
    icon: <TeamOutlined />,
    path: "/people",
    color: "#16a34a",
  },
  {
    title: "Reports",
    description: "View employee reports and attendance summaries.",
    icon: <BarChartOutlined />,
    path: "/reports",
    color: "#d97706",
  },
];

function Dashboard() {

  const navigate = useNavigate();

  return (
    <div className="dashboard">

      <div className="dashboard-heading">
        <Title level={3}>Dashboard</Title>
        <Text type="secondary">
          Welcome to Employee Management System
        </Text>
      </div>

      <Row gutter={[16, 16]}>

        {dashboardItems.map((item) => (
          <Col xs={24} sm={12} lg={8} key={item.title}>

            <Card
              className="dashboard-card"
              variant="borderless"
              onClick={() => navigate(item.path)}
            >

              <div className="card-icon" style={{ color: item.color }}>
                {item.icon}
              </div>

              <Title level={4}>{item.title}</Title>

              <Text type="secondary">
                {item.description}
              </Text>

              <div className="card-footer">
                <Text strong style={{ color: item.color }}>
                  Explore
                </Text>

                <ArrowRightOutlined style={{ color: item.color }} />
              </div>

            </Card>

          </Col>
        ))}

      </Row>

    </div>
  );
}

export default Dashboard;
