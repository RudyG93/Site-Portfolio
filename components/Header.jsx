import Image from "next/image";
import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h(screen flex flex-col items-center justify-center gap-4 pt-50 pb-10">
      <div>
        <Image
          src={assets.profile_img}
          alt="profile-img"
          className="rounded-full w-32 object-cover h-32"
        />
      </div>
      <h3 className="text-xl md:text-2xl mb-3">
        Bonjour je suis Rudy Giacomazzo,</h3>
      <h1 className="text-3xl sm:text-6xl lg:text-[66px]">Développeur web <br />full-stack<span className="text-red-600">.</span></h1>
      <p className="max-w-2xl mx-auto">Je suis un développeur junior basé sur Montpellier en recherche <strong>d'emploi</strong> ou <strong>d'une alternance</strong> afin de gagner en expérience et en compétences.</p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4" id="about">
        <a href="https://github.com/RudyG93" target="_blank" className="px-10 py-3 border rounded-full border-white-500 bg-black text-white flex items-center gap-2"><Image src={assets.github} alt="github icon" className="w-4" /> GitHub</a>
        <a href="https://www.linkedin.com/in/rudy-giacomazzo-b8aa55321/" target="_blank" className="px-10 py-3 border rounded-full border-[#0e76a8]-500 bg-[#0e76a8] text-white flex items-center gap-2"><Image src={assets.linkedin} alt="linkedin icon" className="w-4" /> Linkedin</a>
        <a
          href="/cv-rudy-giacomazzo.pdf"
          download
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Télécharger le CV de Rudy Giacomazzo au format PDF"
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2"
        >
          Mon CV
          <Image src={assets.download_icon} alt="Télécharger le CV" className="w-4" />
        </a>
      </div>
    </div>
  );
};

export default Header;
