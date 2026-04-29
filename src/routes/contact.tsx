import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Ornament, Star } from "@/components/Star";
import { Mail, Phone, MapPin, Instagram, Facebook, Clock, ArrowUpRight } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Maison Patine, Brocante à Mirepoix" },
      { name: "description", content: "Contactez Maison Patine au 20 rue Vigarozy, 09500 Mirepoix. Achat, vente et estimation de meubles anciens." },
      { property: "og:title", content: "Contact — Maison Patine" },
    ],
  }),
  component: Page,
});

function Page() {
  const [sent, setSent] = useState(false);

  return (
    <Layout>
      {/* HERO */}
      <section className="max-w-[1600px] mx-auto px-6 lg:px-12 pt-24 pb-12">
        <div className="grid md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-2">
            <div className="font-mono text-xs text-brass tracking-[0.3em]">— 004</div>
            <div className="eyebrow mt-2">Contact</div>
          </div>
          <div className="md:col-span-9">
            <h1 className="display text-7xl md:text-[10rem] leading-[0.9] animate-fade-up">
              Venez nous<br /><span className="serif-italic text-sage">rencontrer.</span>
            </h1>
            <p className="mt-8 text-lg text-foreground/75 max-w-2xl font-light leading-relaxed">
              En boutique, par téléphone ou par mail — nous répondons toujours
              avec attention.
            </p>
          </div>
        </div>
      </section>

      <Ornament />

      {/* FORM + INFOS */}
      <section className="max-w-[1600px] mx-auto px-6 lg:px-12 py-12">
        <div className="grid md:grid-cols-12 gap-16">
          {/* Form */}
          <div className="md:col-span-7">
            <div className="font-mono text-xs text-brass tracking-[0.3em] mb-3">— Formulaire</div>
            <h2 className="display text-5xl mb-3">Écrivez-nous<span className="serif-italic text-sage">.</span></h2>
            <p className="text-sm text-muted-foreground mb-12">Nous revenons vers vous sous 48h ouvrées.</p>

            {sent ? (
              <div className="border border-border paper p-16 text-center relative">
                <Star className="w-10 h-10 text-brass mx-auto mb-6 animate-spin-slow" />
                <div className="font-display text-4xl text-sage mb-2">Merci.</div>
                <p className="text-muted-foreground">Votre message est bien parti.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-10">
                <div className="grid md:grid-cols-2 gap-10">
                  <Field label="Nom" name="name" required />
                  <Field label="Email" name="email" type="email" required />
                </div>
                <div className="grid md:grid-cols-2 gap-10">
                  <Field label="Téléphone" name="phone" type="tel" />
                  <Field label="Sujet" name="subject" placeholder="Achat · vente · estimation" />
                </div>
                <div>
                  <label className="eyebrow block mb-3">Votre message</label>
                  <textarea
                    rows={5}
                    required
                    className="w-full bg-transparent border-b border-border focus:border-noir outline-none py-3 font-serif text-lg text-noir resize-none transition-colors"
                  />
                </div>
                <button type="submit" className="btn-solid">
                  Envoyer le message <ArrowUpRight size={14} />
                </button>
              </form>
            )}
          </div>

          {/* Infos */}
          <aside className="md:col-span-4 md:col-start-9 space-y-10">
            <div className="font-mono text-xs text-brass tracking-[0.3em] mb-3">— Coordonnées</div>
            <Info icon={<MapPin size={16} />} title="La boutique">
              20 rue Vigarozy<br />09500 Mirepoix<br /><span className="text-muted-foreground italic">Ariège, France</span>
            </Info>
            <Info icon={<Clock size={16} />} title="Horaires">
              Mardi — Samedi<br />10h — 12h30 · 14h30 — 19h<br />
              <span className="text-muted-foreground italic text-base">Dimanche & lundi sur rendez-vous</span>
            </Info>
            <Info icon={<Phone size={16} />} title="Téléphone">05 61 00 00 00</Info>
            <Info icon={<Mail size={16} />} title="Email">contact@maisonpatine.fr</Info>
            <div>
              <div className="eyebrow mb-4">Suivez-nous</div>
              <div className="flex gap-3">
                <a href="https://instagram.com/maisonpatine_" className="w-12 h-12 border border-border flex items-center justify-center hover:bg-noir hover:text-ivory hover:border-noir transition-all duration-500">
                  <Instagram size={16} />
                </a>
                <a href="https://facebook.com" className="w-12 h-12 border border-border flex items-center justify-center hover:bg-noir hover:text-ivory hover:border-noir transition-all duration-500">
                  <Facebook size={16} />
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* MAP */}
      <section className="max-w-[1600px] mx-auto px-6 lg:px-12 py-24">
        <div className="font-mono text-xs text-brass tracking-[0.3em] mb-3">— Plan</div>
        <h2 className="display text-5xl md:text-6xl mb-12">
          Trouvez-nous<span className="serif-italic text-sage">.</span>
        </h2>
        <div className="aspect-[16/9] md:aspect-[21/9] overflow-hidden frame shadow-deep">
          <iframe
            title="Plan Maison Patine"
            src="https://www.google.com/maps?q=20+rue+Vigarozy+09500+Mirepoix&output=embed"
            className="w-full h-full grayscale-[60%] contrast-[1.05]"
            loading="lazy"
          />
        </div>
      </section>
    </Layout>
  );
}

function Field({ label, name, type = "text", required, placeholder }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={name} className="eyebrow block mb-3">{label}{required && <span className="text-terracotta ml-1">*</span>}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full bg-transparent border-b border-border focus:border-noir outline-none py-3 font-serif text-lg text-noir transition-colors"
      />
    </div>
  );
}

function Info({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-5">
      <div className="text-brass mt-1.5">{icon}</div>
      <div className="flex-1 border-b border-border pb-6">
        <div className="eyebrow mb-2">{title}</div>
        <div className="font-serif text-xl leading-snug text-noir">{children}</div>
      </div>
    </div>
  );
}
