import { Card, Space, Typography } from 'antd'
import type { ReactNode } from 'react'

export function PageShell(props: { title: string; extra?: ReactNode; children: ReactNode }) {
  return (
    <Space direction="vertical" size="large" className="w-full">
      <div className="flex items-center justify-between">
        <Typography.Title level={3} style={{ margin: 0 }}>
          {props.title}
        </Typography.Title>
        {props.extra}
      </div>
      <Card>{props.children}</Card>
    </Space>
  )
}
