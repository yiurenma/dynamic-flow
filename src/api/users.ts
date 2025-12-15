import { apiFetch } from '@/api/http'

export type User = {
  id: string
  username: string
  name: string
  email: string
  role: 'admin' | 'operator' | 'viewer'
  status: 'active' | 'disabled'
  createdAt: string
}

export type ListResponse<T> = { items: T[]; total: number }

export async function listUsers(q?: string) {
  const qs = q ? `?q=${encodeURIComponent(q)}` : ''
  return apiFetch<ListResponse<User>>(`/api/users${qs}`)
}
