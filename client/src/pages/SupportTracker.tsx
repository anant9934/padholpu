import { useState, useEffect } from "react";
import { useParams, useLocation } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, CheckCircle2, Search, ArrowLeft, Send, Mail, Clock, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

export default function SupportTracker() {
  const { ticketId } = useParams();
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  
  // Extract secret token from URL hash fragment (#token=...) or query param (?token=...)
  // Fragments are preferred because they are never transmitted to web servers in HTTP request headers.
  const [verifiedToken, setVerifiedToken] = useState<string | null>(() => {
    if (typeof window !== "undefined") {
      let extractedToken: string | null = null;
      
      // 1. Primary: Extract from URL fragment (#token=SECRET)
      if (window.location.hash) {
        const hashStr = window.location.hash.startsWith("#") ? window.location.hash.slice(1) : window.location.hash;
        const hashParams = new URLSearchParams(hashStr);
        extractedToken = hashParams.get("token");
      }

      // 2. Fallback: Extract from query search params (?token=SECRET)
      if (!extractedToken && window.location.search) {
        const searchParams = new URLSearchParams(window.location.search);
        extractedToken = searchParams.get("token");
      }

      if (extractedToken) {
        // Immediate history replacement: purge secret token from browser address bar and history
        window.history.replaceState({}, document.title, window.location.pathname);
        return extractedToken;
      }
    }
    return null;
  });

  const [tokenInput, setTokenInput] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);

  // Fetch ticket status securely via POST with token in JSON body
  const { data: ticket, isLoading, error, refetch } = useQuery({
    queryKey: [`/api/support/track/${ticketId}`, verifiedToken],
    queryFn: async () => {
      const res = await fetch(`/api/support/track/${ticketId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: verifiedToken || undefined }),
      });
      if (!res.ok) throw new Error("Ticket not found");
      return res.json();
    },
    enabled: !!ticketId
  });

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (!tokenInput.trim()) return;
    setIsVerifying(true);
    setVerifiedToken(tokenInput.trim());
    setTimeout(() => {
      setIsVerifying(false);
      refetch().then((result) => {
        if (result.data?.isVerified) {
          toast({
            title: "Identity Verified",
            description: "Full ticket details unlocked.",
          });
        } else {
          toast({
            title: "Verification Failed",
            description: "Invalid secret access token for this ticket.",
            variant: "destructive",
          });
          setVerifiedToken(null);
        }
      });
    }, 400);
  };

  const steps = [
    { label: "Received", status: "received", icon: CheckCircle2 },
    { label: "Reviewing", status: "reviewing", icon: Search },
    { label: "Resolved", status: "resolved", icon: ShieldCheck },
  ];

  const getStepIndex = (status: string) => {
    if (status === "resolved") return 2;
    if (status === "reviewing") return 1;
    return 0;
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
      </div>
    );
  }

  if (error || !ticket) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
        <div className="bg-red-50 p-6 rounded-full mb-6">
          <Search className="h-12 w-12 text-red-500" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Ticket Not Found</h1>
        <p className="text-gray-600 mb-8 max-w-md">
          We couldn't find a support ticket with ID <span className="font-mono font-bold">{ticketId}</span>. 
          Please check the link in your email and try again.
        </p>
        <Button onClick={() => setLocation("/")} variant="outline">
          <ArrowLeft className="mr-2 h-4 w-4" /> Go Back Home
        </Button>
      </div>
    );
  }

  const currentStep = getStepIndex(ticket.status);

  return (
    <div className="min-h-screen bg-[#f8fafc] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Button variant="ghost" onClick={() => setLocation("/")} className="text-gray-600 hover:text-gray-900">
            <ArrowLeft className="mr-2 h-4 w-4" /> Portal
          </Button>
          <Badge variant="outline" className="px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-white shadow-sm border-gray-200 text-gray-500">
            System: Padho LPU Core
          </Badge>
        </div>

        {/* Main Status Card */}
        <Card className="border border-[#E7E1D7] dark:border-[#26221c] shadow-xl overflow-hidden bg-white dark:bg-[#1a1714] rounded-3xl mb-8">
          <CardHeader className="bg-[#181510] dark:bg-[#151310] text-[#F7F4EE] p-4 sm:p-6 md:p-8 border-b border-[#2b2722]">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <CardDescription className="text-amber-400 dark:text-amber-300 font-medium uppercase tracking-widest text-xs mb-1">
                  Secure Support Ticket
                </CardDescription>
                <CardTitle className="text-2xl sm:text-3xl font-bold tracking-tight font-mono text-[#F7F4EE] break-words">
                  {ticket.ticketId}
                </CardTitle>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-right hidden md:block">
                  <p className="text-xs text-amber-200/80 uppercase font-semibold">Current State</p>
                  <p className="text-lg font-bold capitalize text-[#F7F4EE]">{ticket.status.replace('-', ' ')}</p>
                </div>
                <div className={`h-12 w-12 rounded-2xl flex items-center justify-center shadow-lg transition-transform hover:scale-105 shrink-0 ${
                  ticket.status === 'resolved' ? 'bg-[#2E6930]' : 'bg-[#734700]'
                }`}>
                  {ticket.status === 'resolved' ? <CheckCircle2 className="h-6 w-6 text-white" /> : <Clock className="h-6 w-6 text-white" />}
                </div>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="p-4 sm:p-6 md:p-8">
            {/* Visual Stepper */}
            <div className="relative mb-12 py-4">
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 dark:bg-gray-800 -translate-y-1/2 z-0" />
              <div 
                className="absolute top-1/2 left-0 h-0.5 bg-[#734700] transition-all duration-1000 ease-out z-0" 
                style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
              />
              
              <div className="flex justify-between relative z-10">
                {steps.map((step, idx) => {
                  const Icon = step.icon;
                  const isActive = idx <= currentStep;
                  const isCurrent = idx === currentStep;
                  
                  return (
                    <div key={step.label} className="flex flex-col items-center">
                      <motion.div 
                        initial={false}
                        animate={{ 
                          scale: isCurrent ? 1.2 : 1,
                          backgroundColor: isActive ? '#734700' : '#ffffff',
                          borderColor: isActive ? '#734700' : '#e2e8f0',
                        }}
                        className={`w-10 h-10 rounded-full border-2 flex items-center justify-center shadow-md transition-colors duration-500`}
                      >
                        <Icon className={`h-5 w-5 ${isActive ? 'text-white' : 'text-gray-400'}`} />
                      </motion.div>
                      <span className={`mt-3 text-xs sm:text-sm font-semibold tracking-tight ${isActive ? 'text-[#734700] dark:text-amber-400' : 'text-gray-400'}`}>
                        {step.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <AnimatePresence mode="wait">
              {!ticket.isVerified ? (
                <motion.div 
                  key="verify"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="bg-amber-50 border border-amber-100 rounded-2xl p-4 sm:p-6 text-center"
                >
                  <ShieldCheck className="h-10 w-10 text-amber-500 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-amber-900 mb-2">Verify Ticket Ownership</h3>
                  <p className="text-amber-700 text-sm mb-6 max-w-sm mx-auto">
                    To protect your privacy, please enter the Secret Access Token provided when your ticket was created or in your confirmation email.
                  </p>
                  <form onSubmit={handleVerify} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
                    <Input 
                      type="text" 
                      placeholder="Enter Secret Token" 
                      value={tokenInput}
                      onChange={(e) => setTokenInput(e.target.value)}
                      className="bg-white border-amber-200 focus-visible:ring-amber-500 rounded-xl font-mono text-xs h-11"
                      required
                    />
                    <Button type="submit" disabled={isVerifying} className="bg-amber-600 hover:bg-amber-700 text-white rounded-xl shadow-md w-full sm:w-auto min-w-[120px] h-11">
                      {isVerifying ? <Loader2 className="h-4 w-4 animate-spin" /> : "Verify Access"}
                    </Button>
                  </form>
                </motion.div>
              ) : (
                <motion.div 
                  key="details"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-8"
                >
                  {/* Original Submission */}
                  <div>
                    <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4 flex items-center">
                      <Mail className="w-3 h-3 mr-2" /> Your Submission
                    </h3>
                    <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-3 opacity-5">
                        <Mail className="w-16 h-16" />
                      </div>
                      <p className="text-gray-700 italic leading-relaxed relative z-10">"{ticket.message}"</p>
                    </div>
                  </div>

                  {/* Resolution Section */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <h3 className={`text-xs font-bold uppercase tracking-widest mb-4 flex items-center ${ticket.resolution ? 'text-green-600' : 'text-blue-600'}`}>
                      <CheckCircle2 className="w-3 h-3 mr-2" /> {ticket.resolution ? 'Official Resolution' : 'Staff Response Status'}
                    </h3>
                    <div className={`rounded-2xl p-6 border relative overflow-hidden shadow-sm ${
                      ticket.resolution 
                        ? 'bg-green-50 border-green-100 text-green-900' 
                        : 'bg-blue-50 border-blue-100 text-blue-900'
                    }`}>
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`h-2 w-2 rounded-full animate-pulse ${ticket.resolution ? 'bg-green-500' : 'bg-blue-500'}`} />
                        <span className="text-xs font-bold uppercase tracking-wide">
                          {ticket.resolution ? 'Resolution Confirmed' : 'Action In Progress'}
                        </span>
                      </div>
                      <p className="leading-relaxed font-medium">
                        {ticket.resolution || "Our academic coordinators are currently analyzing your request. A detailed response will appear here once finalized."}
                      </p>
                    </div>
                  </motion.div>

                  {/* Footer Meta */}
                  <div className="pt-6 border-top border-gray-100 flex flex-wrap gap-6 justify-between items-center text-xs text-gray-500 font-medium">
                    <div className="flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-full">
                      <Clock className="w-3 h-3" /> Submitted {new Date(ticket.createdAt).toLocaleDateString()}
                    </div>
                    {ticket.updatedAt && new Date(ticket.updatedAt) > new Date(ticket.createdAt) && (
                      <div className="flex items-center gap-2 bg-indigo-50 text-indigo-700 px-3 py-1.5 rounded-full">
                        <Clock className="w-3 h-3" /> Last Active {new Date(ticket.updatedAt).toLocaleDateString()}
                      </div>
                    )}
                    <div className="flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-full">
                      <ShieldCheck className="w-3 h-3 text-blue-500" /> Identity Protected
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </CardContent>
        </Card>

        {/* Quick Help Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white dark:bg-[#1a1714] p-6 rounded-3xl shadow-sm border border-[#E7E1D7] dark:border-[#26221c] hover:border-[#734700]/30 transition-all cursor-pointer" onClick={() => setLocation("/learn")}>
            <div className="h-10 w-10 bg-[#F4E7CA]/60 text-[#734700] rounded-xl flex items-center justify-center mb-4">
              <CheckCircle2 className="h-5 w-5" />
            </div>
            <h4 className="font-serif font-bold text-[#181510] dark:text-[#f0ece4] mb-1">Study Library</h4>
            <p className="text-[#696158] dark:text-[#c8bfb0] text-xs leading-relaxed">Access verified course notes and unit revision sheets while your ticket is reviewed.</p>
          </div>
          <div className="bg-white dark:bg-[#1a1714] p-6 rounded-3xl shadow-sm border border-[#E7E1D7] dark:border-[#26221c] hover:border-[#734700]/30 transition-all cursor-pointer" onClick={() => setLocation("/quizzes")}>
            <div className="h-10 w-10 bg-[#2E6930]/10 text-[#2E6930] rounded-xl flex items-center justify-center mb-4">
              <Send className="h-5 w-5" />
            </div>
            <h4 className="font-serif font-bold text-[#181510] dark:text-[#f0ece4] mb-1">Practice Quizzes</h4>
            <p className="text-[#696158] dark:text-[#c8bfb0] text-xs leading-relaxed">Build your exam readiness with unit-wise multiple-choice question drills.</p>
          </div>
        </div>

        <p className="mt-12 text-center text-gray-400 text-[10px] uppercase font-bold tracking-[0.2em]">
          &copy; 2026 Padho LPU Platform &bull; Support System
        </p>
      </div>
    </div>
  );
}
