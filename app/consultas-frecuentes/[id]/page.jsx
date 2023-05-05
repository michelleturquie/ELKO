"use client"

import NavBar from "@/components/navbar"
import Image from 'next/image';
import Link from "next/link";
import { useRouter } from 'next/navigation';
import {CFTEXTS,createLineBreaks} from "@/Textos"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faArrowTurnDown } from "@fortawesome/free-solid-svg-icons"
import {faClock} from "@fortawesome/free-solid-svg-icons"
import Footer from '@/components/footer'
import useInViewPermanent from "@/hooks/useinview";


export default function ConsultaFrecuente(props) {
const { ref: p1Ref, inView: p1InView } = useInViewPermanent();

const router = useRouter();
const CftSelected = CFTEXTS.find(CFT => CFT.id === props.params.id);

return (
<div className="flex-grow">
  <NavBar />
  <div ref={p1Ref} className={`initial-position ${p1InView && 'appear'} max-w-[1420px] flex flex-col xl:flex-row mt-[20px] sm:mt-[40px] mb-[150px] mx-[10px] sm:mx-[20px] md:mx-[50px] xxl:mx-auto gap-5`}>
  
    <div className='flex flex-col gap-y-5 w-full xl:w-7/12'>
      <div className="flex items-center justify-between py-5 px-6 bg-my-gray rounded-[30px]">
        <div className="flex flex-col">
          <h2 className="text-[17.5px] ms:text-[19px] sm:text-[22px] md:text-[27px] font-bold">{CftSelected?.title}</h2>
          <div className='flex flex-row items-center gap-2'>
            <FontAwesomeIcon icon={faClock} className="scale-105 sm:scale-110 text-my-black" />
            <p className='font-medium text-[16px] sm:text-[17px]'>{CftSelected?.readtime}</p>
          </div>
        </div>
        <Link href="/#consultas">
        <FontAwesomeIcon icon={faArrowTurnDown} className="scale-125 text-my-black rotate-90 pl-[5px]" />
        </Link>
      </div>
      <p className=" bg-my-gray rounded-[30px] w-full text-[16px] sm:text-[17px] font-medium text-my-black px-6 py-6 text-justify	leading-relaxed">
        {createLineBreaks(CftSelected?.body)}
      </p>
    </div>
    <div className="flex items-center justify-center py-5 px-4 xl:px-7 bg-my-blue rounded-[30px] w-full xl:w-5/12">
      <div
        className="flex items-center justify-center bg-my-white h-[275px] w-[275px] md:h-[350px] md:w-[350px] xl:h-[400px] xl:w-[400px] rounded-full">
        <Image className='h-[225px] w-[225px] md:h-[250px] md:w-[250px] xl:h-[300px] xl:w-[300px]' src={CftSelected?.image} alt=""/>
      </div>
    </div>
  </div>
  <Footer />
</div>
)
}