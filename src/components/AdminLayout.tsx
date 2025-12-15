import { clearToken } from '@/auth/token'
import { Link, Outlet, useNavigate, useRouterState } from '@tanstack/react-router'
import { Avatar, Button, Dropdown, Layout, Menu, type MenuProps, theme } from 'antd'
import {
  FileSearchOutlined,
  LockOutlined,
  LogoutOutlined,
  SettingOutlined,
  TeamOutlined,
} from '@ant-design/icons'

const { Header, Sider, Content } = Layout

type MenuItem = Required<MenuProps>['items'][number]

const menuItems: MenuItem[] = [
  { key: 'dashboard', icon: <FileSearchOutlined />, label: <Link to="/admin">概览</Link> },
  { key: 'users', icon: <TeamOutlined />, label: <Link to="/admin/users">用户</Link> },
  { key: 'roles', icon: <LockOutlined />, label: <Link to="/admin/roles">角色</Link> },
  {
    key: 'audit',
    icon: <FileSearchOutlined />,
    label: <Link to="/admin/audit-logs">审计日志</Link>,
  },
  { key: 'settings', icon: <SettingOutlined />, label: <Link to="/admin/settings">设置</Link> },
]

function useSelectedMenuKey(): string {
  const pathname = useRouterState({ select: (s) => s.location.pathname })
  if (pathname === '/admin') return 'dashboard'
  if (pathname.startsWith('/admin/users')) return 'users'
  if (pathname.startsWith('/admin/roles')) return 'roles'
  if (pathname.startsWith('/admin/audit-logs')) return 'audit'
  if (pathname.startsWith('/admin/settings')) return 'settings'
  return 'dashboard'
}

export function AdminLayout() {
  const navigate = useNavigate()
  const selectedKey = useSelectedMenuKey()
  const {
    token: { colorBgContainer, colorBorderSecondary },
  } = theme.useToken()

  const onLogout = async () => {
    clearToken()
    await navigate({ to: '/login' })
  }

  const items: MenuProps['items'] = [
    { key: 'logout', icon: <LogoutOutlined />, label: '退出登录', onClick: onLogout },
  ]

  return (
    <Layout className="min-h-dvh">
      <Sider breakpoint="lg" collapsedWidth={72}>
        <div className="h-14 flex items-center px-4 text-white font-semibold">
          Dynamic Flow
        </div>
        <Menu theme="dark" mode="inline" items={menuItems} selectedKeys={[selectedKey]} />
      </Sider>
      <Layout>
        <Header
          style={{ background: colorBgContainer, borderBottom: `1px solid ${colorBorderSecondary}` }}
          className="flex items-center justify-between px-4"
        >
          <div className="font-medium">管理后台</div>
          <div className="flex items-center gap-3">
            <Button size="small" type="default" onClick={() => navigate({ to: '/admin' })}>
              返回概览
            </Button>
            <Dropdown menu={{ items }} placement="bottomRight">
              <div className="cursor-pointer flex items-center gap-2">
                <Avatar size="small">A</Avatar>
                <span className="text-sm">admin</span>
              </div>
            </Dropdown>
          </div>
        </Header>
        <Content className="p-4">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}
