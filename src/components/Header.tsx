import { Bell, Search, User, ChevronDown, Moon, Sun } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [isDark, setIsDark] = useState(false)

  return (
    <header className="h-16 glass-dark border-b border-white/10 flex items-center justify-between px-6 backdrop-blur-xl">
      {/* 搜索栏 */}
      <div className="flex-1 max-w-xl">
        <div className="relative group">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-primary-400 transition-colors" />
          <input
            type="text"
            placeholder="搜索流程、节点、数据..."
            className="w-full pl-12 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500/50 focus:bg-white/10 transition-all"
          />
          <div className="absolute inset-0 rounded-xl bg-gradient-primary opacity-0 group-focus-within:opacity-10 transition-opacity pointer-events-none"></div>
        </div>
      </div>

      {/* 右侧操作区 */}
      <div className="flex items-center space-x-3 ml-6">
        {/* 主题切换 */}
        <button 
          onClick={() => setIsDark(!isDark)}
          className="relative p-2.5 text-gray-300 hover:text-white hover:bg-white/10 rounded-xl transition-all group"
        >
          {isDark ? (
            <Sun className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
          ) : (
            <Moon className="w-5 h-5 group-hover:-rotate-12 transition-transform duration-300" />
          )}
        </button>

        {/* 通知 */}
        <button className="relative p-2.5 text-gray-300 hover:text-white hover:bg-white/10 rounded-xl transition-all group">
          <Bell className="w-5 h-5 group-hover:animate-pulse" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-gradient-danger rounded-full animate-pulse"></span>
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full animate-ping"></span>
        </button>

        {/* 用户菜单 */}
        <div className="flex items-center space-x-3 pl-3 ml-3 border-l border-white/10">
          <div className="text-right">
            <p className="text-sm font-semibold text-white">管理员</p>
            <p className="text-xs text-gray-400">admin@flow.com</p>
          </div>
          <div className="relative group cursor-pointer">
            <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform">
              <User className="w-5 h-5 text-white" />
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-900"></div>
          </div>
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </div>
      </div>
    </header>
  )
}
