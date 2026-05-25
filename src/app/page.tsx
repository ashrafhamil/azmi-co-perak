import Reveal from "./components/Reveal";
import SiteNav from "./components/SiteNav";
import OpenStatus from "./components/OpenStatus";
import CountUp from "./components/CountUp";

const ADDRESS = "Perak Branch · Ipoh, Perak, Malaysia";
const HQ_URL = "https://www.azmigroup.com.my";
const WHATSAPP_URL = "https://wa.me/60162521464?text=Enquiry%20-%20Azmi%20%26%20Co%20Perak";
const EMAIL = "perak@azmigroup.com.my";

const services = [
  {
    name: "Valuation",
    blurb:
      "Independent property valuation for commercial, residential, industrial and agricultural assets — for sale, purchase, financing, accounting, insurance and statutory purposes.",
    points: [
      "Bank-panel valuation reports",
      "Plant, machinery & equipment",
      "Compulsory acquisition advisory",
      "Rental & rental review",
    ],
  },
  {
    name: "Estate Agency",
    blurb:
      "End-to-end marketing and transaction support — from listing strategy to negotiation and completion — for owners, investors and corporate clients across Perak.",
    points: [
      "Sale & purchase representation",
      "Leasing & tenant search",
      "Marketing & listing strategy",
      "Investment sales",
    ],
  },
  {
    name: "Property Management",
    blurb:
      "Full-service stewardship of real property — building operations, tenant relations, financial reporting and statutory compliance — protecting and growing asset value.",
    points: [
      "Building & facilities management",
      "Tenancy & rent collection",
      "Service charge & accounts",
      "Maintenance coordination",
    ],
  },
];

const stats = [
  { target: 47, decimals: 0, prefix: "", suffix: "+", label: "Years in practice" },
  { target: 3, decimals: 0, prefix: "", suffix: "", label: "Core service lines" },
  { target: 1978, decimals: 0, prefix: "Est. ", suffix: "", label: "Established" },
];

const marqueeTokens = [
  "Property Valuation",
  "Estate Agency",
  "Property Management",
  "BOVAEAPM Registered",
  "Serving Perak",
  "Established 1978",
];

const featuredWork = [
  {
    type: "Valuation",
    title: "Commercial Lot — Ipoh Garden",
    meta: "3-storey shoplot · Bank-panel valuation",
    year: "2024",
    accent: "#0a1a2f",
  },
  {
    type: "Estate Agency",
    title: "Residential Bungalow — Tambun",
    meta: "Sale & purchase representation",
    year: "2024",
    accent: "#1a2f4a",
  },
  {
    type: "Property Management",
    title: "Mixed-Use Building — Ipoh Town",
    meta: "Full management mandate · 18 tenancies",
    year: "Ongoing",
    accent: "#0a1a2f",
  },
  {
    type: "Valuation",
    title: "Industrial Land — Kinta",
    meta: "Compulsory acquisition advisory",
    year: "2023",
    accent: "#1a2f4a",
  },
  {
    type: "Estate Agency",
    title: "Retail Lot — Greentown",
    meta: "Leasing & tenant search",
    year: "2023",
    accent: "#0a1a2f",
  },
  {
    type: "Property Management",
    title: "Strata Residences — Ipoh",
    meta: "Service charge & maintenance coordination",
    year: "Ongoing",
    accent: "#1a2f4a",
  },
];

const whyPoints = [
  {
    title: "Registered & accredited",
    body: "BOVAEAPM-registered firm operating under the Board of Valuers, Appraisers, Estate Agents and Property Managers Malaysia.",
  },
  {
    title: "Four decades of practice",
    body: "Continuously operating since 1978, with a track record spanning residential, commercial, industrial and agricultural assets.",
  },
  {
    title: "Local expertise, group strength",
    body: "Perak branch combines on-the-ground market knowledge with the resources and standards of the wider Azmi & Co group.",
  },
  {
    title: "Reports built for decision-makers",
    body: "Clear, defensible valuation and advisory work suited to banks, regulators, auditors, courts and boards.",
  },
];

function CredentialBadge() {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-cream/25 bg-cream/[0.06] px-[0.9rem] py-[0.4rem] text-[0.72rem] uppercase tracking-[0.18em] text-cream/80">
      <span aria-hidden="true" className="text-crema">◆</span>
      BOVAEAPM Registered
    </span>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="grain relative grid min-h-[max(100vh,640px)] place-items-center overflow-hidden text-center"
    >
      <div className="absolute inset-0 hero-bg hero-zoom" />
      <div className="relative z-[2] mx-auto max-w-[820px] px-6 text-cream">
        <Reveal>
          <p className="mb-[1.6rem] text-[0.78rem] uppercase tracking-[0.42em] text-crema">
            Ipoh · Perak · Malaysia
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="font-display font-semibold leading-[1.02] text-[clamp(2.6rem,8vw,5.4rem)]">
            Azmi &amp; Co
            <span className="block mt-2 text-crema text-[clamp(1.6rem,4.5vw,2.8rem)] font-normal italic">
              Perak Branch
            </span>
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <p className="mx-auto mt-[1.6rem] max-w-[640px] text-[clamp(1rem,2vw,1.2rem)] leading-relaxed text-cream/[0.88]">
            Registered valuers, estate agents and property managers serving Ipoh and the
            wider Perak region. A trusted name in Malaysian real estate since 1978.
          </p>
        </Reveal>
        <Reveal delay={300}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-[0.9rem]">
            <CredentialBadge />
            <OpenStatus variant="hero" />
          </div>
          <div className="mt-[2.4rem] flex flex-wrap justify-center gap-4">
            <a
              href="#work"
              className="rounded-[2px] bg-caramel px-[2.1rem] py-4 text-[0.8rem] font-medium uppercase tracking-[0.16em] text-paper transition duration-[350ms] hover:-translate-y-[2px] hover:bg-crema active:translate-y-0 active:scale-[.99] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-caramel"
            >
              Our work
            </a>
            <a
              href="#contact"
              className="rounded-[2px] border border-cream/40 px-[2.1rem] py-4 text-[0.8rem] font-medium uppercase tracking-[0.16em] text-cream transition duration-[350ms] hover:border-cream active:translate-y-0 active:scale-[.99] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-caramel"
            >
              Contact branch
            </a>
          </div>
          <p className="mt-[2.2rem] text-[0.78rem] uppercase tracking-[0.26em] text-cream/60">
            Office hours · Monday – Friday · 9 AM – 5 PM
          </p>
        </Reveal>
      </div>
      <a
        href="#about"
        aria-label="Scroll to about"
        className="scroll-cue absolute bottom-[1.8rem] left-1/2 z-[2] -translate-x-1/2 text-[1.4rem] text-cream/60"
      >
        <span aria-hidden="true">▾</span>
      </a>
    </section>
  );
}

function Marquee() {
  const tokens = [...marqueeTokens, ...marqueeTokens];
  return (
    <div
      aria-hidden="true"
      className="marquee overflow-hidden bg-caramel py-[0.9rem] text-paper"
    >
      <div className="marquee-track flex w-max items-center whitespace-nowrap">
        {tokens.map((token, i) => (
          <span
            key={`${i}-${token}`}
            className="mr-[2.5rem] flex items-center gap-[2.5rem] font-display text-[1.1rem] font-medium tracking-[0.04em]"
          >
            <span>{token}</span>
            <span aria-hidden="true">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-paper py-24 sm:py-32">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-[2%] top-1/2 z-0 hidden -translate-y-1/2 select-none font-display font-semibold leading-none text-bean opacity-[0.04] text-[22rem] lg:block"
      >
        A&amp;C
      </span>
      <div className="relative z-[1] mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-[5rem] lg:grid-cols-[1fr_1.1fr]">
          <div>
            <Reveal>
              <p className="mb-4 text-[0.72rem] font-medium uppercase tracking-[0.32em] text-caramel">
                About the firm
              </p>
              <h2 className="font-display font-semibold leading-[1.12] text-[clamp(2rem,4.5vw,3.4rem)]">
                A heritage of trust in Malaysian real estate
              </h2>
            </Reveal>
            <Reveal className="mt-6 space-y-5 text-base leading-[1.7] text-bean">
              <p className="max-w-[52ch]">
                Azmi &amp; Co was founded in 1978 and has spent more than four decades
                building one of Malaysia&apos;s most established names in property
                valuation, estate agency and property management.
              </p>
              <p className="max-w-[52ch]">
                The Perak branch extends that practice into Ipoh and the wider region —
                pairing local market knowledge with the standards, methodology and group
                resources of the firm&apos;s national network.
              </p>
              <p className="max-w-[52ch]">
                We are registered with the Board of Valuers, Appraisers, Estate Agents
                and Property Managers Malaysia (BOVAEAPM) — the statutory body governing
                the profession.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <blockquote className="mt-8 border-l-2 border-caramel pl-6 font-display text-[1.45rem] italic leading-snug text-espresso max-w-[52ch]">
                &ldquo;Estate agency is the foundation of sound real estate
                practice.&rdquo;
                <footer className="mt-4 font-body text-[0.85rem] not-italic text-bean/70">
                  — Azmi &amp; Co
                </footer>
              </blockquote>
            </Reveal>
            <Reveal>
              <div className="mt-10 flex flex-wrap gap-[2.5rem] border-t border-bean/15 pt-8">
                {stats.map((s) => (
                  <div key={s.label}>
                    <strong className="block font-display text-[1.9rem] text-caramel">
                      <CountUp
                        target={s.target}
                        decimals={s.decimals}
                        prefix={s.prefix}
                        suffix={s.suffix}
                      />
                    </strong>
                    <span className="text-[0.72rem] uppercase tracking-[0.18em] text-bean/60">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={100}>
            <div className="relative">
              <div className="absolute -inset-4 rounded-[4px] border border-caramel/20" />
              <div className="relative rounded-[3px] bg-espresso p-10 text-cream shadow-[0_30px_60px_rgba(10,26,47,0.25)]">
                <p className="text-[0.7rem] uppercase tracking-[0.32em] text-crema mb-6">
                  Registered Firm
                </p>
                <p className="font-display text-[2.2rem] leading-[1.15] mb-4">
                  Board of Valuers, Appraisers, Estate Agents &amp; Property Managers
                  Malaysia
                </p>
                <p className="text-cream/70 text-[0.95rem] leading-[1.7] mb-8">
                  Operating under the framework of BOVAEAPM — the statutory body
                  regulating the valuation, estate agency and property management
                  professions in Malaysia.
                </p>
                <div className="grid grid-cols-2 gap-6 border-t border-cream/15 pt-6">
                  <div>
                    <p className="text-[0.65rem] uppercase tracking-[0.22em] text-crema">
                      Status
                    </p>
                    <p className="mt-2 font-display text-[1.2rem] text-cream">
                      Registered
                    </p>
                  </div>
                  <div>
                    <p className="text-[0.65rem] uppercase tracking-[0.22em] text-crema">
                      Group HQ
                    </p>
                    <p className="mt-2 font-display text-[1.05rem] text-cream">
                      <a
                        href={HQ_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-crema underline-offset-4 hover:underline"
                      >
                        azmigroup.com.my
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="grain relative bg-espresso text-cream">
      <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <Reveal>
          <div className="mx-auto mb-14 max-w-[620px] text-center">
            <p className="mb-4 text-[0.72rem] font-medium uppercase tracking-[0.32em] text-crema">
              What we do
            </p>
            <h2 className="font-display font-semibold leading-[1.12] text-[clamp(2rem,4.5vw,3.4rem)]">
              Three disciplines, one practice
            </h2>
            <p className="mt-[1.4rem] text-cream/70">
              Independent, accredited expertise across the full lifecycle of real
              property — from initial valuation through transaction to long-term
              stewardship.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-[1.8rem] min-[900px]:grid-cols-3">
          {services.map((service, idx) => (
            <Reveal key={service.name} delay={idx * 80}>
              <article className="group h-full rounded-[3px] border border-cream/15 bg-cream/[0.04] p-[2.2rem] transition duration-[350ms] hover:-translate-y-[3px] hover:border-caramel/50">
                <p className="mb-3 text-[0.7rem] font-medium uppercase tracking-[0.28em] text-crema">
                  0{idx + 1}
                </p>
                <h3 className="mb-4 font-display text-[1.6rem] font-semibold text-cream">
                  {service.name}
                </h3>
                <p className="mb-6 text-[0.95rem] leading-[1.7] text-cream/75">
                  {service.blurb}
                </p>
                <ul className="space-y-[0.55rem] border-t border-cream/15 pt-5">
                  {service.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-[0.88rem] text-cream/85"
                    >
                      <span aria-hidden="true" className="mt-[0.5rem] inline-block h-[5px] w-[5px] flex-none rounded-full bg-caramel" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-12 text-center text-[0.85rem] text-cream/60">
            Each engagement scoped to the client&apos;s purpose — financing, sale,
            acquisition, accounting, dispute, insurance or strategic planning.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="mx-auto mb-14 max-w-[640px] text-center">
            <p className="mb-4 text-[0.72rem] font-medium uppercase tracking-[0.32em] text-caramel">
              Featured work
            </p>
            <h2 className="font-display font-semibold leading-[1.12] text-[clamp(2rem,4.5vw,3.2rem)]">
              A selection of recent engagements
            </h2>
            <p className="mt-[1.4rem] text-bean/80">
              Representative examples of the Perak branch&apos;s work across valuation,
              estate agency and property management. Client identities omitted for
              confidentiality — full case studies available on request.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-[1.4rem] min-[680px]:grid-cols-2 min-[900px]:grid-cols-3">
          {featuredWork.map((item, idx) => (
            <Reveal key={item.title} delay={idx * 60}>
              <article className="group flex h-full flex-col overflow-hidden rounded-[3px] border border-bean/15 bg-cream transition duration-[350ms] hover:-translate-y-[3px] hover:border-caramel/40">
                <div
                  className="relative grid h-[180px] place-items-center overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${item.accent} 0%, #1a2f4a 100%)`,
                  }}
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 opacity-[0.12]"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 30% 30%, rgba(201,169,97,0.6) 0%, transparent 50%), radial-gradient(circle at 75% 70%, rgba(168,132,63,0.5) 0%, transparent 50%)",
                    }}
                  />
                  <span className="relative font-display text-[2.6rem] font-semibold text-crema/90">
                    {item.type === "Valuation" && "◇"}
                    {item.type === "Estate Agency" && "△"}
                    {item.type === "Property Management" && "▢"}
                  </span>
                  <span className="absolute left-4 top-4 rounded-full border border-cream/30 bg-cream/[0.08] px-3 py-1 text-[0.65rem] uppercase tracking-[0.18em] text-cream backdrop-blur-[2px]">
                    {item.type}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-[1.6rem]">
                  <h3 className="font-display text-[1.2rem] font-semibold text-espresso">
                    {item.title}
                  </h3>
                  <p className="mt-2 flex-1 text-[0.88rem] text-bean/75">{item.meta}</p>
                  <p className="mt-4 border-t border-bean/10 pt-3 text-[0.7rem] uppercase tracking-[0.22em] text-caramel">
                    {item.year}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-12 text-center text-[0.82rem] text-bean/60">
            Placeholder entries — to be replaced with actual case references confirmed
            by the branch.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section id="why" className="relative grid min-h-[520px] place-items-center overflow-hidden">
      <div className="feature-bg absolute inset-0" />
      <div className="relative z-[2] mx-auto w-full max-w-6xl px-6 py-24 sm:py-32 text-cream">
        <Reveal>
          <div className="mx-auto mb-14 max-w-[620px] text-center">
            <p className="mb-4 text-[0.72rem] font-medium uppercase tracking-[0.32em] text-crema">
              Why Azmi &amp; Co
            </p>
            <h2 className="font-display font-semibold leading-[1.12] text-[clamp(2rem,4.5vw,3.2rem)]">
              Independent, accredited, and built to last
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-[1.4rem] min-[680px]:grid-cols-2">
          {whyPoints.map((item, idx) => (
            <Reveal key={item.title} delay={idx * 60}>
              <div className="flex h-full gap-5 rounded-[3px] border border-cream/15 bg-cream/[0.04] p-[1.8rem] backdrop-blur-[2px]">
                <span
                  aria-hidden="true"
                  className="grid h-10 w-10 flex-none place-items-center rounded-full border border-caramel font-display text-[0.95rem] text-crema"
                >
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-[1.2rem] font-semibold text-cream">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[0.92rem] leading-[1.7] text-cream/75">
                    {item.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Team() {
  return (
    <section id="team" className="bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="mx-auto mb-14 max-w-[620px] text-center">
            <p className="mb-4 text-[0.72rem] font-medium uppercase tracking-[0.32em] text-caramel">
              The Perak team
            </p>
            <h2 className="font-display font-semibold leading-[1.12] text-[clamp(2rem,4.5vw,3.2rem)]">
              People who know the local market
            </h2>
            <p className="mt-[1.4rem] text-bean/80">
              The Perak branch is led by registered professionals supported by a
              full client-service team. Profiles to be published with the team&apos;s
              consent.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-[1.8rem] min-[680px]:grid-cols-3">
          {[
            { role: "Branch Principal", note: "Registered Valuer" },
            { role: "Estate Agency Lead", note: "Registered Estate Agent" },
            { role: "Property Management Lead", note: "Registered Property Manager" },
          ].map((person, idx) => (
            <Reveal key={person.role} delay={idx * 80}>
              <article className="rounded-[3px] border border-bean/15 bg-paper p-[2rem] text-center">
                <div className="mx-auto mb-5 grid h-[88px] w-[88px] place-items-center rounded-full border border-caramel bg-espresso font-display text-[1.4rem] text-crema">
                  A&amp;C
                </div>
                <p className="text-[0.7rem] uppercase tracking-[0.22em] text-caramel">
                  Profile pending
                </p>
                <h3 className="mt-3 font-display text-[1.25rem] font-semibold text-espresso">
                  {person.role}
                </h3>
                <p className="mt-1 text-[0.88rem] text-bean/70">{person.note}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactBlock({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-[1.8rem]">
      <h4 className="mb-2 text-[0.72rem] font-medium uppercase tracking-[0.22em] text-caramel">
        {label}
      </h4>
      <p className="text-[0.98rem] text-bean">{children}</p>
    </div>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-paper py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-[4rem] px-6 lg:grid-cols-[1fr_1.1fr] lg:items-stretch">
        <Reveal>
          <p className="mb-4 text-[0.72rem] font-medium uppercase tracking-[0.32em] text-caramel">
            Get in touch
          </p>
          <h2 className="font-display font-semibold leading-[1.12] text-[clamp(2rem,4.5vw,3.2rem)]">
            Speak to the Perak branch
          </h2>
          <p className="mt-5 max-w-[52ch] text-[0.98rem] leading-[1.7] text-bean">
            For a valuation, listing, leasing or management enquiry, reach out and a
            member of the branch team will respond during office hours.
          </p>
          <ContactBlock label="Office hours">
            <span className="flex flex-wrap items-center gap-3">
              Monday – Friday · 9:00 AM – 5:00 PM
              <OpenStatus variant="light" />
            </span>
          </ContactBlock>
          <ContactBlock label="Address">{ADDRESS}</ContactBlock>
          <ContactBlock label="Email">
            <a href={`mailto:${EMAIL}`} className="hover:text-caramel">
              {EMAIL}
            </a>
            <span className="block text-[0.78rem] text-bean/60 mt-1">
              (placeholder — to be confirmed)
            </span>
          </ContactBlock>
          <ContactBlock label="Group">
            <a
              href={HQ_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-caramel"
            >
              azmigroup.com.my
            </a>
          </ContactBlock>
          <div className="mt-[2.4rem] flex flex-wrap gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-[2px] bg-caramel px-[2.1rem] py-4 text-[0.8rem] font-medium uppercase tracking-[0.16em] text-paper transition duration-[350ms] hover:-translate-y-[2px] hover:bg-crema active:translate-y-0 active:scale-[.99] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-caramel"
            >
              WhatsApp enquiry
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="rounded-[2px] border border-bean/30 px-[2.1rem] py-4 text-[0.8rem] font-medium uppercase tracking-[0.16em] text-espresso transition duration-[350ms] hover:border-espresso active:translate-y-0 active:scale-[.99] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-caramel"
            >
              Email branch
            </a>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="flex h-full min-h-[460px] flex-col rounded-[3px] border border-bean/15 bg-cream p-[2.4rem]">
            <p className="text-[0.7rem] uppercase tracking-[0.32em] text-caramel mb-5">
              Enquiry form
            </p>
            <form className="flex flex-1 flex-col gap-4">
              <label className="flex flex-col gap-2">
                <span className="text-[0.72rem] uppercase tracking-[0.18em] text-bean/70">
                  Name
                </span>
                <input
                  type="text"
                  className="rounded-[2px] border border-bean/20 bg-paper px-4 py-3 text-[0.95rem] text-espresso focus:border-caramel focus:outline-none"
                  placeholder="Your full name"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-[0.72rem] uppercase tracking-[0.18em] text-bean/70">
                  Email
                </span>
                <input
                  type="email"
                  className="rounded-[2px] border border-bean/20 bg-paper px-4 py-3 text-[0.95rem] text-espresso focus:border-caramel focus:outline-none"
                  placeholder="you@example.com"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-[0.72rem] uppercase tracking-[0.18em] text-bean/70">
                  Service of interest
                </span>
                <select
                  className="rounded-[2px] border border-bean/20 bg-paper px-4 py-3 text-[0.95rem] text-espresso focus:border-caramel focus:outline-none"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option>Valuation</option>
                  <option>Estate Agency</option>
                  <option>Property Management</option>
                  <option>Other</option>
                </select>
              </label>
              <label className="flex flex-1 flex-col gap-2">
                <span className="text-[0.72rem] uppercase tracking-[0.18em] text-bean/70">
                  Message
                </span>
                <textarea
                  rows={4}
                  className="flex-1 rounded-[2px] border border-bean/20 bg-paper px-4 py-3 text-[0.95rem] text-espresso focus:border-caramel focus:outline-none"
                  placeholder="Briefly describe your enquiry"
                />
              </label>
              <button
                type="button"
                className="mt-2 rounded-[2px] bg-espresso px-[2rem] py-3 text-[0.8rem] font-medium uppercase tracking-[0.16em] text-paper transition hover:bg-bean"
              >
                Send enquiry (demo)
              </button>
              <p className="text-[0.72rem] text-bean/55">
                Demo form — backend submission to be wired up before launch.
              </p>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mt-auto bg-espresso text-cream/60">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 pb-14 pt-[4.5rem] min-[680px]:grid-cols-[1fr_2fr]">
        <div className="flex items-center gap-4">
          <span className="grid h-[42px] w-[42px] place-items-center rounded-[3px] border border-crema font-display text-[1rem] font-semibold text-crema">
            A&amp;C
          </span>
          <div>
            <strong className="block font-display text-[1.3rem] text-cream">
              Azmi &amp; Co
            </strong>
            <span className="text-[0.78rem] text-cream/60">
              Perak Branch · Ipoh, Malaysia
            </span>
          </div>
        </div>
        <div className="grid gap-8 min-[680px]:grid-cols-3">
          <div>
            <h5 className="mb-4 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-crema">
              Practice
            </h5>
            <p className="text-[0.88rem] leading-[1.9] text-cream/60">
              Valuation
              <br />
              Estate Agency
              <br />
              Property Management
            </p>
          </div>
          <div>
            <h5 className="mb-4 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-crema">
              Hours
            </h5>
            <p className="text-[0.88rem] leading-[1.9] text-cream/60">
              Mon – Fri
              <br />
              9:00 AM – 5:00 PM
            </p>
          </div>
          <div>
            <h5 className="mb-4 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-crema">
              Group
            </h5>
            <p className="text-[0.88rem] leading-[1.9] text-cream/60">
              <a
                href={HQ_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-crema"
              >
                azmigroup.com.my
              </a>
              <br />
              BOVAEAPM Registered
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-[1.6rem] text-[0.75rem] text-cream/40 min-[680px]:flex-row min-[680px]:items-center min-[680px]:justify-between">
          <span>
            © {new Date().getFullYear()} Azmi &amp; Co — Perak Branch. Draft site for
            client review — content & imagery to be finalised before public launch.
          </span>
          <span>Ipoh, Perak</span>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <SiteNav />
      <main className="flex-1">
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Work />
        <WhyUs />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
