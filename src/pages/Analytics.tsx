import { BarChart3, TrendingUp, Users, Clock } from 'lucide-react'

const metrics = [
  { name: '总访问量', value: '45,231', change: '+12.5%', icon: BarChart3 },
  { name: '独立访客', value: '12,345', change: '+8.2%', icon: Users },
  { name: '平均停留时间', value: '3:24', change: '+5.1%', icon: Clock },
  { name: '转化率', value: '2.4%', change: '+0.8%', icon: TrendingUp },
]

export default function Analytics() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">数据分析</h1>
        <p className="mt-2 text-gray-600">查看详细的数据分析和统计信息</p>
      </div>

      {/* 指标卡片 */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => {
          const Icon = metric.icon
          return (
            <div
              key={metric.name}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{metric.name}</p>
                  <p className="mt-2 text-3xl font-bold text-gray-900">{metric.value}</p>
                  <p className="mt-2 text-sm text-green-600">{metric.change}</p>
                </div>
                <div className="p-3 bg-primary-50 rounded-lg">
                  <Icon className="h-6 w-6 text-primary-600" />
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* 图表区域 */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">访问趋势</h2>
          <div className="h-64 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg">
            <p className="text-gray-500">访问趋势图表</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">用户分布</h2>
          <div className="h-64 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg">
            <p className="text-gray-500">用户分布图表</p>
          </div>
        </div>
      </div>

      {/* 详细数据表格 */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">详细数据</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  日期
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  访问量
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  独立访客
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  转化率
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {[
                { date: '2024-12-15', visits: '1,234', visitors: '856', conversion: '2.1%' },
                { date: '2024-12-14', visits: '1,189', visitors: '823', conversion: '2.3%' },
                { date: '2024-12-13', visits: '1,456', visitors: '945', conversion: '2.5%' },
                { date: '2024-12-12', visits: '1,321', visitors: '892', conversion: '2.2%' },
                { date: '2024-12-11', visits: '1,098', visitors: '756', conversion: '2.0%' },
              ].map((row, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{row.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{row.visits}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{row.visitors}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{row.conversion}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
