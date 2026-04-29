import { useState } from "react";
import { Star } from "../Star";
import { ArrowUpRight } from "lucide-react";

function Field({ label, name, type = "text", required, placeholder }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div className="w-full">
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

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="border border-border paper p-16 text-center relative">
        <Star className="w-10 h-10 text-brass mx-auto mb-6 animate-spin-slow" />
        <div className="font-display text-4xl text-sage mb-2">Merci.</div>
        <p className="text-muted-foreground">Votre message est bien parti.</p>
      </div>
    );
  }

  return (
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
  );
}
