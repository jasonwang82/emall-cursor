# 时尚女装电商网站

一个面向中国消费者的现代化女装电商网站，采用简洁优雅的设计风格，参考 Zara 和 H&M 的视觉体验。

## 功能特性

### 核心页面
- **首页** - 包含轮播图、新品推荐、热销商品、新用户欢迎弹窗
- **注册/登录** - 支持邮箱、微信、支付宝多种登录方式
- **商品列表** - 支持分类筛选、价格排序
- **商品详情** - 展示商品图片、尺码选择、用户评价
- **购物车** - 商品管理、数量调整
- **结算页面** - 填写收货地址
- **支付页面** - 支持支付宝、微信支付、银行卡
- **订单管理** - 查看历史订单
- **个人中心** - 管理个人信息、收货地址、收藏

### 设计特点
- 🎨 黑白灰主色调，搭配米色和深蓝色点缀
- 📱 完全响应式设计，适配移动端
- ✨ 自然流畅的交互动效
- 🖼️ 大图展示商品，突出视觉效果
- 🎯 简洁现代的布局
- 🔍 使用统一风格的 icon (Lucide React)

## 技术栈

- **框架**: React 18 + TypeScript
- **构建工具**: Vite
- **样式**: Tailwind CSS
- **路由**: React Router v6
- **状态管理**: Zustand
- **图标**: Lucide React

## 快速开始

### 环境配置

如果需要使用 Context7 MCP 功能，请设置环境变量：

```bash
export CONTEXT7_API_KEY=your_api_key_here
```

### 安装依赖

```bash
npm install
```

### 运行开发服务器

```bash
npm run dev
```

项目将在 `http://localhost:3000` 启动

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
├── components/          # 公共组件
│   ├── Header.tsx      # 顶部导航
│   ├── Footer.tsx      # 页脚
│   ├── Layout.tsx      # 布局组件
│   ├── ProductCard.tsx # 商品卡片
│   └── WelcomeModal.tsx # 欢迎弹窗
├── pages/              # 页面组件
│   ├── HomePage.tsx    # 首页
│   ├── LoginPage.tsx   # 登录页
│   ├── RegisterPage.tsx # 注册页
│   ├── ProductListPage.tsx # 商品列表
│   ├── ProductDetailPage.tsx # 商品详情
│   ├── CartPage.tsx    # 购物车
│   ├── CheckoutPage.tsx # 结算页
│   ├── PaymentPage.tsx # 支付页
│   ├── OrdersPage.tsx  # 订单列表
│   └── ProfilePage.tsx # 个人中心
├── store/              # 状态管理
│   └── useStore.ts     # Zustand store
├── App.tsx             # 主应用组件
├── main.tsx            # 应用入口
└── index.css           # 全局样式
```

## 待开发功能

以下功能当前显示"敬请期待"状态：
- 微信/支付宝登录集成
- 真实支付网关对接
- 搜索功能
- 商品推荐算法
- 用户评价提交
- 物流追踪
- 客服系统

## MCP 配置

项目包含 `mcp.json` 配置文件，支持 Context7 MCP Server：

### 功能
- 代码库上下文查询
- 项目搜索和信息获取
- 智能代码理解

### 使用方法

1. 设置 API Key：
```bash
export CONTEXT7_API_KEY=your_api_key_here
```

2. MCP 配置已在 `mcp.json` 中完成，包含：
   - Context7 MCP Server 配置
   - 最大 token 限制：5000
   - 默认输出格式：文本

3. 使用 context7 命令：
```bash
# 搜索项目
npx context7 search <搜索词>

# 查询项目
npx context7 <项目标识> [查询内容]

# 查看项目信息
npx context7 info <项目标识>
```

## 许可证

MIT
