import Image from 'next/image';
import Link from "next/link";
import WPP from '@/public/img/whatsapp.png';
import IG from '@/public/img/instagram.png';
import IN from '@/public/img/linkedin.png';
import FB from '@/public/img/facebook.png';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faMobileButton } from "@fortawesome/free-solid-svg-icons"
import {faCircleInfo} from "@fortawesome/free-solid-svg-icons"

export default function Footer() {
return (
<footer id="footer" className="bg-my-black shadow px-6 md:px-[50px] xl:px-[120px] py-8 md:py-16 rounded-t-[30px]">
    <div className="flex flex-col lg:flex-row max-w-[1280px] justify-between mx-auto">
        <div className="text-my-white text-[64px] font-bold mb-5">
            HR.
        </div>
        <div className="flex flex-col md:flex-row gap-10">
            <div className="flex flex-col w-full md:w-[320px] gap-3">
                <div className="flex flex-row items-center gap-[6px]">
                    <FontAwesomeIcon icon={faMobileButton} className="scale-110 text-my-white pb-1" />
                    <h3 className="text-[18px] font-semibold text-my-white">Teleconsultas</h3>
                </div>
                <p className="text-[16px] font semimedium text-gray-300">El Dr. realiza consultas virtuales para sus
                    pacientes en seguimiento o consulta de primera vez. No
                    todas las consultas pueden ser resueltas a través de esta metodología, pero si la gran mayoría de
                    las orientaciones iniciales. Puede preguntar si su consulta puede ser resuelta por videollamada.
                    Enviar mensaje al WhatsApp 11-6132-5318, solicitando día y hora para realizar la videollamada.</p>
            </div>
            <div className="flex flex-col w-full md:w-[250px] gap-3">
                <div className="flex flex-row items-center gap-[7px]">
                    <FontAwesomeIcon icon={faCircleInfo} className="scale-110 text-my-white lg:pb-1" />
                    <h3 className="text-[18px] font-semibold text-my-white">Primera consulta</h3>
                </div>
                <p className="text-[16px] font semimedium text-gray-300">La duración de su cita se estima en 30
                    minutos. Por favor no olvide llevar la epicrisis del
                    nacimiento y el carnet de vacunas. Si tiene antecedentes de patologías de relevancias llevar
                    estudios y resúmenes. Nos tomaremos el tiempo necesario para responder todas sus inquietudes.</p>
            </div>
            <div className="flex flex-row md:flex-col gap-20 md:gap-0">
                <div className="mb-5">
                    <h3 className="text-[18px] font-semibold text-my-white mb-3">Contacto</h3>
                    <div className='flex flex-col sm:flex-row md:flex-col gap-0 sm:gap-5 md:gap-0'>
                    <div className="mb-2.5">
                        <p className="text-gray-300">Turnos por WhatsApp:</p>
                        <p className="text-my-white">+ 54 11-6132-5318</p>
                    </div>
                    <div>
                        <p className="text-gray-300">Consultas por email:</p>
                        <p className="text-my-white">drhernanr@gmail.com</p>
                    </div>
                    </div>
                </div>
                <div>
                    <h3 className="text-[18px] font-semibold text-my-white mb-3">Redes</h3>
                    <div className="flex flex-col ms:flex-row gap-3 ms:gap-2.5">
                    <div className="flex flex-row gap-3 ms:gap-2.5">
                    <Link href="https://wa.link/bu4ent" target="_blank"><Image className="w-5 h-5" src={WPP} alt="" /></Link>
                    <Link href="https://www.instagram.com/drhernanrowensztein/" target="_blank"><Image className="w-5 h-5" src={IG} alt="" /></Link>
                    </div>
                    <div className="flex flex-row gap-3 ms:gap-2.5">
                    <Link href="https://www.linkedin.com/in/hern%C3%A1n-rowensztein-34587795/" target="_blank"><Image className="w-5 h-5" src={IN} alt="" /></Link>
                    <Link href="https://www.facebook.com/drhernanrowensztein" target="_blank"><Image className="w-5 h-5" src={FB} alt="" /></Link>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8" />
    <span className="block text-sm text-gray-400 sm:text-center">Copyright © 2023 Dr. Hernan Rowensztein - Desarrollado
        por <Link className='font-medium' href="https://www.linkedin.com/in/matiasrowensztein/" target="_blank">Matias Rowensztein</Link></span>
</footer>
)
}