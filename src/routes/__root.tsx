import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="display text-8xl text-foreground">404</h1>
        <p className="mt-4 font-serif italic text-xl text-muted-foreground">
          Cette pièce n'est plus en boutique
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 border border-foreground text-xs tracking-[0.2em] uppercase hover:bg-foreground hover:text-ivory transition-colors"
          >
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Maison Patine — Brocante, Décoration & Artisanat à Mirepoix" },
      { name: "description", content: "Maison Patine, chineur d'histoires et d'objets intemporels à Mirepoix. Brocante, décoration et artisanat sélectionnés avec soin." },
      { name: "author", content: "Maison Patine" },
      { property: "og:title", content: "Maison Patine — Brocante à Mirepoix" },
      { property: "og:description", content: "Pièces uniques chinées avec soin au cœur de la cité médiévale de Mirepoix." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
