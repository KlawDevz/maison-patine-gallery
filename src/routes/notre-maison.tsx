import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Ornament, Star, Flourish } from "@/components/Star";
import { ArrowUpRight } from "lucide-react";
import portrait from "@/assets/portrait.jpg";
import mirepoix from "@/assets/mirepoix.jpg";
import texture from "@/assets/texture-1.jpg";
import gilt from "@/assets/gilt.jpg";

export const Route = createFileRoute("/notre-maison")({
  head: () => ({
    meta: [
      { title: "Notre Maison — L'histoire de Maison Patine à Mirepoix" },
      { name: "description", content: "L'histoire et la passion de Maison Patine, brocante et décoration au cœur de la cité médiévale de Mirepoix." },
      { property: "og:title", content: "Notre Maison — Maison Patine" },
      { property: "og:image", content: portrait },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <Layout>
      {/* HERO ÉDITORIAL */}
      <section className="max-w-[1600px] mx-auto px-6 lg:px-12 pt-24 pb-12">
        <div className="grid md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-2">
            <div className="font-mono text-xs text-brass tracking-[0.3em]">— 002</div>
            <div className="eyebrow mt-2">Notre Maison</div>
          </div>
          <div className="md:col-span-9">
            <h1 className="display text-7xl md:text-[10rem] leading-[0.9] animate-fade-up">
              Une <span className="serif-italic text-sage">passion</span><br />transmise.
            </h1>
          </div>
        </div>
      </section>

      {/* PORTRAIT */}
      <section className="max-w-[1600px] mx-auto px-6 lg:px-12 py-24">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5">
            <div className="img-zoom aspect-[4/5] bg-muted shadow-deep frame">
              <img src={portrait} alt="Fondatrice Maison Patine" loading="lazy" className="w-full h-full object-cover" />
            </div>
            <div className="mt-4 flex justify-between font-mono text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground">
              <span>FIG. II</span>
              <span>L'œil du chineur</span>
            </div>
          </div>
          <div className="md:col-span-6 md:col-start-7 md:pt-12">
            <div className="eyebrow mb-4">Le geste du chineur</div>
            <h2 className="display text-5xl md:text-6xl">
              Sélectionner avec<br /><span className="serif-italic">l'œil et le cœur</span>
            </h2>
            <div className="space-y-6 mt-10 text-lg font-light leading-relaxed text-foreground/85 font-serif">
              <p>
                Depuis plus d'une décennie, nous parcourons les ventes,
                poussons les portes des vieilles demeures et écoutons
                les histoires que nos clients nous confient.
              </p>
              <p>
                Chaque meuble, chaque objet est choisi pour ce qu'il dégage :
                une présence, une matière, une justesse. Nous croyons que
                le beau ancien n'est pas un genre — c'est une attention.
              </p>
            </div>
            <Flourish className="w-32 h-6 text-brass mt-10" />
            <Link to="/contact" className="btn-editorial mt-8">
              Nous écrire →
            </Link>
          </div>
        </div>
      </section>

      <Ornament />

      {/* MIREPOIX */}
      <section className="relative h-[80vh] min-h-[600px] overflow-hidden">
        <img src={mirepoix} alt="Mirepoix" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-noir/65" />
        <div className="relative h-full max-w-[1600px] mx-auto px-6 lg:px-12 flex flex-col justify-center text-ivory">
          <div className="font-mono text-xs text-ivory/60 tracking-[0.3em] mb-4">— L'ancrage</div>
          <h2 className="display text-7xl md:text-9xl text-ivory leading-[0.9]">
            Mirepoix,<br /><span className="serif-italic text-brass">notre écrin.</span>
          </h2>
          <p className="font-serif italic text-2xl text-ivory/85 mt-8 max-w-2xl">
            Notre boutique se niche au 20 rue Vigarozy, à deux pas des
            couverts historiques. Un lieu vivant, où chaque visite est une déambulation.
          </p>
        </div>
      </section>

      {/* VALEURS */}
      <section className="max-w-[1600px] mx-auto px-6 lg:px-12 py-32">
        <div className="grid md:grid-cols-12 gap-8 mb-20">
          <div className="md:col-span-2">
            <div className="font-mono text-xs text-brass tracking-[0.3em]">— Valeurs</div>
          </div>
          <h2 className="md:col-span-9 display text-5xl md:text-7xl">
            Trois principes,<br /><span className="serif-italic">un seul cap.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {[
            { n: "I", title: "Curation", desc: "Une sélection pointue, jamais de remplissage. Chaque pièce mérite sa place dans la boutique — et la vôtre." },
            { n: "II", title: "Authenticité", desc: "Du vrai ancien, des matières nobles. La patine ne se fabrique pas : elle se révèle, lentement, à qui sait regarder." },
            { n: "III", title: "Transmission", desc: "Donner une seconde vie aux objets, c'est préserver une mémoire. Chaque pièce vendue est une histoire qui continue." },
          ].map((v, i) => (
            <div key={v.title} className={`relative ${i === 1 ? "md:translate-y-12" : ""}`}>
              <div className="numero mb-4">{v.n}</div>
              <h3 className="font-display text-4xl mb-4">{v.title}</h3>
              <div className="h-px w-12 bg-brass mb-5" />
              <p className="text-foreground/75 leading-relaxed font-light">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DETAIL TEXTURE */}
      <section className="relative h-[55vh] overflow-hidden">
        <img src={gilt} alt="Détail patine dorée" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-noir/35" />
        <div className="relative h-full max-w-[1600px] mx-auto px-6 lg:px-12 flex items-center justify-end">
          <p className="font-serif italic text-3xl md:text-5xl text-ivory max-w-xl text-right leading-tight">
            « La patine est<br />la <span className="text-brass">signature</span> du temps. »
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-[1600px] mx-auto px-6 lg:px-12 py-32 text-center">
        <Star className="w-10 h-10 text-brass mx-auto mb-10 animate-spin-slow" />
        <h2 className="display text-5xl md:text-7xl">
          Une histoire<br /><span className="serif-italic text-sage">à nous confier ?</span>
        </h2>
        <p className="text-muted-foreground mt-6 max-w-xl mx-auto font-light">
          Nous achetons mobiliers et objets anciens. Si vous souhaitez transmettre, parlons-en.
        </p>
        <div className="mt-10">
          <Link to="/contact" className="btn-solid">Démarrer la conversation <ArrowUpRight size={14} /></Link>
        </div>
      </section>
    </Layout>
  );
}
