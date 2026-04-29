import { useState, useEffect } from "react";
import { Star } from "../Star";
import { Menu, X } from "lucide-react";

const nav = [
  { href: "/", label: "Accueil" },
  { href: "/notre-maison", label: "Notre Maison" },
  { href: "/nos-univers", label: "Nos Univers" },
  { href: "/contact", label: "Contact" },
] as const;

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled ? "backdrop-blur-xl bg-ivory/90 border-b border-border/60" : "bg-gradient-to-b from-noir/40 to-transparent"}`}>
      <div className={`max-w-[1600px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between transition-colors duration-700 ${scrolled ? "text-noir" : "text-ivory"}`}>
        <a href="/" className="flex items-center gap-4 group">
          <Star className="w-9 h-9 text-brass transition-transform duration-1000 group-hover:rotate-[180deg] shrink-0" />
          <div className="leading-none">
            <div className="font-display text-2xl tracking-wide">Maison Patine</div>
            <div className={`eyebrow text-[0.55rem] mt-1.5 ${scrolled ? "" : "text-ivory/70"}`}>Mirepoix · Est. 2014</div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-12">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className={`font-sans text-sm tracking-wide transition-colors ${scrolled ? "text-noir/65 hover:text-noir" : "text-ivory/75 hover:text-ivory"}`}
            >
              <span className="editorial-link">{n.label}</span>
            </a>
          ))}
        </nav>

        <a href="/contact" className="hidden md:inline-flex btn-editorial" style={!scrolled ? { color: "var(--color-ivory)" } : undefined}>
          Visiter →
        </a>

        <button aria-label="Menu" className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-ivory border-t border-border animate-fade-in">
          <nav className="flex flex-col px-6 py-10 gap-6">
            {nav.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="font-display text-4xl text-noir">
                {n.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
