import { AdminLayout } from '@/components/AdminLayout'
import { getToken } from '@/auth/token'
import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/admin')({
  beforeLoad: () => {
    if (!getToken()) {
      throw redirect({ to: '/login' })
    }
  },
  component: AdminLayout,
})
