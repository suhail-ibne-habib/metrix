import Link from "next/link";
import { cn } from "@/lib/cn";

const variants = {
  primary:
    "bg-forest text-white shadow-[0_12px_24px_-10px_rgba(26,71,53,0.55)] hover:bg-forest-hover",
  outline:
    "border border-slate-200 bg-white text-slate-700 hover:border-forest/30 hover:text-forest",
  light: "bg-white/95 text-forest hover:bg-white",
  dark: "bg-forest text-white shadow-[0_10px_20px_-10px_rgba(26,71,53,0.5)] hover:bg-forest-hover",
  gold: "bg-gold text-white shadow-[0_10px_20px_-10px_rgba(240,162,2,0.55)] hover:bg-gold-hover",
};

const sizes = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-[15px]",
};

type ButtonProps = {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  href?: string;
  className?: string;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  variant = "primary",
  size = "md",
  href,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors",
    variants[variant],
    sizes[size],
    className,
  );

  if (href) {
    if (href.startsWith("#")) {
      return (
        <a href={href} className={classes}>
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
