import Link from "next/link";
import { Star } from "lucide-react";
import { navItems, site } from "@/lib/site";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-pearl/90 backdrop-blur">
      <div className="container-page flex min-h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 font-serif text-xl font-bold text-ink">
          <span className="grid size-9 place-items-center rounded-md bg-wine text-white">
            <Star size={18} aria-hidden="true" />
          </span>
          {site.name}
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-semibold text-ink/75 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-wine">
              {item.label}
            </Link>
          ))}
        </nav>
        <Button href="/contact" className="hidden md:inline-flex">
          B2B Inquiry
        </Button>
        <Button href="/contact" variant="secondary" className="md:hidden">
          Contact
        </Button>
      </div>
    </header>
  );
}
