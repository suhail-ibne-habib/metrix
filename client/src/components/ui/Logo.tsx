import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex shrink-0 items-center" aria-label="Matrix Point home">
      <Image
        src="/logo.png"
        alt="Matrix Point"
        width={220}
        height={126}
        className="h-12 w-auto md:h-14"
        priority
      />
    </Link>
  );
}
