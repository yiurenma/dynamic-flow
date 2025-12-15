import { 
  TrendingUp, 
  Users, 
  Activity, 
  Clock,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react'
import StatsCard from '../components/StatsCard'
import RecentActivity from '../components/RecentActivity'

export default function Dashboard() {
  const stats = [
    {
      title: '总流程数',
      value: '1,234',
      change: '+12.5%',
      trend: 'up' as const,
      icon: Activity,
      color: 'blue'
    },
    {
      title: '活跃用户',
      value: '8,549',
      change: '+8.2%',
      trend: 'up' as const,
      icon: Users,
      color: 'green'
    },
    {
      title: '执行次数',
      value: '45,678',
      change: '+23.1%',
      trend: 'up' as const,
      icon: TrendingUp,
      color: 'purple'
    },
    {
      title: '平均响应时间',
      value: '234ms',
      change: '-5.4%',
      trend: 'down' as const,
      icon: Clock,
      color: 'orange'
    }
  ]

  return (
    <div className="space-y-6">
      {/* 页面标题 */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">仪表板</h1>
        <p className="text-gray-500 mt-1">欢迎回来，查看您的系统概况</p>
      </div>

      {/* 统计卡片 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      {/* 图表和活动 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* 流程执行趋势 */}
        <div className="lg:col-span-2 bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">流程执行趋势</h2>
            <select className="text-sm border border-gray-200 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-primary-500">
              <option>最近7天</option>
              <option>最近30天</option>
              <option>最近90天</option>
            </select>
          </div>
          
          {/* 简单的条形图示例 */}
          <div className="space-y-4">
            {[
              { day: '周一', value: 85 },
              { day: '周二', value: 72 },
              { day: '周三', value: 90 },
              { day: '周四', value: 65 },
              { day: '周五', value: 78 },
              { day: '周六', value: 55 },
              { day: '周日', value: 48 }
            ].map((item) => (
              <div key={item.day} className="flex items-center space-x-3">
                <span className="text-sm text-gray-600 w-12">{item.day}</span>
                <div className="flex-1 bg-gray-100 rounded-full h-8 overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-primary-500 to-primary-600 h-full rounded-full flex items-center justify-end px-3"
                    style={{ width: `${item.value}%` }}
                  >
                    <span className="text-xs font-medium text-white">{item.value}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 最近活动 */}
        <RecentActivity />
      </div>

      {/* 热门流程 */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">热门流程</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">流程名称</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">类别</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">执行次数</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">成功率</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">状态</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: '用户注册流程', category: '用户管理', executions: '12,345', success: '99.8%', status: 'active' },
                { name: '订单处理流程', category: '订单管理', executions: '8,901', success: '98.5%', status: 'active' },
                { name: '数据同步流程', category: '数据处理', executions: '6,789', success: '97.2%', status: 'active' },
                { name: '通知发送流程', category: '消息通知', executions: '15,678', success: '99.1%', status: 'active' },
                { name: '报表生成流程', category: '数据分析', executions: '3,456', success: '96.8%', status: 'warning' }
              ].map((flow, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-4">
                    <span className="font-medium text-gray-900">{flow.name}</span>
                  </td>
                  <td className="py-3 px-4">
                    <span className="text-sm text-gray-600">{flow.category}</span>
                  </td>
                  <td className="py-3 px-4">
                    <span className="text-sm text-gray-900">{flow.executions}</span>
                  </td>
                  <td className="py-3 px-4">
                    <span className="text-sm font-medium text-green-600">{flow.success}</span>
                  </td>
                  <td className="py-3 px-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      flow.status === 'active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {flow.status === 'active' ? '运行中' : '警告'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
