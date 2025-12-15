import { Plus, Search, Filter, Play, Pause, Trash2, Edit, Sparkles } from 'lucide-react'

export default function Flows() {
  const flows = [
    {
      id: 1,
      name: '用户注册流程',
      description: '处理新用户注册和验证',
      status: 'active',
      category: '用户管理',
      nodes: 8,
      lastRun: '5分钟前',
      executions: 1234,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      name: '订单处理流程',
      description: '订单创建、支付和发货流程',
      status: 'active',
      category: '订单管理',
      nodes: 12,
      lastRun: '10分钟前',
      executions: 890,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      id: 3,
      name: '数据同步流程',
      description: '同步外部系统数据',
      status: 'paused',
      category: '数据处理',
      nodes: 6,
      lastRun: '2小时前',
      executions: 456,
      gradient: 'from-orange-500 to-red-500'
    },
    {
      id: 4,
      name: '通知发送流程',
      description: '发送邮件和短信通知',
      status: 'active',
      category: '消息通知',
      nodes: 10,
      lastRun: '1分钟前',
      executions: 2345,
      gradient: 'from-green-500 to-emerald-500'
    }
  ]

  return (
    <div className="space-y-6">
      {/* 页面标题和操作 */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center space-x-3 mb-2">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              流程管理
            </h1>
            <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />
          </div>
          <p className="text-gray-400">创建和管理您的工作流程</p>
        </div>
        <button className="flex items-center space-x-2 px-6 py-3 bg-gradient-primary rounded-xl text-white shadow-glow hover:shadow-glow-lg transition-all hover:scale-105">
          <Plus className="w-5 h-5" />
          <span className="font-semibold">创建流程</span>
        </button>
      </div>

      {/* 搜索和筛选 */}
      <div className="flex items-center space-x-4">
        <div className="flex-1 relative group">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-primary-400 transition-colors" />
          <input
            type="text"
            placeholder="搜索流程..."
            className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500/50 focus:bg-white/10 transition-all"
          />
        </div>
        <button className="flex items-center space-x-2 px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-white hover:bg-white/10 transition-all">
          <Filter className="w-5 h-5" />
          <span className="font-medium">筛选</span>
        </button>
      </div>

      {/* 流程列表 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {flows.map((flow, index) => (
          <div 
            key={flow.id} 
            className="group glass-dark border border-white/10 rounded-2xl p-6 hover:scale-105 hover:shadow-card-hover transition-all duration-300 relative overflow-hidden"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* 背景渐变 */}
            <div className={`absolute inset-0 bg-gradient-to-br ${flow.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
            
            {/* 状态指示器 */}
            <div className="absolute top-4 right-4">
              <div className={`w-3 h-3 rounded-full ${flow.status === 'active' ? 'bg-green-500 animate-pulse' : 'bg-gray-500'}`}></div>
            </div>

            <div className="relative z-10">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-300 transition-colors">
                    {flow.name}
                  </h3>
                  <p className="text-sm text-gray-400">{flow.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/5 rounded-xl p-3 border border-white/10">
                  <p className="text-xs text-gray-400 mb-1">类别</p>
                  <p className="text-sm font-semibold text-white">{flow.category}</p>
                </div>
                <div className="bg-white/5 rounded-xl p-3 border border-white/10">
                  <p className="text-xs text-gray-400 mb-1">节点数</p>
                  <p className="text-sm font-semibold text-white">{flow.nodes} 个</p>
                </div>
                <div className="bg-white/5 rounded-xl p-3 border border-white/10">
                  <p className="text-xs text-gray-400 mb-1">最后执行</p>
                  <p className="text-sm font-semibold text-white">{flow.lastRun}</p>
                </div>
                <div className="bg-white/5 rounded-xl p-3 border border-white/10">
                  <p className="text-xs text-gray-400 mb-1">总执行次数</p>
                  <p className="text-sm font-semibold text-white">{flow.executions}</p>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <button className="flex-1 flex items-center justify-center space-x-2 px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white hover:bg-white/10 transition-all">
                  <Edit className="w-4 h-4" />
                  <span className="text-sm font-medium">编辑</span>
                </button>
                <button className="flex-1 flex items-center justify-center space-x-2 px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white hover:bg-white/10 transition-all">
                  {flow.status === 'active' ? (
                    <>
                      <Pause className="w-4 h-4" />
                      <span className="text-sm font-medium">暂停</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4" />
                      <span className="text-sm font-medium">启动</span>
                    </>
                  )}
                </button>
                <button className="px-4 py-2.5 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl hover:bg-red-500/20 transition-all">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
