import { Card, Col, Row, Statistic, Table, Tag, Typography } from "antd";

const { Title } = Typography;

const data = [
  {
    key: "1",
    name: "Arun Kumar",
    employeeId: "EMP001",
    time: "09:00 AM",
    status: "Present",
  },
  {
    key: "2",
    name: "Priya",
    employeeId: "EMP002",
    time: "09:15 AM",
    status: "Present",
  },
  {
    key: "3",
    name: "Suresh",
    employeeId: "EMP003",
    time: "-",
    status: "Absent",
  },
];

const columns = [
  { title: "Employee", dataIndex: "name" },
  { title: "Employee ID", dataIndex: "employeeId" },
  { title: "Entry Time", dataIndex: "time" },
  {
    title: "Status",
    dataIndex: "status",
    render: (status) => (
      <Tag color={status === "Present" ? "success" : "error"}>
        {status}
      </Tag>
    ),
  },
];

function Attendance() {
  return (
    <div>
      <Title level={3}>Attendance Management</Title>

      <Row gutter={[16, 16]} style={{ marginBottom: 20 }}>
        <Col xs={24} sm={8}>
          <Card>
            <Statistic title="Present" value={105} />
          </Card>
        </Col>
        <Col xs={24} sm={8}>
          <Card>
            <Statistic title="Absent" value={10} />
          </Card>
        </Col>
        <Col xs={24} sm={8}>
          <Card>
            <Statistic title="On Leave" value={5} />
          </Card>
        </Col>
      </Row>

      <Card title="Attendance Records">
        <Table columns={columns} dataSource={data} />
      </Card>
    </div>
  );
}

export default Attendance;