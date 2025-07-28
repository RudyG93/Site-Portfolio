import React from "react";
import { assets } from "../assets/assets";
import Image from "next/image";

const About = () => {
  return (
    <article className="bg-[#EDEDED]">
      <h2 className="w-full px-4 md:px-12 py-8 md:py-10 scroll-mt-20 text-center text-3xl md:text-5xl">
        Présentation
      </h2>
      <div className="w-1/3 md:w-1/8 mx-auto h-1 bg-red-500 rounded-full mb-8"></div>
      <div className="flex flex-col justify-center items-stretch gap-8 md:gap-12 px-4 md:px-0">
        <section className="w-full max-w-xl mx-auto flex flex-col items-center justify-center p-6">
          <div className="flex flex-row items-center justify-center gap-4 mb-6 w-full">
            <Image
              src={assets.apropos}
              alt=""
              className="w-10 h-10 object-contain"
            />
            <h3 className="text-xl md:text-2xl">A propos de moi</h3>
          </div>
          <p className="text-base md:text-lg text-center">
            Actuellement, je suis à la recherche{" "}
            <strong>d'opportunités professionnelles</strong>, que ce soit en
            tant que développeur web junior ou en alternance, mon objectif est
            d'être au service d'une <strong>entreprise dynamique</strong> où je
            pourrai contribuer à divers projets tout en continuant à développer
            mes compétences. <br /> <br />
            N'hésitez pas à <strong>me contacter</strong> si vous êtes intéressé
            par mon profil ou si vous avez des questions.
          </p>
        </section>

        <section className="w-full lg:w-1/2 max-w-xl mx-auto flex flex-row gap-4 md:gap-8 items-stretch mb-10">
          <div className="bg-white border border-gray-300 rounded-xl shadow-lg p-6 md:p-8 flex-1 flex flex-col items-center justify-center cursor-pointer hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000] min-h-[180px]">
            <div className="flex flex-row gap-3 items-center mb-2">
              <Image
                src={assets.code_icon}
                alt="langages icon"
                className="w-6 h-6 object-contain"
              />
              <h4 className="text-lg md:text-xl font-bold">Langages</h4>
            </div>
            <p className="text-center text-gray-600 text-sm md:text-base">
              HTML5, CSS3, JavaScript, Swift, C#...
            </p>
          </div>
          <div className="bg-white border border-gray-300 rounded-xl shadow-lg p-6 md:p-8 flex-1 flex flex-col items-center justify-center cursor-pointer hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000] min-h-[180px]">
            <div className="flex flex-row gap-3 items-center mb-2">
              <Image
                src={assets.edu_icon}
                alt="formation icon"
                className="w-6 h-6 object-contain"
              />
              <h4 className="text-lg md:text-xl font-bold">Formation</h4>
            </div>
            <p className="text-center text-gray-600 text-sm md:text-base">
              BTS SIO, Titre RNCP Dev Web niveau 5
            </p>
          </div>
        </section>
      </div>

      <div id="skills" className="bg-gray-100 dark:bg-gray-800 py-10 px-6 md:px-12 lg:px-24">
        <blockquote className="text-center text-xl md:text-2xl font-light italic text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          “La vie, c'est comme une bicyclette, il faut avancer pour ne pas perdre l'équilibre.”
          <footer className="mt-4 text-base text-gray-500 dark:text-gray-400">
            — Albert Einstein
          </footer>
        </blockquote>
      </div>
    </article>
  );
};

export default About;
