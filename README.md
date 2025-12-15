# Dynamic Flow Admin

一个现代化的管理后台界面，基于 React 19 + TypeScript + Vite + Ant Design + TailwindCSS v4 构建。

## 技术栈

- **React 19** - 最新的 React 版本
- **TypeScript** - 类型安全
- **Vite** - 快速的构建工具
- **Ant Design 5** - 企业级 UI 组件库
- **TailwindCSS v4** - 原子化 CSS 框架
- **TanStack Router** - 类型安全的文件路由
- **TanStack Query** - 数据请求管理
- **Recharts** - 图表库

## 功能特性

- 📊 **仪表盘** - 数据概览、图表展示、统计卡片
- 👥 **用户管理** - 用户列表、搜索筛选、增删改查
- 📈 **报表统计** - 销售趋势、用户增长、产品排行
- 📝 **内容管理** - 文章管理、分类筛选、状态管理
- ⚙️ **系统设置** - 个人信息、安全设置、通知配置、系统配置

## 快速开始

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run preview
```

## 项目结构

```
src/
├── main.tsx          # 应用入口
├── index.css         # 全局样式
├── vite-env.d.ts     # Vite 类型声明
├── routeTree.gen.ts  # 自动生成的路由树
└── routes/           # 页面路由
    ├── __root.tsx    # 根布局（侧边栏导航）
    ├── index.tsx     # 仪表盘首页
    ├── users.tsx     # 用户管理
    ├── reports.tsx   # 报表统计
    ├── content.tsx   # 内容管理
    └── settings.tsx  # 系统设置
```

## 开发说明

### 路由

项目使用 TanStack Router 的文件路由模式，在 `src/routes` 目录下创建文件即可自动生成路由。

### 样式

- 使用 TailwindCSS v4 编写样式
- 使用 Ant Design 组件
- 自定义主题色在 `src/index.css` 中配置

### 数据请求

- 使用 TanStack Query 管理数据请求
- API 配置可以在 `src/api` 目录下添加

## License

MIT
