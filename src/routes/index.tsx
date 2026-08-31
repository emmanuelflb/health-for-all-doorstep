import { createFileRoute } from "@tanstack/react-router";
import {
  Stethoscope,
  Truck,
  Store,
  GraduationCap,
  HeartHandshake,
  Users,
  Package,
  Activity,
  Bug,
  Eye,
  Baby,
  HeartPulse,
  Video,
  Building2,
  ArrowRight,
} from "lucide-react";

import heroImage from "@/assets/hero-marketdoctors.jpg";
import logoAsset from "@/assets/marketdoctors-logo.jpg.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "MarketDoctors — Affordable Healthcare at Your Doorstep" },
      {
        name: "description",
        content:
          "MarketDoctors is a social impact enterprise providing affordable, accessible basic healthcare to Nigerians in the informal sector, rural areas and slums.",
      },
      {
        property: "og:title",
        content: "MarketDoctors — Affordable Healthcare at Your Doorstep",
      },
      {
        property: "og:description",
        content:
          "MarketDoctors is a social impact enterprise providing affordable, accessible basic healthcare to Nigerians in the informal sector, rural areas and slums.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const services = [
  {
    icon: Stethoscope,
    title: "Medical Outreaches",
    description:
      "On-site screenings and treatment in markets, rural clusters and urban slums.",
  },
  {
    icon: Truck,
    title: "Mobile Clinics",
    description:
      "Fully equipped mobile units that bring practitioners directly to hard-to-reach communities.",
  },
  {
    icon: Store,
    title: "Retail Clinics",
    description:
      "Sustainable primary-care points integrated into everyday economic hubs.",
  },
  {
    icon: GraduationCap,
    title: "Health Education & Sensitization",
    description:
      "Preventive health knowledge that empowers traders and families to stay healthy.",
  },
  {
    icon: HeartHandshake,
    title: "Health-Related CSR",
    description:
      "End-to-end management of corporate social responsibility health projects.",
  },
  {
    icon: Users,
    title: "Health Connect",
    description:
      "Training and empowerment of youths and women as community health liaisons.",
  },
  {
    icon: Package,
    title: "Procurement of Health Supplies",
    description:
      "Efficient sourcing and distribution of essential medical supplies.",
  },
  {
    icon: Video,
    title: "Telemedicine",
    description:
      "Virtual consultations that connect patients to qualified practitioners from anywhere.",
  },
  {
    icon: Building2,
    title: "Corporate & Formal Sector Care",
    description:
      "Workplace health programmes, staff screening and retainership for organisations in the formal sector.",
  },
];

const focusAilments = [
  {
    icon: HeartPulse,
    stat: "60%+",
    label: "NCD Mortality",
    detail: "Hypertension & diabetes screening",
  },
  {
    icon: Bug,
    stat: "Malaria",
    label: "Recycling Poverty",
    detail: "Treatment, prevention & awareness",
  },
  {
    icon: Eye,
    stat: "Eye Care",
    label: "Blindness Prevention",
    detail: "Basic screening for productivity",
  },
  {
    icon: Baby,
    stat: "Maternal",
    label: "Maternal Health",
    detail: "Care for mothers and infants",
  },
];

const partners = [
  "MTN Foundation",
  "Exxon Mobil",
  "Shalina Healthcare",
  "Emzor Pharmaceutical",
  "Vision Spring",
  "Nigerian Breweries",
  "LAWMA",
  "Total Nigeria",
  "BetKing",
  "PeacanTrust Microfinance Bank",
  "His Love Foundation",
  "SwiPha",
];

function Index() {
  return (
    <div className="bg-canvas text-earth-900 font-body antialiased">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-canvas/90 backdrop-blur-sm border-b border-earth-950/5 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <img
              src={logoAsset.url}
              alt="MarketDoctors logo"
              width={40}
              height={40}
              className="size-10 rounded-full object-cover"
            />
            <span className="font-display font-semibold text-xl tracking-tight text-clay-600">
              MarketDoctors
            </span>
          </a>
          <div className="hidden md:flex gap-8 text-sm font-medium text-earth-900/70">
            <a href="#story" className="hover:text-clay-600 transition-colors">
              Our Story
            </a>
            <a href="#services" className="hover:text-clay-600 transition-colors">
              Services
            </a>
            <a href="#focus" className="hover:text-clay-600 transition-colors">
              Focus Areas
            </a>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-leaf-700 text-white text-sm font-medium py-2 px-5 rounded-full ring-1 ring-leaf-700 hover:bg-leaf-800 transition-colors"
          >
            Support Our Work
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 md:py-24 px-6 bg-clay-50/50">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <div className="mb-8">
            <h1 className="font-display text-4xl md:text-6xl font-medium text-earth-950 text-balance leading-tight max-w-[24ch] mb-6">
              Healthcare that finds you where you live and work.
            </h1>
            <p className="text-base md:text-lg text-earth-900/80 text-pretty max-w-[56ch] mx-auto mb-10">
              MarketDoctors provides affordable medical care to Nigerians in the
              informal sector, rural areas and slums — quality health services
              that reach your doorstep without disturbing your daily bread.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-earth-950 text-white text-sm font-medium py-3 px-6 rounded-full ring-1 ring-earth-950 hover:bg-earth-900 transition-colors"
              >
                Partner With Us
              </a>
              <a
                href="#story"
                className="inline-flex items-center justify-center bg-white text-earth-950 text-sm font-medium py-2 pr-3 pl-2 rounded-full ring-1 ring-black/5 hover:bg-surface transition-colors"
              >
                <span className="size-6 rounded-full bg-clay-50 flex items-center justify-center mr-2">
                  <ArrowRight className="size-4 text-clay-600" />
                </span>
                View Impact
              </a>
            </div>
          </div>

          <div className="w-full aspect-[21/9] rounded-3xl ring-1 ring-black/5 overflow-hidden">
            <img
              src={heroImage}
              alt="A MarketDoctors community healthcare worker consulting with a market trader in a Nigerian market"
              width={1200}
              height={600}
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section id="story" className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="max-w-[48ch]">
              <span className="text-xs font-semibold uppercase tracking-widest text-clay-600 mb-4 block">
                Our Purpose
              </span>
              <h2 className="font-display text-3xl font-medium text-earth-950 mb-6">
                Dignity through accessible care.
              </h2>
              <p className="text-earth-900/80 text-pretty leading-relaxed mb-6">
                We believe in a world where people can have access to basic
                health services irrespective of their location, religion, ethnic
                group and social class. We serve people in need of care with
                professionalism, igniting hope and taking healthcare to the
                doorstep of Nigerians without disturbing their day-to-day
                activities.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-earth-950/5">
                <div>
                  <div className="text-2xl font-display text-leaf-700 mb-1">
                    Vision
                  </div>
                  <p className="text-sm text-earth-900/60">
                    Bringing affordable healthcare to the doorstep of Nigerians
                    with minimal disturbance to their economic activities.
                  </p>
                </div>
                <div>
                  <div className="text-2xl font-display text-leaf-700 mb-1">
                    Mission
                  </div>
                  <p className="text-sm text-earth-900/60">
                    Accessible, sustainable and affordable preventive and
                    curative primary healthcare for the underserved.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-surface p-8 md:p-12 rounded-[32px] ring-1 ring-black/5">
            <h3 className="font-display text-2xl font-medium mb-8">
              Our Core Values
            </h3>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <span className="flex-shrink-0 size-6 rounded-full bg-clay-600/10 flex items-center justify-center text-clay-600 text-xs font-bold italic">
                  P
                </span>
                <div>
                  <p className="font-medium text-earth-950">Professionalism</p>
                  <p className="text-sm text-earth-900/70">
                    Clinical excellence in every community outreach.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 size-6 rounded-full bg-clay-600/10 flex items-center justify-center text-clay-600 text-xs font-bold italic">
                  I
                </span>
                <div>
                  <p className="font-medium text-earth-950">Impact Driven</p>
                  <p className="text-sm text-earth-900/70">
                    Measurable improvement in community health outcomes.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 size-6 rounded-full bg-clay-600/10 flex items-center justify-center text-clay-600 text-xs font-bold italic">
                  C
                </span>
                <div>
                  <p className="font-medium text-earth-950">Commitment</p>
                  <p className="text-sm text-earth-900/70">
                    Walking the hard-to-reach miles for those in need.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 size-6 rounded-full bg-clay-600/10 flex items-center justify-center text-clay-600 text-xs font-bold italic">
                  C
                </span>
                <div>
                  <p className="font-medium text-earth-950">Collaboration</p>
                  <p className="text-sm text-earth-900/70">
                    Working with partners, communities and government to extend
                    care.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20 bg-earth-950 text-canvas px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="font-display text-3xl font-medium text-balance mb-4">
              Integrated Health Services
            </h2>
            <p className="text-canvas/60 max-w-[48ch] text-pretty">
              We do not just treat illnesses; we integrate health into the
              rhythm of daily economic activities.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="group p-8 bg-earth-900 rounded-[24px] border border-white/5 hover:border-clay-600/30 transition-colors"
              >
                <div className="size-8 mb-6 flex items-center justify-center text-clay-600">
                  <service.icon className="size-6" strokeWidth={1.5} />
                </div>
                <h4 className="font-display text-xl mb-3">{service.title}</h4>
                <p className="text-sm text-canvas/60 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Ailments Strip */}
      <section id="focus" className="py-12 border-y border-earth-950/10 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-earth-900/40 mb-8">
            Critical Intervention Areas
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {focusAilments.map((ailment) => (
              <div key={ailment.label} className="flex gap-4 items-start">
                <span className="flex-shrink-0 size-10 rounded-full bg-clay-600/10 flex items-center justify-center text-clay-600">
                  <ailment.icon className="size-5" strokeWidth={1.5} />
                </span>
                <div>
                  <div className="text-2xl font-display text-earth-950">
                    {ailment.stat}
                  </div>
                  <p className="text-[11px] text-earth-900/60">
                    {ailment.label}
                  </p>
                  <p className="text-[11px] text-earth-900/40 mt-1">
                    {ailment.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 max-w-[60ch] text-sm text-earth-900/70 italic">
            “Focusing on hypertension and diabetes screening to combat the growing
            burden of non-communicable diseases in Nigeria.”
          </div>
        </div>
      </section>

      {/* Partner Row */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto text-center mb-10">
          <span className="text-[10px] font-semibold uppercase tracking-widest text-earth-900/40">
            Trusted Partners
          </span>
        </div>
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-x-10 gap-y-6 items-center opacity-60 grayscale hover:grayscale-0 transition-all">
          {partners.map((partner) => (
            <span
              key={partner}
              className="font-display text-base md:text-lg font-medium text-earth-950"
            >
              {partner}
            </span>
          ))}
        </div>
      </section>

      {/* Footer / CTA */}
      <footer id="contact" className="bg-surface px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl font-medium text-earth-950 mb-6">
            Igniting hope across Nigeria.
          </h2>
          <p className="text-earth-900/70 mb-10 text-pretty">
            Join us in taking quality healthcare to the doorstep of every
            Nigerian. Your support powers our mobile clinics and outreach
            programs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:info@marketdoctors.org.ng?subject=Partnership%20Inquiry"
              className="inline-flex items-center justify-center bg-leaf-700 text-white text-sm font-medium py-3 px-8 rounded-full shadow-sm hover:bg-leaf-800 transition-colors"
            >
              Partner With Us
            </a>
            <a
              href="mailto:info@marketdoctors.org.ng?subject=Volunteer%20Application"
              className="inline-flex items-center justify-center bg-transparent border border-earth-950/20 text-earth-950 text-sm font-medium py-3 px-8 rounded-full hover:bg-earth-950/5 transition-colors"
            >
              Volunteer Your Skills
            </a>
          </div>

          <div className="mt-24 pt-8 border-t border-earth-950/10 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-xs text-earth-900/40">
              © {new Date().getFullYear()} MarketDoctors Social Impact Enterprise.
            </div>
            <div className="flex gap-6 text-xs font-medium text-earth-900/60">
              <a href="#story" className="hover:text-clay-600">
                Our Story
              </a>
              <a href="#services" className="hover:text-clay-600">
                Services
              </a>
              <a href="#focus" className="hover:text-clay-600">
                Focus Areas
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
