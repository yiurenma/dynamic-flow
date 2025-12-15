import { NavLink } from 'react-router-dom'
import { 
  LayoutDashboard, 
  Users, 
  BarChart3, 
  Settings,
  Zap
} from 'lucide-react'
import clsx from 'clsx'

const navigation = [
  { name: '仪表盘', href: '/', icon: LayoutDashboard },
  { name: '用户管理', href: '/users', icon: Users },
  { name: '数据分析', href: '/analytics', icon: BarChart3 },
  { name: '系统设置', href: '/settings', icon: Settings },
]

export default function Sidebar() {
  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
      <div className="h-16 flex items-center px-6 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <Zap className="h-6 w-6 text-primary-600" />
          <span className="text-xl font-bold text-gray-900">Dynamic Flow</span>
        </div>
      </div>
      
      <nav className="flex-1 px-4 py-6 space-y-1">
        {navigation.map((item) => {
          const Icon = item.icon
          return (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) =>
                clsx(
                  'flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors',
                  isActive
                    ? 'bg-primary-50 text-primary-700'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                )
              }
            >
              <Icon className="mr-3 h-5 w-5" />
              {item.name}
            </NavLink>
          )
        })}
      </nav>
      
      <div className="p-4 border-t border-gray-200">
        <div className="px-4 py-2 text-xs text-gray-500">
          <div className="font-medium text-gray-700">管理员</div>
          <div className="mt-1">admin@example.com</div>
        </div>
      </div>
    </div>
  )
}
