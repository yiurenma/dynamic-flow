import { LucideIcon, ArrowUpRight, ArrowDownRight, TrendingUp } from 'lucide-react'

interface StatsCardProps {
  title: string
  value: string
  change: string
  trend: 'up' | 'down'
  icon: LucideIcon
  color: 'blue' | 'green' | 'purple' | 'orange'
}

const colorStyles = {
  blue: {
    gradient: 'from-blue-500 to-cyan-500',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
    text: 'text-blue-400',
    glow: 'shadow-blue-500/50'
  },
  green: {
    gradient: 'from-green-500 to-emerald-500',
    bg: 'bg-green-500/10',
    border: 'border-green-500/20',
    text: 'text-green-400',
    glow: 'shadow-green-500/50'
  },
  purple: {
    gradient: 'from-purple-500 to-pink-500',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/20',
    text: 'text-purple-400',
    glow: 'shadow-purple-500/50'
  },
  orange: {
    gradient: 'from-orange-500 to-red-500',
    bg: 'bg-orange-500/10',
    border: 'border-orange-500/20',
    text: 'text-orange-400',
    glow: 'shadow-orange-500/50'
  }
}

export default function StatsCard({ title, value, change, trend, icon: Icon, color }: StatsCardProps) {
  const isPositive = trend === 'up'
  const styles = colorStyles[color]
  
  return (
    <div className={`group relative glass-dark border ${styles.border} rounded-2xl p-6 hover:scale-105 transition-all duration-300 overflow-hidden`}>
      {/* 背景光效 */}
      <div className={`absolute inset-0 bg-gradient-to-br ${styles.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
      
      {/* 装饰性图案 */}
      <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
        <Icon className="w-full h-full" />
      </div>

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <p className="text-sm text-gray-400 mb-2 font-medium">{title}</p>
            <p className="text-3xl font-bold text-white mb-3">{value}</p>
            <div className="flex items-center space-x-2">
              <div className={`flex items-center space-x-1 px-2 py-1 rounded-lg ${isPositive ? 'bg-green-500/20' : 'bg-red-500/20'}`}>
                {isPositive ? (
                  <ArrowUpRight className="w-4 h-4 text-green-400" />
                ) : (
                  <ArrowDownRight className="w-4 h-4 text-red-400" />
                )}
                <span className={`text-sm font-bold ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
                  {change}
                </span>
              </div>
              <span className="text-xs text-gray-500">vs 上周</span>
            </div>
          </div>
          <div className={`relative w-14 h-14 bg-gradient-to-br ${styles.gradient} rounded-xl flex items-center justify-center ${styles.glow} shadow-lg group-hover:scale-110 transition-transform`}>
            <Icon className="w-7 h-7 text-white" />
            <div className="absolute inset-0 bg-white/20 rounded-xl animate-pulse"></div>
          </div>
        </div>

        {/* 迷你趋势线 */}
        <div className="flex items-end space-x-1 h-8">
          {[40, 55, 45, 70, 60, 85, 75, 90].map((height, i) => (
            <div
              key={i}
              className={`flex-1 bg-gradient-to-t ${styles.gradient} rounded-t opacity-50 group-hover:opacity-100 transition-all`}
              style={{ height: `${height}%`, transitionDelay: `${i * 50}ms` }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
