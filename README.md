# Dynamic Flow - 管理界面

一个现代化的管理界面系统，基于 React + TypeScript + Tailwind CSS 构建。

## 功能特性

- 📊 **仪表盘** - 数据概览和统计信息
- 👥 **用户管理** - 用户列表、搜索、编辑和删除
- 📈 **数据分析** - 详细的数据分析和可视化
- ⚙️ **系统设置** - 系统配置和偏好设置

## 技术栈

- **React 18** - UI 框架
- **TypeScript** - 类型安全
- **Tailwind CSS** - 样式框架
- **React Router** - 路由管理
- **Lucide React** - 图标库
- **Vite** - 构建工具

## 快速开始

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

访问 http://localhost:3000 查看应用。

### 构建生产版本

```bash
npm run build
```

### 预览生产构建

```bash
npm run preview
```

## 项目结构

```
src/
├── components/      # 可复用组件
│   ├── Layout.tsx   # 布局组件
│   ├── Sidebar.tsx  # 侧边栏
│   └── Header.tsx   # 顶部栏
├── pages/          # 页面组件
│   ├── Dashboard.tsx
│   ├── Users.tsx
│   ├── Analytics.tsx
│   └── Settings.tsx
├── App.tsx         # 主应用组件
├── main.tsx        # 入口文件
└── index.css       # 全局样式
```

## 开发说明

这是一个基础的管理界面框架，可以根据实际需求进行扩展：

- 集成图表库（如 Chart.js 或 Recharts）用于数据可视化
- 连接后端 API 获取真实数据
- 添加更多功能模块
- 实现用户认证和权限管理
- 添加国际化支持

## License

MIT
