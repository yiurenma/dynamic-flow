# Dynamic Flow - 管理控制台

一个现代化的流程管理系统，用于创建、管理和监控动态工作流程。

## ✨ 特性

- 🎨 **现代化 UI** - 使用 React + TypeScript + Tailwind CSS 构建的美观界面
- 📊 **数据可视化** - 实时查看流程执行情况和系统性能
- 🔄 **流程管理** - 创建和管理复杂的工作流程
- 🧩 **节点系统** - 丰富的节点类型，支持各种操作
- 📈 **数据分析** - 详细的执行统计和性能指标
- ⚙️ **系统设置** - 灵活的配置选项

## 🚀 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

应用将在 http://localhost:3000 启动

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run preview
```

## 📁 项目结构

```
dynamic-flow-admin/
├── src/
│   ├── components/      # 可复用组件
│   │   ├── Header.tsx
│   │   ├── Sidebar.tsx
│   │   ├── Layout.tsx
│   │   ├── StatsCard.tsx
│   │   └── RecentActivity.tsx
│   ├── pages/          # 页面组件
│   │   ├── Dashboard.tsx
│   │   ├── Flows.tsx
│   │   ├── Nodes.tsx
│   │   ├── Analytics.tsx
│   │   └── Settings.tsx
│   ├── App.tsx         # 应用入口
│   ├── main.tsx        # React 入口
│   └── index.css       # 全局样式
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── tailwind.config.js
```

## 🎯 功能模块

### 仪表板
- 系统概览和关键指标
- 流程执行趋势
- 最近活动记录
- 热门流程统计

### 流程管理
- 创建和编辑流程
- 启动/暂停流程
- 查看流程详情
- 流程执行历史

### 节点管理
- 浏览可用节点
- 节点分类展示
- 自定义节点

### 数据分析
- 执行统计
- 性能指标
- 状态分布
- 趋势分析

### 系统设置
- 账户管理
- 通知配置
- 安全设置
- 系统参数

## 🛠️ 技术栈

- **React 18** - UI 框架
- **TypeScript** - 类型安全
- **Vite** - 构建工具
- **React Router** - 路由管理
- **Tailwind CSS** - 样式框架
- **Lucide React** - 图标库

## 📝 开发规范

- 使用 TypeScript 进行类型检查
- 遵循 ESLint 代码规范
- 组件采用函数式写法
- 使用 Tailwind CSS 进行样式开发

## 🎨 UI 设计

- 采用现代扁平化设计风格
- 响应式布局，支持多种设备
- 统一的配色方案和视觉元素
- 流畅的交互动画

## 📄 License

MIT

## 👥 贡献

欢迎提交 Issue 和 Pull Request！

---

Made with ❤️ by Dynamic Flow Team
