import Link from "next/link";
import { navItems, site } from "@/lib/site";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-pearl/95 backdrop-blur">
      <div className="container-page flex min-h-20 items-center justify-between gap-4">
        <Link href="/" className="flex flex-col font-serif text-[1.55rem] leading-none tracking-wide text-ink">
          <span>{site.name}</span>
          <span className="mt-2 font-sans text-[0.58rem] font-bold tracking-[0.28em] text-wine">CAPITAL ASSET MANAGEMENT</span>
        </Link>
        <nav className="hidden items-center gap-8 text-xs font-bold uppercase tracking-[0.13em] text-ink/65 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-wine">
              {item.label}
            </Link>
          ))}
        </nav>
        <Button href="/contact" className="hidden md:inline-flex">
          Private Inquiry
        </Button>
        <Button href="/contact" variant="secondary" className="md:hidden">
          Contact
        </Button>
      </div>
    </header>
  );
}
