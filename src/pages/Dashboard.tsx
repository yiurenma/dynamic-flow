import { 
  TrendingUp, 
  Users, 
  Activity, 
  Clock,
  Sparkles,
  Zap,
  Target
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
      color: 'blue' as const
    },
    {
      title: '活跃用户',
      value: '8,549',
      change: '+8.2%',
      trend: 'up' as const,
      icon: Users,
      color: 'green' as const
    },
    {
      title: '执行次数',
      value: '45,678',
      change: '+23.1%',
      trend: 'up' as const,
      icon: TrendingUp,
      color: 'purple' as const
    },
    {
      title: '平均响应时间',
      value: '234ms',
      change: '-5.4%',
      trend: 'down' as const,
      icon: Clock,
      color: 'orange' as const
    }
  ]

  return (
    <div className="space-y-6 animate-in fade-in duration-700">
      {/* 页面标题 */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center space-x-3 mb-2">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              仪表板
            </h1>
            <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />
          </div>
          <p className="text-gray-400">欢迎回来，查看您的系统概况</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white hover:bg-white/10 transition-all flex items-center space-x-2">
            <Target className="w-4 h-4" />
            <span>导出报告</span>
          </button>
          <button className="px-4 py-2 bg-gradient-primary rounded-xl text-white shadow-glow hover:shadow-glow-lg transition-all flex items-center space-x-2">
            <Zap className="w-4 h-4" />
            <span>创建流程</span>
          </button>
        </div>
      </div>

      {/* 统计卡片 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div 
            key={index}
            style={{ animationDelay: `${index * 100}ms` }}
            className="animate-in slide-in-from-bottom duration-700"
          >
            <StatsCard {...stat} />
          </div>
        ))}
      </div>

      {/* 图表和活动 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* 流程执行趋势 */}
        <div className="lg:col-span-2 glass-dark border border-white/10 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-white flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-primary-400" />
              <span>流程执行趋势</span>
            </h2>
            <select className="text-sm bg-white/5 border border-white/10 text-white rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500/50">
              <option>最近7天</option>
              <option>最近30天</option>
              <option>最近90天</option>
            </select>
          </div>
          
          {/* 渐变条形图 */}
          <div className="space-y-4">
            {[
              { day: '周一', value: 85, color: 'from-blue-500 to-cyan-500' },
              { day: '周二', value: 72, color: 'from-purple-500 to-pink-500' },
              { day: '周三', value: 90, color: 'from-green-500 to-emerald-500' },
              { day: '周四', value: 65, color: 'from-orange-500 to-red-500' },
              { day: '周五', value: 78, color: 'from-indigo-500 to-purple-500' },
              { day: '周六', value: 55, color: 'from-pink-500 to-rose-500' },
              { day: '周日', value: 48, color: 'from-yellow-500 to-orange-500' }
            ].map((item, index) => (
              <div key={item.day} className="group flex items-center space-x-3">
                <span className="text-sm text-gray-400 w-12 font-medium">{item.day}</span>
                <div className="flex-1 bg-white/5 rounded-full h-10 overflow-hidden border border-white/10 relative">
                  <div 
                    className={`bg-gradient-to-r ${item.color} h-full rounded-full flex items-center justify-end px-4 relative overflow-hidden group-hover:shadow-glow transition-all duration-500`}
                    style={{ 
                      width: `${item.value}%`,
                      animationDelay: `${index * 100}ms`
                    }}
                  >
                    <span className="text-sm font-bold text-white relative z-10">{item.value}%</span>
                    <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
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
      <div className="glass-dark border border-white/10 rounded-2xl p-6">
        <h2 className="text-lg font-bold text-white mb-6 flex items-center space-x-2">
          <Sparkles className="w-5 h-5 text-yellow-400" />
          <span>热门流程</span>
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">流程名称</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">类别</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">执行次数</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">成功率</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">状态</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: '用户注册流程', category: '用户管理', executions: '12,345', success: '99.8%', status: 'active', gradient: 'from-green-500 to-emerald-500' },
                { name: '订单处理流程', category: '订单管理', executions: '8,901', success: '98.5%', status: 'active', gradient: 'from-blue-500 to-cyan-500' },
                { name: '数据同步流程', category: '数据处理', executions: '6,789', success: '97.2%', status: 'active', gradient: 'from-purple-500 to-pink-500' },
                { name: '通知发送流程', category: '消息通知', executions: '15,678', success: '99.1%', status: 'active', gradient: 'from-indigo-500 to-purple-500' },
                { name: '报表生成流程', category: '数据分析', executions: '3,456', success: '96.8%', status: 'warning', gradient: 'from-orange-500 to-red-500' }
              ].map((flow, index) => (
                <tr key={index} className="border-b border-white/5 hover:bg-white/5 transition-all group">
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-3">
                      <div className={`w-2 h-2 bg-gradient-to-r ${flow.gradient} rounded-full animate-pulse`}></div>
                      <span className="font-semibold text-white">{flow.name}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-sm text-gray-400">{flow.category}</span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-sm font-medium text-white">{flow.executions}</span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-sm font-bold text-green-400">{flow.success}</span>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${
                      flow.status === 'active' 
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                        : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                    }`}>
                      {flow.status === 'active' ? '● 运行中' : '● 警告'}
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
