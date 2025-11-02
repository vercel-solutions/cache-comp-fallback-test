export function CornerBox({ children }: { children: React.ReactNode }) {
  <div className="flex max-md:flex-col justify-center items-stretch max-w-4xl relative mx-auto border border-dashed border-neutral-800">
    <div className="absolute top-0 left-0 size-10 -m-px border-t border-l border-neutral-700" />
    <div className="absolute top-0 right-0 size-10 -m-px border-t border-r border-neutral-700" />
    <div className="absolute bottom-0 left-0 size-10 -m-px border-b border-l border-neutral-700" />
    <div className="absolute bottom-0 right-0 size-10 -m-px border-b border-r border-neutral-700" />

    {children}
  </div>;
}
