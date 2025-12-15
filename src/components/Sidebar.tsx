import { NavLink } from 'react-router-dom'
import { 
  LayoutDashboard, 
  Workflow, 
  Box, 
  BarChart3, 
  Settings,
  Zap,
  Sparkles
} from 'lucide-react'

const navItems = [
  { path: '/dashboard', icon: LayoutDashboard, label: '仪表板' },
  { path: '/flows', icon: Workflow, label: '流程管理' },
  { path: '/nodes', icon: Box, label: '节点管理' },
  { path: '/analytics', icon: BarChart3, label: '数据分析' },
  { path: '/settings', icon: Settings, label: '系统设置' },
]

export default function Sidebar() {
  return (
    <aside className="w-64 glass-dark flex flex-col border-r border-white/10">
      {/* Logo */}
      <div className="h-16 flex items-center px-6 border-b border-white/10">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div className="absolute -top-1 -right-1">
              <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
            </div>
          </div>
          <div>
            <span className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Dynamic Flow
            </span>
            <p className="text-xs text-gray-400">Pro Edition</p>
          </div>
        </div>
      </div>

      {/* 导航菜单 */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `group flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 relative overflow-hidden ${
                isActive
                  ? 'bg-gradient-primary text-white shadow-glow'
                  : 'text-gray-300 hover:bg-white/5 hover:text-white'
              }`
            }
          >
            {({ isActive }) => (
              <>
                {isActive && (
                  <div className="absolute inset-0 bg-white/10 animate-pulse"></div>
                )}
                <item.icon className={`w-5 h-5 relative z-10 transition-transform group-hover:scale-110 ${isActive ? 'animate-pulse' : ''}`} />
                <span className="relative z-10 font-medium">{item.label}</span>
                {isActive && (
                  <div className="absolute right-2 w-2 h-2 bg-white rounded-full animate-pulse"></div>
                )}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* 底部信息 */}
      <div className="p-4 border-t border-white/10">
        <div className="px-4 py-3 bg-gradient-primary rounded-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-white/10"></div>
          <div className="relative z-10">
            <p className="text-xs text-white/70 mb-1">版本信息</p>
            <p className="text-sm font-bold text-white">v0.1.0 Pro</p>
          </div>
        </div>
      </div>
    </aside>
  )
}
