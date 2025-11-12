export function Code({ children }: { children: React.ReactNode }) {
  return (
    <code className="text-yellow-500 text-xs whitespace-nowrap">
      {children}
    </code>
  );
}

