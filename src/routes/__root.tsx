import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { ConfigProvider } from 'antd'

export const Route = createRootRoute({
  component: () => (
    <>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#1677ff',
          },
        }}
      >
        <Outlet />
      </ConfigProvider>
      <TanStackRouterDevtools />
    </>
  ),
})
