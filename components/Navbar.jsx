import React, { useState, useEffect, useRef } from "react";
import { assets } from "../assets/assets";
import Image from "next/image";

const Navbar = () => {
  // État pour savoir si la page a été scrollée (pour changer le style du menu)
  const [isScroll, setIsScroll] = useState(false);

  // Référence pour le menu latéral mobile
  const sideMenuRef = useRef();

  // Ouvre le menu mobile (slide in)
  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };
  // Ferme le menu mobile (slide out)
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  // Ajoute un écouteur d'événement pour détecter le scroll et changer le style du menu
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  return (
    <>
      {/* Barre de navigation principale */}
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll
            ? "bg-white bg-opacity-50 background-blur-lg shadow-sm"
            : ""
          }`}
      >
        {/* Logo ou nom du site */}
        <a href="#top">
          <h2 className="font-semibold text-xl xl:text-3xl cursor-pointer">
            Rudy Giacomazzo<span className="text-red-600">.</span>
          </h2>
        </a>

        {/* Menu de navigation desktop */}
        <ul className={`hidden lg:flex items-center gap-8 text-sm font-semibold rounded-full px-12 py-3 lg:px-5 xl:px-12 ${isScroll ? "" : "bg-white bg-opacity-50 shadow-sm"}`}>
          <li className="btn-nav">
            <a href="#top">Accueil</a>
          </li>
          <li className="btn-nav">
            <a href="#about">Presentation</a>
          </li>
          <li className="btn-nav">
            <a href="#skills">Compétences</a>
          </li>
          <li className="btn-nav">
            <a href="#works">Réalisations</a>
          </li>
          <li className="btn-nav">
            <a href="#contact">Contact</a>
          </li>
        </ul>

        {/* Bouton contact et menu burger (mobile) */}
        <div className="flex items-center gap-4">
          {/* Bouton contact visible seulement sur desktop */}
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-1 px-8 py-2 xl:gap-3 xl:px-10 xl:py-3 border border-black-500 rounded-full ml-4"
          >
            Contact
            <Image src={assets.arrow_icon} className="w-3" alt="connect" />
          </a>
          {/* Bouton menu burger visible seulement sur mobile */}
          <button onClick={openMenu} className="block lg:hidden ml-3">
            <Image src={assets.menu_black} alt="" className="w-6" />
          </button>
        </div>

        {/* Menu latéral mobile */}
        <ul
          ref={sideMenuRef}
          className="flex lg:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-white shadow-lg transition-all duration-300 ease-in-out"
        >
          {/* Bouton pour fermer le menu mobile */}
          <button className="absolute top-5 right-5" onClick={closeMenu}>
            <Image
              src={assets.close_black}
              alt="close"
              className="w-5 cursor-pointer"
            />
          </button>
          {/* Liens du menu mobile */}
          <li className="btn-nav">
            <a onClick={closeMenu} href="#top">
              Accueil
            </a>
          </li>
          <li className="btn-nav">
            <a onClick={closeMenu} href="#about">
              Presentation
            </a>
          </li>
          <li className="btn-nav">
            <a onClick={closeMenu} href="#skills">
              Compétences
            </a>
          </li>
          <li className="btn-nav">
            <a onClick={closeMenu} href="#works">
              Réalisations
            </a>
          </li>
          <li className="btn-nav">
            <a onClick={closeMenu} href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
