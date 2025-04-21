import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Link href={"/social-proof-section"} target="_blank">
        Social proof Section
      </Link>
      <Link href={"/single-price-grid-component"} target="_blank">
        Single Price Grid Component
      </Link>
    </main>
  );
}
