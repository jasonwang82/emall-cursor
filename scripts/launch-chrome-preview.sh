#!/bin/bash

# Chrome DevTools Preview 启动脚本
# 用于在 Chrome 浏览器中预览应用

echo "🚀 启动时尚女装电商网站预览..."
echo ""

# 检查预览服务器是否在运行
if lsof -Pi :4173 -sTCP:LISTEN -t >/dev/null 2>&1; then
    echo "✅ 预览服务器正在运行 (端口 4173)"
else
    echo "⚠️  预览服务器未运行，正在启动..."
    npm run build
    npm run preview &
    PREVIEW_PID=$!
    echo "等待服务器启动..."
    sleep 3
fi

# 获取预览 URL
PREVIEW_URL="http://localhost:4173"
NETWORK_URL="http://172.30.0.2:4173"

echo ""
echo "📱 预览地址："
echo "   本地: $PREVIEW_URL"
echo "   网络: $NETWORK_URL"
echo ""

# 尝试在 Chrome 中打开
if command -v google-chrome &> /dev/null; then
    echo "🌐 正在 Chrome 中打开..."
    google-chrome --new-window "$PREVIEW_URL" &
elif command -v chromium &> /dev/null; then
    echo "🌐 正在 Chromium 中打开..."
    chromium --new-window "$PREVIEW_URL" &
elif command -v chromium-browser &> /dev/null; then
    echo "🌐 正在 Chromium Browser 中打开..."
    chromium-browser --new-window "$PREVIEW_URL" &
else
    echo "⚠️  未找到 Chrome/Chromium，请手动打开浏览器访问:"
    echo "   $PREVIEW_URL"
    echo ""
    echo "💡 您也可以在手机上访问:"
    echo "   $NETWORK_URL"
fi

echo ""
echo "✨ 预览已准备就绪！"
echo ""
echo "📋 功能列表："
echo "   - 首页轮播和商品展示"
echo "   - 登录/注册功能"
echo "   - 商品浏览和详情"
echo "   - 购物车和结算"
echo "   - 订单管理"
echo ""
echo "🛑 按 Ctrl+C 停止预览服务器"
echo ""

# 如果启动了新的预览服务器，等待它
if [ ! -z "$PREVIEW_PID" ]; then
    wait $PREVIEW_PID
fi
