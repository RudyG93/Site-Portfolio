import Image from "next/image";
import React from "react";
import { assets } from "../assets/assets";
import { motion } from "motion/react"

// Composant d'en-tête principal du portfolio
const Header = () => {
  return (
    // Header principal, prend toute la hauteur de l'écran, centre le contenu
    <header className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Image de fond en plein écran, légèrement floutée */}
      <Image
        src="/montpellier.webp"
        alt="Montpellier"
        fill
        className="object-cover object-center absolute inset-0 z-0 blur-sm"
        priority
      />
      {/* Cadre transparent et très légèrement flouté pour le contenu */}
      <div className="relative z-10 w-11/12 max-w-3xl mx-auto flex flex-col items-center justify-center gap-4 py-10 px-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg text-center">
        {/* Photo de profil animée à l'apparition */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        >
          <Image src={assets.profile_img} alt="profile-img" className="rounded-full w-32 object-cover h-32" />
        </motion.div>
        {/* Sous-titre animé */}
        <motion.h3
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xl md:text-2xl mb-3"
        >
          Bonjour je suis Rudy Giacomazzo,
        </motion.h3>
        {/* Titre principal animé */}
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-3xl sm:text-6xl lg:text-[66px]"
        >
          Développeur web <br />full-stack<span className="text-red-600">.</span>
        </motion.h1>
        {/* Texte de description animé */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="max-w-2xl mx-auto"
        >
          Je suis un développeur junior basé sur Montpellier en recherche{" "}
          <strong>d'emploi</strong> ou <strong>d'une alternance</strong> afin de
          gagner en expérience et en compétences.
        </motion.p>
        {/* Liens vers réseaux sociaux et CV, animés */}
        <div
          className="flex flex-col sm:flex-row items-center gap-4 mt-4"
        >
          {/* Lien GitHub */}
          <motion.a
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            aria-label="Aller sur mon GitHub"
            href="https://github.com/RudyG93"
            target="_blank"
            className="px-10 py-3 border rounded-full border-white-500 bg-black text-white flex items-center gap-2"
          >
            <Image src={assets.github} alt="github icon" className="w-4" /> GitHub
          </motion.a>
          {/* Lien LinkedIn */}
          <motion.a
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            aria-label="Aller sur mon LinkedIn"
            href="https://www.linkedin.com/in/rudy-giacomazzo-b8aa55321/"
            target="_blank"
            className="px-10 py-3 border rounded-full border-[#0e76a8]-500 bg-[#0e76a8] text-white flex items-center gap-2"
          >
            <Image src={assets.linkedin} alt="linkedin icon" className="w-4" />{" "}
            Linkedin
          </motion.a>
          {/* Lien de téléchargement du CV */}
          <motion.a
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            href="/cv-rudy-giacomazzo.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Télécharger le CV de Rudy Giacomazzo au format PDF"
            className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2"
          >
            Mon CV
            <Image
              src={assets.download_icon}
              alt="Télécharger le CV"
              className="w-4"
            />
          </motion.a>
        </div>
      </div>
    </header>
  );
};

export default Header;
