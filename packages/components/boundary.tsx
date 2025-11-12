import { cn } from "@lib/utils";

export function VisualSuspenseBoundary({
  children,
  label,
}: {
  children: React.ReactNode;
  label?: string;
}) {
  return (
    <div className="relative border border-dashed border-blue-500/50 p-4 pt-8 bg-blue-500/10">
      <div className="absolute top-0 left-0 -m-px px-1.5 py-0.5 text-xs text-blue-500 border-r border-b border-dashed border-blue-500/50">
        {label || "suspense"}
      </div>
      {children}
    </div>
  );
}

export function VisualComponentBoundary({
  children,
  label,
  className,
}: {
  children: React.ReactNode;
  label?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative border border-dashed border-neutral-500/50 p-4 pt-8",
        className,
      )}
    >
      {label && (
        <div className="absolute top-0 left-0 -m-px px-1.5 py-0.5 text-xs text-neutral-500 border-r border-b border-inherit">
          {label}
        </div>
      )}
      {children}
    </div>
  );
}

