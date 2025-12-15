import React from 'react';
import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

const Settings: React.FC = () => {
  return (
    <div>
      <Title level={2}>Settings</Title>
      <Paragraph>
        System configuration and preferences will go here.
      </Paragraph>
    </div>
  );
};

export default Settings;
