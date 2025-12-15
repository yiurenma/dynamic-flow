import { apiFetch } from '@/api/http'

export type LoginResponse = {
  token: string
  user: {
    username: string
    displayName: string
    role: string
  }
}

export async function login(username: string, password: string) {
  return apiFetch<LoginResponse>('/api/login', {
    method: 'POST',
    body: JSON.stringify({ username, password }),
  })
}
