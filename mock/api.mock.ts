import { defineMock } from 'vite-plugin-mock-dev-server'

type UserRole = 'admin' | 'operator' | 'viewer'

export type User = {
  id: string
  username: string
  name: string
  email: string
  role: UserRole
  status: 'active' | 'disabled'
  createdAt: string
}

type AuditLog = {
  id: string
  actor: string
  action: string
  resource: string
  createdAt: string
}

const nowIso = () => new Date().toISOString()

const tokens = new Set<string>()

const users: User[] = [
  {
    id: 'u_1',
    username: 'admin',
    name: 'Admin',
    email: 'admin@example.com',
    role: 'admin',
    status: 'active',
    createdAt: '2025-01-01T00:00:00Z',
  },
  {
    id: 'u_2',
    username: 'operator',
    name: 'Ops',
    email: 'ops@example.com',
    role: 'operator',
    status: 'active',
    createdAt: '2025-02-01T00:00:00Z',
  },
  {
    id: 'u_3',
    username: 'viewer',
    name: 'Viewer',
    email: 'viewer@example.com',
    role: 'viewer',
    status: 'disabled',
    createdAt: '2025-03-01T00:00:00Z',
  },
]

const auditLogs: AuditLog[] = Array.from({ length: 25 }).map((_, i) => ({
  id: `l_${i + 1}`,
  actor: i % 2 === 0 ? 'admin' : 'operator',
  action: i % 3 === 0 ? 'UPDATE' : i % 3 === 1 ? 'CREATE' : 'DELETE',
  resource: i % 2 === 0 ? 'User' : 'Role',
  createdAt: new Date(Date.now() - i * 60_000).toISOString(),
}))

function requireAuth(req: { headers: Record<string, string | undefined> }) {
  const auth = req.headers.authorization || req.headers.Authorization
  if (!auth || !auth.startsWith('Bearer ')) return false
  const token = auth.slice('Bearer '.length)
  return tokens.has(token)
}

export default defineMock([
  {
    url: '/api/login',
    method: 'POST',
    body: (req) => {
      const { username, password } = (req.body ?? {}) as {
        username?: string
        password?: string
      }

      // demo: admin/admin 直接通过；其余任意非空也通过
      if (!username || !password) {
        return new Response(JSON.stringify({ message: '用户名或密码不能为空' }), {
          status: 400,
        })
      }

      const token = `t_${Math.random().toString(16).slice(2)}`
      tokens.add(token)

      return {
        token,
        user: {
          username,
          displayName: username === 'admin' ? 'Admin' : username,
          role: username === 'admin' ? 'admin' : 'operator',
        },
      }
    },
  },
  {
    url: '/api/me',
    method: 'GET',
    body: (req) => {
      if (!requireAuth(req)) {
        return new Response(JSON.stringify({ message: 'Unauthorized' }), {
          status: 401,
        })
      }

      return {
        username: 'admin',
        displayName: 'Admin',
        role: 'admin',
      }
    },
  },
  {
    url: '/api/users',
    method: 'GET',
    body: (req) => {
      if (!requireAuth(req)) {
        return new Response(JSON.stringify({ message: 'Unauthorized' }), {
          status: 401,
        })
      }

      const q = new URL(req.url).searchParams.get('q')?.toLowerCase() ?? ''
      const filtered = q
        ? users.filter(
            (u) =>
              u.username.toLowerCase().includes(q) ||
              u.name.toLowerCase().includes(q) ||
              u.email.toLowerCase().includes(q),
          )
        : users

      return { items: filtered, total: filtered.length }
    },
  },
  {
    url: '/api/users',
    method: 'POST',
    body: (req) => {
      if (!requireAuth(req)) {
        return new Response(JSON.stringify({ message: 'Unauthorized' }), {
          status: 401,
        })
      }

      const payload = (req.body ?? {}) as Partial<User>
      if (!payload.username || !payload.email || !payload.name) {
        return new Response(JSON.stringify({ message: '字段不完整' }), {
          status: 400,
        })
      }

      const user: User = {
        id: `u_${users.length + 1}`,
        username: payload.username,
        name: payload.name,
        email: payload.email,
        role: (payload.role ?? 'viewer') as UserRole,
        status: (payload.status ?? 'active') as User['status'],
        createdAt: nowIso(),
      }
      users.unshift(user)
      auditLogs.unshift({
        id: `l_${auditLogs.length + 1}`,
        actor: 'admin',
        action: 'CREATE',
        resource: `User:${user.id}`,
        createdAt: nowIso(),
      })
      return user
    },
    status: 201,
  },
  {
    url: '/api/users/:id',
    method: 'PATCH',
    body: (req) => {
      if (!requireAuth(req)) {
        return new Response(JSON.stringify({ message: 'Unauthorized' }), {
          status: 401,
        })
      }

      const id = req.params.id as string
      const idx = users.findIndex((u) => u.id === id)
      if (idx === -1) {
        return new Response(JSON.stringify({ message: 'Not Found' }), {
          status: 404,
        })
      }

      const patch = (req.body ?? {}) as Partial<User>
      users[idx] = { ...users[idx], ...patch }

      auditLogs.unshift({
        id: `l_${auditLogs.length + 1}`,
        actor: 'admin',
        action: 'UPDATE',
        resource: `User:${id}`,
        createdAt: nowIso(),
      })

      return users[idx]
    },
    status: 200,
  },
  {
    url: '/api/users/:id',
    method: 'DELETE',
    body: (req) => {
      if (!requireAuth(req)) {
        return new Response(JSON.stringify({ message: 'Unauthorized' }), {
          status: 401,
        })
      }

      const id = req.params.id as string
      const idx = users.findIndex((u) => u.id === id)
      if (idx === -1) {
        return new Response(JSON.stringify({ message: 'Not Found' }), {
          status: 404,
        })
      }

      users.splice(idx, 1)
      auditLogs.unshift({
        id: `l_${auditLogs.length + 1}`,
        actor: 'admin',
        action: 'DELETE',
        resource: `User:${id}`,
        createdAt: nowIso(),
      })

      return { ok: true }
    },
    status: 200,
  },
  {
    url: '/api/roles',
    method: 'GET',
    body: (req) => {
      if (!requireAuth(req)) {
        return new Response(JSON.stringify({ message: 'Unauthorized' }), {
          status: 401,
        })
      }

      return {
        items: [
          { id: 'r_admin', name: 'admin' },
          { id: 'r_operator', name: 'operator' },
          { id: 'r_viewer', name: 'viewer' },
        ],
        total: 3,
      }
    },
  },
  {
    url: '/api/audit-logs',
    method: 'GET',
    body: (req) => {
      if (!requireAuth(req)) {
        return new Response(JSON.stringify({ message: 'Unauthorized' }), {
          status: 401,
        })
      }

      return { items: auditLogs, total: auditLogs.length }
    },
  },
])
