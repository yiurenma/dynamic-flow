import { createRootRoute, Link, Outlet, useLocation } from "@tanstack/react-router";
import { Layout, Menu, Avatar, Dropdown, Badge, MenuProps } from "antd";
import {
  DashboardOutlined,
  UserOutlined,
  SettingOutlined,
  BellOutlined,
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  TeamOutlined,
  FileTextOutlined,
  BarChartOutlined,
} from "@ant-design/icons";
import { useState } from "react";

const { Header, Sider, Content } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

const menuItems: MenuItem[] = [
  {
    key: "/",
    label: <Link to="/">仪表盘</Link>,
    icon: <DashboardOutlined />,
  },
  {
    key: "/users",
    label: <Link to="/users">用户管理</Link>,
    icon: <TeamOutlined />,
  },
  {
    key: "/reports",
    label: <Link to="/reports">报表统计</Link>,
    icon: <BarChartOutlined />,
  },
  {
    key: "/content",
    label: <Link to="/content">内容管理</Link>,
    icon: <FileTextOutlined />,
  },
  {
    key: "/settings",
    label: <Link to="/settings">系统设置</Link>,
    icon: <SettingOutlined />,
  },
];

const userMenuItems: MenuProps["items"] = [
  {
    key: "profile",
    label: "个人信息",
    icon: <UserOutlined />,
  },
  {
    key: "settings",
    label: "账户设置",
    icon: <SettingOutlined />,
  },
  {
    type: "divider",
  },
  {
    key: "logout",
    label: "退出登录",
    icon: <LogoutOutlined />,
    danger: true,
  },
];

function RootComponent() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  return (
    <Layout className="h-full">
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        className="!bg-white border-r border-gray-200"
        width={240}
      >
        <div className="h-16 flex items-center justify-center border-b border-gray-100">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">DF</span>
            </div>
            {!collapsed && (
              <span className="font-semibold text-gray-800 text-lg">
                Dynamic Flow
              </span>
            )}
          </div>
        </div>
        <Menu
          mode="inline"
          selectedKeys={[location.pathname]}
          items={menuItems}
          className="border-none mt-2"
        />
      </Sider>
      <Layout>
        <Header className="!bg-white !px-6 flex items-center justify-between border-b border-gray-200">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setCollapsed(!collapsed)}
              className="text-lg text-gray-600 hover:text-gray-900 cursor-pointer bg-transparent border-none"
            >
              {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </button>
            <span className="text-gray-400 text-sm hidden sm:inline">
              欢迎使用管理后台
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Badge count={5} size="small">
              <BellOutlined className="text-lg text-gray-600 cursor-pointer hover:text-gray-900" />
            </Badge>
            <Dropdown menu={{ items: userMenuItems }} placement="bottomRight">
              <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 rounded-lg px-2 py-1">
                <Avatar
                  size="small"
                  icon={<UserOutlined />}
                  className="bg-blue-500"
                />
                <span className="text-gray-700 hidden sm:inline">管理员</span>
              </div>
            </Dropdown>
          </div>
        </Header>
        <Content className="m-4 p-6 bg-white rounded-lg overflow-auto">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}

export const Route = createRootRoute({
  component: RootComponent,
});
