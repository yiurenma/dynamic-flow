import { CheckCircle, XCircle, AlertCircle, Clock } from 'lucide-react'

export default function RecentActivity() {
  const activities = [
    {
      type: 'success',
      title: '订单处理流程',
      description: '成功执行',
      time: '2分钟前',
      icon: CheckCircle,
      color: 'text-green-600'
    },
    {
      type: 'error',
      title: '数据同步流程',
      description: '执行失败',
      time: '15分钟前',
      icon: XCircle,
      color: 'text-red-600'
    },
    {
      type: 'warning',
      title: '通知发送流程',
      description: '执行缓慢',
      time: '1小时前',
      icon: AlertCircle,
      color: 'text-yellow-600'
    },
    {
      type: 'pending',
      title: '报表生成流程',
      description: '正在执行',
      time: '1小时前',
      icon: Clock,
      color: 'text-blue-600'
    },
    {
      type: 'success',
      title: '用户注册流程',
      description: '成功执行',
      time: '2小时前',
      icon: CheckCircle,
      color: 'text-green-600'
    }
  ]

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">最近活动</h2>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-start space-x-3">
            <div className={`${activity.color} mt-0.5`}>
              <activity.icon className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">
                {activity.title}
              </p>
              <p className="text-sm text-gray-500">{activity.description}</p>
              <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="w-full mt-4 text-sm text-primary-600 hover:text-primary-700 font-medium">
        查看全部活动
      </button>
    </div>
  )
}
