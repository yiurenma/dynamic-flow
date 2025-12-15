import { login } from '@/api/auth'
import { setToken } from '@/auth/token'
import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { Button, Card, Form, Input, Typography, message } from 'antd'

export const Route = createFileRoute('/login')({
  component: LoginPage,
})

function LoginPage() {
  const navigate = useNavigate()
  const [form] = Form.useForm<{ username: string; password: string }>()

  const onFinish = async (values: { username: string; password: string }) => {
    try {
      const res = await login(values.username, values.password)
      setToken(res.token)
      await navigate({ to: '/admin' })
    } catch (e) {
      message.error(e instanceof Error ? e.message : '登录失败')
    }
  }

  return (
    <div className="min-h-dvh flex items-center justify-center p-6 bg-slate-50">
      <Card className="w-full max-w-md" bordered>
        <Typography.Title level={3} style={{ marginTop: 0 }}>
          登录
        </Typography.Title>
        <Typography.Paragraph type="secondary" style={{ marginTop: 0 }}>
          Demo：输入任意用户名/密码即可（例如 admin / admin）
        </Typography.Paragraph>

        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          initialValues={{ username: 'admin', password: 'admin' }}
        >
          <Form.Item label="用户名" name="username" rules={[{ required: true }]}>
            <Input autoComplete="username" />
          </Form.Item>
          <Form.Item label="密码" name="password" rules={[{ required: true }]}>
            <Input.Password autoComplete="current-password" />
          </Form.Item>
          <Button type="primary" htmlType="submit" block>
            登录
          </Button>
        </Form>
      </Card>
    </div>
  )
}
