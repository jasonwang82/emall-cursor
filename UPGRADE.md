# 项目现代化改造说明

## 🎉 改造概述

本次改造基于最新的 React UI 组件库 **shadcn/ui**，将项目升级为 2024-2025 年最现代化的技术栈。

## 🆕 新增技术栈

### UI 组件库
- **shadcn/ui** - 基于 Radix UI 的现代化组件库
  - 完全可定制
  - 高可访问性 (a11y)
  - 与 Tailwind CSS 完美集成
  - 组件直接复制到项目中，非 npm 依赖

### 新增依赖
```json
{
  "class-variance-authority": "^0.7.0",
  "clsx": "^2.0.0",
  "tailwind-merge": "^2.0.0",
  "embla-carousel-react": "^8.0.0",
  "embla-carousel-autoplay": "^8.0.0",
  "@radix-ui/react-dialog": "^1.0.5",
  "@radix-ui/react-select": "^2.0.0",
  "@radix-ui/react-separator": "^1.0.3",
  "@radix-ui/react-toast": "^1.1.5"
}
```

## ✨ 改造内容

### 1. 项目配置升级

#### tsconfig.json
```json
{
  "baseUrl": ".",
  "paths": {
    "@/*": ["./src/*"]
  }
}
```
添加路径别名，使用 `@/` 代替相对路径。

#### vite.config.ts
```typescript
resolve: {
  alias: {
    '@': path.resolve(__dirname, './src')
  }
}
```

### 2. 新增 shadcn/ui 组件

已添加以下高质量组件：

- ✅ **Button** - 多种变体（default, outline, ghost, destructive）
- ✅ **Card** - 卡片布局组件
- ✅ **Input** - 输入框组件
- ✅ **Dialog** - 对话框/模态框
- ✅ **Badge** - 徽章标签
- ✅ **Carousel** - 轮播组件（支持自动播放）
- ✅ **Select** - 下拉选择器
- ✅ **Separator** - 分隔线
- ✅ **Skeleton** - 骨架屏
- ✅ **Toast** - 消息提示

### 3. 重构的页面和组件

#### 组件重构
1. **WelcomeModal**
   - 使用 `Dialog` 组件
   - 更好的动画和交互
   - 符合 a11y 标准

2. **ProductCard**
   - 使用 `Card` 组件
   - 添加 `Badge` 显示热销标签
   - 改进的悬停效果

#### 页面重构
1. **HomePage**
   - 使用 `Carousel` 组件实现自动轮播
   - 更现代的布局
   - 优化的视觉层次

2. **LoginPage & RegisterPage**
   - 使用 `Card` + `Input` + `Button`
   - 添加 Toast 提示
   - 更好的表单验证反馈
   - 使用 `Separator` 改进视觉分隔

## 🎨 设计改进

### 主题系统
shadcn/ui 使用 CSS 变量实现主题系统：

```css
:root {
  --background: 0 0% 100%;
  --foreground: 0 0% 3.9%;
  --card: 0 0% 100%;
  --primary: 0 0% 9%;
  --muted: 0 0% 96.1%;
  /* ... 更多变量 */
}
```

### 响应式设计
- 所有组件都是完全响应式的
- 移动优先的设计理念
- 平滑的断点过渡

### 可访问性 (a11y)
- 所有组件符合 WAI-ARIA 标准
- 键盘导航支持
- 屏幕阅读器友好

## 🚀 使用示例

### Button 组件
```tsx
import { Button } from '@/components/ui/button'

<Button variant="default">默认按钮</Button>
<Button variant="outline">轮廓按钮</Button>
<Button variant="ghost">幽灵按钮</Button>
<Button size="lg">大号按钮</Button>
```

### Toast 提示
```tsx
import { useToast } from '@/hooks/use-toast'

const { toast } = useToast()

toast({
  title: "操作成功",
  description: "您的操作已完成。"
})

toast({
  variant: "destructive",
  title: "错误",
  description: "操作失败，请重试。"
})
```

### Carousel 轮播
```tsx
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'

<Carousel plugins={[Autoplay({ delay: 5000 })]}>
  <CarouselContent>
    <CarouselItem>内容1</CarouselItem>
    <CarouselItem>内容2</CarouselItem>
  </CarouselContent>
</Carousel>
```

## 📦 组件目录结构

```
src/
├── components/
│   ├── ui/              # shadcn/ui 组件
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── dialog.tsx
│   │   ├── input.tsx
│   │   ├── carousel.tsx
│   │   └── ...
│   ├── Header.tsx       # 应用组件
│   ├── Footer.tsx
│   └── ...
├── lib/
│   └── utils.ts         # 工具函数
└── hooks/
    └── use-toast.ts     # Toast hook
```

## 🔄 迁移指南

### 从旧组件迁移到 shadcn/ui

#### 按钮
```tsx
// 之前
<button className="btn-primary">按钮</button>

// 之后
<Button>按钮</Button>
<Button variant="outline">按钮</Button>
```

#### 输入框
```tsx
// 之前
<input className="input-field" />

// 之后
<Input placeholder="输入内容" />
```

#### 卡片
```tsx
// 之前
<div className="border rounded-lg p-4">内容</div>

// 之后
<Card>
  <CardHeader>
    <CardTitle>标题</CardTitle>
  </CardHeader>
  <CardContent>内容</CardContent>
</Card>
```

## 🎯 下一步计划

### 待改造页面
- [ ] CartPage - 使用 Card 和 Badge
- [ ] CheckoutPage - 使用 Select 和 Input
- [ ] PaymentPage - 使用 RadioGroup
- [ ] ProductDetailPage - 使用 Carousel 和 Badge
- [ ] ProductListPage - 使用 Select 和 Skeleton
- [ ] OrdersPage - 使用 Badge 和 Card
- [ ] ProfilePage - 使用 Tabs 和 Card

### 新功能建议
- [ ] 添加 Loading 状态（Skeleton）
- [ ] 添加表单验证（react-hook-form + zod）
- [ ] 添加数据表格（DataTable）
- [ ] 添加日期选择器（DatePicker）
- [ ] 添加下拉菜单（DropdownMenu）
- [ ] 添加标签页（Tabs）

## 📚 参考资源

- [shadcn/ui 官方文档](https://ui.shadcn.com)
- [Radix UI 文档](https://www.radix-ui.com)
- [Tailwind CSS 文档](https://tailwindcss.com)
- [Embla Carousel 文档](https://www.embla-carousel.com)

## 🤝 贡献指南

添加新的 shadcn/ui 组件：

```bash
npx shadcn@latest add [component-name]
```

可用组件列表：
```bash
npx shadcn@latest add
```

## 📝 版本信息

- React: 18.2.0
- shadcn/ui: 最新版本
- Radix UI: 1.x
- Tailwind CSS: 3.3.6
- TypeScript: 5.3.3

---

更新日期: 2025-10-13
版本: 2.0.0
