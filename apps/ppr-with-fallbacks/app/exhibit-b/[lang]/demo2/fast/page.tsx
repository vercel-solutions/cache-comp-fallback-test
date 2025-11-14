import { Code } from "@components/code";
import { Container } from "@components/container";
import Link from "next/link";

export default async function Page({
  params,
}: PageProps<"/exhibit-b/[lang]/demo2/fast">) {
  const { lang } = await params;

  const links = Array.from({ length: 300 }, (_, i) => i + 1);

  return (
    <Container className="grid grid-cols-3 gap-4">
      {links.map((num) => (
        <Link
          key={num}
          href={`/exhibit-b/${lang}/demo2/fast/${num}`}
          className="aspect-square flex gap-2 items-center justify-center border text-xs border-neutral-700 hover:border-yellow-500 hover:bg-yellow-500/10"
        >
          <p className="text-xs">{num}</p>
          {num === 1 && (
            <p className="text-xs">
              <Code>gSP</Code>
            </p>
          )}
        </Link>
      ))}
    </Container>
  );
}
