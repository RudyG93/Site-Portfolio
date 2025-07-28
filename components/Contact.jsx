import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { assets } from '../assets/assets';


const Contact = () => {

    const [result, setResult] = useState("");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);


    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("En cours d'envoi...");
        const formData = new FormData(event.target);

        formData.append("access_key", "ef71f98c-8fd6-4a3d-9c02-a28eff8888b5");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Message envoyé avec succès !");
            event.target.reset();
        } else {
            console.log("Erreur", data);
            setResult(data.message);
        }
    };

    return (
        <article>
            <h2 className="w-full px-4 md:px-12 py-8 md:py-10 scroll-mt-20 text-center text-3xl md:text-5xl">Contact</h2>

            <div className="w-1/3 md:w-1/8 mx-auto h-1 bg-red-500 rounded-full mb-8"></div>

            <p className="text-center text-lg md:text-xl mb-8">
                Si vous avez des questions ou une opportunité d'emploi à me proposer, n'hésitez pas à me contacter.
            </p>

            <form onSubmit={onSubmit} className='max-w-2xl mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mb-6 mt-10 px-2 md:px-0'>
                    <input type="text" placeholder='Votre nom' required className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' name="nom" />
                    <input type="email" placeholder='Votre adresse mail' required className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' name="email" />
                </div>

                <textarea rows='6' placeholder='Votre message' required className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6' name="message"></textarea>

                <button type='submit'
                    className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 cursor-pointer mb-6">
                    Envoyer
                    <Image src={assets.right_arrow_white} alt="arrow icon" className='w-4' />
                </button>

                {mounted && result && <p className='my-4'>{result}</p>}
            </form>
        </article>
    )
}

export default Contact
