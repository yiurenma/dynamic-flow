import { createFileRoute } from "@tanstack/react-router";
import {
  Card,
  Form,
  Input,
  Button,
  Switch,
  Select,
  Divider,
  Typography,
  Row,
  Col,
  Upload,
  Avatar,
  message,
  Tabs,
  List,
  Tag,
  Space,
  InputNumber,
} from "antd";
import {
  UserOutlined,
  UploadOutlined,
  LockOutlined,
  BellOutlined,
  GlobalOutlined,
  SafetyCertificateOutlined,
  DatabaseOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { useState } from "react";

const { Title, Text, Paragraph } = Typography;

export const Route = createFileRoute("/settings")({
  component: SettingsPage,
});

// 登录历史数据
const loginHistory = [
  { key: "1", device: "Chrome / Windows", ip: "192.168.1.100", location: "北京", time: "2024-12-15 10:30:25", status: "success" },
  { key: "2", device: "Safari / macOS", ip: "192.168.1.101", location: "上海", time: "2024-12-14 15:20:10", status: "success" },
  { key: "3", device: "Firefox / Linux", ip: "10.0.0.50", location: "深圳", time: "2024-12-13 09:15:30", status: "failed" },
  { key: "4", device: "Chrome / Android", ip: "192.168.1.102", location: "广州", time: "2024-12-12 18:45:00", status: "success" },
];

function SettingsPage() {
  const [profileForm] = Form.useForm();
  const [securityForm] = Form.useForm();
  const [notificationForm] = Form.useForm();
  const [systemForm] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleSave = async (formName: string) => {
    setLoading(true);
    // 模拟保存
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setLoading(false);
    message.success(`${formName}保存成功`);
  };

  const tabItems = [
    {
      key: "profile",
      label: (
        <span>
          <UserOutlined />
          个人信息
        </span>
      ),
      children: (
        <div className="max-w-2xl">
          <div className="flex items-center gap-6 mb-8">
            <Avatar size={80} icon={<UserOutlined />} className="bg-blue-500" />
            <div>
              <Upload showUploadList={false}>
                <Button icon={<UploadOutlined />}>更换头像</Button>
              </Upload>
              <Paragraph type="secondary" className="text-xs mt-2 !mb-0">
                支持 jpg、png 格式，文件小于 2MB
              </Paragraph>
            </div>
          </div>

          <Form
            form={profileForm}
            layout="vertical"
            initialValues={{
              name: "管理员",
              email: "admin@example.com",
              phone: "13800138000",
              department: "技术部",
              position: "系统管理员",
              bio: "负责系统运维和管理工作",
            }}
          >
            <Row gutter={24}>
              <Col span={12}>
                <Form.Item name="name" label="姓名" rules={[{ required: true }]}>
                  <Input placeholder="请输入姓名" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item name="email" label="邮箱" rules={[{ required: true, type: "email" }]}>
                  <Input placeholder="请输入邮箱" />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={24}>
              <Col span={12}>
                <Form.Item name="phone" label="手机号">
                  <Input placeholder="请输入手机号" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item name="department" label="部门">
                  <Select
                    placeholder="请选择部门"
                    options={[
                      { value: "技术部", label: "技术部" },
                      { value: "运营部", label: "运营部" },
                      { value: "市场部", label: "市场部" },
                      { value: "财务部", label: "财务部" },
                    ]}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Form.Item name="position" label="职位">
              <Input placeholder="请输入职位" />
            </Form.Item>
            <Form.Item name="bio" label="个人简介">
              <Input.TextArea rows={3} placeholder="介绍一下自己..." />
            </Form.Item>
            <Form.Item>
              <Button type="primary" loading={loading} onClick={() => handleSave("个人信息")}>
                保存修改
              </Button>
            </Form.Item>
          </Form>
        </div>
      ),
    },
    {
      key: "security",
      label: (
        <span>
          <LockOutlined />
          安全设置
        </span>
      ),
      children: (
        <div className="max-w-2xl">
          <Card title="修改密码" className="mb-6">
            <Form form={securityForm} layout="vertical">
              <Form.Item
                name="currentPassword"
                label="当前密码"
                rules={[{ required: true, message: "请输入当前密码" }]}
              >
                <Input.Password placeholder="请输入当前密码" />
              </Form.Item>
              <Form.Item
                name="newPassword"
                label="新密码"
                rules={[
                  { required: true, message: "请输入新密码" },
                  { min: 8, message: "密码至少8位" },
                ]}
              >
                <Input.Password placeholder="请输入新密码" />
              </Form.Item>
              <Form.Item
                name="confirmPassword"
                label="确认密码"
                dependencies={["newPassword"]}
                rules={[
                  { required: true, message: "请确认新密码" },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("newPassword") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error("两次输入的密码不一致"));
                    },
                  }),
                ]}
              >
                <Input.Password placeholder="请再次输入新密码" />
              </Form.Item>
              <Form.Item>
                <Button type="primary" onClick={() => handleSave("密码")}>
                  更新密码
                </Button>
              </Form.Item>
            </Form>
          </Card>

          <Card title="双重认证" className="mb-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">启用双重认证</div>
                <Text type="secondary" className="text-sm">
                  登录时需要额外的验证码确认
                </Text>
              </div>
              <Switch defaultChecked />
            </div>
            <Divider />
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">短信验证</div>
                <Text type="secondary" className="text-sm">
                  绑定手机号：138****8000
                </Text>
              </div>
              <Button size="small">更换</Button>
            </div>
          </Card>

          <Card title="登录历史">
            <List
              dataSource={loginHistory}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    title={
                      <Space>
                        <span>{item.device}</span>
                        <Tag color={item.status === "success" ? "success" : "error"}>
                          {item.status === "success" ? "成功" : "失败"}
                        </Tag>
                      </Space>
                    }
                    description={
                      <span className="text-xs text-gray-500">
                        IP: {item.ip} · {item.location} · {item.time}
                      </span>
                    }
                  />
                </List.Item>
              )}
            />
          </Card>
        </div>
      ),
    },
    {
      key: "notifications",
      label: (
        <span>
          <BellOutlined />
          通知设置
        </span>
      ),
      children: (
        <div className="max-w-2xl">
          <Form form={notificationForm} layout="vertical">
            <Card title="消息通知" className="mb-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">系统通知</div>
                    <Text type="secondary" className="text-sm">
                      接收系统更新、维护等通知
                    </Text>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Divider className="!my-3" />
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">订单通知</div>
                    <Text type="secondary" className="text-sm">
                      接收新订单、订单状态变更通知
                    </Text>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Divider className="!my-3" />
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">评论通知</div>
                    <Text type="secondary" className="text-sm">
                      接收用户评论和回复通知
                    </Text>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Divider className="!my-3" />
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">营销推广</div>
                    <Text type="secondary" className="text-sm">
                      接收促销活动和营销信息
                    </Text>
                  </div>
                  <Switch />
                </div>
              </div>
            </Card>

            <Card title="通知方式">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">站内消息</div>
                    <Text type="secondary" className="text-sm">
                      在系统内显示消息通知
                    </Text>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Divider className="!my-3" />
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">邮件通知</div>
                    <Text type="secondary" className="text-sm">
                      发送通知到注册邮箱
                    </Text>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Divider className="!my-3" />
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">短信通知</div>
                    <Text type="secondary" className="text-sm">
                      发送短信到绑定手机
                    </Text>
                  </div>
                  <Switch />
                </div>
              </div>
            </Card>

            <div className="mt-6">
              <Button type="primary" onClick={() => handleSave("通知设置")}>
                保存设置
              </Button>
            </div>
          </Form>
        </div>
      ),
    },
    {
      key: "system",
      label: (
        <span>
          <SafetyCertificateOutlined />
          系统配置
        </span>
      ),
      children: (
        <div className="max-w-2xl">
          <Form form={systemForm} layout="vertical">
            <Card title="基础设置" className="mb-6" extra={<GlobalOutlined />}>
              <Form.Item name="siteName" label="站点名称" initialValue="Dynamic Flow Admin">
                <Input placeholder="请输入站点名称" />
              </Form.Item>
              <Row gutter={24}>
                <Col span={12}>
                  <Form.Item name="language" label="默认语言" initialValue="zh-CN">
                    <Select
                      options={[
                        { value: "zh-CN", label: "简体中文" },
                        { value: "en-US", label: "English" },
                        { value: "ja-JP", label: "日本語" },
                      ]}
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item name="timezone" label="时区" initialValue="Asia/Shanghai">
                    <Select
                      options={[
                        { value: "Asia/Shanghai", label: "(UTC+8) 北京时间" },
                        { value: "America/New_York", label: "(UTC-5) 纽约时间" },
                        { value: "Europe/London", label: "(UTC+0) 伦敦时间" },
                      ]}
                    />
                  </Form.Item>
                </Col>
              </Row>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="font-medium">维护模式</div>
                  <Text type="secondary" className="text-sm">
                    开启后，普通用户将无法访问系统
                  </Text>
                </div>
                <Switch />
              </div>
            </Card>

            <Card title="邮件配置" className="mb-6" extra={<MailOutlined />}>
              <Row gutter={24}>
                <Col span={12}>
                  <Form.Item name="smtpHost" label="SMTP 服务器">
                    <Input placeholder="smtp.example.com" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item name="smtpPort" label="端口" initialValue={587}>
                    <InputNumber className="w-full" />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={24}>
                <Col span={12}>
                  <Form.Item name="smtpUser" label="用户名">
                    <Input placeholder="邮箱用户名" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item name="smtpPassword" label="密码">
                    <Input.Password placeholder="邮箱密码" />
                  </Form.Item>
                </Col>
              </Row>
              <Form.Item name="senderEmail" label="发件人邮箱">
                <Input placeholder="noreply@example.com" />
              </Form.Item>
            </Card>

            <Card title="存储配置" extra={<DatabaseOutlined />}>
              <Form.Item name="storageType" label="存储方式" initialValue="local">
                <Select
                  options={[
                    { value: "local", label: "本地存储" },
                    { value: "oss", label: "阿里云 OSS" },
                    { value: "cos", label: "腾讯云 COS" },
                    { value: "s3", label: "AWS S3" },
                  ]}
                />
              </Form.Item>
              <Row gutter={24}>
                <Col span={12}>
                  <Form.Item name="maxFileSize" label="最大文件大小 (MB)" initialValue={10}>
                    <InputNumber className="w-full" min={1} max={100} />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item name="allowedTypes" label="允许的文件类型">
                    <Select
                      mode="multiple"
                      placeholder="选择允许的文件类型"
                      defaultValue={["jpg", "png", "pdf"]}
                      options={[
                        { value: "jpg", label: "JPG" },
                        { value: "png", label: "PNG" },
                        { value: "gif", label: "GIF" },
                        { value: "pdf", label: "PDF" },
                        { value: "doc", label: "DOC" },
                        { value: "xlsx", label: "XLSX" },
                      ]}
                    />
                  </Form.Item>
                </Col>
              </Row>
            </Card>

            <div className="mt-6">
              <Button type="primary" onClick={() => handleSave("系统配置")}>
                保存配置
              </Button>
            </div>
          </Form>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <Title level={4} className="!mb-1">
          系统设置
        </Title>
        <Text type="secondary">管理个人信息和系统配置</Text>
      </div>

      <Card>
        <Tabs items={tabItems} tabPosition="left" className="settings-tabs" />
      </Card>

      <style>{`
        .settings-tabs .ant-tabs-nav {
          width: 180px;
        }
        .settings-tabs .ant-tabs-content-holder {
          padding-left: 24px;
          border-left: 1px solid #f0f0f0;
        }
      `}</style>
    </div>
  );
}
