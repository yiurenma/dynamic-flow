import { getToken } from '@/auth/token'

export async function apiFetch<T>(input: string, init?: RequestInit): Promise<T> {
  const token = getToken()
  const headers = new Headers(init?.headers)
  headers.set('Content-Type', headers.get('Content-Type') ?? 'application/json')
  if (token) headers.set('Authorization', `Bearer ${token}`)

  const res = await fetch(input, {
    ...init,
    headers,
  })

  if (!res.ok) {
    const text = await res.text().catch(() => '')
    throw new Error(text || `Request failed: ${res.status}`)
  }

  return (await res.json()) as T
}
