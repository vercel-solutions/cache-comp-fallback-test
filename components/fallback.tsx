export function Fallback({ children }: { children?: React.ReactNode }) {
  return (
    <div className="relative border border-dashed border-yellow-500/50 p-4 pt-8">
      <div className="absolute top-0 left-0 -m-px px-1.5 py-0.5 text-xs text-yellow-500 border-r border-b border-dashed border-yellow-500/50">
        suspense fallback
      </div>
      {children}
    </div>
  );
}

