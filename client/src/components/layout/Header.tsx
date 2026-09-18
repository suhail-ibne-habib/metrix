import Link from "next/link";
import { navLinks } from "@/data/home";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  return (
    <header className="relative sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur-md">
      <Container className="flex h-20 items-center justify-between gap-4">
        <Logo />

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-500 transition-colors hover:text-brand"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2.5 md:flex">
          <Button variant="outline" size="sm" href="#inquiry">
            Login / Register
          </Button>
          <Button size="sm" href="#inquiry">
            Login / Register
          </Button>
        </div>

        <MobileMenu />
      </Container>
    </header>
  );
}
