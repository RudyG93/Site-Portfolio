import React from "react";
import Image from "next/image";
import skills from "../data/skills.json"; // Import des données de compétences depuis le fichier JSON
import { motion } from "motion/react";

const Skills = () => {
    return (
        <motion.article
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}>
            {/* Titre de la section */}
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-full px-4 md:px-12 py-8 md:py-10 scroll-mt-20 text-center text-3xl md:text-5xl">
                Mes compétences
            </motion.h2>
            {/* Barre rouge décorative sous le titre */}
            <div className="w-1/3 md:w-1/8 mx-auto h-1 bg-red-500 rounded-full mb-8"></div>

            {/* Grille des compétences */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="flex flex-row flex-wrap justify-center gap-6 my-10 w-full max-w-2/3 xl:max-w-1/2 2xl:max-w-1/3 justify-self-center">
                {skills.map((skill, idx) => (
                    // Carte individuelle pour chaque compétence
                    <div
                        key={idx}
                        className="w-50 h-50 flex flex-col items-center justify-center border border-gray-400 p-4 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000]"
                    >
                        {/* Icône de la compétence */}
                        <Image
                            src={skill.icon}
                            alt={`${skill.label} Icon`}
                            width={64}
                            height={64}
                            className="max-w-16 h-16 mb-2"
                        />
                        {/* Nom de la compétence */}
                        <h3 className="text-center text-lg font-semibold">{skill.label}</h3>
                        {/* Niveau de la compétence sous forme d'étoiles */}
                        <div>
                            {skill.level.map((star, i) => (
                                <Image
                                    key={`${skill.label}-${i}`} // Clé unique pour chaque étoile
                                    src={star}
                                    alt={`${star} Icon`}
                                    width={16}
                                    height={16}
                                    className="w-4 h-4 inline-block"
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </motion.div>

            {/* Citation inspirante en bas de section */}
            <div id="works" className="bg-gray-100 dark:bg-gray-800 py-10 px-6 md:px-12 lg:px-24">
                <blockquote className="text-center text-xl md:text-2xl font-light italic text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                    “Vous ne pourrez évoluer à moins d’essayer d’accomplir quelque chose
                    au-delà de ce que vous avez déjà réalisé.”
                    <footer className="mt-4 text-base text-gray-500 dark:text-gray-400">
                        — Ralph Waldo Emerson
                    </footer>
                </blockquote>
            </div>
        </motion.article>
    );
};

export default Skills;
