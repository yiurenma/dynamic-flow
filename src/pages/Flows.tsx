import { Plus, Search, Filter, Play, Pause, Trash2, Edit } from 'lucide-react'

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
      executions: 1234
    },
    {
      id: 2,
      name: '订单处理流程',
      description: '订单创建、支付和发货流程',
      status: 'active',
      category: '订单管理',
      nodes: 12,
      lastRun: '10分钟前',
      executions: 890
    },
    {
      id: 3,
      name: '数据同步流程',
      description: '同步外部系统数据',
      status: 'paused',
      category: '数据处理',
      nodes: 6,
      lastRun: '2小时前',
      executions: 456
    },
    {
      id: 4,
      name: '通知发送流程',
      description: '发送邮件和短信通知',
      status: 'active',
      category: '消息通知',
      nodes: 10,
      lastRun: '1分钟前',
      executions: 2345
    }
  ]

  return (
    <div className="space-y-6">
      {/* 页面标题和操作 */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">流程管理</h1>
          <p className="text-gray-500 mt-1">创建和管理您的工作流程</p>
        </div>
        <button className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
          <Plus className="w-5 h-5" />
          <span>创建流程</span>
        </button>
      </div>

      {/* 搜索和筛选 */}
      <div className="flex items-center space-x-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="搜索流程..."
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>
        <button className="flex items-center space-x-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
          <Filter className="w-5 h-5" />
          <span>筛选</span>
        </button>
      </div>

      {/* 流程列表 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {flows.map((flow) => (
          <div key={flow.id} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{flow.name}</h3>
                <p className="text-sm text-gray-500">{flow.description}</p>
              </div>
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                flow.status === 'active' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-gray-100 text-gray-800'
              }`}>
                {flow.status === 'active' ? '运行中' : '已暂停'}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-xs text-gray-500 mb-1">类别</p>
                <p className="text-sm font-medium text-gray-900">{flow.category}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">节点数</p>
                <p className="text-sm font-medium text-gray-900">{flow.nodes} 个</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">最后执行</p>
                <p className="text-sm font-medium text-gray-900">{flow.lastRun}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">总执行次数</p>
                <p className="text-sm font-medium text-gray-900">{flow.executions}</p>
              </div>
            </div>

            <div className="flex items-center space-x-2 pt-4 border-t border-gray-100">
              <button className="flex-1 flex items-center justify-center space-x-1 px-3 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <Edit className="w-4 h-4" />
                <span className="text-sm">编辑</span>
              </button>
              <button className="flex-1 flex items-center justify-center space-x-1 px-3 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                {flow.status === 'active' ? (
                  <>
                    <Pause className="w-4 h-4" />
                    <span className="text-sm">暂停</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4" />
                    <span className="text-sm">启动</span>
                  </>
                )}
              </button>
              <button className="px-3 py-2 border border-red-200 text-red-600 rounded-lg hover:bg-red-50 transition-colors">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
