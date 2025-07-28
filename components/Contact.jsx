import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { assets } from '../assets/assets';
import { motion } from "motion/react";

// Composant de contact
const Contact = () => {

    // État pour afficher le résultat de l'envoi du formulaire
    const [result, setResult] = useState("");
    // État pour savoir si le composant est monté (pour éviter l'hydratation côté serveur)
    const [mounted, setMounted] = useState(false);

    // Détecte le montage du composant
    useEffect(() => {
        setMounted(true);
    }, []);

    // Fonction appelée lors de la soumission du formulaire
    const onSubmit = async (event) => {
        event.preventDefault(); // Empêche le rechargement de la page
        setResult("En cours d'envoi...");
        const formData = new FormData(event.target);

        // Ajoute la clé d'accès pour l'API Web3Forms
        formData.append("access_key", "ef71f98c-8fd6-4a3d-9c02-a28eff8888b5");

        // Envoie les données à l'API Web3Forms
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        // Affiche le résultat selon la réponse de l'API
        if (data.success) {
            setResult("Message envoyé avec succès !");
            event.target.reset(); // Réinitialise le formulaire
        } else {
            console.log("Erreur", data);
            setResult(data.message);
        }
    };

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
                className="w-full px-4 md:px-12 py-8 md:py-10 scroll-mt-20 text-center text-3xl md:text-5xl">Contact</motion.h2>

            {/* Barre rouge décorative sous le titre */}
            <div className="w-1/3 md:w-1/8 mx-auto h-1 bg-red-500 rounded-full mb-8"></div>

            {/* Texte d'introduction */}
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-center text-lg md:text-xl mb-8">
                Si vous avez des questions ou une opportunité d'emploi à me proposer, n'hésitez pas à me contacter.
            </motion.p>

            {/* Formulaire de contact */}
            <motion.form
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                onSubmit={onSubmit} className='max-w-2xl mx-auto'>
                {/* Inputs nom et email, côte à côte sur desktop */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mb-6 mt-10 px-2 md:px-0'>
                    <motion.input
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1.1 }}
                        type="text"
                        placeholder='Votre nom'
                        required
                        className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white'
                        name="nom"
                    />
                    <motion.input
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1.2 }}
                        type="email"
                        placeholder='Votre adresse mail'
                        required
                        className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white'
                        name="email"
                    />
                </div>

                {/* Champ message */}
                <motion.textarea
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.3 }}
                    rows='6'
                    placeholder='Votre message'
                    required
                    className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6'
                    name="message"
                ></motion.textarea>

                {/* Bouton d'envoi */}
                <motion.button
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                    type='submit'
                    className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 cursor-pointer mb-6"
                >
                    Envoyer
                    <Image src={assets.right_arrow_white} alt="arrow icon" className='w-4' />
                </motion.button>

                {/* Affichage du résultat après envoi */}
                {mounted && result && <p className='my-4'>{result}</p>}
            </motion.form>
        </motion.article>
    )
}

export default Contact
