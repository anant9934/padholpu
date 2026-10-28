interface PageHeaderProps {
  title: string;
  subtitle?: string;
  label?: string;
  action?: React.ReactNode;
}

export function PageHeader({ title, subtitle, label, action }: PageHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 pb-2">
      <div className="space-y-0.5">
        {label && (
          <p className="ua-section-label">{label}</p>
        )}
        <h1 className="text-[1.5rem] md:text-[1.875rem] font-bold text-[#3C4852] leading-tight tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-sm text-[#797979] mt-1 leading-relaxed">{subtitle}</p>
        )}
      </div>
      {action && (
        <div className="flex items-center gap-2 shrink-0 mt-3 sm:mt-0 w-full sm:w-auto">
          {action}
        </div>
      )}
    </div>
  );
}
