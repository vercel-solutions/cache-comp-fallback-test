import { cn } from "@/lib/utils";

export function TextFallback({ className }: { className?: string }) {
  return (
    <div className="flex items-center h-[18px]">
      <div className={cn("h-3 w-32 bg-neutral-700 animate-pulse", className)} />
    </div>
  );
}
