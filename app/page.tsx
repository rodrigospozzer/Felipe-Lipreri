import { siteConfig } from "@/data/site.config";
import { content } from "@/data/content";
import { brand } from "@/data/brand";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <div className="font-semibold tracking-tight">
            {siteConfig.name}
          </div>

          <a
            href={`https://wa.me/${siteConfig.contact.whatsapp}`}
            className="rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {content.hero.cta}
          </a>
        </div>
      </header>

      <section className="flex min-h-[80vh] items-center bg-secondary/50">
        <div className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-4xl">
            <p className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-primary">
              {brand.style}
            </p>

            <h1 className="text-5xl font-semibold leading-tight tracking-tight md:text-6xl lg:text-7xl">
              {content.hero.title}
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground">
              {content.hero.subtitle}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                {content.hero.cta}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            {content.about.title}
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            {content.about.text}
          </p>
        </div>
      </section>

      <section className="bg-secondary/50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Nossos serviços
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {content.services.map((service) => (
              <article
                key={service.title}
                className="flex h-full flex-col rounded-2xl bg-card p-6 shadow-sm border border-border"
              >
                <h3 className="text-xl font-semibold">{service.title}</h3>

                <p className="mt-4 leading-7 text-muted-foreground">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
          <p className="text-sm text-muted-foreground">
            {content.footer.description}
          </p>

          <p className="mt-2 text-sm text-muted-foreground">
            {siteConfig.location.city} — {siteConfig.location.state}
          </p>
        </div>
      </footer>
    </main>
  );
}