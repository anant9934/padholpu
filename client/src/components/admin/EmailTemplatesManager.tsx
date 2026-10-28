import { useState, useEffect, useCallback } from "react";
import { useToast } from "@/hooks/use-toast";
import {
  Mail,
  Eye,
  Edit3,
  RotateCcw,
  Send,
  Save,
  ChevronRight,
  CheckCircle2,
  AlertTriangle,
  X,
  Loader2,
  Sparkles,
  Shield,
  Megaphone,
  UserX,
  Key,
  Radio,
  AtSign,
} from "lucide-react";

// ── Types ──────────────────────────────────────────────────────────────────────
type TemplateType =
  | "welcome"
  | "password_reset"
  | "support_reply"
  | "announcement"
  | "account_warning";

interface EmailTemplate {
  id: number;
  type: TemplateType;
  name: string;
  subject: string;
  htmlBody: string;
  variables: string[];
  isActive: boolean;
  updatedAt: string;
}

// ── Template Meta ──────────────────────────────────────────────────────────────
const TEMPLATE_META: Record<
  TemplateType,
  { icon: React.ElementType; color: string; bg: string; border: string; desc: string }
> = {
  welcome: {
    icon: Sparkles,
    color: "#2E6930",
    bg: "#f0fdf4",
    border: "#bbf7d0",
    desc: "Sent when a new user completes registration.",
  },
  password_reset: {
    icon: Key,
    color: "#734700",
    bg: "#fef9f0",
    border: "#f0d49a",
    desc: "OTP email for password reset requests.",
  },
  support_reply: {
    icon: Mail,
    color: "#1d4ed8",
    bg: "#eff6ff",
    border: "#bfdbfe",
    desc: "Admin reply / ticket status update to students.",
  },
  announcement: {
    icon: Megaphone,
    color: "#7c3aed",
    bg: "#f5f3ff",
    border: "#ddd6fe",
    desc: "Platform-wide announcement broadcast.",
  },
  account_warning: {
    icon: UserX,
    color: "#991b1b",
    bg: "#fff1f2",
    border: "#fecaca",
    desc: "Warning notice sent for policy violations.",
  },
};

const TYPE_LABELS: Record<TemplateType, string> = {
  welcome: "Welcome",
  password_reset: "Password Reset",
  support_reply: "Support Reply",
  announcement: "Announcement",
  account_warning: "Account Warning",
};

// ── API helpers ────────────────────────────────────────────────────────────────
async function apiReq(method: string, path: string, body?: object) {
  const res = await fetch(`/api/admin/email-templates${path}`, {
    method,
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: body ? JSON.stringify(body) : undefined,
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message || "Request failed");
  return data;
}

// ── Main Component ──────────────────────────────────────────────────────────────
export function EmailTemplatesManager() {
  const { toast } = useToast();

  const [templates, setTemplates] = useState<EmailTemplate[]>([]);
  const [selected, setSelected] = useState<TemplateType | null>(null);
  const [editing, setEditing] = useState<EmailTemplate | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [isResetting, setIsResetting] = useState(false);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [testEmail, setTestEmail] = useState("");
  const [isSendingTest, setIsSendingTest] = useState(false);
  const [sendTestOpen, setSendTestOpen] = useState(false);

  // ── Broadcast state ────────────────────────────────────────────────────────
  const [broadcastOpen, setBroadcastOpen] = useState(false);
  const [bcSubject, setBcSubject] = useState("");
  const [bcBody, setBcBody] = useState("");
  const [isBroadcasting, setIsBroadcasting] = useState(false);

  // ── Direct send state ──────────────────────────────────────────────────────
  const [directOpen, setDirectOpen] = useState(false);
  const [directTo, setDirectTo] = useState("");
  const [directSubject, setDirectSubject] = useState("");
  const [directBody, setDirectBody] = useState("");
  const [isSendingDirect, setIsSendingDirect] = useState(false);

  // Load all templates
  const loadTemplates = useCallback(async () => {
    setIsLoading(true);
    try {
      const data = await apiReq("GET", "/");
      setTemplates(data);
    } catch (err: any) {
      toast({ title: "Load failed", description: err.message, variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
  }, [toast]);

  useEffect(() => { loadTemplates(); }, [loadTemplates]);

  // Select a template for editing
  const selectTemplate = (type: TemplateType) => {
    const tpl = templates.find((t) => t.type === type);
    if (tpl) {
      setSelected(type);
      setEditing({ ...tpl });
      setPreviewOpen(false);
      setSendTestOpen(false);
    }
  };

  // Save
  const handleSave = async () => {
    if (!editing) return;
    setIsSaving(true);
    try {
      const updated = await apiReq("PUT", `/${editing.type}`, {
        name: editing.name,
        subject: editing.subject,
        htmlBody: editing.htmlBody,
        isActive: editing.isActive,
      });
      setTemplates((prev) => prev.map((t) => (t.type === updated.type ? updated : t)));
      setEditing({ ...updated });
      toast({ title: "Template saved", description: `${updated.name} updated successfully.` });
    } catch (err: any) {
      toast({ title: "Save failed", description: err.message, variant: "destructive" });
    } finally {
      setIsSaving(false);
    }
  };

  // Reset to default
  const handleReset = async () => {
    if (!editing) return;
    if (!window.confirm(`Reset "${editing.name}" to the built-in default? This cannot be undone.`)) return;
    setIsResetting(true);
    try {
      const reset = await apiReq("POST", `/${editing.type}/reset`);
      setTemplates((prev) => prev.map((t) => (t.type === reset.type ? reset : t)));
      setEditing({ ...reset });
      toast({ title: "Template reset", description: "Default template restored." });
    } catch (err: any) {
      toast({ title: "Reset failed", description: err.message, variant: "destructive" });
    } finally {
      setIsResetting(false);
    }
  };

  // Send test email
  const handleTestSend = async () => {
    if (!editing || !testEmail) return;
    setIsSendingTest(true);
    try {
      await apiReq("POST", `/${editing.type}/test-send`, { to: testEmail });
      toast({ title: "Test sent!", description: `Preview email delivered to ${testEmail}` });
      setSendTestOpen(false);
      setTestEmail("");
    } catch (err: any) {
      toast({ title: "Send failed", description: err.message, variant: "destructive" });
    } finally {
      setIsSendingTest(false);
    }
  };

  // Broadcast to all users
  const handleBroadcast = async () => {
    if (!bcSubject.trim() || !bcBody.trim()) return;
    if (!window.confirm(`Send broadcast email "${bcSubject}" to ALL registered users?`)) return;
    setIsBroadcasting(true);
    try {
      const res = await apiReq("POST", "/broadcast", { subject: bcSubject, htmlBody: bcBody });
      toast({ title: "Broadcast sent!", description: res.message || `Delivered to ${res.sentCount ?? "all"} users.` });
      setBroadcastOpen(false);
      setBcSubject(""); setBcBody("");
    } catch (err: any) {
      toast({ title: "Broadcast failed", description: err.message, variant: "destructive" });
    } finally {
      setIsBroadcasting(false);
    }
  };

  // Send direct email to any address
  const handleDirectSend = async () => {
    if (!directTo.trim() || !directSubject.trim() || !directBody.trim()) return;
    setIsSendingDirect(true);
    try {
      await apiReq("POST", "/direct", { to: directTo, subject: directSubject, htmlBody: directBody });
      toast({ title: "Email sent!", description: `Delivered to ${directTo}` });
      setDirectOpen(false);
      setDirectTo(""); setDirectSubject(""); setDirectBody("");
    } catch (err: any) {
      toast({ title: "Send failed", description: err.message, variant: "destructive" });
    } finally {
      setIsSendingDirect(false);
    }
  };

  const selectedTpl = templates.find((t) => t.type === selected);

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h2 className="text-xl font-semibold text-[#1a1208] dark:text-[#f0ece4] flex items-center gap-2">
            <Mail className="w-5 h-5 text-[var(--accent-amber)]" />
            Email Template Manager
          </h2>
          <p className="text-sm text-[#8C8275] mt-0.5">
            Edit, preview, and test all 5 custom email templates sent to students.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => { setDirectOpen(true); setBroadcastOpen(false); }}
            className="flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg border border-[var(--border)] hover:border-[var(--accent-amber)] transition-colors"
          >
            <AtSign className="w-3.5 h-3.5" /> Direct Email
          </button>
          <button
            onClick={() => { setBroadcastOpen(true); setDirectOpen(false); }}
            className="flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg bg-[var(--accent-amber)] text-white hover:opacity-90 transition-opacity"
          >
            <Radio className="w-3.5 h-3.5" /> Broadcast
          </button>
        </div>
      </div>

      {/* ── Broadcast Composer ── */}
      {broadcastOpen && (
        <div className="rounded-xl border border-[#ddd6fe] bg-[#f5f3ff] p-5 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Radio className="w-4 h-4 text-[#7c3aed]" />
              <p className="text-sm font-semibold text-[#7c3aed]">Broadcast Email — Sent to ALL Users</p>
            </div>
            <button onClick={() => setBroadcastOpen(false)} className="text-[#8C8275] hover:text-[#1a1208]">
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="grid gap-2">
            <label className="text-xs font-semibold text-[#7c3aed] uppercase tracking-wider">Subject</label>
            <input
              value={bcSubject}
              onChange={(e) => setBcSubject(e.target.value)}
              placeholder="e.g. Important Platform Announcement"
              className="w-full px-3 py-2 rounded-lg border border-[#ddd6fe] bg-white text-sm text-[#1a1208] outline-none focus:border-[#7c3aed] transition-colors"
            />
          </div>
          <div className="grid gap-2">
            <label className="text-xs font-semibold text-[#7c3aed] uppercase tracking-wider">HTML Body</label>
            <textarea
              rows={8}
              value={bcBody}
              onChange={(e) => setBcBody(e.target.value)}
              placeholder="Paste HTML or write your message here…"
              className="w-full px-3 py-2 rounded-lg border border-[#ddd6fe] bg-white text-xs font-mono text-[#1a1208] outline-none focus:border-[#7c3aed] transition-colors resize-y"
            />
          </div>
          <div className="flex items-center gap-2 justify-end">
            <button onClick={() => { setBroadcastOpen(false); setBcSubject(""); setBcBody(""); }} className="text-xs px-3 py-1.5 rounded-lg border border-[var(--border)] text-[#8C8275] hover:text-[#1a1208]">
              Cancel
            </button>
            <button
              onClick={handleBroadcast}
              disabled={isBroadcasting || !bcSubject.trim() || !bcBody.trim()}
              className="flex items-center gap-1.5 text-xs font-semibold px-4 py-1.5 rounded-lg bg-[#7c3aed] text-white hover:opacity-90 disabled:opacity-50 transition-opacity"
            >
              {isBroadcasting ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Radio className="w-3.5 h-3.5" />}
              Send to All Users
            </button>
          </div>
        </div>
      )}

      {/* ── Direct Email Composer ── */}
      {directOpen && (
        <div className="rounded-xl border border-[#bfdbfe] bg-[#eff6ff] p-5 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <AtSign className="w-4 h-4 text-[#1d4ed8]" />
              <p className="text-sm font-semibold text-[#1d4ed8]">Send Direct Email — Any Address</p>
            </div>
            <button onClick={() => setDirectOpen(false)} className="text-[#8C8275] hover:text-[#1a1208]">
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="grid gap-2">
            <label className="text-xs font-semibold text-[#1d4ed8] uppercase tracking-wider">To (email address)</label>
            <input
              type="email"
              value={directTo}
              onChange={(e) => setDirectTo(e.target.value)}
              placeholder="student@example.com"
              className="w-full px-3 py-2 rounded-lg border border-[#bfdbfe] bg-white text-sm text-[#1a1208] outline-none focus:border-[#1d4ed8] transition-colors"
            />
          </div>
          <div className="grid gap-2">
            <label className="text-xs font-semibold text-[#1d4ed8] uppercase tracking-wider">Subject</label>
            <input
              value={directSubject}
              onChange={(e) => setDirectSubject(e.target.value)}
              placeholder="e.g. Your quiz results are ready!"
              className="w-full px-3 py-2 rounded-lg border border-[#bfdbfe] bg-white text-sm text-[#1a1208] outline-none focus:border-[#1d4ed8] transition-colors"
            />
          </div>
          <div className="grid gap-2">
            <label className="text-xs font-semibold text-[#1d4ed8] uppercase tracking-wider">HTML Body</label>
            <textarea
              rows={8}
              value={directBody}
              onChange={(e) => setDirectBody(e.target.value)}
              placeholder="Paste HTML or write your message…"
              className="w-full px-3 py-2 rounded-lg border border-[#bfdbfe] bg-white text-xs font-mono text-[#1a1208] outline-none focus:border-[#1d4ed8] transition-colors resize-y"
            />
          </div>
          <div className="flex items-center gap-2 justify-end">
            <button onClick={() => { setDirectOpen(false); setDirectTo(""); setDirectSubject(""); setDirectBody(""); }} className="text-xs px-3 py-1.5 rounded-lg border border-[var(--border)] text-[#8C8275] hover:text-[#1a1208]">
              Cancel
            </button>
            <button
              onClick={handleDirectSend}
              disabled={isSendingDirect || !directTo.trim() || !directSubject.trim() || !directBody.trim()}
              className="flex items-center gap-1.5 text-xs font-semibold px-4 py-1.5 rounded-lg bg-[#1d4ed8] text-white hover:opacity-90 disabled:opacity-50 transition-opacity"
            >
              {isSendingDirect ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Send className="w-3.5 h-3.5" />}
              Send Email
            </button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-5">
        {/* ── Left: Template List ── */}
        <div className="space-y-2">
          {isLoading ? (
            Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="h-20 rounded-xl bg-[var(--surface-muted)] animate-pulse" />
            ))
          ) : (
            (Object.keys(TEMPLATE_META) as TemplateType[]).map((type) => {
              const meta = TEMPLATE_META[type];
              const tpl = templates.find((t) => t.type === type);
              const Icon = meta.icon;
              const isActive = selected === type;
              return (
                <button
                  key={type}
                  onClick={() => selectTemplate(type)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-150 ${
                    isActive
                      ? "border-[var(--accent-amber)] bg-[#fef9f0] dark:bg-[#2b2218]"
                      : "border-[var(--border)] bg-[var(--surface)] hover:border-[var(--accent-amber)]/40"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                      style={{ background: meta.bg, border: `1px solid ${meta.border}` }}
                    >
                      <Icon className="w-4 h-4" style={{ color: meta.color }} />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-[#1a1208] dark:text-[#f0ece4] truncate">
                          {TYPE_LABELS[type]}
                        </span>
                        {tpl && !tpl.isActive && (
                          <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded-full bg-[#fee2e2] text-[#991b1b]">
                            OFF
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-[#8C8275] mt-0.5 leading-snug line-clamp-2">
                        {meta.desc}
                      </p>
                    </div>
                    {isActive && <ChevronRight className="w-4 h-4 text-[var(--accent-amber)] ml-auto shrink-0 mt-1" />}
                  </div>
                </button>
              );
            })
          )}
        </div>

        {/* ── Right: Editor Panel ── */}
        <div className="min-h-[500px]">
          {!editing ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-12 rounded-xl border border-dashed border-[var(--border)] bg-[var(--surface)]">
              <Mail className="w-10 h-10 text-[var(--accent-amber)] mb-3 opacity-50" />
              <p className="text-[#8C8275] text-sm">Select a template from the left to begin editing.</p>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {/* Toolbar */}
              <div className="flex items-center justify-between flex-wrap gap-2 p-4 rounded-xl border border-[var(--border)] bg-[var(--surface)]">
                <div className="flex items-center gap-2">
                  {(() => {
                    const meta = TEMPLATE_META[editing.type];
                    const Icon = meta.icon;
                    return (
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center"
                        style={{ background: meta.bg, border: `1px solid ${meta.border}` }}
                      >
                        <Icon className="w-4 h-4" style={{ color: meta.color }} />
                      </div>
                    );
                  })()}
                  <span className="font-semibold text-[#1a1208] dark:text-[#f0ece4] text-sm">{editing.name}</span>
                  {/* Active toggle */}
                  <label className="flex items-center gap-1.5 ml-2 cursor-pointer">
                    <div
                      onClick={() => setEditing((prev) => prev ? { ...prev, isActive: !prev.isActive } : prev)}
                      className={`relative w-9 h-5 rounded-full transition-colors ${
                        editing.isActive ? "bg-[#2E6930]" : "bg-[#D9CFC4]"
                      }`}
                    >
                      <span
                        className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white transition-transform ${
                          editing.isActive ? "translate-x-4" : "translate-x-0"
                        }`}
                      />
                    </div>
                    <span className="text-xs text-[#8C8275]">{editing.isActive ? "Active" : "Disabled"}</span>
                  </label>
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  <button
                    onClick={() => setPreviewOpen((v) => !v)}
                    className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg border border-[var(--border)] hover:border-[var(--accent-amber)] transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5" /> Preview
                  </button>
                  <button
                    onClick={() => setSendTestOpen((v) => !v)}
                    className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg border border-[var(--border)] hover:border-[var(--accent-amber)] transition-colors"
                  >
                    <Send className="w-3.5 h-3.5" /> Test Send
                  </button>
                  <button
                    onClick={handleReset}
                    disabled={isResetting}
                    className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg border border-[var(--border)] hover:border-red-300 text-[#8C8275] hover:text-[#991b1b] transition-colors"
                  >
                    {isResetting ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <RotateCcw className="w-3.5 h-3.5" />}
                    Reset Default
                  </button>
                  <button
                    onClick={handleSave}
                    disabled={isSaving}
                    className="flex items-center gap-1.5 text-xs font-semibold px-4 py-1.5 rounded-lg bg-[var(--accent-amber)] text-white hover:opacity-90 transition-opacity"
                  >
                    {isSaving ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Save className="w-3.5 h-3.5" />}
                    Save Template
                  </button>
                </div>
              </div>

              {/* Test send panel */}
              {sendTestOpen && (
                <div className="flex items-center gap-3 p-4 rounded-xl border border-[#bfdbfe] bg-[#eff6ff]">
                  <Send className="w-4 h-4 text-[#1d4ed8] shrink-0" />
                  <input
                    type="email"
                    value={testEmail}
                    onChange={(e) => setTestEmail(e.target.value)}
                    placeholder="recipient@example.com"
                    className="flex-1 bg-transparent text-sm text-[#1a1208] placeholder:text-[#8C8275] outline-none border-b border-[#93c5fd] pb-0.5"
                  />
                  <button
                    onClick={handleTestSend}
                    disabled={isSendingTest || !testEmail}
                    className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-[#1d4ed8] text-white hover:opacity-90 disabled:opacity-50 transition-opacity"
                  >
                    {isSendingTest ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : "Send Test"}
                  </button>
                  <button onClick={() => setSendTestOpen(false)} className="text-[#8C8275] hover:text-[#1a1208]">
                    <X className="w-4 h-4" />
                  </button>
                </div>
              )}

              {/* Variables reference */}
              {editing.variables && editing.variables.length > 0 && (
                <div className="flex items-start gap-3 p-3 rounded-lg bg-[#fef9f0] border border-[#f0d49a]">
                  <AlertTriangle className="w-4 h-4 text-[#734700] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs font-semibold text-[#734700] mb-1">Available Variables (copy to template)</p>
                    <div className="flex flex-wrap gap-1.5">
                      {editing.variables.map((v) => (
                        <code
                          key={v}
                          onClick={() => navigator.clipboard.writeText(v)}
                          title="Click to copy"
                          className="text-[11px] px-2 py-0.5 bg-[#fde68a] text-[#734700] rounded cursor-pointer hover:bg-[#fcd34d] transition-colors font-mono"
                        >
                          {v}
                        </code>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Subject line */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-[0.08em] text-[#4a3f2f] dark:text-[#c8bfb0]">
                  Email Subject Line
                </label>
                <input
                  value={editing.subject}
                  onChange={(e) => setEditing((prev) => prev ? { ...prev, subject: e.target.value } : prev)}
                  className="w-full px-4 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--surface)] text-[#1a1208] dark:text-[#f0ece4] text-sm outline-none focus:border-[var(--accent-amber)] transition-colors"
                  placeholder="Email subject..."
                />
              </div>

              {/* HTML Body editor */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-[0.08em] text-[#4a3f2f] dark:text-[#c8bfb0] flex items-center gap-1.5">
                  <Edit3 className="w-3.5 h-3.5" /> HTML Body
                </label>
                <textarea
                  value={editing.htmlBody}
                  onChange={(e) => setEditing((prev) => prev ? { ...prev, htmlBody: e.target.value } : prev)}
                  rows={20}
                  className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-[var(--surface)] text-[#1a1208] dark:text-[#f0ece4] text-xs font-mono outline-none focus:border-[var(--accent-amber)] transition-colors resize-y leading-relaxed"
                  placeholder="Paste or write your HTML email template here..."
                  spellCheck={false}
                />
              </div>

              {/* HTML Preview */}
              {previewOpen && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-semibold text-[#4a3f2f] dark:text-[#c8bfb0] uppercase tracking-[0.08em] flex items-center gap-1.5">
                      <Eye className="w-3.5 h-3.5" /> Live Preview
                    </p>
                    <button onClick={() => setPreviewOpen(false)} className="text-[#8C8275] hover:text-[#1a1208]">
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="rounded-xl border border-[var(--border)] overflow-hidden shadow-inner">
                    {/* Mock email client header */}
                    <div className="bg-[#f3f4f6] border-b border-[var(--border)] px-4 py-2.5 flex items-center gap-3">
                      <div className="flex gap-1.5">
                        <span className="w-3 h-3 rounded-full bg-[#ef4444]" />
                        <span className="w-3 h-3 rounded-full bg-[#f59e0b]" />
                        <span className="w-3 h-3 rounded-full bg-[#22c55e]" />
                      </div>
                      <div className="flex-1 text-center">
                        <span className="text-xs text-[#8C8275] font-mono truncate">
                          Subject: {editing.subject}
                        </span>
                      </div>
                    </div>
                    <iframe
                      srcDoc={editing.htmlBody}
                      title="Email Preview"
                      className="w-full bg-white"
                      style={{ height: "600px", border: "none" }}
                      sandbox="allow-same-origin"
                    />
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default EmailTemplatesManager;
