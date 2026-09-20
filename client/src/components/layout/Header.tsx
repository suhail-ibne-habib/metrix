import Link from "next/link";
import { navLinks } from "@/data/home";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  return (
    <header className="relative sticky top-0 z-50 border-b border-white/70 bg-white/85 shadow-[0_8px_30px_-18px_rgba(16,52,40,0.28)] backdrop-blur-md">
      <Container className="flex h-20 items-center justify-between gap-4">
        <Logo />

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) =>
            link.href.startsWith("#") ? (
              <a
                key={link.label}
                href={`/${link.href}`}
                className="text-sm font-medium text-slate-500 transition-colors hover:text-forest"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-500 transition-colors hover:text-forest"
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden md:block">
          <Button size="sm" href="/#inquiry">
            Join Batch
          </Button>
        </div>

        <MobileMenu />
      </Container>
    </header>
  );
}
