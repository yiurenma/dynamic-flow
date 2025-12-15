import { Save, User, Bell, Shield, Database, Palette } from 'lucide-react'

export default function Settings() {
  const settingsSections = [
    {
      icon: User,
      title: '账户设置',
      description: '管理您的账户信息和偏好',
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
          <h1 className="text-2xl font-bold text-gray-900">系统设置</h1>
          <p className="text-gray-500 mt-1">管理系统配置和偏好设置</p>
        </div>
        <button className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
          <Save className="w-5 h-5" />
          <span>保存设置</span>
        </button>
      </div>

      {/* 设置面板 */}
      <div className="space-y-6">
        {settingsSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                  <section.icon className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">{section.title}</h2>
                  <p className="text-sm text-gray-500">{section.description}</p>
                </div>
              </div>
            </div>
            <div className="p-6 space-y-4">
              {section.fields.map((field, fieldIndex) => (
                <div key={fieldIndex} className="flex items-center justify-between">
                  <label className="text-sm font-medium text-gray-700">{field.label}</label>
                  {field.type === 'toggle' ? (
                    <button
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        field.value ? 'bg-primary-600' : 'bg-gray-200'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          field.value ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  ) : field.type === 'select' ? (
                    <select className="px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500">
                      {field.options?.map((option, optIndex) => (
                        <option key={optIndex} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type={field.type}
                      value={field.value}
                      placeholder={field.placeholder}
                      className="px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 w-64"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* 危险区域 */}
      <div className="bg-white rounded-lg border border-red-200 overflow-hidden">
        <div className="p-6 border-b border-red-200 bg-red-50">
          <h2 className="text-lg font-semibold text-red-900">危险区域</h2>
          <p className="text-sm text-red-600 mt-1">这些操作无法撤销，请谨慎操作</p>
        </div>
        <div className="p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">清空所有日志</p>
              <p className="text-sm text-gray-500">删除所有执行日志和历史记录</p>
            </div>
            <button className="px-4 py-2 border border-red-200 text-red-600 rounded-lg hover:bg-red-50 transition-colors">
              清空日志
            </button>
          </div>
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <div>
              <p className="font-medium text-gray-900">重置系统</p>
              <p className="text-sm text-gray-500">将系统恢复到初始状态</p>
            </div>
            <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
              重置系统
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
