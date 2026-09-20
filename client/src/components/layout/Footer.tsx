import { Apple, Play } from "lucide-react";
import { footer } from "@/data/home";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  return (
    <footer className="bg-forest-deep text-slate-300">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 md:grid-cols-3">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-6 text-slate-400">
            {footer.tagline}
          </p>
          <p className="mt-4 text-sm">{footer.phone}</p>
          <p className="text-sm">{footer.email}</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wider text-white uppercase">
            Company
          </h3>
          <ul className="mt-4 space-y-2.5">
            {footer.company.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href.startsWith("#") ? `/${link.href}` : link.href}
                  className="text-sm text-slate-400 hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wider text-white uppercase">
            Download the app
          </h3>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <a
              href="/#inquiry"
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white hover:bg-white/10"
            >
              <Play className="h-4 w-4 fill-current" />
              Google Play
            </a>
            <a
              href="/#inquiry"
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white hover:bg-white/10"
            >
              <Apple className="h-4 w-4 fill-current" />
              App Store
            </a>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-2 py-5 text-xs text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Matrix Point. All rights reserved.</p>
          <p>Confidence, Creativity & Credibility.</p>
        </Container>
      </div>
    </footer>
  );
}
