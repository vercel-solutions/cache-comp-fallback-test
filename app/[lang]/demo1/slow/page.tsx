import Link from "next/link";
import { Container } from "@/components/container";

export default async function Page({ params }: PageProps<"/[lang]/demo1/slow">) {
  const { lang } = await params;

  const links = Array.from({ length: 300 }, (_, i) => i + 1);

  return (
    <Container className="grid grid-cols-3 gap-4">
      {links.map((num) => (
        <Link
          key={num}
          href={`/${lang}/demo1/slow/${num}`}
          className="aspect-square flex items-center justify-center border border-neutral-700 hover:border-blue-500 transition-colors"
        >
          {num}
        </Link>
      ))}
    </Container>
  );
}

