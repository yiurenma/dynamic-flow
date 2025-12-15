import { PageShell } from '@/components/PageShell'
import { createFileRoute } from '@tanstack/react-router'
import { Alert, Descriptions, Switch } from 'antd'
import { useState } from 'react'

export const Route = createFileRoute('/admin/settings')({
  component: SettingsPage,
})

function SettingsPage() {
  const [demo, setDemo] = useState(true)

  return (
    <PageShell title="设置">
      <Alert
        type="info"
        showIcon
        message="这里先放配置入口，后续可接入权限、菜单配置、系统参数等。"
      />
      <div className="mt-6">
        <Descriptions
          title="Demo 配置"
          items={[
            {
              key: 'demo',
              label: '开启 Mock 演示功能',
              children: <Switch checked={demo} onChange={setDemo} />,
            },
          ]}
        />
      </div>
    </PageShell>
  )
}
