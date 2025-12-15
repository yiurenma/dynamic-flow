import { Save, User, Bell, Shield, Database, Sparkles, AlertTriangle } from 'lucide-react'

export default function Settings() {
  const settingsSections = [
    {
      icon: User,
      title: '账户设置',
      description: '管理您的账户信息和偏好',
      gradient: 'from-blue-500 to-cyan-500',
      fields: [
        { label: '用户名', type: 'text', value: 'admin', placeholder: '输入用户名' },
        { label: '邮箱', type: 'email', value: 'admin@dynamic-flow.com', placeholder: '输入邮箱' },
        { label: '语言', type: 'select', value: 'zh-CN', options: ['zh-CN', 'en-US'] }
      ]
    },
    {
      icon: Bell,
      title: '通知设置',
      description: '配置系统通知和提醒',
      gradient: 'from-purple-500 to-pink-500',
      fields: [
        { label: '邮件通知', type: 'toggle', value: true },
        { label: '执行失败提醒', type: 'toggle', value: true },
        { label: '每日报告', type: 'toggle', value: false }
      ]
    },
    {
      icon: Shield,
      title: '安全设置',
      description: '保护您的账户安全',
      gradient: 'from-green-500 to-emerald-500',
      fields: [
        { label: '双因素认证', type: 'toggle', value: false },
        { label: 'API 密钥', type: 'text', value: '••••••••••••••••', placeholder: 'API Key' },
        { label: '会话超时（分钟）', type: 'number', value: '30', placeholder: '输入分钟数' }
      ]
    },
    {
      icon: Database,
      title: '系统设置',
      description: '配置系统参数和限制',
      gradient: 'from-orange-500 to-red-500',
      fields: [
        { label: '最大并发执行数', type: 'number', value: '100', placeholder: '输入数量' },
        { label: '日志保留天数', type: 'number', value: '30', placeholder: '输入天数' },
        { label: '自动备份', type: 'toggle', value: true }
      ]
    }
  ]

  return (
    <div className="space-y-6">
      {/* 页面标题 */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center space-x-3 mb-2">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              系统设置
            </h1>
            <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />
          </div>
          <p className="text-gray-400">管理系统配置和偏好设置</p>
        </div>
        <button className="flex items-center space-x-2 px-6 py-3 bg-gradient-primary rounded-xl text-white shadow-glow hover:shadow-glow-lg transition-all hover:scale-105">
          <Save className="w-5 h-5" />
          <span className="font-semibold">保存设置</span>
        </button>
      </div>

      {/* 设置面板 */}
      <div className="space-y-6">
        {settingsSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="glass-dark border border-white/10 rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-300">
            <div className={`p-6 border-b border-white/10 bg-gradient-to-r ${section.gradient} bg-opacity-10`}>
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${section.gradient} rounded-xl flex items-center justify-center shadow-glow`}>
                  <section.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white">{section.title}</h2>
                  <p className="text-sm text-gray-400">{section.description}</p>
                </div>
              </div>
            </div>
            <div className="p-6 space-y-4">
              {section.fields.map((field, fieldIndex) => (
                <div key={fieldIndex} className="flex items-center justify-between py-3 border-b border-white/5 last:border-0">
                  <label className="text-sm font-semibold text-gray-300">{field.label}</label>
                  {field.type === 'toggle' ? (
                    <button
                      className={`relative inline-flex h-7 w-14 items-center rounded-full transition-all ${
                        field.value ? 'bg-gradient-primary shadow-glow' : 'bg-white/10'
                      }`}
                    >
                      <span
                        className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform shadow-lg ${
                          field.value ? 'translate-x-8' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  ) : field.type === 'select' ? (
                    <select className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50">
                      {field.options?.map((option, optIndex) => (
                        <option key={optIndex} value={option} className="bg-gray-900">
                          {option}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type={field.type}
                      value={field.value}
                      placeholder={field.placeholder}
                      className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50 w-64"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* 危险区域 */}
      <div className="glass-dark border border-red-500/30 rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-red-500/30 bg-gradient-to-r from-red-500/10 to-orange-500/10">
          <div className="flex items-center space-x-3">
            <AlertTriangle className="w-6 h-6 text-red-400" />
            <div>
              <h2 className="text-lg font-bold text-red-400">危险区域</h2>
              <p className="text-sm text-red-300/70 mt-1">这些操作无法撤销，请谨慎操作</p>
            </div>
          </div>
        </div>
        <div className="p-6 space-y-4">
          <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
            <div>
              <p className="font-semibold text-white">清空所有日志</p>
              <p className="text-sm text-gray-400">删除所有执行日志和历史记录</p>
            </div>
            <button className="px-6 py-2.5 border border-red-500/30 text-red-400 rounded-xl hover:bg-red-500/10 transition-all font-semibold">
              清空日志
            </button>
          </div>
          <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
            <div>
              <p className="font-semibold text-white">重置系统</p>
              <p className="text-sm text-gray-400">将系统恢复到初始状态</p>
            </div>
            <button className="px-6 py-2.5 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-xl hover:shadow-glow transition-all font-semibold">
              重置系统
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
