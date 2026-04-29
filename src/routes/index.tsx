import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Star, Ornament, Flourish } from "@/components/Star";
import { Instagram, ArrowUpRight, MapPin } from "lucide-react";
import hero from "@/assets/hero-cinematic.jpg";
import brocante from "@/assets/brocante.jpg";
import decoration from "@/assets/decoration.jpg";
import artisanat from "@/assets/artisanat.jpg";
import vase from "@/assets/vase.jpg";
import chair from "@/assets/chair.jpg";
import gilt from "@/assets/gilt.jpg";
import texture from "@/assets/texture-1.jpg";
import mirepoix from "@/assets/mirepoix.jpg";
import portrait from "@/assets/portrait.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Maison Patine — Brocante, Décoration & Artisanat à Mirepoix" },
      { name: "description", content: "Chineur d'histoires et d'objets intemporels au 20 rue Vigarozy, Mirepoix. Une sélection pointue de mobilier ancien, décoration et artisanat." },
      { property: "og:title", content: "Maison Patine — Brocante à Mirepoix" },
      { property: "og:image", content: hero },
    ],
  }),
  component: Index,
});

const universes = [
  { num: "I", title: "Brocante", subtitle: "Le geste du chineur", desc: "Mobilier d'époque, miroirs, luminaires, curiosités. Chaque pièce porte la trace d'une vie antérieure.", img: brocante },
  { num: "II", title: "Décoration", subtitle: "L'art de l'agencement", desc: "Compositions de lin, céramiques contemporaines, botaniques séchées. L'ancien dialogue avec aujourd'hui.", img: decoration },
  { num: "III", title: "Artisanat", subtitle: "Le savoir des mains", desc: "Restauration, ébénisterie, tapisserie. Un savoir-faire local au service de la matière.", img: artisanat },
];

function Index() {
  return (
    <Layout>
      {/* ════════════════ HERO ════════════════ */}
      <section className="relative h-screen min-h-[760px] -mt-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <img src={hero} alt="Intérieur Maison Patine" className="absolute inset-0 w-full h-full object-cover animate-ken-burns" width={1920} height={1280} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-noir/60 via-noir/20 to-noir/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-noir/50 via-transparent to-transparent" />

        {/* Overlay éditorial */}
        <div className="relative h-full max-w-[1600px] mx-auto px-6 lg:px-12 grid grid-cols-12 gap-6">
          {/* Coin haut gauche : marqueurs */}
          <div className="col-span-12 pt-32 flex justify-between items-start text-ivory/70 font-mono text-[0.65rem] tracking-[0.3em] uppercase animate-fade-in">
            <div className="flex items-center gap-3">
              <span className="w-8 h-px bg-ivory/50" />
              <span>N° 001 — La Maison</span>
            </div>
            <div className="hidden md:flex items-center gap-3">
              <span>Mirepoix · 43.0894°N</span>
              <span className="w-8 h-px bg-ivory/50" />
            </div>
          </div>

          {/* Bloc principal */}
          <div className="col-span-12 md:col-span-10 self-end pb-16 md:pb-24">
            <div className="overflow-hidden">
              <h1 className="display text-ivory text-[15vw] md:text-[11rem] leading-[0.85] animate-fade-up">
                Chineur
              </h1>
            </div>
            <div className="overflow-hidden">
              <div className="flex items-baseline gap-6 -mt-3 animate-fade-up delay-100">
                <span className="display text-brass text-[15vw] md:text-[11rem] leading-[0.85] italic font-light">d'histoires</span>
                <Star className="hidden md:block w-12 h-12 text-brass animate-spin-slow shrink-0" />
              </div>
            </div>

            <div className="grid md:grid-cols-12 gap-8 mt-12 animate-fade-up delay-300">
              <div className="md:col-span-4 flex md:justify-end">
                <div className="text-ivory/70 font-mono text-[0.65rem] tracking-[0.3em] uppercase md:text-right border-l md:border-l-0 md:border-r border-ivory/30 pl-4 md:pl-0 md:pr-4 max-w-xs">
                  Brocante<br />Décoration<br />Artisanat
                </div>
              </div>
              <p className="md:col-span-6 text-ivory/85 text-lg md:text-xl font-light leading-relaxed font-serif">
                Une sélection pointue de pièces choisies pour leur âme,
                leur matière, et leur capacité à sublimer chaque intérieur.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-x-10 gap-y-4 mt-12 animate-fade-up delay-400">
              <Link to="/nos-univers" className="btn-ghost group">
                Découvrir nos univers
                <ArrowUpRight size={14} className="transition-transform group-hover:rotate-45" />
              </Link>
              <Link to="/contact" className="btn-editorial text-ivory" style={{ color: "var(--color-ivory)" }}>
                Nous proposer un meuble
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in delay-500">
          <span className="font-mono text-[0.6rem] tracking-[0.3em] uppercase text-ivory/60">Scroll</span>
          <span className="w-px h-12 bg-ivory/40 origin-top animate-reveal-line" />
        </div>
      </section>

      {/* ════════════════ MANIFESTE ════════════════ */}
      <section className="relative max-w-[1600px] mx-auto px-6 lg:px-12 pt-32 pb-20">
        <div className="grid md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-2">
            <div className="font-mono text-xs text-brass tracking-[0.3em]">— 002</div>
            <div className="eyebrow mt-2">Manifeste</div>
          </div>
          <div className="md:col-span-9">
            <p className="font-display text-4xl md:text-6xl leading-[1.1] text-noir">
              Chaque pièce porte une <span className="serif-italic text-sage">histoire</span>,
              une patine du temps,<br className="hidden md:block" />
              une âme qui ne demande qu'à <span className="serif-italic text-sage">habiter</span> de nouveaux lieux.
            </p>
            <div className="flex items-center gap-4 mt-10">
              <Flourish className="w-32 h-6 text-brass" />
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">Maison Patine</span>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════ UNIVERS ════════════════ */}
      <section className="relative max-w-[1600px] mx-auto px-6 lg:px-12 pt-20">
        <div className="grid md:grid-cols-12 gap-8 mb-16">
          <div className="md:col-span-4">
            <div className="font-mono text-xs text-brass tracking-[0.3em] mb-2">— 003</div>
            <div className="eyebrow">Trois univers</div>
            <h2 className="display text-6xl md:text-7xl mt-4">
              Une<br />
              <span className="serif-italic">vision</span>
            </h2>
          </div>
          <div className="md:col-span-7 md:col-start-6 self-end">
            <p className="text-lg text-foreground/75 leading-relaxed font-light max-w-xl">
              Brocante, décoration, artisanat. Trois piliers, une même exigence :
              que chaque objet ait sa raison d'être, sa juste place.
            </p>
            <Link to="/nos-univers" className="btn-editorial mt-6">
              Explorer la sélection →
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-10">
          {universes.map((u, i) => (
            <Link key={u.title} to="/nos-univers" className={`group block ${i === 1 ? "md:translate-y-16" : ""}`}>
              <div className="relative">
                <div className="absolute -top-6 -left-2 numero z-0">{u.num}</div>
                <div className="relative img-zoom aspect-[3/4] bg-muted z-10 frame">
                  <img src={u.img} alt={u.title} loading="lazy" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="mt-8 flex items-baseline gap-4">
                <span className="font-mono text-xs text-brass">{String(i + 1).padStart(2, "0")}</span>
                <span className="h-px flex-1 bg-border" />
              </div>
              <h3 className="font-display text-4xl mt-3 group-hover:text-sage transition-colors duration-500">{u.title}</h3>
              <div className="eyebrow mt-1">{u.subtitle}</div>
              <p className="text-sm text-muted-foreground leading-relaxed mt-4 font-light">{u.desc}</p>
              <div className="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-noir/70 group-hover:text-sage transition-colors">
                Voir <ArrowUpRight size={12} className="transition-transform group-hover:rotate-45" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ════════════════ PIÈCE D'EXCEPTION : VASE + GILT ════════════════ */}
      <section className="relative mt-48 py-32 bg-secondary/40 overflow-hidden">
        <div className="absolute top-12 left-1/2 -translate-x-1/2 font-display text-[20vw] text-brass/8 leading-none pointer-events-none select-none">Patine</div>

        <div className="relative max-w-[1600px] mx-auto px-6 lg:px-12 grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-5">
            <div className="img-zoom aspect-[4/5] bg-noir frame shadow-deep">
              <img src={vase} alt="Vase céladon ancien" loading="lazy" className="w-full h-full object-cover" />
            </div>
            <div className="mt-4 flex justify-between font-mono text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground">
              <span>FIG. I</span>
              <span>Vase céladon · XIXᵉ</span>
            </div>
          </div>

          <div className="md:col-span-6 md:col-start-7">
            <div className="eyebrow mb-4">Pièce d'exception</div>
            <h2 className="display text-6xl md:text-7xl">
              L'art de la<br /><span className="serif-italic text-sage">patine</span>
            </h2>
            <p className="mt-8 text-foreground/80 text-lg leading-relaxed font-light">
              La patine ne se fabrique pas, elle se révèle. C'est cette
              alchimie lente qui distingue un meuble qui a vécu d'un meuble
              qui a duré. Notre métier consiste à reconnaître ce moment de grâce
              et à le préserver.
            </p>
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border">
              {[
                { k: "10+", v: "Années" },
                { k: "200", v: "Pièces / mois" },
                { k: "1", v: "Boutique" },
              ].map((s) => (
                <div key={s.v}>
                  <div className="font-display text-5xl text-noir">{s.k}</div>
                  <div className="eyebrow mt-2">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════ PORTRAIT MIREPOIX ════════════════ */}
      <section className="relative h-[90vh] min-h-[700px] overflow-hidden">
        <img src={mirepoix} alt="Mirepoix" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-noir/85 via-noir/35 to-noir/55" />

        <div className="relative h-full max-w-[1600px] mx-auto px-6 lg:px-12 flex flex-col justify-end pb-24">
          <div className="grid md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-7">
              <div className="font-mono text-xs text-ivory/60 tracking-[0.3em] mb-4">— 004 / Notre ancrage</div>
              <h2 className="display text-ivory text-7xl md:text-9xl leading-[0.9]">
                Mirepoix<span className="text-brass">.</span>
              </h2>
              <p className="font-serif italic text-2xl text-ivory/85 mt-6 max-w-xl">
                Cité médiévale du XIIIᵉ siècle, ses couverts, ses maisons à
                colombages. Un écrin naturel pour le beau ancien.
              </p>
            </div>
            <div className="md:col-span-4 md:col-start-9">
              <div className="border-l border-ivory/30 pl-6 space-y-5">
                <div>
                  <div className="eyebrow text-ivory/60">Adresse</div>
                  <div className="font-serif text-xl text-ivory mt-1">20 rue Vigarozy<br />09500 Mirepoix</div>
                </div>
                <Link to="/notre-maison" className="btn-ghost">
                  Notre histoire <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════ MOSAÏQUE ÉDITORIALE ════════════════ */}
      <section className="max-w-[1600px] mx-auto px-6 lg:px-12 py-32">
        <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
          <div>
            <div className="font-mono text-xs text-brass tracking-[0.3em] mb-2">— 005</div>
            <div className="eyebrow">Carnet visuel</div>
            <h2 className="display text-6xl md:text-7xl mt-4">
              Le détail, <span className="serif-italic">toujours.</span>
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground font-light">
            Une nervure de bois, l'oxydation d'un laiton, le fil d'un velours.
            La beauté se cache dans ce qui résiste au regard pressé.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-4 md:gap-6">
          <div className="col-span-12 md:col-span-7 img-zoom aspect-[4/3] frame">
            <img src={gilt} alt="Détail dorure" loading="lazy" className="w-full h-full object-cover" />
          </div>
          <div className="col-span-12 md:col-span-5 grid grid-rows-2 gap-4 md:gap-6">
            <div className="img-zoom frame"><img src={chair} alt="Chaise cannage" loading="lazy" className="w-full h-full object-cover" /></div>
            <div className="img-zoom frame"><img src={texture} alt="Patine bois" loading="lazy" className="w-full h-full object-cover" /></div>
          </div>
          <div className="col-span-6 md:col-span-4 img-zoom aspect-square frame md:translate-y-8">
            <img src={portrait} alt="Atelier" loading="lazy" className="w-full h-full object-cover" />
          </div>
          <div className="col-span-6 md:col-span-4 img-zoom aspect-square frame md:translate-y-8">
            <img src={brocante} alt="Brocante" loading="lazy" className="w-full h-full object-cover" />
          </div>
          <div className="col-span-12 md:col-span-4 flex flex-col justify-center md:translate-y-8 px-2">
            <Star className="w-8 h-8 text-brass mb-6" />
            <p className="font-serif italic text-2xl leading-snug text-noir">
              « Voir avant de comprendre. Sentir avant de nommer. »
            </p>
            <Link to="/nos-univers" className="btn-editorial mt-8">
              Toute la sélection →
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════ INSTAGRAM ════════════════ */}
      <section className="bg-noir text-ivory relative overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-32 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-4">
            <div className="font-mono text-xs text-brass tracking-[0.3em] mb-4">— 006</div>
            <Instagram className="text-brass mb-6" size={40} />
            <h2 className="display text-ivory text-6xl md:text-7xl">
              Dernières<br /><span className="serif-italic">trouvailles</span>
            </h2>
            <p className="text-ivory/70 mt-6 font-light">
              Notre stock tourne vite. Suivez nos arrivages en direct sur Instagram.
            </p>
            <a href="https://instagram.com/maisonpatine_" className="btn-ghost mt-8">
              @maisonpatine_ <ArrowUpRight size={14} />
            </a>
          </div>

          <div className="md:col-span-8 grid grid-cols-3 gap-3 md:gap-4">
            {[brocante, decoration, artisanat, vase, hero, mirepoix].map((src, i) => (
              <a key={i} href="https://instagram.com/maisonpatine_" className={`img-zoom aspect-square block bg-noir/50 group relative ${i === 1 ? "translate-y-8" : i === 4 ? "translate-y-8" : ""}`}>
                <img src={src} alt={`Instagram ${i + 1}`} loading="lazy" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-noir/0 group-hover:bg-noir/60 transition-colors duration-500 flex items-center justify-center">
                  <Instagram className="text-brass opacity-0 group-hover:opacity-100 transition-opacity" size={28} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════ CTA FINAL ════════════════ */}
      <section className="max-w-[1600px] mx-auto px-6 lg:px-12 py-32 text-center">
        <Star className="w-12 h-12 text-brass mx-auto mb-10 animate-spin-slow" />
        <h2 className="display text-6xl md:text-8xl">
          Venez nous<br /><span className="serif-italic text-sage">rencontrer.</span>
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-4 mt-12">
          <Link to="/contact" className="btn-solid">
            Visiter la boutique <MapPin size={14} />
          </Link>
          <Link to="/contact" className="btn-editorial">
            Nous proposer un meuble →
          </Link>
        </div>
        <Ornament />
      </section>
    </Layout>
  );
}
