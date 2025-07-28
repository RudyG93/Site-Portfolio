import React from "react";
import { assets } from "../assets/assets";
import Image from "next/image";

const Skills = () => {
  return (
    <article>
      <h2 className="w-full px-4 md:px-12 py-8 md:py-10 scroll-mt-20 text-center text-3xl md:text-5xl">
        Mes compétences
      </h2>
      <div className="w-1/3 md:w-1/8 mx-auto h-1 bg-red-500 rounded-full mb-8"></div>

      <div className="flex flex-row flex-wrap justify-center gap-6 my-10 w-full max-w-2/3 xl:max-w-1/2 2xl:max-w-1/3 justify-self-center">
        <div className="w-50 h-50 flex flex-col items-center justify-center border border-gray-400 p-4 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000]">
          <Image src={assets.html} alt="HTML Icon" className="w-16 h-16 mb-2" />
          <h3 className="text-center text-lg font-semibold">HTML 5</h3>
          <div>
            <Image
              src={assets.star}
              alt="Star Icon"
              className="w-4 h-4 inline-block"
            />
            <Image
              src={assets.star}
              alt="Star Icon"
              className="w-4 h-4 inline-block"
            />
            <Image
              src={assets.emptystar}
              alt="Empty Star Icon"
              className="w-4 h-4 inline-block"
            />
          </div>
        </div>
        <div className="w-50 h-50 flex flex-col items-center justify-center border border-gray-400 p-4 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000]">
          <Image src={assets.css} alt="CSS Icon" className="w-18 h-18 mb-2" />
          <h3 className="text-center text-lg font-semibold">CSS 3</h3>
          <div>
            <Image
              src={assets.star}
              alt="Star Icon"
              className="w-4 h-4 inline-block"
            />
            <Image
              src={assets.star}
              alt="Star Icon"
              className="w-4 h-4 inline-block"
            />
            <Image
              src={assets.emptystar}
              alt="Empty Star Icon"
              className="w-4 h-4 inline-block"
            />
          </div>
        </div>
        <div className="w-50 h-50 flex flex-col items-center justify-center border border-gray-400 p-4 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000]">
          <Image
            src={assets.javascript}
            alt="JS Icon"
            className="w-12 h-16 mb-2"
          />
          <h3 className="text-center text-lg font-semibold">Javascript</h3>
          <div>
            <Image
              src={assets.star}
              alt="Star Icon"
              className="w-4 h-4 inline-block"
            />
            <Image
              src={assets.halfstar}
              alt="Half Star Icon"
              className="w-4 h-4 inline-block"
            />
            <Image
              src={assets.emptystar}
              alt="Empty Star Icon"
              className="w-4 h-4 inline-block"
            />
          </div>
        </div>
        <div className="w-50 h-50 flex flex-col items-center justify-center border border-gray-400 p-4 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000]">
          <Image
            src={assets.react}
            alt="React Icon"
            className="w-16 h-16 mb-2"
          />
          <h3 className="text-center text-lg font-semibold">React</h3>
          <div>
            <Image
              src={assets.star}
              alt="Star Icon"
              className="w-4 h-4 inline-block"
            />
            <Image
              src={assets.halfstar}
              alt="Half Star Icon"
              className="w-4 h-4 inline-block"
            />
            <Image
              src={assets.emptystar}
              alt="Empty Star Icon"
              className="w-4 h-4 inline-block"
            />
          </div>
        </div>
        <div className="w-50 h-50 flex flex-col items-center justify-center border border-gray-400 p-4 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000]">
          <Image
            src={assets.nodejs}
            alt="Nodejs Icon"
            className="w-16 h-16 mb-2"
          />
          <h3 className="text-center text-lg font-semibold">Node.js</h3>
          <div>
            <Image
              src={assets.star}
              alt="Star Icon"
              className="w-4 h-4 inline-block"
            />
            <Image
              src={assets.halfstar}
              alt="Half Star Icon"
              className="w-4 h-4 inline-block"
            />
            <Image
              src={assets.emptystar}
              alt="Empty Star Icon"
              className="w-4 h-4 inline-block"
            />
          </div>
        </div>
        <div className="w-50 h-50 flex flex-col items-center justify-center border border-gray-400 p-4 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000]">
          <Image
            src={assets.mongodb}
            alt="Mongodb Icon"
            className="w-16 h-16 mb-2"
          />
          <h3 className="text-center text-lg font-semibold">Mongodb</h3>
          <div>
            <Image
              src={assets.star}
              alt="Star Icon"
              className="w-4 h-4 inline-block"
            />

            <Image
              src={assets.emptystar}
              alt="Empty Star Icon"
              className="w-4 h-4 inline-block"
            />
            <Image
              src={assets.emptystar}
              alt="Empty Star Icon"
              className="w-4 h-4 inline-block"
            />
          </div>
        </div>
        <div className="w-50 h-50 flex flex-col items-center justify-center border border-gray-400 p-4 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000]">
          <Image
            src={assets.php}
            alt="Php Icon"
            className="w-18 h-18 mb-2"
          />
          <h3 className="text-center text-lg font-semibold">PHP</h3>
          <div>
            <Image
              src={assets.star}
              alt="Star Icon"
              className="w-4 h-4 inline-block"
            />

            <Image
              src={assets.emptystar}
              alt="Empty Star Icon"
              className="w-4 h-4 inline-block"
            />
            <Image
              src={assets.emptystar}
              alt="Empty Star Icon"
              className="w-4 h-4 inline-block"
            />
          </div>
        </div>
        <div className="w-50 h-50 flex flex-col items-center justify-center border border-gray-400 p-4 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000]">
          <Image
            src={assets.git}
            alt="git Icon"
            className="w-16 h-16 mb-2"
          />
          <h3 className="text-center text-lg font-semibold">Git</h3>
          <div>
            <Image
              src={assets.star}
              alt="Star Icon"
              className="w-4 h-4 inline-block"
            />

            <Image
              src={assets.halfstar}
              alt="Half Star Icon"
              className="w-4 h-4 inline-block"
            />
            <Image
              src={assets.emptystar}
              alt="Empty Star Icon"
              className="w-4 h-4 inline-block"
            />
          </div>
        </div>
        <div className="w-50 h-50 flex flex-col items-center justify-center border border-gray-400 p-4 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000]">
          <Image
            src={assets.vscode}
            alt="vscode Icon"
            className="w-14 h-14 mb-2"
          />
          <h3 className="text-center text-lg font-semibold">Visual Code</h3>
          <div>
            <Image
              src={assets.star}
              alt="Star Icon"
              className="w-4 h-4 inline-block"
            />
            <Image
              src={assets.halfstar}
              alt="Half Star Icon"
              className="w-4 h-4 inline-block"
            />
            <Image
              src={assets.emptystar}
              alt="Empty Star Icon"
              className="w-4 h-4 inline-block"
            />
          </div>
        </div>
      </div>

      <div id="works" className="bg-gray-100 dark:bg-gray-800 py-10 px-6 md:px-12 lg:px-24">
        <blockquote className="text-center text-xl md:text-2xl font-light italic text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          “Vous ne pourrez évoluer à moins d’essayer d’accomplir quelque chose
          au-delà de ce que vous avez déjà réalisé.”
          <footer className="mt-4 text-base text-gray-500 dark:text-gray-400">
            — Ralph Waldo Emerson
          </footer>
        </blockquote>
      </div>
    </article>
  );
};

export default Skills;
