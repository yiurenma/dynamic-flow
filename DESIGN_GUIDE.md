# 🎨 UI设计指南

## 设计理念

Dynamic Flow 采用**现代高端设计语言**，融合玻璃拟态、渐变色彩和流畅动画，打造沉浸式的用户体验。

## 核心设计元素

### 1. 玻璃拟态 (Glassmorphism)

#### 实现原理
```css
.glass-dark {
  background: rgba(17, 25, 40, 0.75);           /* 半透明背景 */
  backdrop-filter: blur(16px) saturate(180%);   /* 背景模糊 */
  border: 1px solid rgba(255, 255, 255, 0.125); /* 细边框 */
}
```

#### 应用场景
- 卡片容器
- 侧边栏
- 顶部导航
- 模态框
- 下拉菜单

### 2. 渐变系统

#### 主要渐变
```css
/* 主渐变 - 紫蓝 */
bg-gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%)

/* 成功 - 蓝绿 */
bg-gradient-success: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)

/* 警告 - 黄橙 */
bg-gradient-warning: linear-gradient(135deg, #ffd200 0%, #f7971e 100%)

/* 错误 - 粉红 */
bg-gradient-danger: linear-gradient(135deg, #f857a6 0%, #ff5858 100%)
```

#### 使用规则
- **按钮**: 主要操作使用主渐变
- **状态**: 用不同渐变表示成功/警告/错误
- **装饰**: 背景和图标使用淡化的渐变
- **动画**: 渐变可以配合动画移动

### 3. 动画效果

#### 悬停效果
```css
.hover-lift:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}
```

#### 脉动动画
```css
@keyframes pulse-glow {
  0%, 100% { box-shadow: 0 0 20px rgba(102, 126, 234, 0.4); }
  50% { box-shadow: 0 0 40px rgba(102, 126, 234, 0.6); }
}
```

#### 渐变移动
```css
@keyframes gradient-shift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
```

### 4. 配色方案

#### 主色
- **Primary 500**: `#667eea` - 主要操作
- **Accent 500**: `#764ba2` - 强调元素

#### 状态色
- **Success**: 绿色系 `#4facfe` → `#00f2fe`
- **Warning**: 橙色系 `#ffd200` → `#f7971e`
- **Danger**: 红色系 `#f857a6` → `#ff5858`
- **Info**: 蓝色系 `#667eea` → `#764ba2`

#### 中性色
- **Background**: `rgba(17, 25, 40, 0.75)` - 深色背景
- **Surface**: `rgba(255, 255, 255, 0.05)` - 表面层
- **Border**: `rgba(255, 255, 255, 0.1)` - 边框
- **Text**: `#ffffff` - 主要文字
- **Text Secondary**: `#9ca3af` - 次要文字

## 组件设计规范

### 统计卡片

#### 结构
```tsx
<div className="glass-dark border border-white/10 rounded-2xl p-6">
  {/* 背景渐变层 */}
  <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
  
  {/* 内容 */}
  <div className="relative z-10">
    <Icon /> {/* 带渐变背景的图标 */}
    <Value /> {/* 大号数值 */}
    <Trend /> {/* 趋势指示器 */}
    <Chart /> {/* 迷你图表 */}
  </div>
</div>
```

#### 视觉特点
- 玻璃拟态容器
- 渐变色图标背景
- 悬停放大效果
- 迷你趋势线
- 发光阴影

### 按钮设计

#### 主按钮
```tsx
<button className="
  px-6 py-3 
  bg-gradient-primary 
  rounded-xl 
  text-white 
  shadow-glow 
  hover:shadow-glow-lg 
  hover:scale-105 
  transition-all
">
  确认操作
</button>
```

#### 次要按钮
```tsx
<button className="
  px-6 py-3 
  bg-white/5 
  border border-white/10 
  rounded-xl 
  text-white 
  hover:bg-white/10 
  transition-all
">
  取消
</button>
```

### 输入框设计

```tsx
<div className="relative group">
  <input className="
    w-full 
    px-4 py-3 
    bg-white/5 
    border border-white/10 
    rounded-xl 
    text-white 
    placeholder-gray-400
    focus:ring-2 focus:ring-primary-500/50
    focus:bg-white/10
    transition-all
  " />
</div>
```

### 导航项设计

#### 激活状态
```tsx
<NavLink className="
  bg-gradient-primary 
  text-white 
  shadow-glow
  relative
">
  {/* 脉动背景 */}
  <div className="absolute inset-0 bg-white/10 animate-pulse"></div>
  <Icon />
  <Text />
  {/* 指示点 */}
  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
</NavLink>
```

#### 非激活状态
```tsx
<NavLink className="
  text-gray-300 
  hover:bg-white/5 
  hover:text-white
">
  <Icon className="group-hover:scale-110" />
  <Text />
</NavLink>
```

## 动画时机

### 页面进入
- **延迟**: 0-300ms 错开
- **持续**: 500-700ms
- **曲线**: ease-out

### 悬停效果
- **延迟**: 0ms
- **持续**: 200-300ms
- **曲线**: ease

### 状态变化
- **延迟**: 0ms
- **持续**: 150ms
- **曲线**: ease-in-out

## 响应式设计

### 断点
```css
sm: 640px   /* 手机横屏 */
md: 768px   /* 平板 */
lg: 1024px  /* 桌面 */
xl: 1280px  /* 大屏 */
2xl: 1536px /* 超大屏 */
```

### 布局适配
- **< 768px**: 单列布局，隐藏侧边栏
- **768px - 1024px**: 两列布局
- **> 1024px**: 三列或四列布局

## 可访问性

### 对比度
- 文字与背景对比度 ≥ 4.5:1
- 大文本对比度 ≥ 3:1

### 键盘导航
- 所有交互元素可通过 Tab 键访问
- 焦点状态清晰可见
- 支持快捷键操作

### 屏幕阅读器
- 使用语义化 HTML
- 提供 aria-label
- 动态内容更新提示

## 性能优化

### CSS 动画
- 使用 `transform` 和 `opacity`
- 避免触发 layout 和 paint
- 使用 `will-change` 提示浏览器

### 渐变优化
- 使用 CSS 渐变而非图片
- 预定义常用渐变类
- 避免复杂的嵌套渐变

### 模糊效果
- 使用 `backdrop-filter`
- 设置合理的模糊半径（10-20px）
- 在低端设备上降级处理

## 设计检查清单

### 视觉一致性
- [ ] 统一的圆角（8px, 12px, 16px）
- [ ] 统一的间距（4px 倍数）
- [ ] 统一的阴影层级
- [ ] 统一的边框透明度

### 交互反馈
- [ ] 悬停状态
- [ ] 激活状态
- [ ] 禁用状态
- [ ] 加载状态

### 动画流畅
- [ ] 60fps 流畅度
- [ ] 适当的缓动曲线
- [ ] 合理的动画时长
- [ ] 错开的入场动画

### 响应式
- [ ] 移动端适配
- [ ] 触摸友好
- [ ] 文字可读性
- [ ] 交互区域大小

---

**保持设计的一致性和高品质** ✨
