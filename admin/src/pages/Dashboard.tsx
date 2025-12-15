import React from 'react';
import { Typography, Card, Row, Col, Statistic } from 'antd';
import { Users, Activity, DollarSign } from 'lucide-react';

const { Title } = Typography;

const Dashboard: React.FC = () => {
  return (
    <div>
      <Title level={2}>Dashboard</Title>
      <Row gutter={16}>
        <Col span={8}>
          <Card bordered={false}>
            <Statistic
              title="Active Users"
              value={1128}
              prefix={<Users size={20} />}
              valueStyle={{ color: '#3f8600' }}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card bordered={false}>
            <Statistic
              title="System Activity"
              value={93}
              precision={2}
              valueStyle={{ color: '#cf1322' }}
              prefix={<Activity size={20} />}
              suffix="%"
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card bordered={false}>
            <Statistic
              title="Revenue"
              value={112893}
              prefix={<DollarSign size={20} />}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
