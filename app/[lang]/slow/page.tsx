import Link from "next/link";

export default async function Page({
  params,
}: PageProps<"/[lang]/slow">) {
  const { lang } = await params;

  const links = Array.from({ length: 300 }, (_, i) => i + 1);

  return (
    <div className="grid grid-cols-3 gap-4 p-8 w-full">
      {links.map((num) => (
        <Link
          key={num}
          href={`/${lang}/slow/${num}`}
          className="aspect-square flex items-center justify-center border border-neutral-700 hover:border-blue-500 transition-colors"
        >
          {num}
        </Link>
      ))}
    </div>
  );
}

