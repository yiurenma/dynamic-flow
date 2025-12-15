import { PageShell } from '@/components/PageShell'
import { createFileRoute } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'
import { apiFetch } from '@/api/http'
import { Table } from 'antd'

type Role = { id: string; name: string }

export const Route = createFileRoute('/admin/roles')({
  component: RolesPage,
})

function RolesPage() {
  const query = useQuery({
    queryKey: ['roles'],
    queryFn: () => apiFetch<{ items: Role[]; total: number }>('/api/roles'),
  })

  return (
    <PageShell title="角色">
      <Table
        rowKey="id"
        loading={query.isLoading}
        dataSource={query.data?.items ?? []}
        columns={[
          { title: 'ID', dataIndex: 'id', key: 'id' },
          { title: '名称', dataIndex: 'name', key: 'name' },
        ]}
        pagination={false}
      />
    </PageShell>
  )
}
