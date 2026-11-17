import { Card, Typography, Descriptions, Tag } from "antd";

const { Title } = Typography;

function Settings() {
  return (
    <div>
      <Title level={3}>Settings</Title>

      <Card title="Application Information">
        <Descriptions column={1}>
          <Descriptions.Item label="Application">
            Employee Management System
          </Descriptions.Item>

          <Descriptions.Item label="Version">
            1.0.0
          </Descriptions.Item>

          <Descriptions.Item label="Status">
            <Tag color="success">Active</Tag>
          </Descriptions.Item>

          <Descriptions.Item label="Environment">
            Development
          </Descriptions.Item>
        </Descriptions>
      </Card>
    </div>
  );
}

export default Settings;