import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

export function Button({ href, children, variant = "primary", className }: ButtonProps) {
  const styles = cn(
    "focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-none px-6 py-3 text-xs font-bold uppercase tracking-[0.12em] transition",
    variant === "primary" && "bg-wine text-white hover:bg-ink",
    variant === "secondary" && "border border-ink/20 bg-transparent text-ink hover:border-wine hover:text-wine",
    variant === "ghost" && "text-ink hover:text-wine",
    className
  );

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return <button className={styles}>{children}</button>;
}
