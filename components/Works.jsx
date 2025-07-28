import React, { useState } from "react";
import Image from "next/image";
import works from "../data/works.json";
import { motion } from "motion/react";

const Works = () => {
    // État pour gérer l'ouverture de la modale et le projet sélectionné
    const [modal, setModal] = useState({ open: false, project: null });

    return (
        <motion.article
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="bg-[#EDEDED] scroll-mt-22"
            id="works">
            {/* Titre de la section */}
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-full px-4 md:px-12 py-8 md:py-10 scroll-mt-20 text-center text-3xl md:text-5xl">
                Mes réalisations
            </motion.h2>

            {/* Barre rouge sous le titre */}
            <div className="w-1/3 md:w-1/8 mx-auto h-1 bg-red-500 rounded-full mb-8"></div>

            {/* Texte d'intro */}
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-center text-lg md:text-xl mb-8">
                Retrouvez mes derniers projets effectués à ce jour. <br />
                Vous pouvez cliquer sur les différentes réalisations ci-dessous pour en savoir plus
                ou alors en consultat ma page <a className="font-bold underline hover:text-red-400" target="_blank" href="https://github.com/RudyG93">Github</a>.
            </motion.p>

            {/* Grille des projets */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="flex flex-row flex-wrap justify-center gap-6 my-10 w-full max-w-2/3 xl:max-w-1/2 2xl:max-w-1/3 justify-self-center">
                {works.map((project, idx) => (
                    // Carte projet
                    <div
                        key={idx}
                        className="bg-black w-75 h-75 flex flex-col items-center justify-center border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000] group relative"
                    >
                        {/* Image du projet */}
                        <Image src={project.img} alt={project.title} width={300} height={200} className="" />
                        {/* Overlay qui apparaît au survol */}
                        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 rounded-lg flex flex-col items-center justify-center text-white transition-opacity duration-300">
                            <p className="mb-2 text-center px-4">{project.title}</p>
                            {/* Bouton pour ouvrir la modale */}
                            <button
                                className="underline font-bold hover:text-red-400 transition mb-2 cursor-pointer"
                                onClick={() => setModal({ open: true, project })}
                                type="button"
                            >
                                En savoir plus
                            </button>
                            {/* Lien vers le repo Github */}
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline font-bold hover:text-red-400 transition"
                            >
                                Voir sur Github
                            </a>
                        </div>
                    </div>
                ))}
            </motion.div>

            {/* Modale affichée si modal.open est true */}
            {modal.open && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
                    <div className="bg-white rounded-lg p-8 max-w-lg w-full relative">
                        {/* Bouton pour fermer la modale */}
                        <button
                            className="absolute top-2 right-4 text-2xl font-bold text-gray-500 hover:text-red-500 cursor-pointer"
                            onClick={() => setModal({ open: false, project: null })}
                            aria-label="Fermer la modale"
                        >
                            &times;
                        </button>
                        {/* Contenu de la modale */}
                        <h3 className="text-xl font-bold mb-4">{modal.project.title}</h3>
                        <p className="mb-4">
                            <span className="font-semibold">Description :</span> {modal.project.description}
                        </p>
                        <p className="mb-4">
                            <span className="font-semibold">Problématiques rencontrées :</span> {modal.project.problematics}
                        </p>
                        <p className="mb-2">
                            <span className="font-semibold">Compétences développées :</span> {modal.project.skills}
                        </p>
                    </div>
                </div>
            )}

            {/* Citation de fin de section */}
            <div className="bg-gray-100 dark:bg-gray-800 py-10 px-6 md:px-12 lg:px-24">
                <blockquote className="text-center text-xl md:text-2xl font-light italic text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                    “On regrette rarement d'avoir osé, mais toujours de ne pas avoir essayer.”
                    <footer className="mt-4 text-base text-gray-500 dark:text-gray-400">
                        — Serge Lafrance
                    </footer>
                </blockquote>
            </div>
        </motion.article>
    );
};

export default Works;
