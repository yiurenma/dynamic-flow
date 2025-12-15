import { PageShell } from '@/components/PageShell'
import { createFileRoute } from '@tanstack/react-router'
import { Descriptions, Statistic } from 'antd'

export const Route = createFileRoute('/admin/')({
  component: DashboardPage,
})

function DashboardPage() {
  return (
    <PageShell title="概览">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Statistic title="用户数" value={3} />
        <Statistic title="角色数" value={3} />
        <Statistic title="近 1 小时操作" value={12} />
      </div>
      <div className="mt-6">
        <Descriptions
          title="环境信息"
          items={[
            { key: '1', label: '运行模式', children: import.meta.env.MODE },
            { key: '2', label: 'Mock', children: import.meta.env.DEV ? '启用' : '关闭' },
          ]}
        />
      </div>
    </PageShell>
  )
}
