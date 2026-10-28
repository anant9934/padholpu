import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { 
  ShieldCheck, 
  ShieldAlert, 
  QrCode, 
  KeyRound, 
  Copy, 
  Check, 
  Loader2, 
  Lock, 
  AlertTriangle 
} from "lucide-react";

export function AdminTotpManager() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(true);
  const [isEnabled, setIsEnabled] = useState(false);
  const [step, setStep] = useState<"idle" | "setup" | "backup_codes" | "disable">("idle");
  
  // Setup state
  const [qrCode, setQrCode] = useState<string | null>(null);
  const [manualKey, setManualKey] = useState<string | null>(null);
  const [verifyToken, setVerifyToken] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [recoveryCodes, setRecoveryCodes] = useState<string[]>([]);
  const [copiedCodes, setCopiedCodes] = useState(false);

  // Disable state
  const [disablePassword, setDisablePassword] = useState("");
  const [disableToken, setDisableToken] = useState("");
  const [isDisabling, setIsDisabling] = useState(false);

  // Fetch initial status
  const fetchStatus = async () => {
    try {
      setIsLoading(true);
      const res = await fetch("/api/admin/2fa/status");
      if (res.ok) {
        const data = await res.json();
        setIsEnabled(!!data.enabled);
      }
    } catch (err) {
      console.error("Failed to fetch 2FA status:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchStatus();
  }, []);

  // Initiate Setup
  const handleStartSetup = async () => {
    try {
      setIsVerifying(true);
      const res = await fetch("/api/admin/2fa/setup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to initiate 2FA setup");
      
      setQrCode(data.qrCode);
      setManualKey(data.manualEntryKey);
      setStep("setup");
    } catch (err: any) {
      toast({
        title: "Setup Error",
        description: err.message,
        variant: "destructive",
      });
    } finally {
      setIsVerifying(false);
    }
  };

  // Confirm Setup with Token
  const handleConfirmSetup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!verifyToken.trim() || verifyToken.length !== 6) {
      toast({
        title: "Validation Error",
        description: "Please enter a valid 6-digit verification code.",
        variant: "destructive",
      });
      return;
    }

    try {
      setIsVerifying(true);
      const res = await fetch("/api/admin/2fa/confirm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: verifyToken.trim() }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Invalid verification code");

      setIsEnabled(true);
      setRecoveryCodes(data.recoveryCodes || []);
      setStep("backup_codes");
      toast({
        title: "2FA Activated",
        description: "Two-factor authentication is now active on your account.",
      });
    } catch (err: any) {
      toast({
        title: "Verification Failed",
        description: err.message,
        variant: "destructive",
      });
    } finally {
      setIsVerifying(false);
    }
  };

  // Disable 2FA
  const handleDisable = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!disablePassword || !disableToken) {
      toast({
        title: "Required Fields",
        description: "Password and current 6-digit code are required to disable 2FA.",
        variant: "destructive",
      });
      return;
    }

    try {
      setIsDisabling(true);
      const res = await fetch("/api/admin/2fa/disable", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          password: disablePassword,
          token: disableToken.trim(),
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to disable 2FA");

      setIsEnabled(false);
      setStep("idle");
      setDisablePassword("");
      setDisableToken("");
      toast({
        title: "2FA Disabled",
        description: "Two-factor authentication has been turned off.",
      });
    } catch (err: any) {
      toast({
        title: "Error Disabling 2FA",
        description: err.message,
        variant: "destructive",
      });
    } finally {
      setIsDisabling(false);
    }
  };

  const handleCopyCodes = () => {
    navigator.clipboard.writeText(recoveryCodes.join("\n"));
    setCopiedCodes(true);
    toast({
      title: "Copied to clipboard",
      description: "Recovery codes copied. Store them in a safe password manager.",
    });
    setTimeout(() => setCopiedCodes(false), 2500);
  };

  if (isLoading) {
    return (
      <Card className="border-primary/5 shadow-sm">
        <CardContent className="py-8 flex justify-center items-center">
          <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-primary/10 shadow-sm overflow-hidden">
      <CardHeader className="bg-muted/20 border-b border-border/50">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-amber-600 dark:text-amber-500" />
              <CardTitle className="text-base font-semibold">Two-Factor Authentication (TOTP)</CardTitle>
            </div>
            <CardDescription className="text-xs">
              Protect your administrative access with Google Authenticator, Authy, or 1Password.
            </CardDescription>
          </div>
          {isEnabled ? (
            <Badge variant="outline" className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20 px-3 py-1 flex items-center gap-1.5 text-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse" />
              Enabled & Enforced
            </Badge>
          ) : (
            <Badge variant="outline" className="bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20 px-3 py-1 text-xs">
              Disabled
            </Badge>
          )}
        </div>
      </CardHeader>

      <CardContent className="pt-6">
        {/* State: 2FA Disabled - Idle */}
        {!isEnabled && step === "idle" && (
          <div className="space-y-4">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-amber-500/5 border border-amber-500/20 text-xs leading-relaxed text-muted-foreground">
              <ShieldAlert className="w-5 h-5 text-amber-600 dark:text-amber-500 shrink-0 mt-0.5" />
              <div>
                <strong className="text-foreground block font-medium mb-0.5">Admin Security Recommendation</strong>
                Enabling TOTP adds a critical layer of defense against credential stuffing and session hijacking. Once configured, logging into the administration panel will require your password plus a time-based code from your authenticator device.
              </div>
            </div>
            <div className="flex justify-end">
              <Button onClick={handleStartSetup} disabled={isVerifying} className="bg-amber-600 hover:bg-amber-700 text-white text-xs h-9 px-4">
                {isVerifying && <Loader2 className="w-3.5 h-3.5 mr-2 animate-spin" />}
                Set Up Authenticator App
              </Button>
            </div>
          </div>
        )}

        {/* State: 2FA Setup in Progress */}
        {!isEnabled && step === "setup" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              {/* QR Code */}
              <div className="flex flex-col items-center justify-center p-4 border border-border/60 rounded-xl bg-background/50">
                {qrCode ? (
                  <img src={qrCode} alt="TOTP Enrollment QR Code" className="w-48 h-48 rounded-lg shadow-sm" />
                ) : (
                  <div className="w-48 h-48 flex items-center justify-center bg-muted/40 rounded-lg">
                    <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
                  </div>
                )}
                <span className="text-[11px] text-muted-foreground mt-2 text-center">
                  Scan with Google Authenticator, 1Password, or Authy
                </span>
              </div>

              {/* Manual Entry + Verification Form */}
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <Label className="text-xs text-muted-foreground uppercase tracking-wider font-mono">Manual Setup Key</Label>
                  <div className="flex items-center gap-2">
                    <code className="text-xs font-mono bg-muted px-3 py-1.5 rounded-lg border flex-1 text-center font-semibold tracking-wider text-amber-700 dark:text-amber-400 select-all">
                      {manualKey}
                    </code>
                  </div>
                  <p className="text-[11px] text-muted-foreground">If you cannot scan the QR code, manually enter this secret in your authenticator app.</p>
                </div>

                <form onSubmit={handleConfirmSetup} className="space-y-3 pt-2">
                  <div className="space-y-1.5">
                    <Label htmlFor="verifyToken" className="text-xs font-medium">Enter 6-Digit Code from App</Label>
                    <Input
                      id="verifyToken"
                      type="text"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      maxLength={6}
                      value={verifyToken}
                      onChange={(e) => setVerifyToken(e.target.value.replace(/\D/g, ""))}
                      placeholder="123456"
                      className="text-center font-mono text-lg tracking-widest h-11"
                      required
                    />
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={() => setStep("idle")} 
                      className="w-1/3 text-xs h-10"
                    >
                      Cancel
                    </Button>
                    <Button 
                      type="submit" 
                      disabled={isVerifying || verifyToken.length !== 6} 
                      className="flex-1 bg-amber-600 hover:bg-amber-700 text-white text-xs h-10"
                    >
                      {isVerifying && <Loader2 className="w-3.5 h-3.5 mr-2 animate-spin" />}
                      Verify & Activate 2FA
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* State: Show Backup Recovery Codes (Shown Once) */}
        {step === "backup_codes" && (
          <div className="space-y-5">
            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs space-y-1">
              <div className="flex items-center gap-2 font-semibold text-amber-800 dark:text-amber-300">
                <AlertTriangle className="w-4 h-4 text-amber-600" />
                Store These Recovery Codes Now
              </div>
              <p className="text-muted-foreground leading-relaxed">
                If you ever lose access to your phone or authenticator device, each recovery code can be used exactly once to regain access to the admin dashboard. These codes will <strong>never be shown again</strong>.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 bg-muted/30 p-4 rounded-xl border border-border/50">
              {recoveryCodes.map((code, idx) => (
                <div key={idx} className="font-mono text-xs text-center py-2 px-1 bg-background rounded-lg border font-medium select-all">
                  {code}
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center pt-2">
              <Button 
                type="button" 
                variant="outline" 
                onClick={handleCopyCodes} 
                className="text-xs h-9 gap-2"
              >
                {copiedCodes ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                {copiedCodes ? "Codes Copied" : "Copy All Codes"}
              </Button>
              <Button 
                onClick={() => setStep("idle")} 
                className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs h-9 px-5"
              >
                I Have Saved My Codes
              </Button>
            </div>
          </div>
        )}

        {/* State: 2FA Active - Management */}
        {isEnabled && step === "idle" && (
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20 text-xs">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                <div>
                  <span className="font-semibold text-foreground block">Authenticator App Verified</span>
                  <span className="text-muted-foreground">Your administrative account is protected with hardware-compatible TOTP 2FA.</span>
                </div>
              </div>
              <Button 
                variant="destructive" 
                onClick={() => setStep("disable")} 
                className="text-xs h-8 px-3"
              >
                Disable 2FA
              </Button>
            </div>
          </div>
        )}

        {/* State: Disable 2FA Form */}
        {isEnabled && step === "disable" && (
          <form onSubmit={handleDisable} className="space-y-4 max-w-md mx-auto p-4 border rounded-xl bg-muted/10">
            <div className="text-center space-y-1">
              <h4 className="text-sm font-semibold text-destructive flex items-center justify-center gap-1.5">
                <Lock className="w-4 h-4" /> Confirm Disabling 2FA
              </h4>
              <p className="text-xs text-muted-foreground">
                To prevent accidental or unauthorized disabling, please enter your administrator password and a current 6-digit authenticator code.
              </p>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="disablePassword" className="text-xs font-medium">Admin Password</Label>
              <Input
                id="disablePassword"
                type="password"
                value={disablePassword}
                onChange={(e) => setDisablePassword(e.target.value)}
                placeholder="Current administrator password"
                required
                className="h-9 text-xs"
              />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="disableToken" className="text-xs font-medium">6-Digit Authenticator Code (or Recovery Code)</Label>
              <Input
                id="disableToken"
                type="text"
                value={disableToken}
                onChange={(e) => setDisableToken(e.target.value)}
                placeholder="123456 or a1b2c3d4"
                required
                className="h-9 text-xs font-mono text-center tracking-widest"
              />
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => setStep("idle")} 
                className="text-xs h-9"
              >
                Cancel
              </Button>
              <Button 
                type="submit" 
                variant="destructive" 
                disabled={isDisabling} 
                className="text-xs h-9"
              >
                {isDisabling && <Loader2 className="w-3.5 h-3.5 mr-2 animate-spin" />}
                Confirm & Disable 2FA
              </Button>
            </div>
          </form>
        )}
      </CardContent>
    </Card>
  );
}
