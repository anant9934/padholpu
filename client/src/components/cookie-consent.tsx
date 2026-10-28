import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Cookie, X } from "lucide-react";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      className="fixed bottom-6 left-5 right-5 md:left-auto md:right-8 md:w-[420px] z-[100] animate-in fade-in slide-in-from-bottom-5 duration-300"
    >
      <div className="bg-white dark:bg-[#1c1916] border border-primary/30 rounded-3xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
            
            <div className="flex items-start gap-4 transition-transform duration-500 group-hover:scale-[1.01]">
              <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 text-primary shrink-0">
                <Cookie className="w-6 h-6 animate-pulse" />
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-foreground text-lg">Cookie Policy</h3>
                  <button 
                    type="button"
                    aria-label="Dismiss cookie notice"
                    onClick={() => setIsVisible(false)}
                    className="text-muted-foreground hover:text-foreground transition-colors p-1"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We use cookies to enhance your experience, serve personalized ads via Google AdSense, and analyze our traffic. By clicking "Accept", you consent to our use of cookies.
                </p>
                
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <Button 
                    size="sm" 
                    onClick={handleAccept}
                    className="px-6 font-bold shadow-lg shadow-primary/20"
                  >
                    Accept
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    onClick={handleDecline}
                    className="px-6"
                  >
                    Decline
                  </Button>
                  <Link href="/privacy">
                    <span className="text-xs text-primary hover:underline cursor-pointer font-medium">Privacy Policy</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
  );
}
