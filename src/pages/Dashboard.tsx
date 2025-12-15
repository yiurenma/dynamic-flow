import { 
  Users, 
  Activity, 
  TrendingUp, 
  DollarSign,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react'

const stats = [
  {
    name: '总用户数',
    value: '12,345',
    change: '+12.5%',
    changeType: 'positive',
    icon: Users,
  },
  {
    name: '活跃用户',
    value: '8,234',
    change: '+8.2%',
    changeType: 'positive',
    icon: Activity,
  },
  {
    name: '总收入',
    value: '¥234,567',
    change: '+23.1%',
    changeType: 'positive',
    icon: DollarSign,
  },
  {
    name: '增长率',
    value: '18.2%',
    change: '-2.4%',
    changeType: 'negative',
    icon: TrendingUp,
  },
]

const recentActivities = [
  { id: 1, user: '张三', action: '创建了新流程', time: '2分钟前' },
  { id: 2, user: '李四', action: '更新了配置', time: '15分钟前' },
  { id: 3, user: '王五', action: '删除了数据', time: '1小时前' },
  { id: 4, user: '赵六', action: '导出了报告', time: '2小时前' },
]

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">仪表盘</h1>
        <p className="mt-2 text-gray-600">欢迎回来，这里是您的数据概览</p>
      </div>

      {/* 统计卡片 */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <div
              key={stat.name}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                  <p className="mt-2 text-3xl font-bold text-gray-900">{stat.value}</p>
                  <div className="mt-2 flex items-center">
                    {stat.changeType === 'positive' ? (
                      <ArrowUpRight className="h-4 w-4 text-green-500" />
                    ) : (
                      <ArrowDownRight className="h-4 w-4 text-red-500" />
                    )}
                    <span
                      className={`ml-1 text-sm font-medium ${
                        stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                      }`}
                    >
                      {stat.change}
                    </span>
                    <span className="ml-1 text-sm text-gray-500">相比上月</span>
                  </div>
                </div>
                <div className="p-3 bg-primary-50 rounded-lg">
                  <Icon className="h-6 w-6 text-primary-600" />
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* 图表区域和最近活动 */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">数据趋势</h2>
          <div className="h-64 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg">
            <p className="text-gray-500">图表区域（可集成 Chart.js 或 Recharts）</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">最近活动</h2>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-start space-x-3">
                <div className="h-2 w-2 bg-primary-500 rounded-full mt-2"></div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-900">
                    <span className="font-medium">{activity.user}</span>
                    {' '}
                    {activity.action}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
