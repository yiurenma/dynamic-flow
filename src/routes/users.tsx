import { createFileRoute } from "@tanstack/react-router";
import {
  Card,
  Table,
  Button,
  Space,
  Tag,
  Input,
  Select,
  Modal,
  Form,
  message,
  Avatar,
  Popconfirm,
  Typography,
  Row,
  Col,
  Tooltip,
} from "antd";
import {
  PlusOutlined,
  SearchOutlined,
  EditOutlined,
  DeleteOutlined,
  UserOutlined,
  ExportOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import { useState } from "react";

const { Title, Text } = Typography;

export const Route = createFileRoute("/users")({
  component: UsersPage,
});

interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  status: "active" | "inactive" | "banned";
  department: string;
  createdAt: string;
  lastLogin: string;
}

// 模拟数据
const mockUsers: User[] = [
  {
    id: "1",
    name: "张三",
    email: "zhangsan@example.com",
    phone: "13800138001",
    role: "admin",
    status: "active",
    department: "技术部",
    createdAt: "2024-01-15",
    lastLogin: "2024-12-15 10:30",
  },
  {
    id: "2",
    name: "李四",
    email: "lisi@example.com",
    phone: "13800138002",
    role: "editor",
    status: "active",
    department: "运营部",
    createdAt: "2024-02-20",
    lastLogin: "2024-12-14 15:20",
  },
  {
    id: "3",
    name: "王五",
    email: "wangwu@example.com",
    phone: "13800138003",
    role: "viewer",
    status: "inactive",
    department: "市场部",
    createdAt: "2024-03-10",
    lastLogin: "2024-11-28 09:15",
  },
  {
    id: "4",
    name: "赵六",
    email: "zhaoliu@example.com",
    phone: "13800138004",
    role: "editor",
    status: "active",
    department: "技术部",
    createdAt: "2024-04-05",
    lastLogin: "2024-12-15 08:45",
  },
  {
    id: "5",
    name: "钱七",
    email: "qianqi@example.com",
    phone: "13800138005",
    role: "viewer",
    status: "banned",
    department: "财务部",
    createdAt: "2024-05-18",
    lastLogin: "2024-10-20 14:30",
  },
  {
    id: "6",
    name: "孙八",
    email: "sunba@example.com",
    phone: "13800138006",
    role: "admin",
    status: "active",
    department: "人事部",
    createdAt: "2024-06-22",
    lastLogin: "2024-12-14 16:00",
  },
  {
    id: "7",
    name: "周九",
    email: "zhoujiu@example.com",
    phone: "13800138007",
    role: "editor",
    status: "active",
    department: "技术部",
    createdAt: "2024-07-30",
    lastLogin: "2024-12-15 11:20",
  },
  {
    id: "8",
    name: "吴十",
    email: "wushi@example.com",
    phone: "13800138008",
    role: "viewer",
    status: "inactive",
    department: "市场部",
    createdAt: "2024-08-15",
    lastLogin: "2024-12-01 10:00",
  },
];

function UsersPage() {
  const [users, setUsers] = useState<User[]>(mockUsers);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [searchText, setSearchText] = useState("");
  const [statusFilter, setStatusFilter] = useState<string | null>(null);
  const [roleFilter, setRoleFilter] = useState<string | null>(null);
  const [form] = Form.useForm();

  const handleAdd = () => {
    setEditingUser(null);
    form.resetFields();
    setIsModalOpen(true);
  };

  const handleEdit = (user: User) => {
    setEditingUser(user);
    form.setFieldsValue(user);
    setIsModalOpen(true);
  };

  const handleDelete = (id: string) => {
    setUsers(users.filter((u) => u.id !== id));
    message.success("删除成功");
  };

  const handleModalOk = async () => {
    try {
      const values = await form.validateFields();
      if (editingUser) {
        setUsers(
          users.map((u) =>
            u.id === editingUser.id ? { ...u, ...values } : u
          )
        );
        message.success("更新成功");
      } else {
        const newUser: User = {
          id: String(Date.now()),
          ...values,
          createdAt: new Date().toISOString().split("T")[0],
          lastLogin: "-",
        };
        setUsers([...users, newUser]);
        message.success("添加成功");
      }
      setIsModalOpen(false);
      form.resetFields();
    } catch (error) {
      console.error("Validation failed:", error);
    }
  };

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      !searchText ||
      user.name.toLowerCase().includes(searchText.toLowerCase()) ||
      user.email.toLowerCase().includes(searchText.toLowerCase());
    const matchesStatus = !statusFilter || user.status === statusFilter;
    const matchesRole = !roleFilter || user.role === roleFilter;
    return matchesSearch && matchesStatus && matchesRole;
  });

  const columns = [
    {
      title: "用户",
      key: "user",
      render: (_: unknown, record: User) => (
        <div className="flex items-center gap-3">
          <Avatar icon={<UserOutlined />} className="bg-blue-500" />
          <div>
            <div className="font-medium">{record.name}</div>
            <div className="text-xs text-gray-500">{record.email}</div>
          </div>
        </div>
      ),
    },
    {
      title: "手机号",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "角色",
      dataIndex: "role",
      key: "role",
      render: (role: string) => {
        const roleMap: Record<string, { color: string; text: string }> = {
          admin: { color: "red", text: "管理员" },
          editor: { color: "blue", text: "编辑者" },
          viewer: { color: "default", text: "访客" },
        };
        const { color, text } = roleMap[role] || { color: "default", text: role };
        return <Tag color={color}>{text}</Tag>;
      },
    },
    {
      title: "部门",
      dataIndex: "department",
      key: "department",
    },
    {
      title: "状态",
      dataIndex: "status",
      key: "status",
      render: (status: string) => {
        const statusMap: Record<string, { color: string; text: string }> = {
          active: { color: "success", text: "正常" },
          inactive: { color: "warning", text: "未激活" },
          banned: { color: "error", text: "已禁用" },
        };
        const { color, text } = statusMap[status] || { color: "default", text: status };
        return <Tag color={color}>{text}</Tag>;
      },
    },
    {
      title: "最后登录",
      dataIndex: "lastLogin",
      key: "lastLogin",
    },
    {
      title: "操作",
      key: "action",
      render: (_: unknown, record: User) => (
        <Space size="small">
          <Tooltip title="编辑">
            <Button
              type="text"
              icon={<EditOutlined />}
              onClick={() => handleEdit(record)}
            />
          </Tooltip>
          <Popconfirm
            title="确定要删除这个用户吗？"
            onConfirm={() => handleDelete(record.id)}
            okText="确定"
            cancelText="取消"
          >
            <Tooltip title="删除">
              <Button type="text" danger icon={<DeleteOutlined />} />
            </Tooltip>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <Title level={4} className="!mb-1">
            用户管理
          </Title>
          <Text type="secondary">管理系统用户和权限</Text>
        </div>
        <Space>
          <Button icon={<ExportOutlined />}>导出</Button>
          <Button type="primary" icon={<PlusOutlined />} onClick={handleAdd}>
            添加用户
          </Button>
        </Space>
      </div>

      <Card>
        <div className="mb-4">
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} md={8}>
              <Input
                placeholder="搜索用户名或邮箱"
                prefix={<SearchOutlined className="text-gray-400" />}
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                allowClear
              />
            </Col>
            <Col xs={12} sm={6} md={4}>
              <Select
                placeholder="状态"
                className="w-full"
                allowClear
                value={statusFilter}
                onChange={setStatusFilter}
                options={[
                  { value: "active", label: "正常" },
                  { value: "inactive", label: "未激活" },
                  { value: "banned", label: "已禁用" },
                ]}
              />
            </Col>
            <Col xs={12} sm={6} md={4}>
              <Select
                placeholder="角色"
                className="w-full"
                allowClear
                value={roleFilter}
                onChange={setRoleFilter}
                options={[
                  { value: "admin", label: "管理员" },
                  { value: "editor", label: "编辑者" },
                  { value: "viewer", label: "访客" },
                ]}
              />
            </Col>
            <Col xs={24} sm={24} md={8} className="flex justify-end">
              <Button
                icon={<ReloadOutlined />}
                onClick={() => {
                  setSearchText("");
                  setStatusFilter(null);
                  setRoleFilter(null);
                }}
              >
                重置
              </Button>
            </Col>
          </Row>
        </div>
        <Table
          columns={columns}
          dataSource={filteredUsers}
          rowKey="id"
          pagination={{
            total: filteredUsers.length,
            pageSize: 10,
            showSizeChanger: true,
            showQuickJumper: true,
            showTotal: (total) => `共 ${total} 条记录`,
          }}
        />
      </Card>

      <Modal
        title={editingUser ? "编辑用户" : "添加用户"}
        open={isModalOpen}
        onOk={handleModalOk}
        onCancel={() => setIsModalOpen(false)}
        okText="确定"
        cancelText="取消"
        width={600}
      >
        <Form
          form={form}
          layout="vertical"
          className="mt-4"
          initialValues={{ status: "active", role: "viewer" }}
        >
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="name"
                label="用户名"
                rules={[{ required: true, message: "请输入用户名" }]}
              >
                <Input placeholder="请输入用户名" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="email"
                label="邮箱"
                rules={[
                  { required: true, message: "请输入邮箱" },
                  { type: "email", message: "请输入有效的邮箱地址" },
                ]}
              >
                <Input placeholder="请输入邮箱" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="phone"
                label="手机号"
                rules={[{ required: true, message: "请输入手机号" }]}
              >
                <Input placeholder="请输入手机号" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="department"
                label="部门"
                rules={[{ required: true, message: "请选择部门" }]}
              >
                <Select
                  placeholder="请选择部门"
                  options={[
                    { value: "技术部", label: "技术部" },
                    { value: "运营部", label: "运营部" },
                    { value: "市场部", label: "市场部" },
                    { value: "财务部", label: "财务部" },
                    { value: "人事部", label: "人事部" },
                  ]}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="role"
                label="角色"
                rules={[{ required: true, message: "请选择角色" }]}
              >
                <Select
                  placeholder="请选择角色"
                  options={[
                    { value: "admin", label: "管理员" },
                    { value: "editor", label: "编辑者" },
                    { value: "viewer", label: "访客" },
                  ]}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="status"
                label="状态"
                rules={[{ required: true, message: "请选择状态" }]}
              >
                <Select
                  placeholder="请选择状态"
                  options={[
                    { value: "active", label: "正常" },
                    { value: "inactive", label: "未激活" },
                    { value: "banned", label: "已禁用" },
                  ]}
                />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    </div>
  );
}
