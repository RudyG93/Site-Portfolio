import React from 'react'
import Image from 'next/image';
import { assets } from '../assets/assets';

// Composant Footer pour le bas de page
const Footer = () => {
    return (
        <footer className="bg-gray-100 dark:bg-gray-800 py-10 px-6 md:px-12 lg:px-24">
            {/* Liens vers les réseaux sociaux et email */}
            <div className='flex flex-row items-center justify-center mb-6 gap-4'>
                {/* Lien email */}
                <a href="mailto:giacomazzorudy@gmail.com" className="inline-flex items-center justify-center w-10 h-10 rounded-full" aria-label="Envoyer un mail">
                    <Image src={assets.mail_icon_dark} alt="Email Icon" className="w-6" />
                </a>
                {/* Lien Github */}
                <a href="https://github.com/RudyG93" target="_blank" className="inline-flex items-center justify-center w-10 h-10 rounded-full" aria-label="Aller sur Github">
                    <Image src={assets.github} alt="Github Icon" className="w-6" />
                </a>
                {/* Lien Linkedin */}
                <a href="https://www.linkedin.com/in/rudy-giacomazzo-b8aa55321/" target="_blank" className="inline-flex items-center justify-center w-10 h-10 rounded-full" aria-label="Allez sur Linkedin">
                    <Image src={assets.linkedin} alt="Linkedin Icon" className="w-6" />
                </a>
            </div>
            {/* Texte de copyright et mention de la techno utilisée */}
            <p className='text-white text-center max-w-3xl mx-auto'>
                © 2025 Giacomazzo Rudy, Tous droits réservés. - Développé avec <a className='font-bold underline hover:text-red-400' target='_blank' href="https://nextjs.org/">Next.js</a>.
            </p>
        </footer>
    )
}

export default Footer
