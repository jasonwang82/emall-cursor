import { useStore } from '@/store/useStore'
import { Link } from 'react-router-dom'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

export default function WelcomeModal() {
  const { showWelcomeModal, setShowWelcomeModal } = useStore()

  return (
    <Dialog open={showWelcomeModal} onOpenChange={setShowWelcomeModal}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-3xl font-light">欢迎光临</DialogTitle>
          <DialogDescription className="text-base pt-2">
            新用户注册即享首单9折优惠，更有专属会员福利等你解锁。
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-3 py-4">
          <Link to="/register" onClick={() => setShowWelcomeModal(false)}>
            <Button className="w-full" size="lg">
              立即注册
            </Button>
          </Link>
          <Button
            variant="ghost"
            className="w-full"
            size="lg"
            onClick={() => setShowWelcomeModal(false)}
          >
            随便逛逛
          </Button>
        </div>

        <DialogFooter className="sm:justify-center">
          <p className="text-sm text-muted-foreground">
            已有账户？
            <Link
              to="/login"
              className="text-foreground ml-1 hover:underline font-medium"
              onClick={() => setShowWelcomeModal(false)}
            >
              立即登录
            </Link>
          </p>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
