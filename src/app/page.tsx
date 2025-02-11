"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, } from "framer-motion";

// import { useState,  } from "react";
// import { motion, useScroll } from "framer-motion";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image";
import { Montserrat } from "next/font/google";

// import maintenanceImage from "@/../../public/images/kalunderconstruction.png";
// import agent from "@/../../public/images/front-view-man-working-as-real-estate-agent.jpg";
// import businesswoman from "@/../../public/images/portrait-elegant-professional-businesswoman.jpg";
// import hall from "@/../../public/images/three-diverse-business-partners-meeting-office-hall.jpg";
import cafe from "@/../../public/images/two-african-businessman-sitting-outside-cafe.jpg";
import hero from "@/../../public/images/apartment-building-city-with-copy-space.jpg";
import patrick from "@/../../public/images/patrick.jpeg";
import woman from "@/../../public/images/smiling-woman-writing-notes-tablet-digital-device_53876-111318.jpg";

import face from "@/../../public/images/faces/beautiful-african-young-woman-face-portrait.jpg";
import face1 from "@/../../public/images/faces/handsome-man-smiling-happy-face-portrait-close-up.jpg";
import face2 from "@/../../public/images/faces/sleepy-mixed-race-man-portrait-deep-blue-background_633478-2106.jpg";
import face3 from "@/../../public/images/faces/handsome-adult-male-posing_23-2148729713.jpg";

// gallery

import interior from "@/../../public/images/appartments/beautiful-summer-modern-home-interior-design.jpg";
import architecture from "@/../../public/images/appartments/modern-apartment-architecture.jpg";
import building from "@/../../public/images/appartments/modern-building-architecture.jpg";
import style from "@/../../public/images/appartments/modern-style-house-exterior-with-terrace.jpg";
import rural from "@/../../public/images/appartments/rural-house-with-stone-pathway.jpg";
import spacious from "@/../../public/images/appartments/spacious-room-with-big-window.jpg";
import KELA from "@/../../public/images/KELA-LogoHorizonta.svg";
const montserrat = Montserrat({ subsets: ["latin"] });

type Language = "en" | "fr";
type Content = {
  [key in Language]: {
    heroTitle: string;
    heroSubtitle: string;
    heroCTA: string;
    aboutTitle: string;
    aboutText: string;
    servicesTitle: string;
    service1: string;
    service2: string;
    service3: string;
    service4: string;
    testimonialsTitle: string;
    contactTitle: string;
    propertyManagementTitle: string;
    propertyManagementDesc: string;
    tenantSearchTitle: string;
    tenantSearchDesc: string;
    rentCollectionTitle: string;
    rentCollectionDesc: string;
    propertyTransactionTitle: string;
    propertyTransactionDesc: string;
    legalAssistanceTitle: string;
    legalAssistanceDesc: string;
    gallery: string;
    slogan:string;
    fondateur: {
      titre: string;
      description: string;
    };
    contactForm: {
      name: string;
      email: string;
      phone: string;
      message: string;
      submit: string;
    };

    navbar: {
      home: string;
      services: string;
      testimonials: string;
      about: string;
      contact: string;
    };
  };
};

export default function Home() {
  const [language, setLanguage] = useState<Language>("fr");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [shouldShowHeader, setShouldShowHeader] = useState(true);

  // Add scroll handler
  useEffect(() => {
    const controlHeader = () => {
      if (typeof window !== "undefined") {
        // Show header when scrolling up or at top
        if (window.scrollY < lastScrollY || window.scrollY < 10) {
          setShouldShowHeader(true);
        } else {
          // Hide header when scrolling down
          setShouldShowHeader(false);
        }
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlHeader);

      // Cleanup
      return () => {
        window.removeEventListener("scroll", controlHeader);
      };
    }
  }, [lastScrollY]);

  const testimonials = [
    {
      id: 1,
      image: face,
      message: "Service exceptionnel et professionnalisme remarquable.",
    },
    {
      id: 2,
      image: face1,
      message: "Service exceptionnel et professionnalisme remarquable.",
    },
    {
      id: 3,
      image: face2,
      message: "Service exceptionnel et professionnalisme remarquable.",
    },
    {
      id: 4,
      image: face3,
      message: "Service exceptionnel et professionnalisme remarquable.",
    },
  ];

  const content: Content = {
    en: {
      navbar: {
        home: "Home",
        services: "Services",
        testimonials: "Testimonials",
        about: "About",
        contact: "Contact",
      },
      slogan:"With us, the security of your property investments is guaranteed ",
      heroTitle:
        "Your Property, Our Expertise  Seamless Management & Investment Solutions",
      heroSubtitle:
        "Discover Kela Invest, your trusted partner in real estate management and investment. We make property ownership stress-free and profitable.",
      heroCTA: "Get Started",
      aboutTitle:
        "Discover Kela Invest: Your Partner in Real Estate Excellence and Investment.",
      aboutText:
        "Kela Invest provides top-tier real estate management services, ensuring maximum returns and hassle-free property ownership.",
      servicesTitle:
        "Our Exclusive Services for Unparalleled Real Estate Management.",
      service1: "Effortless property management for optimal returns.",
      service2: "Strategic investments to grow your real estate portfolio.",
      service3: "Expert maintenance and renovation for premium properties.",
      service4: "Elegant real estate design and consultation.",
      testimonialsTitle: "What Our Clients Say",
      contactTitle: "Contact Us",
      propertyManagementTitle:
        "Discover our property management services for complete peace of mind.",
      propertyManagementDesc:
        "At Kela Invest, we handle all aspects of property management. Our experienced team ensures a worry-free experience for both property owners and tenants.",
      tenantSearchTitle: "Tenant Search",
      tenantSearchDesc:
        "We find the best tenants for your property, ensuring reliable income.",
      rentCollectionTitle: "Rent Collection",
      rentCollectionDesc:
        "We manage rent collection for you, simplifying your cash flow.",
      gallery: "Gallery",
      contactForm: {
        name: "Name",
        email: "Email",
        phone: "Phone Number",
        message: "Message",
        submit: "Send Message",
      },
      fondateur: {
        titre: "Founder",
        description:
          "Investing in the Democratic Republic of Congo has always been a goal and a dream for many Congolese from the diaspora and those living in the country, but there are a number of problems that generally eat away at ambitions and systematically discourage investment. To remedy this problem, we have decided to come to your aid by making available to you our expertise and experience of several years in the largest French banks and estate agencies",
      },

      propertyTransactionTitle: "Real Estate Purchase & Sale",
      propertyTransactionDesc:
        "Document and owner authentication, land prospecting and study, valuation, feasibility and profitability analysis...",
      legalAssistanceTitle: "Legal Assistance",
      legalAssistanceDesc:
        "Legal support from our lawyers before, during and after any dispute.",
    },
    fr: {
      navbar: {
        home: "Accueil",
        services: "Services",
        testimonials: "Témoignages",
        about: "À Propos",
        contact: "Contact",
      },
      slogan:"Avec nous, la sécurité de vos investissements immobiliers est assurée ",
      
      heroTitle:
        "Votre Propriété, Notre Expertise  Solutions Élégantes de Gestion & Investissement",
      heroSubtitle:
        "Découvrez Kela Invest, votre partenaire de confiance en gestion immobilière et investissement. Nous simplifions la gestion de vos biens tout en maximisant leur rentabilité.",
      heroCTA: "Commencer",
      aboutTitle:
        "Découvrez Kela Invest : Votre Partenaire en Excellence Immobilière et Investissement.",
      aboutText:
        "Kela Invest offre des services de gestion immobilière haut de gamme, garantissant des rendements optimaux et une gestion sans tracas.",
      servicesTitle:
        "Nos services exclusifs pour une gestion immobilière sans égal.",
      service1: "Gestion locative simplifiée pour un rendement optimal.",
      service2:
        "Investissements stratégiques pour développer votre patrimoine immobilier.",
      service3: "Entretien et rénovation experts pour des propriétés premium.",
      service4: "Conception immobilière élégante et consultation.",
      testimonialsTitle: "Ce que disent nos clients",
      contactTitle: "Contactez-nous",
      propertyManagementTitle:
        "Découvrez nos services de gestion immobilière pour une tranquillité d'esprit totale.",
      propertyManagementDesc:
        "Chez Kela Invest, nous nous occupons de tous les aspects de la gestion immobilière. Notre équipe expérimentée garantit une expérience sans souci pour les propriétaires et les locataires.",
      tenantSearchTitle: "Recherche de locataires",
      tenantSearchDesc:
        "Nous trouvons les meilleurs locataires pour votre propriété, assurant des revenus fiables.",
      rentCollectionTitle: "Collecte de loyer",
      rentCollectionDesc:
        "Nous gérons la collecte des loyers pour vous, simplifiant ainsi votre flux de trésorerie.",
      gallery: "Notre gallerie",
      contactForm: {
        name: "Nom",
        email: "Email",
        phone: "Numéro de téléphone",
        message: "Message",
        submit: "Envoyer le message",
      },
      fondateur: {
        titre: "Fondateur",
        description:
          "Investir en République Démocratique du Congo a toujours été un objectif et un rêve pour beaucoup de Congolais issus de la diaspora et ceux vivant au pays, en revanche, plusieurs maux rongent généralement les ambitions et découragent systématiquement. Afin de remédier à cette problématique, nous avons décidé de vous venir en aide en mettant à votre disposition notre expertise et expérience de plusieurs années dans les plus grandes banques et agences immobilières Françaises.",
      },
      propertyTransactionTitle: "Achat et Vente de Bien Immobilier",
      propertyTransactionDesc:
        "Authentification des documents et propriétaires, prospection et étude du terrain, valorisation, analyse de faisabilité et rentabilité...",
      legalAssistanceTitle: "Assistance Juridique",
      legalAssistanceDesc:
        "Accompagnement juridique par nos juristes avant, pendant et après chaque litige.",
    },
  };

  return (
    <div className={`${montserrat.className} bg-gray-100 text-gray-900`}>
      {/* Updated Header with Navigation */}

      <motion.header
        initial={{ y: 0, opacity: 1 }}
        animate={{
          y: shouldShowHeader ? 0 : -100,
          opacity: shouldShowHeader ? 1 : 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="bg-white h-[120px] font-bold text-black py-6 px-8 fixed w-full z-50"
      >
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className=" text-gold-500"
          >
            {/* KelainvestnKELA */}
            <Image
                src={KELA}
                alt="About Kelainvest"
                height={0}
                width={160}
                // fill
                className="object-fit "
              />
          </motion.h1>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#home" className="hover:text-yellow-600">
              {content[language].navbar.home}
            </Link>
            <Link
              href="#services"
              className="hover:text-yellow-600 transition-colors"
            >
              {content[language].navbar.services}
            </Link>
            <Link href="#testimonials" className="hover:text-yellow-600">
              {content[language].navbar.testimonials}
            </Link>
            <Link href="#about" className="hover:text-yellow-600">
              {content[language].navbar.about}
            </Link>
            <Link href="#contact" className="hover:text-yellow-600">
              {content[language].navbar.contact}
            </Link>
          </nav>

          {/* Language Toggle Button */}
          <button
            className="px-4 py-2 border border-gold-500 rounded-lg hover:bg-gold-500 transition-all"
            onClick={() => setLanguage(language === "en" ? "fr" : "en")}
          >
            {language === "en" ? "Fr" : "En"}
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gold-500"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon
              icon={isMenuOpen ? "mdi:close" : "mdi:menu"}
              className="text-2xl"
            />
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden absolute top-full left-0 w-full bg-white py-4"
            >
              <div className="flex flex-col items-center space-y-4">
                <Link
                  href="#home"
                  className="hover:text-gold-500 transition-colors"
                >
                  {content[language].navbar.home}
                </Link>
                <Link
                  href="#services"
                  className="hover:text-gold-500 transition-colors"
                >
                  {content[language].navbar.services}
                </Link>
                <Link
                  href="#testimonials"
                  className="hover:text-gold-500 transition-colors"
                >
                  {content[language].navbar.testimonials}
                </Link>
                <Link
                  href="#about"
                  className="hover:text-gold-500 transition-colors"
                >
                  {content[language].navbar.about}
                </Link>
                <Link
                  href="#contact"
                  className="hover:text-gold-500 transition-colors"
                >
                  {content[language].navbar.contact}
                </Link>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.header>
      {/* Add this section to your JSX */}

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        id="home"
        className="h-screen flex items-center justify-center text-center relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${hero.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-4xl px-6">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="md:text-3xl font-bold text-white mb-6"
          >
            {content[language].heroSubtitle}
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-white mb-8"
          >
            
            {content[language].slogan}

          </motion.p>
          {/* <motion.button
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="bg-gold-500 text-white px-8 py-4 text-lg font-semibold rounded-lg hover:bg-gold-600 transition-all"
          >
            {content[language].heroCTA}
          </motion.button> */}
        </div>
      </motion.section>
      {/* <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-6">{content[language].aboutTitle}</h2>
        <p className="text-lg text-center mb-8">{content[language].aboutText}</p>
      </section> */}

      {/* service */}
      <section id="services" className="py-20 px-4 md:px-2 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-12">
          {content[language].servicesTitle}
        </h2>
        <div className="grid grid-cols-1   md:grid-cols-3 gap-8">
          <motion.div
            whileHover={{ y: -10 }}
            className="p-8 bg-white cursor-pointer shadow-xl rounded-lg flex flex-col items-center text-center"
          >
            <Icon
              icon="mdi:home-outline"
              style={{ color: "#FFD700" }}
              className="text-5xl text-gold-500 mb-6"
            />
            <p className="text-lg">{content[language].service1}</p>
          </motion.div>
          <motion.div
            whileHover={{ y: -10 }}
            className="p-8 bg-white cursor-pointer shadow-xl rounded-lg flex flex-col items-center text-center"
          >
            <Icon
              icon="mdi:office-building"
              style={{ color: "#FFD700" }}
              className="text-5xl text-gold-500 mb-6"
            />
            <p className="text-lg">{content[language].service2}</p>
          </motion.div>
          <motion.div
            whileHover={{ y: -10 }}
            className="p-8 bg-white cursor-pointer shadow-xl rounded-lg flex flex-col items-center text-center"
          >
            <Icon
              icon="mdi:tools"
              style={{ color: "#FFD700" }}
              className="text-5xl text-gold-500 mb-6"
            />
            <p className="text-lg">{content[language].service3}</p>
          </motion.div>
          <motion.div
            whileHover={{ y: -10 }}
            className="p-8 bg-white cursor-pointer shadow-xl rounded-lg flex flex-col items-center text-center"
          >
            <Icon
              icon="mdi:pencil-ruler"
              style={{ color: "#FFD700" }}
              className="text-5xl text-gold-500 mb-6"
            />
            <p className="text-lg">{content[language].service4}</p>
          </motion.div>

          {/* New Property Transaction Service */}
          <motion.div
            whileHover={{ y: -10 }}
            className="p-8 bg-white cursor-pointer shadow-xl rounded-lg flex flex-col items-center text-center"
          >
            <Icon
              icon="mdi:handshake"
              className="text-5xl mb-6"
              style={{ color: "#FFD700" }}
            />
            {/* <h3 className="font-semibold mb-2">
        {content[language].propertyTransactionTitle}
      </h3> */}
            <p className="text-sm">
              {content[language].propertyTransactionDesc}
            </p>
          </motion.div>

          {/* New Legal Assistance Service */}
          <motion.div
            whileHover={{ y: -10 }}
            className="p-8 bg-white cursor-pointer shadow-xl rounded-lg flex flex-col items-center text-center"
          >
            <Icon
              icon="mdi:scale-balance"
              className="text-5xl mb-6"
              style={{ color: "#FFD700" }}
            />
            {/* <h3 className="font-semibold mb-2">
              {content[language].legalAssistanceTitle}
            </h3> */}
            <p className="text-sm">{content[language].legalAssistanceDesc}</p>
          </motion.div>
        </div>
      </section>

         {/* Updated About Section */}
         <section id="about" className="py-20 px-6 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-semibold mb-4">
                {content[language].fondateur.titre}
              </h2>
              <p className="font-bold text-lg mb-2">
                Monsieur Patrick KABANGU
              </p>
              <p className="text-lg">
                {content[language].fondateur.description}
              </p>
            </div>
            <div className="relative h-[400px]">
              <Image
                src={patrick}
                alt="About Kelainvest"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </section>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="py-20 px-6 border bg-white mx-auto"
      >
        <div className="grid md:grid-cols-2 gap-12  items-center">
          <div className="relative h-[600px]">
            <Image
              src={cafe}
              alt="Property Management Services"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <h2 className="text-4xl font-bold">
              {content[language].propertyManagementTitle}
            </h2>
            <p className="text-lg">
              {content[language].propertyManagementDesc}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">
                  {content[language].tenantSearchTitle}
                </h3>
                <p>{content[language].tenantSearchDesc}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">
                  {content[language].rentCollectionTitle}
                </h3>
                <p>{content[language].rentCollectionDesc}</p>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
        </div>
      </motion.section>

      {/* Add this section to your JSX */}
      <section className="py-20 px-6 max-w-6xl  mx-auto">
        <div className="grid md:grid-cols-2 gap-12  items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <h2 className="text-4xl font-bold">
              {content[language].propertyTransactionTitle}
            </h2>
            <p className="text-lg">
              {content[language].propertyTransactionDesc}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  {content[language].legalAssistanceTitle}
                </h3>
                <p>{content[language].legalAssistanceDesc}</p>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative h-[600px]">
            <Image
              src={woman}
              alt="Property Management Services"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* New Gallery Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            {content[language].gallery}
          </h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[interior, architecture, building, rural, spacious, style].map(
              (image, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="relative h-[300px] overflow-hidden rounded-lg shadow-lg"
                >
                  <Image
                    src={image}
                    alt={`Gallery image ${index + 1}`}
                    fill
                    className="object-cover transition-transform hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-30 transition-all" />
                </motion.div>
              )
            )}
          </motion.div>
        </div>
      </section>

      {/* Updated Testimonials Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        id="testimonials"
        className="py-20 px-2 mx-auto"
      >
        <h2 className="text-3xl font-semibold text-center mb-12">
          {content[language].testimonialsTitle}
        </h2>
        <motion.div
          initial={{ x: 300 }}
          animate={{ x: -300 }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex items-center space-x-8"
        >
          {testimonials.map((elememnt) => (
            <div
              key={elememnt.id}
              className="flex items-center space-x-4 bg-white p-6 rounded-lg shadow-lg min-w-[300px]"
            >
              <Image
                src={elememnt.image}
                alt={`Client ${elememnt.id}`}
                width={50}
                height={50}
                className="rounded-full"
              />
              <div>
                <p className="text-lg italic">{elememnt.message}</p>

                {/* <p className="text-gold-500 mt-2">Client {elememnt.id}</p> */}
              </div>
            </div>
          ))}
        </motion.div>

     

        {/* Contact Section */}
        <section id="contact" className="py-20 px-6 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column */}
            <div>
              <span className="text-gold-500">Contact</span>
              <h2 className="text-4xl font-bold mb-6">Contactez-nous</h2>
              <p className="text-lg mb-8">
                Pour toute question, veuillez nous contacter via les
                informations ci-dessous.
              </p>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Icon icon="mdi:email" className="text-2xl text-gold-500" />
                <div>
                  <h3 className="text-xl font-semibold">Email</h3>
                  <a
                    href="mailto:hello@kelainvest.com"
                    className="hover:text-gold-500 underline"
                  >
                    contact@kelainvest.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Icon icon="mdi:phone" className="text-2xl text-gold-500" />
                <div>
                  <h3 className="text-xl font-semibold">Téléphone</h3>
                  <a
                    href="tel:+1555000000"
                    className="hover:text-gold-500 underline"
                  >
                    +1 (555) 000-0000
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Icon
                height={40}
                width={40}
                  icon="mdi:office-building-marker"
                  className="text-2xl text-gold-500"
                />
                <div>
                  <h3 className="text-xl font-semibold">Bureau</h3>
                  <address className="not-italic">
                  60 boulevard du 30 juin, immeuble MAYUMBA, 6e étage, C/ Gombe, Kinshasa, RD Congo
                  </address>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Icon   height={30}
                width={30} icon="mdi:alarm-clock" className="text-2xl text-gold-500" />
                <div>
                  <h3 className="text-xl font-semibold">Horaires</h3>
                  <a
                    href="tel:+1555000000"
                    className="hover:text-gold-500 "
                  >
                    Lun - Ven de 08h30 - 17h avec ou sans rendez-vous <br/> Sam de 08h - 13h uniquement sur rendez-vous.
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </motion.section>

      <footer className="bg-gray-900 text-white text-center py-6">
        <p>
          &copy; {new Date().getFullYear()} Kela Invest. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
