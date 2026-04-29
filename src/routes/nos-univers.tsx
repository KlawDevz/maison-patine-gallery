import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Ornament, Star } from "@/components/Star";
import { ArrowUpRight } from "lucide-react";
import brocante from "@/assets/brocante.jpg";
import decoration from "@/assets/decoration.jpg";
import artisanat from "@/assets/artisanat.jpg";
import texture from "@/assets/texture-1.jpg";
import hero from "@/assets/hero-cinematic.jpg";
import portrait from "@/assets/portrait.jpg";
import vase from "@/assets/vase.jpg";
import chair from "@/assets/chair.jpg";
import gilt from "@/assets/gilt.jpg";

export const Route = createFileRoute("/nos-univers")({
  head: () => ({
    meta: [
      { title: "Nos Univers — Brocante, Décoration & Artisanat | Maison Patine" },
      { name: "description", content: "Découvrez les trois univers de Maison Patine : brocante d'exception, décoration intérieure et artisanat à Mirepoix." },
      { property: "og:title", content: "Nos Univers — Maison Patine" },
      { property: "og:image", content: hero },
    ],
  }),
  component: Page,
});

const univers = [
  {
    n: "I",
    title: "Brocante",
    sub: "Le geste du chineur",
    img: brocante,
    text: "Mobilier d'époque, objets de curiosité, vaisselle ancienne, miroirs, luminaires. Notre cœur de métier : chiner pour vous l'inattendu — l'objet juste, celui qui devient signature.",
    tags: ["Mobilier XVIIIᵉ", "Argenterie", "Curiosités", "Luminaires"],
  },
  {
    n: "II",
    title: "Décoration",
    sub: "L'art de l'agencement",
    img: decoration,
    text: "Une mise en scène pour intérieurs vivants. Textiles en lin, céramiques contemporaines, botaniques séchées : nous composons des univers où l'ancien dialogue avec aujourd'hui.",
    tags: ["Lin & textiles", "Céramique", "Botanique", "Vases & poteries"],
  },
  {
    n: "III",
    title: "Artisanat",
    sub: "Le savoir des mains",
    img: artisanat,
    text: "Restauration, ébénisterie, tapisserie. Nous travaillons avec des artisans locaux pour redonner vie aux pièces et garantir un savoir-faire authentique.",
    tags: ["Restauration", "Ébénisterie", "Patine", "Tapisserie"],
  },
];

function Page() {
  return (
    <Layout>
      {/* HERO */}
      <section className="max-w-[1600px] mx-auto px-6 lg:px-12 pt-24 pb-12">
        <div className="grid md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-2">
            <div className="font-mono text-xs text-brass tracking-[0.3em]">— 003</div>
            <div className="eyebrow mt-2">Nos Univers</div>
          </div>
          <div className="md:col-span-9">
            <h1 className="display text-7xl md:text-[10rem] leading-[0.9] animate-fade-up">
              Trois manières<br />
              d'aimer<span className="text-brass">.</span> <span className="serif-italic text-sage">le beau.</span>
            </h1>
            <p className="mt-8 text-lg text-foreground/75 max-w-2xl font-light leading-relaxed">
              Bien que nous ne vendions pas en ligne, ces visuels donnent à voir
              l'esprit de la sélection. Pour le reste — venez en boutique.
            </p>
          </div>
        </div>
      </section>

      <Ornament />

      {/* SECTIONS */}
      {univers.map((u, idx) => (
        <section key={u.title} className="max-w-[1600px] mx-auto px-6 lg:px-12 py-24">
          <div className={`grid md:grid-cols-12 gap-12 items-center ${idx % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""}`}>
            <div className="md:col-span-6 relative">
              <div className="absolute -top-12 -left-2 numero z-0">{u.n}</div>
              <div className="relative img-zoom aspect-[4/5] bg-muted frame shadow-deep z-10">
                <img src={u.img} alt={u.title} loading="lazy" className="w-full h-full object-cover" />
              </div>
              <div className="mt-4 flex justify-between font-mono text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground">
                <span>FIG. {u.n}</span>
                <span>{u.sub}</span>
              </div>
            </div>
            <div className="md:col-span-5 md:col-start-8">
              <div className="eyebrow mb-3">Univers {u.n}</div>
              <h2 className="display text-6xl md:text-7xl">{u.title}</h2>
              <div className="serif-italic text-2xl text-sage mt-2">{u.sub}</div>
              <p className="text-foreground/80 leading-relaxed text-lg font-serif font-light mt-8">{u.text}</p>
              <ul className="flex flex-wrap gap-2 mt-10">
                {u.tags.map((t) => (
                  <li key={t} className="px-4 py-2 border border-border text-[0.65rem] tracking-[0.2em] uppercase font-mono text-muted-foreground hover:text-noir hover:border-noir transition-colors">{t}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}

      <Ornament />

      {/* GALERIE */}
      <section className="max-w-[1600px] mx-auto px-6 lg:px-12 py-20">
        <div className="grid md:grid-cols-12 gap-8 mb-16">
          <div className="md:col-span-2">
            <div className="font-mono text-xs text-brass tracking-[0.3em]">— Galerie</div>
          </div>
          <h2 className="md:col-span-9 display text-5xl md:text-7xl">
            Quelques pièces<br /><span className="serif-italic">choisies.</span>
          </h2>
        </div>
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          <div className="col-span-6 md:col-span-4 img-zoom aspect-[3/4] frame"><img src={vase} alt="" loading="lazy" className="w-full h-full object-cover" /></div>
          <div className="col-span-6 md:col-span-4 img-zoom aspect-[3/4] frame md:translate-y-12"><img src={chair} alt="" loading="lazy" className="w-full h-full object-cover" /></div>
          <div className="col-span-12 md:col-span-4 img-zoom aspect-[3/4] frame"><img src={gilt} alt="" loading="lazy" className="w-full h-full object-cover" /></div>
          <div className="col-span-6 md:col-span-6 img-zoom aspect-[4/3] frame md:-translate-y-8"><img src={portrait} alt="" loading="lazy" className="w-full h-full object-cover" /></div>
          <div className="col-span-6 md:col-span-6 img-zoom aspect-[4/3] frame"><img src={texture} alt="" loading="lazy" className="w-full h-full object-cover" /></div>
        </div>
      </section>

      {/* CTA SOMBRE */}
      <section className="bg-noir text-ivory mt-24 relative overflow-hidden">
        <div className="absolute -top-24 -right-12 font-display text-[20vw] text-ivory/5 leading-none pointer-events-none select-none">Patine</div>
        <div className="relative max-w-[1600px] mx-auto px-6 lg:px-12 py-32">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7">
              <Star className="w-10 h-10 text-brass mb-8 animate-spin-slow" />
              <h2 className="display text-5xl md:text-7xl text-ivory">
                Vous avez un meuble<br /><span className="serif-italic text-brass">à nous proposer ?</span>
              </h2>
            </div>
            <div className="md:col-span-4 md:col-start-9">
              <p className="text-ivory/75 font-light leading-relaxed">
                Nous nous déplaçons en Ariège et alentours pour estimer
                et acheter mobiliers et objets anciens.
              </p>
              <Link to="/contact" className="btn-ghost mt-8">
                Démarrer la conversation <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
