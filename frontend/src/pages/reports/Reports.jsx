import { Card, Col, Row, Statistic, Typography } from "antd";

const { Title } = Typography;

function Reports() {
  return (
    <div>
      <Title level={3}>Reports</Title>

      <Row gutter={[16, 16]}>
        <Col xs={24} sm={8}>
          <Card>
            <Statistic title="Employee Reports" value={120} />
          </Card>
        </Col>

        <Col xs={24} sm={8}>
          <Card>
            <Statistic title="Attendance Reports" value={30} />
          </Card>
        </Col>

        <Col xs={24} sm={8}>
          <Card>
            <Statistic title="Monthly Reports" value={12} />
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Reports;