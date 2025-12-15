import { listUsers, type User } from '@/api/users'
import { PageShell } from '@/components/PageShell'
import { createFileRoute } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'
import { Button, Input, Space, Table, Tag, message } from 'antd'
import { useMemo, useState } from 'react'

export const Route = createFileRoute('/admin/users')({
  component: UsersPage,
})

function UsersPage() {
  const [q, setQ] = useState('')

  const query = useQuery({
    queryKey: ['users', q],
    queryFn: () => listUsers(q || undefined),
  })

  const columns = useMemo(
    () => [
      { title: '用户名', dataIndex: 'username', key: 'username' },
      { title: '姓名', dataIndex: 'name', key: 'name' },
      { title: '邮箱', dataIndex: 'email', key: 'email' },
      {
        title: '角色',
        dataIndex: 'role',
        key: 'role',
        render: (role: User['role']) => (
          <Tag color={role === 'admin' ? 'red' : role === 'operator' ? 'blue' : 'default'}>{role}</Tag>
        ),
      },
      {
        title: '状态',
        dataIndex: 'status',
        key: 'status',
        render: (status: User['status']) => <Tag color={status === 'active' ? 'green' : 'default'}>{status}</Tag>,
      },
      { title: '创建时间', dataIndex: 'createdAt', key: 'createdAt' },
    ],
    [],
  )

  return (
    <PageShell
      title="用户"
      extra={
        <Space>
          <Input
            allowClear
            placeholder="搜索 username / name / email"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            style={{ width: 260 }}
          />
          <Button
            onClick={() => {
              message.info('下一步迭代：新增/编辑/禁用用户')
            }}
            type="primary"
          >
            新增用户
          </Button>
        </Space>
      }
    >
      <Table
        rowKey="id"
        loading={query.isLoading}
        dataSource={query.data?.items ?? []}
        columns={columns}
        pagination={false}
      />
    </PageShell>
  )
}
