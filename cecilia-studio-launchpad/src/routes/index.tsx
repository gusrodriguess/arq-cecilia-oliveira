import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-interior.jpg";
import ceciliaImg from "@/assets/arch-cecilia.jpg";
import partner1Img from "@/assets/arch-partner1.jpg";
import partner2Img from "@/assets/arch-partner2.jpg";
import { Button } from "@/components/ui/button";
import {
  Compass,
  Home,
  Palette,
  Ruler,
  Sparkles,
  Leaf,
  MapPin,
  Check,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CMI Arquitetura — Projetos que acolhem" },
      {
        name: "description",
        content:
          "Escritório de arquitetura com 3 sócias atuando em Natal, Londrina e Madri. Mais de 7 anos transformando lares.",
      },
      { property: "og:title", content: "CMI Arquitetura" },
      {
        property: "og:description",
        content: "Projetos de arquitetura e interiores em Natal, Londrina e Madri.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopBar />
      <Nav />
      <Hero />
      <Stats />
      <Problems />
      <HowItWorks />
      <Architects />
      <Pricing />
      <Footer />
    </div>
  );
}

function TopBar() {
  return (
    <div className="bg-primary text-primary-foreground text-sm">
      <div className="mx-auto max-w-7xl px-6 py-2 text-center">
        Consulta inicial gratuita · agende em 24h
      </div>
    </div>
  );
}

function Nav() {
  const links = [
    { href: "#como-funciona", label: "Como funciona" },
    { href: "#arquitetas", label: "Quem somos" },
    { href: "#precos", label: "Quanto custa" },
    { href: "#contato", label: "Contato" },
  ];
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-background/80 border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <Leaf className="h-5 w-5 text-primary" />
          <span className="font-serif text-lg tracking-tight">
            CMI
            <span className="text-muted-foreground font-sans text-xs uppercase tracking-widest ml-2">
              Arquitetura
            </span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-foreground/80 hover:text-primary transition">
              {l.label}
            </a>
          ))}
        </nav>
        <Button asChild className="rounded-full px-5">
          <a href="#precos">Agendar consulta</a>
        </Button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-6 pt-16 pb-20 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-primary mb-5">
          Arquitetura · Interiores · Consultoria
        </p>
        <h1 className="font-serif text-5xl md:text-6xl leading-[1.05] tracking-tight">
          Lares que acolhem, projetados por quem entende você.
        </h1>
        <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-lg">
          Três arquitetas, três cidades, uma mesma sensibilidade. Atendemos em Natal,
          Londrina e Madri com projetos sob medida, calmos e atemporais.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg" className="rounded-full px-7">
            <a href="#precos">Quero meu projeto</a>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full px-7">
            <a href="#como-funciona">Como funciona</a>
          </Button>
        </div>
        <div className="mt-8 flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex -space-x-3">
            <img src={ceciliaImg} alt="" className="h-9 w-9 rounded-full object-cover border-2 border-background" />
            <img src={partner1Img} alt="" className="h-9 w-9 rounded-full object-cover border-2 border-background" />
            <img src={partner2Img} alt="" className="h-9 w-9 rounded-full object-cover border-2 border-background" />
          </div>
          +7 anos de experiência · mais de 200 lares transformados
        </div>
      </div>
      <div className="relative">
        <div className="absolute -inset-4 bg-accent/30 rounded-[2rem] -z-10 rotate-2" />
        <img
          src={heroImg}
          alt="Ambiente projetado em tons calmos"
          width={1280}
          height={960}
          className="rounded-[1.75rem] shadow-2xl shadow-primary/10 object-cover w-full aspect-[4/3]"
        />
      </div>
    </section>
  );
}

function Stats() {
  const items = [
    { v: "+7", l: "anos de mercado" },
    { v: "+200", l: "lares entregues" },
    { v: "3", l: "cidades atendidas" },
    { v: "100%", l: "projetos sob medida" },
  ];
  return (
    <section className="border-y border-border bg-secondary/50">
      <div className="mx-auto max-w-7xl px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-6">
        {items.map((i) => (
          <div key={i.l} className="text-center">
            <div className="font-serif text-3xl md:text-4xl text-primary">{i.v}</div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{i.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Problems() {
  const items = [
    { icon: Home, title: "Não sabe por onde começar", text: "A reforma parece grande demais e cada decisão trava a próxima." },
    { icon: Palette, title: "Medo de errar nas escolhas", text: "Cores, materiais e móveis viram um quebra-cabeça caro." },
    { icon: Ruler, title: "Espaços que não funcionam", text: "Plantas mal resolvidas, móveis fora de escala, luz no lugar errado." },
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <h2 className="font-serif text-3xl md:text-5xl text-center max-w-3xl mx-auto leading-tight">
        Quando você reforma ou decora sozinho, esses obstáculos aparecem
      </h2>
      <div className="mt-14 grid md:grid-cols-3 gap-6">
        {items.map(({ icon: Icon, title, text }) => (
          <div key={title} className="rounded-2xl border border-border bg-card p-7">
            <div className="h-12 w-12 rounded-full bg-accent/40 flex items-center justify-center mb-5">
              <Icon className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-serif text-xl mb-2">{title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { n: "01", title: "Conversa inicial", text: "Entendemos seu espaço, rotina e referências numa conversa leve, online ou presencial." },
    { n: "02", title: "Projeto sob medida", text: "Plantas, paleta, materiais e mobiliário pensados para a sua vida — não para a foto." },
    { n: "03", title: "Acompanhamento", text: "Estamos com você na execução, do orçamento à última peça instalada." },
  ];
  return (
    <section id="como-funciona" className="bg-secondary/40 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-primary mb-3">Como funciona</p>
          <h2 className="font-serif text-3xl md:text-5xl leading-tight">
            Um processo calmo, do primeiro café à entrega.
          </h2>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-8">
          {steps.map((s) => (
            <div key={s.n}>
              <div className="font-serif text-6xl text-accent">{s.n}</div>
              <h3 className="font-serif text-2xl mt-2">{s.title}</h3>
              <p className="text-muted-foreground mt-3 leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Architects() {
  const team = [
    { name: "Cecília Oliveira", city: "Natal", img: ceciliaImg, bio: "Fundadora. Apaixonada por luz natural e materialidade brasileira." },
    { name: "Marina Castro", city: "Londrina", img: partner1Img, bio: "Especialista em residências familiares e projetos de longa duração." },
    { name: "Inés Vasconcelos", city: "Madri", img: partner2Img, bio: "Olhar europeu, foco em interiores atemporais e detalhamento fino." },
  ];
  return (
    <section id="arquitetas" className="mx-auto max-w-7xl px-6 py-24">
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-xs uppercase tracking-[0.2em] text-primary mb-3">Quem somos</p>
        <h2 className="font-serif text-3xl md:text-5xl leading-tight">
          Três arquitetas, uma sensibilidade comum.
        </h2>
        <p className="mt-4 text-muted-foreground">
          Mais de 7 anos somando experiência em residências, comercial e hospitalidade.
        </p>
      </div>
      <div className="mt-14 grid md:grid-cols-3 gap-8">
        {team.map((p) => (
          <article key={p.name} className="group">
            <div className="overflow-hidden rounded-2xl aspect-[4/5] bg-muted">
              <img
                src={p.img}
                alt={p.name}
                loading="lazy"
                width={640}
                height={800}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <h3 className="font-serif text-2xl mt-5">{p.name}</h3>
            <div className="flex items-center gap-1.5 text-sm text-primary mt-1">
              <MapPin className="h-3.5 w-3.5" /> {p.city}
            </div>
            <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{p.bio}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Pricing() {
  const plans = [
    {
      name: "Consultoria",
      price: "R$ 890",
      tag: "por ambiente",
      features: ["Visita técnica online", "Paleta e materiais", "Lista de compras", "Entrega em 7 dias"],
      featured: false,
    },
    {
      name: "Projeto Completo",
      price: "R$ 4.900",
      tag: "projeto residencial",
      features: [
        "Plantas e layout",
        "3D realista de todos os ambientes",
        "Detalhamento de marcenaria",
        "Acompanhamento de obra",
      ],
      featured: true,
    },
    {
      name: "Premium",
      price: "Sob consulta",
      tag: "alto padrão",
      features: [
        "Curadoria de obras de arte",
        "Importação de peças",
        "Gestão de obra completa",
        "Pós-entrega 12 meses",
      ],
      featured: false,
    },
  ];
  return (
    <section id="precos" className="bg-secondary/40 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] text-primary mb-3">Quanto custa</p>
          <h2 className="font-serif text-3xl md:text-5xl leading-tight">
            Planos que cabem no seu projeto.
          </h2>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`rounded-2xl p-8 border ${
                p.featured
                  ? "bg-primary text-primary-foreground border-primary shadow-xl md:scale-[1.03]"
                  : "bg-card border-border"
              }`}
            >
              <div className="flex items-center gap-2">
                {p.featured && <Sparkles className="h-4 w-4" />}
                <h3 className="font-serif text-2xl">{p.name}</h3>
              </div>
              <div className="mt-6">
                <div className="font-serif text-4xl">{p.price}</div>
                <div
                  className={`text-sm mt-1 ${
                    p.featured ? "text-primary-foreground/80" : "text-muted-foreground"
                  }`}
                >
                  {p.tag}
                </div>
              </div>
              <ul className="mt-6 space-y-3 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className={`h-4 w-4 mt-0.5 shrink-0 ${p.featured ? "text-accent" : "text-primary"}`} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Button
                asChild
                variant={p.featured ? "secondary" : "default"}
                className="w-full mt-8 rounded-full"
              >
                <a href="#contato">Quero esse plano</a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contato" className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2">
            <Compass className="h-5 w-5" />
            <span className="font-serif text-xl">CMI Arquitetura</span>
          </div>
          <p className="mt-4 text-sm text-primary-foreground/80 max-w-xs">
            Arquitetura e interiores para quem busca lares calmos, funcionais e atemporais.
          </p>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-widest text-primary-foreground/70 mb-3">
            Onde estamos
          </h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Natal — Brasil</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Londrina — Brasil</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Madri — Espanha</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-widest text-primary-foreground/70 mb-3">
            Fale com a gente
          </h4>
          <p className="text-sm">contato@cmi.arq.br</p>
          <Button asChild variant="secondary" className="mt-5 rounded-full">
            <a href="https://wa.me/" target="_blank" rel="noreferrer">
              Conversar no WhatsApp
            </a>
          </Button>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15">
        <div className="mx-auto max-w-7xl px-6 py-5 text-xs text-primary-foreground/70 flex justify-between">
          <span>© {new Date().getFullYear()} CMI Arquitetura</span>
          <span>Feito com carinho.</span>
        </div>
      </div>
    </footer>
  );
}