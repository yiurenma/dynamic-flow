import { BarChart3, TrendingUp, PieChart, Sparkles, Calendar } from 'lucide-react'

export default function Analytics() {
  return (
    <div className="space-y-6">
      {/* 页面标题 */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center space-x-3 mb-2">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              数据分析
            </h1>
            <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />
          </div>
          <p className="text-gray-400">查看系统性能和使用统计</p>
        </div>
        <button className="flex items-center space-x-2 px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-white hover:bg-white/10 transition-all">
          <Calendar className="w-5 h-5" />
          <span>选择日期范围</span>
        </button>
      </div>

      {/* 时间范围选择 */}
      <div className="flex items-center space-x-3">
        <button className="px-6 py-2.5 bg-gradient-primary rounded-xl text-white shadow-glow font-semibold">今天</button>
        <button className="px-6 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white hover:bg-white/10 transition-all font-medium">本周</button>
        <button className="px-6 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white hover:bg-white/10 transition-all font-medium">本月</button>
        <button className="px-6 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white hover:bg-white/10 transition-all font-medium">自定义</button>
      </div>

      {/* 关键指标 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { 
            icon: BarChart3, 
            title: '总执行次数', 
            value: '45,678', 
            change: '↑ 23.1% vs 昨天',
            gradient: 'from-blue-500 to-cyan-500'
          },
          { 
            icon: TrendingUp, 
            title: '成功率', 
            value: '98.5%', 
            change: '↑ 1.2% vs 昨天',
            gradient: 'from-green-500 to-emerald-500'
          },
          { 
            icon: PieChart, 
            title: '活跃流程', 
            value: '127', 
            change: '↑ 12 vs 昨天',
            gradient: 'from-purple-500 to-pink-500'
          }
        ].map((metric, index) => (
          <div 
            key={index} 
            className="glass-dark border border-white/10 rounded-2xl p-6 hover:scale-105 transition-all duration-300 relative overflow-hidden group"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${metric.gradient} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
            <div className="relative z-10">
              <div className="flex items-center space-x-3 mb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${metric.gradient} rounded-xl flex items-center justify-center shadow-glow`}>
                  <metric.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-white">{metric.title}</h3>
              </div>
              <p className="text-4xl font-bold text-white mb-2">{metric.value}</p>
              <p className="text-sm text-green-400 font-medium">{metric.change}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 执行状态分布 */}
      <div className="glass-dark border border-white/10 rounded-2xl p-6">
        <h2 className="text-lg font-bold text-white mb-6 flex items-center space-x-2">
          <PieChart className="w-5 h-5 text-primary-400" />
          <span>执行状态分布</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: '成功', value: 42345, percentage: 92.7, gradient: 'from-green-500 to-emerald-500' },
            { label: '失败', value: 1234, percentage: 2.7, gradient: 'from-red-500 to-pink-500' },
            { label: '超时', value: 987, percentage: 2.2, gradient: 'from-yellow-500 to-orange-500' },
            { label: '取消', value: 1112, percentage: 2.4, gradient: 'from-gray-500 to-gray-600' }
          ].map((status, index) => (
            <div key={index} className="bg-white/5 rounded-xl p-4 border border-white/10 hover:scale-105 transition-all">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-semibold text-gray-300">{status.label}</span>
                <span className="text-sm font-bold text-white">{status.percentage}%</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-3 mb-3 overflow-hidden">
                <div 
                  className={`bg-gradient-to-r ${status.gradient} h-3 rounded-full shadow-glow transition-all duration-1000`}
                  style={{ width: `${status.percentage}%` }}
                />
              </div>
              <p className="text-2xl font-bold text-white">{status.value.toLocaleString()}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 性能趋势 */}
      <div className="glass-dark border border-white/10 rounded-2xl p-6">
        <h2 className="text-lg font-bold text-white mb-6 flex items-center space-x-2">
          <TrendingUp className="w-5 h-5 text-primary-400" />
          <span>性能趋势（过去7天）</span>
        </h2>
        <div className="space-y-6">
          {[
            { 
              label: '平均响应时间', 
              values: [234, 245, 223, 256, 234, 221, 234], 
              unit: 'ms',
              gradient: 'from-blue-500 to-cyan-500'
            },
            { 
              label: '每小时执行数', 
              values: [1234, 1345, 1567, 1423, 1678, 1534, 1645], 
              unit: '',
              gradient: 'from-purple-500 to-pink-500'
            },
            { 
              label: 'CPU 使用率', 
              values: [45, 52, 48, 61, 55, 48, 52], 
              unit: '%',
              gradient: 'from-green-500 to-emerald-500'
            }
          ].map((metric, index) => (
            <div key={index} className="bg-white/5 rounded-xl p-4 border border-white/10">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-semibold text-white">{metric.label}</span>
                <span className="text-sm text-gray-400">
                  当前: <span className="text-white font-bold">{metric.values[metric.values.length - 1]}{metric.unit}</span>
                </span>
              </div>
              <div className="flex items-end space-x-2 h-24">
                {metric.values.map((value, vIndex) => {
                  const maxValue = Math.max(...metric.values)
                  const height = (value / maxValue) * 100
                  return (
                    <div key={vIndex} className="flex-1 relative group">
                      <div 
                        className={`bg-gradient-to-t ${metric.gradient} rounded-t-lg transition-all duration-500 hover:shadow-glow`}
                        style={{ 
                          height: `${height}%`,
                          transitionDelay: `${vIndex * 100}ms`
                        }}
                      />
                      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/20">
                        {value}{metric.unit}
                      </div>
                    </div>
                  )
                })}
              </div>
              <div className="flex justify-between mt-2 text-xs text-gray-500">
                {['周一', '周二', '周三', '周四', '周五', '周六', '周日'].map((day, i) => (
                  <span key={i}>{day}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
