import type { LucideIcon } from "lucide-react";

interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  description?: string;
  action?: React.ReactNode;
}

export function EmptyState({ icon: Icon, title, description, action }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-14 px-6 text-center">
      <div className="w-14 h-14 rounded-2xl bg-[#F0F4F7] flex items-center justify-center mb-4">
        <Icon className="w-7 h-7 text-[#797979]" strokeWidth={1.5} />
      </div>
      <p className="text-base font-semibold text-[#3C4852]">{title}</p>
      {description && (
        <p className="text-sm text-[#797979] mt-1.5 max-w-xs leading-relaxed">{description}</p>
      )}
      {action && <div className="mt-5">{action}</div>}
    </div>
  );
}
