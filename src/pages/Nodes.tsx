import { Plus, Search, Sparkles } from 'lucide-react'

export default function Nodes() {
  const nodeCategories = [
    {
      name: '触发器',
      gradient: 'from-blue-500 to-cyan-500',
      nodes: [
        { name: 'HTTP 请求', description: '接收 HTTP 请求触发流程', icon: '🌐' },
        { name: '定时任务', description: '按时间计划触发', icon: '⏰' },
        { name: '数据库变更', description: '监听数据库变更', icon: '💾' }
      ]
    },
    {
      name: '数据处理',
      gradient: 'from-purple-500 to-pink-500',
      nodes: [
        { name: '数据转换', description: '转换数据格式', icon: '🔄' },
        { name: '数据过滤', description: '筛选和过滤数据', icon: '🔍' },
        { name: '数据聚合', description: '聚合和统计数据', icon: '📊' }
      ]
    },
    {
      name: '操作',
      gradient: 'from-green-500 to-emerald-500',
      nodes: [
        { name: '发送邮件', description: '发送电子邮件', icon: '📧' },
        { name: 'API 调用', description: '调用外部 API', icon: '🔗' },
        { name: '数据库操作', description: '读写数据库', icon: '💽' }
      ]
    },
    {
      name: '控制流',
      gradient: 'from-orange-500 to-red-500',
      nodes: [
        { name: '条件判断', description: '根据条件分支', icon: '🔀' },
        { name: '循环', description: '重复执行操作', icon: '🔁' },
        { name: '延迟', description: '延迟执行', icon: '⏳' }
      ]
    }
  ]

  return (
    <div className="space-y-6">
      {/* 页面标题 */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center space-x-3 mb-2">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              节点管理
            </h1>
            <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />
          </div>
          <p className="text-gray-400">浏览和管理可用的流程节点</p>
        </div>
        <button className="flex items-center space-x-2 px-6 py-3 bg-gradient-primary rounded-xl text-white shadow-glow hover:shadow-glow-lg transition-all hover:scale-105">
          <Plus className="w-5 h-5" />
          <span className="font-semibold">自定义节点</span>
        </button>
      </div>

      {/* 搜索 */}
      <div className="relative group">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-primary-400 transition-colors" />
        <input
          type="text"
          placeholder="搜索节点..."
          className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500/50 focus:bg-white/10 transition-all"
        />
      </div>

      {/* 节点分类 */}
      <div className="space-y-8">
        {nodeCategories.map((category, categoryIndex) => (
          <div key={categoryIndex}>
            <div className="flex items-center space-x-3 mb-4">
              <div className={`w-1 h-8 bg-gradient-to-b ${category.gradient} rounded-full`}></div>
              <h2 className="text-xl font-bold text-white">{category.name}</h2>
              <div className={`px-3 py-1 bg-gradient-to-r ${category.gradient} bg-opacity-20 rounded-full text-xs font-semibold text-white`}>
                {category.nodes.length} 个节点
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.nodes.map((node, nodeIndex) => (
                <div
                  key={nodeIndex}
                  className="group glass-dark border border-white/10 rounded-2xl p-5 hover:scale-105 hover:shadow-card-hover transition-all duration-300 cursor-pointer relative overflow-hidden"
                  style={{ animationDelay: `${nodeIndex * 50}ms` }}
                >
                  {/* 背景渐变 */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  
                  <div className="relative z-10 flex items-start space-x-4">
                    <div className={`text-4xl w-16 h-16 flex items-center justify-center bg-gradient-to-br ${category.gradient} bg-opacity-20 rounded-xl group-hover:scale-110 transition-transform`}>
                      {node.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-white mb-1 group-hover:text-primary-300 transition-colors">
                        {node.name}
                      </h3>
                      <p className="text-sm text-gray-400">{node.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
