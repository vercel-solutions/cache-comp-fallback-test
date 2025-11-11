export function Corners({ children }: { children: React.ReactNode }) {
  const classes = "absolute size-10 -m-px border-neutral-700";

  return (
    <div className="flex max-md:flex-col justify-center items-stretch w-full relative mx-auto border border-dashed border-neutral-800 flex-1 min-h-0">
      <div className={`${classes} top-0 left-0 border-t border-l`} />
      <div className={`${classes} top-0 right-0 border-t border-r`} />
      <div className={`${classes} bottom-0 left-0 border-b border-l`} />
      <div className={`${classes} bottom-0 right-0 border-b border-r`} />
      {children}
    </div>
  );
}
