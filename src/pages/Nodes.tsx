import { Plus, Search, Box } from 'lucide-react'

export default function Nodes() {
  const nodeCategories = [
    {
      name: '触发器',
      nodes: [
        { name: 'HTTP 请求', description: '接收 HTTP 请求触发流程', icon: '🌐' },
        { name: '定时任务', description: '按时间计划触发', icon: '⏰' },
        { name: '数据库变更', description: '监听数据库变更', icon: '💾' }
      ]
    },
    {
      name: '数据处理',
      nodes: [
        { name: '数据转换', description: '转换数据格式', icon: '🔄' },
        { name: '数据过滤', description: '筛选和过滤数据', icon: '🔍' },
        { name: '数据聚合', description: '聚合和统计数据', icon: '📊' }
      ]
    },
    {
      name: '操作',
      nodes: [
        { name: '发送邮件', description: '发送电子邮件', icon: '📧' },
        { name: 'API 调用', description: '调用外部 API', icon: '🔗' },
        { name: '数据库操作', description: '读写数据库', icon: '💽' }
      ]
    },
    {
      name: '控制流',
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
          <h1 className="text-2xl font-bold text-gray-900">节点管理</h1>
          <p className="text-gray-500 mt-1">浏览和管理可用的流程节点</p>
        </div>
        <button className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
          <Plus className="w-5 h-5" />
          <span>自定义节点</span>
        </button>
      </div>

      {/* 搜索 */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="搜索节点..."
          className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
        />
      </div>

      {/* 节点分类 */}
      <div className="space-y-8">
        {nodeCategories.map((category, categoryIndex) => (
          <div key={categoryIndex}>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">{category.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.nodes.map((node, nodeIndex) => (
                <div
                  key={nodeIndex}
                  className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-lg transition-all cursor-pointer hover:border-primary-300"
                >
                  <div className="flex items-start space-x-3">
                    <div className="text-3xl">{node.icon}</div>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900 mb-1">{node.name}</h3>
                      <p className="text-sm text-gray-500">{node.description}</p>
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
