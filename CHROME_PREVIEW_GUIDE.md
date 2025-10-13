# Chrome DevTools MCP 预览指南

## 📋 配置信息

### MCP 服务器配置

已在 `mcp.json` 中添加 Chrome DevTools MCP：

```json
{
  "mcpServers": {
    "chrome-devtools": {
      "command": "npx",
      "args": ["chrome-devtools-mcp@latest"],
      "description": "Chrome DevTools MCP Server - 浏览器调试和预览工具"
    }
  }
}
```

## 🚀 启动预览

### 方法 1: 使用预览导航页面

1. **确保预览服务器运行中**：
   ```bash
   npm run preview
   ```

2. **在浏览器中打开导航页面**：
   - 双击打开 `preview.html` 文件
   - 或在浏览器中访问文件路径

3. **选择预览方式**：
   - 🖥️ 本地预览: http://localhost:4173
   - 🌐 网络预览: http://172.30.0.2:4173
   - 📱 手机预览: 扫描二维码或直接访问网络地址

### 方法 2: 使用命令行脚本

```bash
# 构建并启动 Chrome 预览
npm run preview:chrome
```

此命令会：
- 自动构建项目
- 启动预览服务器
- 尝试在 Chrome/Chromium 中打开

### 方法 3: 手动启动

```bash
# 1. 构建项目
npm run build

# 2. 启动预览服务器
npm run preview

# 3. 在浏览器中打开
# http://localhost:4173
```

## 🌐 可用预览地址

| 访问方式 | 地址 | 适用场景 |
|---------|------|---------|
| 本地访问 | http://localhost:4173 | 开发机器本地预览 |
| 网络访问 | http://172.30.0.2:4173 | 同网络设备访问 |
| 移动设备 | http://172.30.0.2:4173 | 手机、平板预览 |

## 📱 移动端预览

### 在手机上测试响应式设计：

1. **确保手机和电脑在同一网络**
2. **在手机浏览器中访问**: http://172.30.0.2:4173
3. **测试功能**:
   - 触摸滑动轮播图
   - 移动端导航菜单
   - 表单输入
   - 购物车操作
   - 响应式布局

### 使用 Chrome DevTools 设备模拟：

1. 打开 Chrome 开发者工具（F12）
2. 点击设备工具栏图标（Ctrl+Shift+M）
3. 选择设备型号：
   - iPhone 12/13 Pro
   - iPhone SE
   - iPad
   - Samsung Galaxy
   - 自定义尺寸

## 🔍 Chrome DevTools 功能

### 1. 元素检查
- 实时编辑 HTML/CSS
- 查看和修改样式
- 检查布局和盒模型

### 2. 网络监控
- 查看请求和响应
- 分析加载性能
- 检查资源大小

### 3. 性能分析
- Lighthouse 审计
- 性能指标测量
- 优化建议

### 4. 响应式测试
- 多设备预览
- 触摸事件模拟
- 网络节流测试

## 🎯 测试清单

### 首页测试
- [ ] 轮播图自动切换
- [ ] 新用户欢迎弹窗
- [ ] 商品卡片悬停效果
- [ ] 响应式布局

### 用户功能测试
- [ ] 注册表单验证
- [ ] 登录功能
- [ ] Toast 消息提示
- [ ] 表单错误处理

### 购物流程测试
- [ ] 添加到购物车
- [ ] 购物车数量更新
- [ ] 商品数量调整
- [ ] 结算流程
- [ ] 地址表单

### 商品浏览测试
- [ ] 商品列表筛选
- [ ] 分类切换
- [ ] 商品详情图片
- [ ] 尺码颜色选择
- [ ] 用户评价显示

### 响应式测试
- [ ] 移动端菜单
- [ ] 触摸滑动
- [ ] 表单输入
- [ ] 按钮大小
- [ ] 文字可读性

## 📊 性能优化建议

### Lighthouse 审计重点：

1. **性能 (Performance)**
   - 首次内容绘制 (FCP)
   - 最大内容绘制 (LCP)
   - 累积布局偏移 (CLS)

2. **可访问性 (Accessibility)**
   - ARIA 标签
   - 颜色对比度
   - 键盘导航

3. **最佳实践 (Best Practices)**
   - HTTPS
   - 控制台错误
   - 图片优化

4. **SEO**
   - Meta 标签
   - 语义化 HTML
   - 移动端友好

## 🛠️ 常见问题

### Q: 预览服务器启动失败？
A: 确保端口 4173 未被占用：
```bash
lsof -i :4173
# 如果被占用，结束进程
kill -9 <PID>
```

### Q: 移动设备无法访问？
A: 检查：
1. 设备在同一网络
2. 防火墙设置
3. 网络 IP 地址正确

### Q: 页面样式异常？
A: 尝试：
1. 清除浏览器缓存
2. 重新构建: `npm run build`
3. 强制刷新: Ctrl+Shift+R

### Q: Chrome DevTools 打不开？
A: 确保：
1. Chrome 版本最新
2. 使用 F12 或右键"检查"
3. 清除浏览器扩展冲突

## 📚 相关资源

- [Chrome DevTools 文档](https://developer.chrome.com/docs/devtools/)
- [Lighthouse 性能优化](https://web.dev/performance-scoring/)
- [移动端测试指南](https://web.dev/mobile/)
- [响应式设计最佳实践](https://web.dev/responsive-web-design-basics/)

## 🎨 预览截图建议

### 推荐截图内容：
1. 首页全屏（桌面端）
2. 首页移动端
3. 商品列表页
4. 商品详情页
5. 购物车页面
6. 登录注册页面
7. 个人中心

### 截图工具：
- Chrome DevTools 内置截图
- 全页面截图扩展
- Lighthouse 报告截图

## 🔄 更新预览

如果修改了代码：

```bash
# 1. 停止当前预览服务器 (Ctrl+C)
# 2. 重新构建
npm run build
# 3. 启动预览
npm run preview
```

或使用热更新开发模式：

```bash
npm run dev
# 访问 http://localhost:3000
```

---

**提示**: preview.html 会实时检测服务器状态，打开后可以看到服务器是否正常运行。

**最后更新**: 2025-10-13
