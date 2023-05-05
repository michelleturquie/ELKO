import React from "react";
import Image from 'next/image';
import Link from "next/link";
import { CFTEXTS } from "@/Textos";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faArrowRight } from "@fortawesome/free-solid-svg-icons"
import useInViewPermanent from "@/hooks/useinview";


export default function ConsultasFrecuentes() {
const { ref: p1Ref, inView: p1InView } = useInViewPermanent();

return (
<section id='consultas'  ref={p1Ref} className={`initial-position ${p1InView && 'appear'} max-w-[1280px] my-[75px] md:my-[150px] mx-[10px] sm:mx-[20px] md:mx-[50px] xl:mx-[120px] xxl:mx-auto`}>
  <h1
    className="flex items-center py-7 px-6 bg-my-blue rounded-[30px] w-full h-[90px] lg:h-[100px] text-3xl sm:text-4xl lg:text-5xl font-bold text-my-white mb-5">
    Consultas frecuentes</h1>
  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2.5 md:gap-5">
  {
    CFTEXTS.map((CFT) => (
    <div key={CFT.id}>
      <div className="group flex flex-col justify-center bg-my-gray rounded-[30px] py-6 px-6 gap-3 h-full transition duration-500 ease-in-out hover:bg-my-blue">
        <div className="flex flex-col justify-between h-full">
          <div className="">
            <div className="flex items-center justify-center bg-my-white h-[92px] w-[92px] rounded-full">
              <Image className=' w-14 h-14' src={CFT?.image} alt=""/>
            </div>
            <h2 className="text-[22px] sm:text-[24px] font-bold text-my-black mt-3 transition duration-500 ease-in-out group-hover:text-my-white">{CFT?.title}</h2>
            <p className="text-base text-my-black mt-3 transition duration-500 ease-in-out group-hover:text-my-white">{CFT?.description}</p>
          </div>
          <div>
            <Link className="flex flex-row items-center gap-[2px] mt-3" href="/consultas-frecuentes/[id]"
              as={`/consultas-frecuentes/${CFT.id}`}> 
              <p className="text-my-blue text-[17px] underline font-medium transition duration-500 ease-in-out group-hover:text-my-white">Ver mas</p>
            <FontAwesomeIcon icon={faArrowRight} className="w-[16px] h-[16px] text-my-blue -rotate-45 pt-[5px] transition duration-500 ease-in-out group-hover:text-my-white" />
            </Link>
          </div>
        </div>
      </div>
    </div>
))
}
  </div>
</section>
)
}