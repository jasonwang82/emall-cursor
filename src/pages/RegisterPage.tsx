import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Mail, Lock, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { useToast } from '@/hooks/use-toast'

export default function RegisterPage() {
  const navigate = useNavigate()
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      toast({
        variant: "destructive",
        title: "密码不匹配",
        description: "两次输入的密码不一致，请重新输入。"
      })
      return
    }
    // TODO: Implement register logic
    console.log('Register:', formData)
    toast({
      title: "注册成功！",
      description: "欢迎加入我们，现在可以开始购物了。"
    })
    navigate('/')
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-3xl font-light text-center">创建账户</CardTitle>
          <CardDescription className="text-center">开启你的时尚之旅</CardDescription>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                用户名
              </label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="pl-10"
                  placeholder="您的姓名"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                邮箱地址
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="pl-10"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium">
                密码
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="password"
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="pl-10"
                  placeholder="至少8个字符"
                  required
                  minLength={8}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="confirmPassword" className="text-sm font-medium">
                确认密码
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  className="pl-10"
                  placeholder="再次输入密码"
                  required
                />
              </div>
            </div>

            <div className="flex items-start space-x-2">
              <input type="checkbox" className="mt-1 rounded border-gray-300" required />
              <span className="text-sm text-muted-foreground">
                我已阅读并同意
                <a href="#" className="text-foreground hover:underline mx-1">服务条款</a>
                和
                <a href="#" className="text-foreground hover:underline ml-1">隐私政策</a>
              </span>
            </div>

            <Button type="submit" className="w-full" size="lg">
              注册
            </Button>
          </form>

          <div className="mt-6">
            <div className="relative">
              <Separator className="my-4" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="bg-background px-2 text-sm text-muted-foreground">
                  或使用以下方式注册
                </span>
              </div>
            </div>

            <div className="mt-6 space-y-2">
              <Button variant="outline" className="w-full" size="lg">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="#09BB07">
                  <path d="M8.5 2C7.67 2 7 2.67 7 3.5V9H3.5C2.67 9 2 9.67 2 10.5V13.5C2 14.33 2.67 15 3.5 15H7V20.5C7 21.33 7.67 22 8.5 22H11.5C12.33 22 13 21.33 13 20.5V15H16.5C17.33 15 18 14.33 18 13.5V10.5C18 9.67 17.33 9 16.5 9H13V3.5C13 2.67 12.33 2 11.5 2H8.5Z"/>
                </svg>
                微信注册
              </Button>

              <Button variant="outline" className="w-full" size="lg">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="#1677FF">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"/>
                </svg>
                支付宝注册
              </Button>
            </div>
          </div>
        </CardContent>

        <CardFooter>
          <p className="text-center text-sm text-muted-foreground w-full">
            已有账户？
            <Link to="/login" className="font-medium text-foreground ml-1 hover:underline">
              立即登录
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}
