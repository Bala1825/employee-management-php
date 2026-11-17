
import { Card, Table, Tag, Typography } from "antd";

const { Title } = Typography;

const data = [
  {
    key: "1",
    name: "Arun Kumar",
    employeeId: "EMP001",
    department: "IT",
    status: "Active",
  },
  {
    key: "2",
    name: "Priya",
    employeeId: "EMP002",
    department: "HR",
    status: "Active",
  },
  {
    key: "3",
    name: "Suresh",
    employeeId: "EMP003",
    department: "Finance",
    status: "Inactive",
  },
];

const columns = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Employee ID",
    dataIndex: "employeeId",
  },
  {
    title: "Department",
    dataIndex: "department",
  },
  {
    title: "Status",
    dataIndex: "status",
    render: (status) => (
      <Tag color={status === "Active" ? "success" : "error"}>
        {status}
      </Tag>
    ),
  },
];

function People() {
  return (
    <div>
      <Title level={3}>People</Title>

      <Card>
        <Table
          columns={columns}
          dataSource={data}
          pagination={false}
        />
      </Card>
    </div>
  );
}

export default People;
