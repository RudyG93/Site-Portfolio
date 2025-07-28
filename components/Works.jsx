import React from "react";
import { assets } from "../assets/assets";
import Image from "next/image";

const Works = () => {
    return (
        <article>
            <h2 className="w-full px-4 md:px-12 py-8 md:py-10 scroll-mt-20 text-center text-3xl md:text-5xl">Mes réalisations</h2>

            <div className="w-1/3 md:w-1/8 mx-auto h-1 bg-red-500 rounded-full mb-8"></div>

            <p className="text-center text-lg md:text-xl mb-8">
                Retrouvez mes derniers projets effectués à ce jour. <br />Vous pouvez
                cliquer sur les différentes réalisations ci-dessous pour en savoir plus
                ou alors en consultat ma page <a className="font-bold underline hover:text-red-400" target="_blank" href="https://github.com/RudyG93">Github</a>.
            </p>

            <div className="flex flex-row flex-wrap justify-center gap-6 my-10 w-full max-w-2/3 xl:max-w-1/2 2xl:max-w-1/3 justify-self-center">
                <div className="w-75 h-75 flex flex-col items-center justify-center border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000] group relative">
                    <Image src={assets.proj6} alt="image projet 6" className="" />
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 rounded-lg flex flex-col items-center justify-center text-white transition-opacity duration-300">
                        <p className="mb-2 text-center px-4">Projet OC n°6 - Développer le back-end d'un site de notation de livres</p>
                        <a href="https://github.com/RudyG93/OpenClassroomsProjet6" target="_blank" rel="noopener noreferrer" className="underline font-bold hover:text-red-400 transition">Voir sur Github</a>
                    </div>
                </div>
                <div className="w-75 h-75 flex flex-col items-center justify-center border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000] group relative">
                    <Image src={assets.proj5} alt="image projet 5" className="" />
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 rounded-lg flex flex-col items-center justify-center text-white transition-opacity duration-300">
                        <p className="mb-2 text-center px-4">Projet OC n°5 - Créer une application web de location immobilière avec React</p>
                        <a href="https://github.com/RudyG93/OpenClassroomsProjet5" target="_blank" rel="noopener noreferrer" className="underline font-bold hover:text-red-400 transition">Voir sur Github</a>
                    </div>
                </div>
                <div className="w-75 h-75 flex flex-col items-center justify-center border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000] group relative">
                    <Image src={assets.proj4} alt="image projet 4" className="" />
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 rounded-lg flex flex-col items-center justify-center text-white transition-opacity duration-300">
                        <p className="mb-2 text-center px-4">Projet OC n°4 - Débugger et optimiser un site de photographe</p>
                        <a href="https://github.com/RudyG93/OpenClassroomProjet4Old" target="_blank" rel="noopener noreferrer" className="underline font-bold hover:text-red-400 transition">Voir sur Github (Old Ver.)</a>
                        <a href="https://github.com/RudyG93/OpenClassroomProjet4New" target="_blank" rel="noopener noreferrer" className="underline font-bold hover:text-red-400 transition">Voir sur Github (New Ver.)</a>
                    </div>
                </div>
                <div className="w-75 h-75 flex flex-col items-center justify-center border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000] group relative">
                    <Image src={assets.proj3} alt="image projet 3" className="" />
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 rounded-lg flex flex-col items-center justify-center text-white transition-opacity duration-300">
                        <p className="mb-2 text-center px-4">Projet OC n°3 - Créer une page web dynamique avec JavaScript</p>
                        <a href="https://github.com/RudyG93/OpenClassroomProjet3" target="_blank" rel="noopener noreferrer" className="underline font-bold hover:text-red-400 transition">Voir sur Github</a>
                    </div>
                </div>
            </div>

            <div className="bg-gray-100 dark:bg-gray-800 py-10 px-6 md:px-12 lg:px-24" id="contact">
                <blockquote className="text-center text-xl md:text-2xl font-light italic text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                    “On regrette rarement d'avoir osé, mais toujours de ne pas avoir essayer.”
                    <footer className="mt-4 text-base text-gray-500 dark:text-gray-400">
                        — Serge Lafrance
                    </footer>
                </blockquote>
            </div>
        </article>
    );
};

export default Works;
