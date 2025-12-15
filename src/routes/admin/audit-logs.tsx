import { PageShell } from '@/components/PageShell'
import { apiFetch } from '@/api/http'
import { createFileRoute } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'
import { Table, Tag } from 'antd'

type AuditLog = {
  id: string
  actor: string
  action: string
  resource: string
  createdAt: string
}

export const Route = createFileRoute('/admin/audit-logs')({
  component: AuditLogsPage,
})

function AuditLogsPage() {
  const query = useQuery({
    queryKey: ['audit-logs'],
    queryFn: () => apiFetch<{ items: AuditLog[]; total: number }>('/api/audit-logs'),
  })

  return (
    <PageShell title="审计日志">
      <Table
        rowKey="id"
        loading={query.isLoading}
        dataSource={query.data?.items ?? []}
        columns={[
          { title: '时间', dataIndex: 'createdAt', key: 'createdAt' },
          { title: '操作者', dataIndex: 'actor', key: 'actor' },
          {
            title: '动作',
            dataIndex: 'action',
            key: 'action',
            render: (v: string) => <Tag color={v === 'DELETE' ? 'red' : v === 'UPDATE' ? 'blue' : 'green'}>{v}</Tag>,
          },
          { title: '资源', dataIndex: 'resource', key: 'resource' },
        ]}
        pagination={{ pageSize: 10 }}
      />
    </PageShell>
  )
}
