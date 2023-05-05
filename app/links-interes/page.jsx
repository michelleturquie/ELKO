"use client"

import Link from "next/link";
import NavBar from "@/components/navbar"
import {LITEXTS} from "@/Textos"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faArrowRight } from "@fortawesome/free-solid-svg-icons"
import Button from "@/components/button";
import Footer from '@/components/footer'
import useInViewPermanent from "@/hooks/useinview";

export default function LinksInteres() {
const { ref: p1Ref, inView: p1InView } = useInViewPermanent();

return (
<div className="">
  <NavBar hideLinksInteres={true}/>
  <div className="flex-1 max-w-[1420px] mb-[150px] mt-[20px] sm:mt-[40px] mx-[10px] sm:mx-[20px] md:mx-[50px] xxl:mx-auto">
    <h1
      className="flex items-center py-7 px-6 bg-my-gray rounded-3xl sm:rounded-[30px] w-full h-[90px] lg:h-[100px] text-[28px] sm:text-4xl font-bold text-my-black mb-5">
      Links de interes</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2.5 md:gap-5">
      {
      LITEXTS.map((LIT) => (
      <div key={LIT.id}>
        <div className="flex flex-col justify-center bg-my-gray rounded-[30px] py-6 px-6 gap-3 h-full">
          <div className="flex flex-col justify-between h-full">
            <div className="">
              <h2 className="text-[20px] sm:text-[22px] font-bold text-my-black mt-3">{LIT?.title}</h2>
            </div>
            <div>
              <Link className="flex flex-row items-center gap-[2px] mt-3" href={LIT?.link} target="_blank">
              <p className="text-my-blue text-[16px] sm:text-[17px] underline font-medium">Ver mas</p>
              <FontAwesomeIcon icon={faArrowRight} className="w-[16px] h-[16px] text-my-blue -rotate-45 pt-[5px]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      ))
      }
      
    </div>
    <div ref={p1Ref} className={`initial-position-X ${p1InView && 'appear-from-left'} flex flex-col items-center w-full bg-my-blue py-16 px-5 sm:px-6 gap-[15px] md:gap-[25px] rounded-[30px] mt-10`}>
    <h1 className="text-3xl sm:text-4xl md:text-[44px] text-center font-bold text-my-white">Pronto nuevos articulos!</h1>
    <Link href="/">
    <Button className="bg-my-white text-my-blue text-base  transition duration-700 ease-in-out hover:shadow-glow hover:shadow-md">Volver al inicio</Button>
    </Link>
    </div>
  </div>
<Footer />
</div>
)
}