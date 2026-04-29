import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Star } from "./Star";
import { Instagram, Facebook, Mail, Phone, MapPin, Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "Accueil" },
  { to: "/notre-maison", label: "Notre Maison" },
  { to: "/nos-univers", label: "Nos Univers" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
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
        <Link to="/" className="flex items-center gap-4 group">
          <Star className="w-9 h-9 text-brass transition-transform duration-1000 group-hover:rotate-[180deg] shrink-0" />
          <div className="leading-none">
            <div className="font-display text-2xl tracking-wide">Maison Patine</div>
            <div className={`eyebrow text-[0.55rem] mt-1.5 ${scrolled ? "" : "text-ivory/70"}`}>Mirepoix · Est. 2014</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-12">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className={`font-sans text-sm tracking-wide transition-colors ${scrolled ? "text-noir/65 hover:text-noir" : "text-ivory/75 hover:text-ivory"}`}
              activeProps={{ className: `font-sans text-sm tracking-wide ${scrolled ? "text-noir" : "text-ivory"}` }}
              activeOptions={{ exact: true }}
            >
              <span className="editorial-link">{n.label}</span>
            </Link>
          ))}
        </nav>

        <Link to="/contact" className="hidden md:inline-flex btn-editorial" style={!scrolled ? { color: "var(--color-ivory)" } : undefined}>
          Visiter →
        </Link>

        <button aria-label="Menu" className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-ivory border-t border-border animate-fade-in">
          <nav className="flex flex-col px-6 py-10 gap-6">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="font-display text-4xl text-noir">
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="mt-32 bg-noir text-ivory relative overflow-hidden">
      {/* Marquee décoratif */}
      <div className="border-b border-ivory/15 py-8 overflow-hidden">
        <div className="marquee font-display text-5xl text-ivory/85">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="flex items-center gap-12">
              Brocante <Star className="w-5 h-5 text-brass shrink-0" />
              Décoration <Star className="w-5 h-5 text-brass shrink-0" />
              Artisanat <Star className="w-5 h-5 text-brass shrink-0" />
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-24 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-4 mb-8">
            <Star className="w-9 h-9 text-brass" />
            <div className="font-display text-2xl">Maison Patine</div>
          </div>
          <p className="font-serif text-2xl italic font-light leading-relaxed max-w-md text-ivory/85">
            « Chineurs d'histoires et d'objets intemporels au cœur de la cité médiévale de Mirepoix. »
          </p>
          <div className="flex gap-3 mt-10">
            <a href="https://instagram.com/maisonpatine_" aria-label="Instagram" className="w-11 h-11 border border-ivory/30 flex items-center justify-center hover:bg-brass hover:border-brass hover:text-noir transition-all duration-500"><Instagram size={16} /></a>
            <a href="https://facebook.com" aria-label="Facebook" className="w-11 h-11 border border-ivory/30 flex items-center justify-center hover:bg-brass hover:border-brass hover:text-noir transition-all duration-500"><Facebook size={16} /></a>
          </div>
        </div>

        <div className="md:col-span-3">
          <div className="eyebrow text-ivory/60 mb-6">La Boutique</div>
          <ul className="space-y-3 text-ivory/85 font-serif text-lg">
            <li className="flex items-start gap-3"><MapPin size={16} className="mt-1.5 shrink-0 text-brass" /><span>20 rue Vigarozy<br />09500 Mirepoix</span></li>
          </ul>
          <div className="eyebrow text-ivory/60 mb-3 mt-8">Horaires</div>
          <p className="text-sm text-ivory/70 leading-relaxed">Mardi — Samedi<br />10h — 12h30 · 14h30 — 19h</p>
        </div>

        <div className="md:col-span-4">
          <div className="eyebrow text-ivory/60 mb-6">Contact</div>
          <ul className="space-y-3 text-ivory/85 font-serif text-lg">
            <li className="flex items-center gap-3"><Mail size={16} className="text-brass" />contact@maisonpatine.fr</li>
            <li className="flex items-center gap-3"><Phone size={16} className="text-brass" />05 61 00 00 00</li>
          </ul>
          <Link to="/contact" className="btn-editorial mt-10 text-ivory" style={{ color: "var(--color-ivory)" }}>
            Prendre contact →
          </Link>
        </div>
      </div>

      <div className="border-t border-ivory/15">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-6 text-xs font-mono text-ivory/50 flex flex-col md:flex-row justify-between gap-2">
          <div>© {new Date().getFullYear()} MAISON PATINE — TOUS DROITS RÉSERVÉS</div>
          <div>MIREPOIX · ARIÈGE · FRANCE</div>
        </div>
      </div>
    </footer>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-20">{children}</main>
      <Footer />
    </div>
  );
}
