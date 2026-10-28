import { useState, useEffect } from 'react';
import { Download, Sparkles, RefreshCw, Share2, PlusSquare, Smartphone, CheckCircle2, X } from 'lucide-react';
import { Button } from './ui/button';
import { useToast } from '@/hooks/use-toast';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface InstallPWAProps {
  className?: string;
  variant?: "button" | "menu-item" | "banner";
}

export function InstallPWA({ className = "", variant = "button" }: InstallPWAProps) {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [needUpdate, setNeedUpdate] = useState(false);
  const [showIOSModal, setShowIOSModal] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Check for app updates via ServiceWorker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.ready.then((registration) => {
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          newWorker?.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              setNeedUpdate(true);
            }
          });
        });
      }).catch(() => {});
    }

    // Detect standalone mode (iOS or Android)
    const checkStandalone = () => {
      const isStandalone =
        window.matchMedia('(display-mode: standalone)').matches ||
        (window.navigator as any).standalone === true ||
        document.referrer.includes('android-app://');
      setIsInstalled(isStandalone);
    };

    checkStandalone();

    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handler);
    window.addEventListener('appinstalled', () => {
      setIsInstalled(true);
      setDeferredPrompt(null);
      toast({
        title: "Padho LPU Installed!",
        description: "You can now launch Padho LPU directly from your home screen or app drawer.",
      });
    });

    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, [toast]);

  const handleUpdate = () => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.ready.then((reg) => {
        reg.waiting?.postMessage({ type: 'SKIP_WAITING' });
      });
    }
    window.location.reload();
  };

  const handleInstallClick = async () => {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
    
    if (isIOS) {
      setShowIOSModal(true);
      return;
    }

    if (!deferredPrompt) {
      toast({
        title: "Install Padho LPU",
        description: "Open your browser menu (⋮ or Share) and select 'Install app' or 'Add to Home screen'.",
      });
      return;
    }

    try {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setDeferredPrompt(null);
      }
    } catch {
      toast({
        title: "Installation Prompt",
        description: "Please check your browser menu to complete the installation.",
      });
    }
  };

  if (needUpdate) {
    return (
      <Button
        onClick={handleUpdate}
        variant="outline"
        size="sm"
        className={`flex items-center gap-1.5 text-xs font-semibold text-amber-700 dark:text-amber-300 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 px-3.5 py-1.5 rounded-full shrink-0 transition-all shadow-none ${className}`}
      >
        <RefreshCw className="w-3.5 h-3.5 animate-spin" />
        <span>Update Available</span>
      </Button>
    );
  }

  if (isInstalled) return null;

  return (
    <>
      {variant === "menu-item" ? (
        <button
          onClick={handleInstallClick}
          className={`flex items-center gap-3 w-full px-3 py-2.5 rounded-xl text-sm font-medium text-[#734700] dark:text-[#c8830a] hover:bg-[#F4E7CA]/60 dark:hover:bg-[#2d2315] transition-colors ${className}`}
        >
          <Smartphone className="w-4 h-4 text-[#734700] dark:text-[#c8830a]" />
          <span>Install App (PWA)</span>
        </button>
      ) : (
        <Button
          onClick={handleInstallClick}
          variant="outline"
          size="sm"
          className={`flex items-center gap-1.5 text-xs font-semibold text-[#734700] dark:text-[#c8830a] bg-[#F4E7CA]/60 dark:bg-[#2d2315] hover:bg-[#F4E7CA] dark:hover:bg-[#382b1a] border border-[#734700]/20 dark:border-[#c8830a]/30 px-3.5 py-1.5 rounded-full shrink-0 transition-all shadow-none ${className}`}
        >
          <Download className="w-3.5 h-3.5 text-[#734700] dark:text-[#c8830a]" />
          <span>Install App</span>
        </Button>
      )}

      {/* iOS Step-by-Step Installation Modal */}
      <Dialog open={showIOSModal} onOpenChange={setShowIOSModal}>
        <DialogContent className="max-w-md bg-[#FFFEFB] dark:bg-[#191714] border border-[#E7E1D7] dark:border-[#2b2722] rounded-2xl p-6">
          <DialogHeader className="text-left space-y-2">
            <div className="w-10 h-10 rounded-2xl bg-[#F4E7CA] dark:bg-[#2d2315] flex items-center justify-center text-[#734700] dark:text-[#c8830a] mb-1">
              <Smartphone className="w-5 h-5" />
            </div>
            <DialogTitle className="font-serif text-xl font-normal text-[#181510] dark:text-[#f0ece4]">
              Install Padho LPU on iPhone & iPad
            </DialogTitle>
            <DialogDescription className="text-xs text-[#696158] dark:text-[#c8bfb0] leading-relaxed">
              Install Padho LPU as a native web app for offline access, instant notifications, and a full-screen experience.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-3 pt-3 border-t border-[#E7E1D7] dark:border-[#2b2722]">
            <div className="flex items-start gap-3 p-3 rounded-xl bg-[#F7F4EE] dark:bg-[#201d19] border border-[#E7E1D7] dark:border-[#2b2722]">
              <div className="w-7 h-7 rounded-full bg-[#181510] dark:bg-[#f0ece4] text-[#F7F4EE] dark:text-[#141210] flex items-center justify-center text-xs font-bold shrink-0">
                1
              </div>
              <div className="text-xs space-y-0.5">
                <p className="font-semibold text-[#181510] dark:text-[#f0ece4] flex items-center gap-1.5">
                  Tap the Share button <Share2 className="w-3.5 h-3.5 text-[#734700] inline" />
                </p>
                <p className="text-[#696158] dark:text-[#c8bfb0]">
                  Located at the bottom of Safari on iPhone or the top on iPad.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-xl bg-[#F7F4EE] dark:bg-[#201d19] border border-[#E7E1D7] dark:border-[#2b2722]">
              <div className="w-7 h-7 rounded-full bg-[#181510] dark:bg-[#f0ece4] text-[#F7F4EE] dark:text-[#141210] flex items-center justify-center text-xs font-bold shrink-0">
                2
              </div>
              <div className="text-xs space-y-0.5">
                <p className="font-semibold text-[#181510] dark:text-[#f0ece4] flex items-center gap-1.5">
                  Select "Add to Home Screen" <PlusSquare className="w-3.5 h-3.5 text-[#734700] inline" />
                </p>
                <p className="text-[#696158] dark:text-[#c8bfb0]">
                  Scroll down the share options and tap Add to Home Screen.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-xl bg-[#F7F4EE] dark:bg-[#201d19] border border-[#E7E1D7] dark:border-[#2b2722]">
              <div className="w-7 h-7 rounded-full bg-[#181510] dark:bg-[#f0ece4] text-[#F7F4EE] dark:text-[#141210] flex items-center justify-center text-xs font-bold shrink-0">
                3
              </div>
              <div className="text-xs space-y-0.5">
                <p className="font-semibold text-[#181510] dark:text-[#f0ece4]">
                  Tap "Add" in top-right
                </p>
                <p className="text-[#696158] dark:text-[#c8bfb0]">
                  Padho LPU icon will appear on your device home screen ready to launch.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-2">
            <Button
              onClick={() => setShowIOSModal(false)}
              className="w-full btn-primary text-xs h-10"
            >
              Got it
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
