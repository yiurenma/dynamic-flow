import { CheckCircle, XCircle, AlertCircle, Clock } from 'lucide-react'

export default function RecentActivity() {
  const activities = [
    {
      type: 'success',
      title: '订单处理流程',
      description: '成功执行',
      time: '2分钟前',
      icon: CheckCircle,
      color: 'text-green-400',
      bg: 'bg-green-500/10',
      border: 'border-green-500/20'
    },
    {
      type: 'error',
      title: '数据同步流程',
      description: '执行失败',
      time: '15分钟前',
      icon: XCircle,
      color: 'text-red-400',
      bg: 'bg-red-500/10',
      border: 'border-red-500/20'
    },
    {
      type: 'warning',
      title: '通知发送流程',
      description: '执行缓慢',
      time: '1小时前',
      icon: AlertCircle,
      color: 'text-yellow-400',
      bg: 'bg-yellow-500/10',
      border: 'border-yellow-500/20'
    },
    {
      type: 'pending',
      title: '报表生成流程',
      description: '正在执行',
      time: '1小时前',
      icon: Clock,
      color: 'text-blue-400',
      bg: 'bg-blue-500/10',
      border: 'border-blue-500/20'
    },
    {
      type: 'success',
      title: '用户注册流程',
      description: '成功执行',
      time: '2小时前',
      icon: CheckCircle,
      color: 'text-green-400',
      bg: 'bg-green-500/10',
      border: 'border-green-500/20'
    }
  ]

  return (
    <div className="glass-dark border border-white/10 rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-bold text-white">最近活动</h2>
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
      </div>
      <div className="space-y-3">
        {activities.map((activity, index) => (
          <div 
            key={index} 
            className={`group flex items-start space-x-3 p-3 rounded-xl ${activity.bg} border ${activity.border} hover:scale-105 transition-all duration-300 cursor-pointer`}
          >
            <div className={`${activity.color} mt-0.5 group-hover:scale-110 transition-transform`}>
              <activity.icon className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-white truncate">
                {activity.title}
              </p>
              <p className="text-xs text-gray-400">{activity.description}</p>
              <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="w-full mt-4 py-2 text-sm text-primary-400 hover:text-primary-300 font-semibold hover:bg-white/5 rounded-lg transition-all">
        查看全部活动 →
      </button>
    </div>
  )
}
