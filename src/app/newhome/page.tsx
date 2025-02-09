"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image";
import { Montserrat } from "next/font/google";

import maintenanceImage from "@/../../public/images/kalunderconstruction.png";
import agent from "@/../../public/images/front-view-man-working-as-real-estate-agent.jpg";
import businesswoman from "@/../../public/images/portrait-elegant-professional-businesswoman.jpg";
import hall from "@/../../public/images/three-diverse-business-partners-meeting-office-hall.jpg";
import cafe from "@/../../public/images/two-african-businessman-sitting-outside-cafe.jpg";
import hero from "@/../../public/images/apartment-building-city-with-copy-space.jpg";
import patrick from "@/../../public/images/patrick.jpeg"
import woman from "@/../../public/images/smiling-woman-writing-notes-tablet-digital-device_53876-111318.jpg"


import face from "@/../../public/images/faces/beautiful-african-young-woman-face-portrait.jpg";
import face1 from "@/../../public/images/faces/handsome-man-smiling-happy-face-portrait-close-up.jpg";
import face2 from "@/../../public/images/faces/sleepy-mixed-race-man-portrait-deep-blue-background_633478-2106.jpg";
import face3 from "@/../../public/images/faces/handsome-adult-male-posing_23-2148729713.jpg";


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
    contactForm: {
      name: string;
      email: string;
      phone: string;
      message: string;
      submit: string;
    };
  };
};

export default function NewHome() {
  const [language, setLanguage] = useState<Language>("en");
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const testimonials = [
    {
      id:1,
      image:face,
      message:"Service exceptionnel et professionnalisme remarquable."
    },
    {
      id:2,
      image:face1,
      message:"Service exceptionnel et professionnalisme remarquable."
    },
    {
      id:3,
      image:face2,
      message:"Service exceptionnel et professionnalisme remarquable."
    },
    {
      id:4,
      image:face3,
      message:"Service exceptionnel et professionnalisme remarquable."
    },
  ]

  const content: Content = {
    en: {
      heroTitle:
        "Your Property, Our Expertise – Seamless Management & Investment Solutions",
      heroSubtitle:
        "Discover Kelainvest, your trusted partner in real estate management and investment. We make property ownership stress-free and profitable.",
      heroCTA: "Get Started",
      aboutTitle:
        "Discover Kelainvest: Your Partner in Real Estate Excellence and Investment.",
      aboutText:
        "Kelainvest provides top-tier real estate management services, ensuring maximum returns and hassle-free property ownership.",
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
        "At Kelainvest, we handle all aspects of property management. Our experienced team ensures a worry-free experience for both property owners and tenants.",
      tenantSearchTitle: "Tenant Search",
      tenantSearchDesc:
        "We find the best tenants for your property, ensuring reliable income.",
      rentCollectionTitle: "Rent Collection",
      rentCollectionDesc:
        "We manage rent collection for you, simplifying your cash flow.",
      contactForm: {
        name: "Name",
        email: "Email",
        phone: "Phone Number",
        message: "Message",
        submit: "Send Message",
      },
    },
    fr: {
      heroTitle:
        "Votre Propriété, Notre Expertise – Solutions Élégantes de Gestion & Investissement",
      heroSubtitle:
        "Découvrez Kelainvest, votre partenaire de confiance en gestion immobilière et investissement. Nous simplifions la gestion de vos biens tout en maximisant leur rentabilité.",
      heroCTA: "Commencer",
      aboutTitle:
        "Découvrez Kelainvest : Votre Partenaire en Excellence Immobilière et Investissement.",
      aboutText:
        "Kelainvest offre des services de gestion immobilière haut de gamme, garantissant des rendements optimaux et une gestion sans tracas.",
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
        "Chez Kelainvest, nous nous occupons de tous les aspects de la gestion immobilière. Notre équipe expérimentée garantit une expérience sans souci pour les propriétaires et les locataires.",
      tenantSearchTitle: "Recherche de locataires",
      tenantSearchDesc:
        "Nous trouvons les meilleurs locataires pour votre propriété, assurant des revenus fiables.",
      rentCollectionTitle: "Collecte de loyer",
      rentCollectionDesc:
        "Nous gérons la collecte des loyers pour vous, simplifiant ainsi votre flux de trésorerie.",
      contactForm: {
        name: "Nom",
        email: "Email",
        phone: "Numéro de téléphone",
        message: "Message",
        submit: "Envoyer le message",
      },
    },
  };

  return (
    <div className={`${montserrat.className} bg-gray-100 text-gray-900`}>
      {/* Updated Header with Navigation */}
      <header className="bg-white font-bold text-black py-6 px-8 fixed w-full z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-3xl font-bold text-gold-500"
          >
            Kelainvest
          </motion.h1>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="#accueil"
              className="hover:text-gold-500 transition-colors"
            >
              Accueil
            </Link>
            <Link
              href="#services"
              className="hover:text-gold-500 transition-colors"
            >
              Services
            </Link>
            <Link
              href="#temoignages"
              className="hover:text-gold-500 transition-colors"
            >
              Témoignages
            </Link>
            <Link
              href="#apropos"
              className="hover:text-gold-500 transition-colors"
            >
              À Propos
            </Link>
         
          </nav>
          <button
              className="px-4 py-2 border border-gold-500 rounded-lg hover:bg-gold-500 transition-all"
              onClick={() => setLanguage(language === "en" ? "fr" : "en")}
            >
              {language === "en" ? "Français" : "English"}
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
              className="md:hidden absolute top-full left-0 w-full bg-gray-900 py-4"
            >
              <div className="flex flex-col items-center space-y-4">
                <Link
                  href="#accueil"
                  className="hover:text-gold-500 transition-colors"
                >
                  Accueil
                </Link>
                <Link
                  href="#services"
                  className="hover:text-gold-500 transition-colors"
                >
                  Services
                </Link>
                <Link
                  href="#temoignages"
                  className="hover:text-gold-500 transition-colors"
                >
                  Témoignages
                </Link>
                <Link
                  href="#apropos"
                  className="hover:text-gold-500 transition-colors"
                >
                  À Propos
                </Link>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
         {/* Add this section to your JSX */}
     

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="h-screen flex items-center justify-center text-center relative"
        style={{
          backgroundImage:
            `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${hero.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-4xl px-6">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="md:text-5xl font-bold text-white mb-6"
          >
            {content[language].heroTitle}
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-white mb-8"
          >
            {content[language].heroSubtitle}
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
   <section className="py-20 px-4 md:px-2 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-12">
          {content[language].servicesTitle}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <motion.div
            whileHover={{ y: -10 }}
            className="p-8 bg-white cursor-pointer shadow-xl rounded-lg flex flex-col items-center text-center"
          >
            <Icon
              icon="mdi:home-outline"
              style={{ color: '#FFD700' }}
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
              style={{ color: '#FFD700' }}
              className="text-5xl text-gold-500 mb-6"
            />
            <p className="text-lg">{content[language].service2}</p>
          </motion.div>
          <motion.div
            whileHover={{ y: -10 }}
            className="p-8 bg-white cursor-pointer shadow-xl rounded-lg flex flex-col items-center text-center"
          >
            <Icon icon="mdi:tools" 
              style={{ color: '#FFD700' }}
            className="text-5xl text-gold-500 mb-6" />
            <p className="text-lg">{content[language].service3}</p>
          </motion.div>
          <motion.div
            whileHover={{ y: -10 }}
            className="p-8 bg-white cursor-pointer shadow-xl rounded-lg flex flex-col items-center text-center"
          >
            <Icon
              icon="mdi:pencil-ruler"
              style={{ color: '#FFD700' }}
              className="text-5xl text-gold-500 mb-6"
            />
            <p className="text-lg">{content[language].service4}</p>
          </motion.div>
        </div>
      </section>

        <motion.section 
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
         className="py-20 px-6 border bg-white mx-auto">
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

      {/* Updated About Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-6">
              {content[language].aboutTitle}
            </h2>
            <p className="text-lg">{content[language].aboutText}</p>
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



      {/* New Gallery Section */}
<section className="py-20 px-4 bg-gray-50">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold text-center mb-12">
      Notre Galerie
    </h2>
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {[agent, businesswoman, hall, cafe].map((image, index) => (
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
      ))}
    </motion.div>
  </div>
</section>


   

      {/* Updated Testimonials Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
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
                <p className="text-lg italic">
                  {elememnt.message}
                </p>
               
                {/* <p className="text-gold-500 mt-2">Client {elememnt.id}</p> */}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Contact Section */}
        <section className="py-20 px-6 max-w-6xl mx-auto">
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
                    hello@kelainvest.com
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
                  icon="mdi:office-building-marker"
                  className="text-2xl text-gold-500"
                />
                <div>
                  <h3 className="text-xl font-semibold">Bureau</h3>
                  <address className="not-italic">
                    123 Sample St, Sydney NSW 2000 AU
                  </address>
                </div>
              </div>
            </div>
          </div>
        </section>
      </motion.section>
      <footer className="bg-gray-900 text-white text-center py-6">
        <p>
          &copy; {new Date().getFullYear()} Kelainvest. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
