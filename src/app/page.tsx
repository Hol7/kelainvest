"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Icon } from "@iconify/react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { Montserrat } from "next/font/google";

import KELA from "../../public/images/KELA-LogoHorizonta.svg";
import hero from "../../public/images/apartment-building-city-with-copy-space.jpg";
import patrick from "../../public/images/patrick.jpeg";
import cafe from "../../public/images/two-african-businessman-sitting-outside-cafe.jpg";
import woman from "../../public/images/smiling-woman-writing-notes-tablet-digital-device_53876-111318.jpg";
import interior from "../../public/images/appartments/beautiful-summer-modern-home-interior-design.jpg";
import architecture from "../../public/images/appartments/modern-apartment-architecture.jpg";
import building from "../../public/images/appartments/modern-building-architecture.jpg";
import style from "../../public/images/appartments/modern-style-house-exterior-with-terrace.jpg";
import rural from "../../public/images/appartments/rural-house-with-stone-pathway.jpg";
import spacious from "../../public/images/appartments/spacious-room-with-big-window.jpg";

const montserrat = Montserrat({ subsets: ["latin"] });

type Language = "fr" | "en";

type Copy = {
  nav: {
    home: string;
    realEstate: string;
    travel: string;
    method: string;
    founder: string;
    contact: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    intro: string;
    primary: string;
    secondary: string;
  };
  pillars: {
    title: string;
    intro: string;
    realEstateTitle: string;
    realEstateBody: string;
    travelTitle: string;
    travelBody: string;
  };
  realEstate: {
    eyebrow: string;
    title: string;
    intro: string;
    services: string[];
  };
  travel: {
    eyebrow: string;
    title: string;
    intro: string;
    services: string[];
    destinations: string[];
    experiences: string[];
  };
  method: {
    eyebrow: string;
    title: string;
    steps: { title: string; body: string }[];
  };
  founder: {
    eyebrow: string;
    title: string;
    name: string;
    body: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    body: string;
    email: string;
    phone: string;
    office: string;
    hours: string;
    cta: string;
  };
};

const content: Record<Language, Copy> = {
  fr: {
    nav: {
      home: "Accueil",
      realEstate: "Immobilier",
      travel: "Travel",
      method: "Méthode",
      founder: "Fondateur",
      contact: "Contact",
    },
    hero: {
      eyebrow: "Investissement immobilier & agence de voyage premium",
      title: "Vos biens, vos voyages, vos ambitions. Nous orchestrons l'essentiel.",
      intro:
        "Kela Invest accompagne les propriétaires, investisseurs et voyageurs exigeants avec une approche complète: gestion immobilière, achat-vente, assistance juridique et séjours premium sur mesure.",
      primary: "Découvrir nos services",
      secondary: "Parler à un conseiller",
    },
    pillars: {
      title: "Une maison pour deux expertises complémentaires.",
      intro:
        "L'entreprise grandit: Kela Invest conserve son exigence immobilière et ouvre une rubrique Travel pensée comme une conciergerie de voyage haut de gamme.",
      realEstateTitle: "Patrimoine immobilier",
      realEstateBody:
        "Gestion locative, recherche de locataires, collecte des loyers, achat et vente de biens, analyse de rentabilité et accompagnement juridique.",
      travelTitle: "Kela Travel",
      travelBody:
        "Billets d'avion, hôtels, accueil à l'aéroport, chauffeur, guide local, restauration maison, shopping détaxe et expériences sportives ou touristiques.",
    },
    realEstate: {
      eyebrow: "Gestion & investissement",
      title: "Un pilotage immobilier clair, rentable et rassurant.",
      intro:
        "Nous prenons en charge les détails qui fatiguent les propriétaires: suivi des locataires, stabilité des loyers, vérification des documents, études de terrain et coordination juridique.",
      services: [
        "Gestion locative et suivi propriétaire",
        "Recherche de locataires fiables",
        "Collecte des loyers et tableau de suivi",
        "Achat, vente, prospection et étude de terrain",
        "Authentification des documents et des propriétaires",
        "Assistance juridique avant, pendant et après litige",
      ],
    },
    travel: {
      eyebrow: "Agence de voyage premium",
      title: "Des séjours conçus comme une prise en charge totale.",
      intro:
        "Du billet d'avion au checking retour, Kela Travel organise un séjour sans friction: accueil, transport, hôtel, repas, guide, traduction, courses et expériences personnalisées.",
      services: [
        "Réservation billet aller-retour et hôtel",
        "Accueil à l'aéroport avec voiture",
        "Accompagnement à l'hôtel et pendant le séjour",
        "Guide touristique et traduction locale",
        "Cuisine occidentale ou congolaise faite maison",
        "Shopping accompagné avec aide à la détaxe",
      ],
      destinations: [
        "Afrique du Sud",
        "France",
        "Belgique",
        "Allemagne",
        "Portugal",
        "Suède",
        "Royaume-Uni",
        "Canada",
        "États-Unis - Californie",
      ],
      experiences: [
        "Séjours touristiques privés",
        "Voyages business et famille",
        "Parcours football: PSG, Barça, Real, Chelsea",
        "Billetterie match selon calendrier",
      ],
    },
    method: {
      eyebrow: "Comment nous travaillons",
      title: "Une expérience cadrée, humaine et pilotée de bout en bout.",
      steps: [
        {
          title: "Écoute",
          body: "Nous clarifions votre objectif: investir, gérer un bien, vendre, acheter ou voyager avec une prise en charge premium.",
        },
        {
          title: "Conception",
          body: "Nous dessinons un plan simple: services utiles, budget, planning, risques, documents et niveau d'accompagnement souhaité.",
        },
        {
          title: "Exécution",
          body: "Nous coordonnons les intervenants, suivons les étapes et restons disponibles jusqu'à la livraison du service.",
        },
      ],
    },
    founder: {
      eyebrow: "Vision",
      title: "Un pont fiable entre la diaspora, la RDC et le monde.",
      name: "Monsieur Patrick KABANGU",
      body:
        "Investir en République Démocratique du Congo est un rêve pour beaucoup de Congolais de la diaspora et du pays. Kela Invest répond à cette ambition avec plusieurs années d'expérience dans les grandes banques et agences immobilières françaises, puis étend cette exigence à une offre Travel premium.",
    },
    contact: {
      eyebrow: "Contact",
      title: "Dites-nous ce que vous voulez sécuriser ou organiser.",
      body:
        "Un bien à gérer, un investissement à analyser, un séjour premium à préparer: l'équipe vous répond avec une proposition claire.",
      email: "contact@kelainvest.com",
      phone: "+243 8 20 23 08 82",
      office:
        "60 boulevard du 30 juin, immeuble MAYUMBE, 6e étage, C/ Gombe, Kinshasa, RD Congo",
      hours:
        "Lun - Ven de 08h30 à 17h avec ou sans rendez-vous. Sam de 08h à 13h uniquement sur rendez-vous.",
      cta: "Envoyer un email",
    },
  },
  en: {
    nav: {
      home: "Home",
      realEstate: "Real estate",
      travel: "Travel",
      method: "Method",
      founder: "Founder",
      contact: "Contact",
    },
    hero: {
      eyebrow: "Real estate investment & premium travel agency",
      title: "Your properties, your journeys, your ambitions. We handle the essentials.",
      intro:
        "Kela Invest supports demanding owners, investors and travellers with one complete approach: property management, transactions, legal support and bespoke premium stays.",
      primary: "Explore services",
      secondary: "Talk to an advisor",
    },
    pillars: {
      title: "One brand, two complementary expertises.",
      intro:
        "Kela Invest is expanding: the company keeps its real estate discipline and introduces Kela Travel, a high-touch premium travel concierge.",
      realEstateTitle: "Real estate wealth",
      realEstateBody:
        "Rental management, tenant search, rent collection, property purchase and sale, profitability analysis and legal assistance.",
      travelTitle: "Kela Travel",
      travelBody:
        "Flights, hotels, airport welcome, chauffeur, local guide, homemade meals, tax-free shopping assistance and sports or tourism experiences.",
    },
    realEstate: {
      eyebrow: "Management & investment",
      title: "Clear, profitable and reassuring real estate stewardship.",
      intro:
        "We handle the details that exhaust owners: tenant follow-up, rent stability, document checks, land studies and legal coordination.",
      services: [
        "Rental management and owner reporting",
        "Search for reliable tenants",
        "Rent collection and monitoring dashboard",
        "Purchase, sale, prospecting and land study",
        "Document and owner authentication",
        "Legal assistance before, during and after disputes",
      ],
    },
    travel: {
      eyebrow: "Premium travel agency",
      title: "Stays designed as total care.",
      intro:
        "From flight booking to return check-in, Kela Travel creates a frictionless stay: welcome, transport, hotel, meals, guide, translation, shopping and tailored experiences.",
      services: [
        "Round-trip flight and hotel booking",
        "Airport welcome with car",
        "Hotel transfer and stay assistance",
        "Tour guide and local translation",
        "Western or Congolese homemade cuisine",
        "Shopping assistance with tax refund support",
      ],
      destinations: [
        "South Africa",
        "France",
        "Belgium",
        "Germany",
        "Portugal",
        "Sweden",
        "United Kingdom",
        "Canada",
        "United States - California",
      ],
      experiences: [
        "Private tourism stays",
        "Business and family travel",
        "Football journeys: PSG, Barca, Real, Chelsea",
        "Match tickets depending on schedule",
      ],
    },
    method: {
      eyebrow: "How we work",
      title: "A framed, human experience managed from start to finish.",
      steps: [
        {
          title: "Listen",
          body: "We clarify your goal: invest, manage a property, sell, buy or travel with premium assistance.",
        },
        {
          title: "Design",
          body: "We shape a simple plan: useful services, budget, schedule, risks, documents and the right level of support.",
        },
        {
          title: "Deliver",
          body: "We coordinate partners, follow the steps and stay available until the service is delivered.",
        },
      ],
    },
    founder: {
      eyebrow: "Vision",
      title: "A trusted bridge between the diaspora, the DRC and the world.",
      name: "Mr Patrick KABANGU",
      body:
        "Investing in the Democratic Republic of Congo is a dream for many Congolese people in the diaspora and at home. Kela Invest answers that ambition with years of experience in major French banks and real estate agencies, now extended into a premium Travel offer.",
    },
    contact: {
      eyebrow: "Contact",
      title: "Tell us what you want to secure or organize.",
      body:
        "A property to manage, an investment to analyze, a premium stay to prepare: the team replies with a clear proposal.",
      email: "contact@kelainvest.com",
      phone: "+243 8 20 23 08 82",
      office:
        "60 boulevard du 30 juin, immeuble MAYUMBE, 6th floor, C/ Gombe, Kinshasa, DR Congo",
      hours:
        "Mon - Fri from 08:30 to 17:00 with or without appointment. Sat from 08:00 to 13:00 by appointment only.",
      cta: "Send an email",
    },
  },
};

const gallery: StaticImageData[] = [interior, architecture, building, rural, spacious, style];

const travelHero =
  "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1600&q=85";
const travelCity =
  "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?auto=format&fit=crop&w=1200&q=85";

export default function Home() {
  const [language, setLanguage] = useState<Language>("fr");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showHeader, setShowHeader] = useState(true);

  const copy = content[language];
  const stats = [
    { value: "02", label: language === "fr" ? "expertises" : "expertises" },
    { value: "09+", label: language === "fr" ? "destinations" : "destinations" },
    { value: "360°", label: language === "fr" ? "prise en charge" : "full support" },
  ];

  useEffect(() => {
    const controlHeader = () => {
      setShowHeader(window.scrollY < lastScrollY || window.scrollY < 12);
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", controlHeader, { passive: true });
    return () => window.removeEventListener("scroll", controlHeader);
  }, [lastScrollY]);

  const navItems = useMemo(
    () => [
      { href: "#home", label: copy.nav.home },
      { href: "#real-estate", label: copy.nav.realEstate },
      { href: "#travel", label: copy.nav.travel },
      { href: "#method", label: copy.nav.method },
      { href: "#founder", label: copy.nav.founder },
      { href: "#contact", label: copy.nav.contact },
    ],
    [copy]
  );

  return (
    <main className={`${montserrat.className} bg-[#f5f7f2] text-[#101819]`}>
      <motion.header
        initial={{ y: 0, opacity: 1 }}
        animate={{ y: showHeader ? 0 : -110, opacity: showHeader ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed left-0 top-0 z-50 w-full px-4 pt-4 md:px-8"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between border border-white/50 bg-[#fbfcf7]/90 px-4 py-3 shadow-[0_24px_80px_rgba(31,24,15,0.12)] backdrop-blur-xl md:px-6">
          <Link href="#home" className="flex items-center gap-3">
            <Image src={KELA} alt="Kela Invest" width={150} height={46} className="h-auto w-[135px] md:w-[150px]" />
          </Link>

          <nav className="hidden items-center gap-7 text-sm font-semibold uppercase text-[#263735] lg:flex">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-[#b98b2f]">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setLanguage(language === "fr" ? "en" : "fr")}
              className="border border-[#101819] px-3 py-2 text-xs font-bold uppercase transition hover:bg-[#101819] hover:text-white"
            >
              {language === "fr" ? "EN" : "FR"}
            </button>
            <button
              onClick={() => setIsMenuOpen((value) => !value)}
              className="grid h-10 w-10 place-items-center border border-[#101819] lg:hidden"
              aria-label="Menu"
            >
              <Icon icon={isMenuOpen ? "mdi:close" : "mdi:menu"} className="text-2xl" />
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              className="mx-auto mt-2 max-w-7xl border border-white/50 bg-[#fbfcf7] px-6 py-5 shadow-2xl lg:hidden"
            >
              <div className="grid gap-4 text-sm font-bold uppercase">
                {navItems.map((item) => (
                  <Link key={item.href} href={item.href} onClick={() => setIsMenuOpen(false)}>
                    {item.label}
                  </Link>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.header>

      <section id="home" className="relative min-h-screen overflow-hidden bg-[#0f1718] px-4 pb-12 pt-32 text-white md:px-8 md:pt-40">
        <Image src={hero} alt="Modern city apartment building" fill priority className="object-cover opacity-45" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(217,177,92,0.36),transparent_32%),linear-gradient(105deg,rgba(15,12,9,0.96),rgba(15,12,9,0.62)_48%,rgba(15,12,9,0.34))]" />

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
          <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-4xl">
            <p className="mb-6 text-xs font-bold uppercase text-[#d8b35e]">{copy.hero.eyebrow}</p>
            <h1 className="max-w-2xl text-5xl font-black leading-[0.95] md:text-7xl">
            {/* <h1 className="max-w-2xl text-5xl font-black leading-[0.95] md:text-7xl lg:text-8xl"> */}
              {copy.hero.title}
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#eef3ea] md:text-xl">{copy.hero.intro}</p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link href="#pillars" className="bg-[#d8aa45] px-6 py-4 text-center text-sm font-black uppercase text-[#101819] transition hover:bg-white">
                {copy.hero.primary}
              </Link>
              <Link href="#contact" className="border border-white/45 px-6 py-4 text-center text-sm font-black uppercase text-white transition hover:border-white hover:bg-white hover:text-[#101819]">
                {copy.hero.secondary}
              </Link>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }} className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {stats.map((stat) => (
              <div key={stat.label} className="border border-white/20 bg-white/10 p-5 backdrop-blur-md">
                <p className="text-4xl font-black text-[#d8aa45]">{stat.value}</p>
                <p className="mt-1 text-xs font-bold uppercase text-[#eef3ea]">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="pillars" className="px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase text-[#0f766e]">Kela Invest</p>
            <h2 className="mt-4 text-4xl font-black leading-tight md:text-6xl">{copy.pillars.title}</h2>
            <p className="mt-6 text-lg leading-8 text-[#52615e]">{copy.pillars.intro}</p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            <PillarCard
              icon="mdi:home-city-outline"
              title={copy.pillars.realEstateTitle}
              body={copy.pillars.realEstateBody}
              image={cafe}
              href="#real-estate"
              action={language === "fr" ? "Explorer" : "Explore"}
            />
            <PillarCard
              icon="mdi:airplane"
              title={copy.pillars.travelTitle}
              body={copy.pillars.travelBody}
              imageUrl={travelHero}
              href="#travel"
              action={language === "fr" ? "Explorer" : "Explore"}
            />
          </div>
        </div>
      </section>

      <section id="real-estate" className="bg-[#101819] px-4 py-20 text-white md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="relative min-h-[520px] overflow-hidden">
            <Image src={woman} alt="Real estate advisor working with a client" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="text-sm font-bold uppercase text-[#f0c970]">Kinshasa - RDC</p>
              <p className="mt-2 max-w-md text-2xl font-black">
                {language === "fr" ? "Gestion, transaction, sécurisation et suivi." : "Management, transaction, security and follow-up."}
              </p>
            </div>
          </div>

          <div>
            <p className="text-xs font-black uppercase text-[#d8aa45]">{copy.realEstate.eyebrow}</p>
            <h2 className="mt-4 text-4xl font-black leading-tight md:text-6xl">{copy.realEstate.title}</h2>
            <p className="mt-6 text-lg leading-8 text-[#ddd2c1]">{copy.realEstate.intro}</p>
            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {copy.realEstate.services.map((service) => (
                <ServiceItem key={service} icon="mdi:check-circle-outline" label={service} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="travel" className="relative overflow-hidden bg-[#fbfcf7] px-4 py-20 md:px-8 md:py-28">
        <div className="absolute right-0 top-0 hidden h-full w-[38%] bg-[#d8aa45] lg:block" />
        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase text-[#0f766e]">{copy.travel.eyebrow}</p>
            <h2 className="mt-4 text-4xl font-black leading-tight md:text-6xl">{copy.travel.title}</h2>
            <p className="mt-6 text-lg leading-8 text-[#52615e]">{copy.travel.intro}</p>

            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {copy.travel.services.map((service) => (
                <ServiceItem key={service} icon="mdi:star-four-points-outline" label={service} dark={false} />
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            <div
              className="min-h-[380px] bg-cover bg-center shadow-[0_34px_90px_rgba(31,24,15,0.22)]"
              style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.08), rgba(0,0,0,0.45)), url(${travelCity})` }}
              role="img"
              aria-label="Premium travel destination"
            />
            <div className="grid gap-4 sm:grid-cols-2">
              <InfoPanel title={language === "fr" ? "Destinations" : "Destinations"} items={copy.travel.destinations} />
              <InfoPanel title={language === "fr" ? "Expériences" : "Experiences"} items={copy.travel.experiences} />
            </div>
          </div>
        </div>
      </section>

      <section id="method" className="px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-black uppercase text-[#0f766e]">{copy.method.eyebrow}</p>
              <h2 className="mt-4 text-4xl font-black leading-tight md:text-6xl">{copy.method.title}</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {copy.method.steps.map((step, index) => (
                <div key={step.title} className="border border-[#d7ded7] bg-[#fbfcf7] p-6">
                  <p className="text-5xl font-black text-[#d8aa45]">0{index + 1}</p>
                  <h3 className="mt-8 text-2xl font-black">{step.title}</h3>
                  <p className="mt-4 leading-7 text-[#52615e]">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#101819] px-4 py-20 text-white md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-black uppercase text-[#d8aa45]">
                {language === "fr" ? "Portfolio visuel" : "Visual portfolio"}
              </p>
              <h2 className="mt-4 text-4xl font-black md:text-6xl">{language === "fr" ? "Un univers premium, concret et lisible." : "A premium world, concrete and clear."}</h2>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-6">
            {gallery.map((image, index) => (
              <div key={image.src} className={`relative min-h-[220px] overflow-hidden ${index === 0 || index === 5 ? "md:col-span-2 md:row-span-2 md:min-h-[455px]" : "md:col-span-2"}`}>
                <Image src={image} alt="Kela Invest property visual" fill className="object-cover transition duration-700 hover:scale-105" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="founder" className="px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div className="relative min-h-[520px] overflow-hidden bg-[#101819]">
            <Image src={patrick} alt={copy.founder.name} fill className="object-cover" />
          </div>
          <div>
            <p className="text-xs font-black uppercase text-[#0f766e]">{copy.founder.eyebrow}</p>
            <h2 className="mt-4 text-4xl font-black leading-tight md:text-6xl">{copy.founder.title}</h2>
            <p className="mt-8 text-xl font-black">{copy.founder.name}</p>
            <p className="mt-5 text-lg leading-8 text-[#52615e]">{copy.founder.body}</p>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#0f4d4a] px-4 py-20 text-white md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-xs font-black uppercase text-[#d8aa45]">{copy.contact.eyebrow}</p>
            <h2 className="mt-4 text-4xl font-black leading-tight md:text-6xl">{copy.contact.title}</h2>
            <p className="mt-6 text-lg leading-8 text-[#eef3ea]">{copy.contact.body}</p>
            <a href={`mailto:${copy.contact.email}`} className="mt-10 inline-flex items-center gap-3 bg-[#d8aa45] px-6 py-4 text-sm font-black uppercase text-[#101819] transition hover:bg-white">
              {copy.contact.cta}
              <Icon icon="mdi:arrow-right" className="text-xl" />
            </a>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <ContactCard icon="mdi:email-outline" title="Email" body={copy.contact.email} href={`mailto:${copy.contact.email}`} />
            <ContactCard icon="mdi:phone-outline" title={language === "fr" ? "Téléphone" : "Phone"} body={copy.contact.phone} href="tel:+243820230882" />
            <ContactCard icon="mdi:map-marker-outline" title={language === "fr" ? "Bureau" : "Office"} body={copy.contact.office} />
            <ContactCard icon="mdi:clock-outline" title={language === "fr" ? "Horaires" : "Hours"} body={copy.contact.hours} />
          </div>
        </div>
      </section>

      <footer className="bg-[#101819] px-4 py-8 text-center text-sm font-semibold uppercase text-[#eef3ea]">
        © {new Date().getFullYear()} Kela Invest. Real Estate & Premium Travel.
      </footer>
    </main>
  );
}

function PillarCard({
  icon,
  title,
  body,
  href,
  image,
  imageUrl,
  action,
}: {
  icon: string;
  title: string;
  body: string;
  href: string;
  image?: StaticImageData;
  imageUrl?: string;
  action: string;
}) {
  return (
    <Link href={href} className="group relative min-h-[430px] overflow-hidden bg-[#101819] p-6 text-white">
      {image ? (
        <Image src={image} alt="" fill className="object-cover opacity-55 transition duration-700 group-hover:scale-105 group-hover:opacity-70" />
      ) : (
        <div className="absolute inset-0 bg-cover bg-center opacity-55 transition duration-700 group-hover:scale-105 group-hover:opacity-70" style={{ backgroundImage: `url(${imageUrl})` }} />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-[#101819] via-[#101819]/35 to-transparent" />
      <div className="relative flex h-full min-h-[382px] flex-col justify-between">
        <Icon icon={icon} className="text-5xl text-[#d8aa45]" />
        <div>
          <h3 className="text-4xl font-black">{title}</h3>
          <p className="mt-4 max-w-xl text-lg leading-8 text-[#eef3ea]">{body}</p>
          <span className="mt-6 inline-flex items-center gap-2 text-sm font-black uppercase text-[#d8aa45]">
            {action} <Icon icon="mdi:arrow-right" />
          </span>
        </div>
      </div>
    </Link>
  );
}

function ServiceItem({ icon, label, dark = true }: { icon: string; label: string; dark?: boolean }) {
  return (
    <div className={`flex items-start gap-3 border p-4 ${dark ? "border-white/15 bg-white/5 text-[#eef3ea]" : "border-[#d7ded7] bg-white text-[#243533]"}`}>
      <Icon icon={icon} className="mt-1 shrink-0 text-xl text-[#d8aa45]" />
      <p className="font-semibold leading-7">{label}</p>
    </div>
  );
}

function InfoPanel({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="bg-[#101819] p-5 text-white">
      <h3 className="text-lg font-black uppercase text-[#d8aa45]">{title}</h3>
      <div className="mt-5 flex flex-wrap gap-2">
        {items.map((item) => (
          <span key={item} className="border border-white/15 px-3 py-2 text-xs font-bold uppercase text-[#eef3ea]">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function ContactCard({ icon, title, body, href }: { icon: string; title: string; body: string; href?: string }) {
  const contentNode = (
    <>
      <Icon icon={icon} className="text-3xl text-[#101819]" />
      <h3 className="mt-5 text-xl font-black">{title}</h3>
      <p className="mt-3 leading-7 text-[#163836]">{body}</p>
    </>
  );

  if (href) {
    return (
      <a href={href} className="bg-[#fbfcf7] p-6 transition hover:-translate-y-1 hover:bg-white">
        {contentNode}
      </a>
    );
  }

  return <div className="bg-[#fbfcf7] p-6">{contentNode}</div>;
}
