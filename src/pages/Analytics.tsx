import { BarChart3, TrendingUp, PieChart } from 'lucide-react'

export default function Analytics() {
  return (
    <div className="space-y-6">
      {/* 页面标题 */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">数据分析</h1>
        <p className="text-gray-500 mt-1">查看系统性能和使用统计</p>
      </div>

      {/* 时间范围选择 */}
      <div className="flex items-center space-x-4">
        <button className="px-4 py-2 bg-primary-600 text-white rounded-lg">今天</button>
        <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50">本周</button>
        <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50">本月</button>
        <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50">自定义</button>
      </div>

      {/* 关键指标 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-blue-600" />
            </div>
            <h3 className="font-medium text-gray-900">总执行次数</h3>
          </div>
          <p className="text-3xl font-bold text-gray-900 mb-2">45,678</p>
          <p className="text-sm text-green-600">↑ 23.1% vs 昨天</p>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-green-600" />
            </div>
            <h3 className="font-medium text-gray-900">成功率</h3>
          </div>
          <p className="text-3xl font-bold text-gray-900 mb-2">98.5%</p>
          <p className="text-sm text-green-600">↑ 1.2% vs 昨天</p>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <PieChart className="w-5 h-5 text-purple-600" />
            </div>
            <h3 className="font-medium text-gray-900">活跃流程</h3>
          </div>
          <p className="text-3xl font-bold text-gray-900 mb-2">127</p>
          <p className="text-sm text-green-600">↑ 12 vs 昨天</p>
        </div>
      </div>

      {/* 执行状态分布 */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">执行状态分布</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: '成功', value: 42345, percentage: 92.7, color: 'bg-green-500' },
            { label: '失败', value: 1234, percentage: 2.7, color: 'bg-red-500' },
            { label: '超时', value: 987, percentage: 2.2, color: 'bg-yellow-500' },
            { label: '取消', value: 1112, percentage: 2.4, color: 'bg-gray-500' }
          ].map((status, index) => (
            <div key={index}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">{status.label}</span>
                <span className="text-sm font-medium text-gray-900">{status.percentage}%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2 mb-2">
                <div 
                  className={`${status.color} h-2 rounded-full`}
                  style={{ width: `${status.percentage}%` }}
                />
              </div>
              <p className="text-lg font-semibold text-gray-900">{status.value.toLocaleString()}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 性能趋势 */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">性能趋势（过去7天）</h2>
        <div className="space-y-4">
          {[
            { label: '平均响应时间', values: [234, 245, 223, 256, 234, 221, 234], unit: 'ms' },
            { label: '每小时执行数', values: [1234, 1345, 1567, 1423, 1678, 1534, 1645], unit: '' },
            { label: 'CPU 使用率', values: [45, 52, 48, 61, 55, 48, 52], unit: '%' }
          ].map((metric, index) => (
            <div key={index}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">{metric.label}</span>
                <span className="text-sm text-gray-500">
                  当前: {metric.values[metric.values.length - 1]}{metric.unit}
                </span>
              </div>
              <div className="flex items-end space-x-1 h-20">
                {metric.values.map((value, vIndex) => {
                  const maxValue = Math.max(...metric.values)
                  const height = (value / maxValue) * 100
                  return (
                    <div key={vIndex} className="flex-1 bg-primary-100 hover:bg-primary-200 rounded-t transition-colors relative group">
                      <div 
                        className="bg-primary-500 rounded-t absolute bottom-0 w-full"
                        style={{ height: `${height}%` }}
                      />
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        {value}{metric.unit}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
