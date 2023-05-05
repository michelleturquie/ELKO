"use client"
import NavBar from "@/components/navbar"
import Hero from "../components/app-sections/hero"
import AcercaDeMi from "../components/app-sections/acerca-de-mi"
import ConsultasFrecuentes from "../components/app-sections/consultas-frecuentes"
import Consultorios from "@/components/app-sections/consultorios"
import FollowIg from "@/components/app-sections/ig-anounce"
import Footer from '@/components/footer'
import { useEffect } from "react"
import { useSearchParams } from 'next/navigation';




export default function Home() {
  const searchParams = useSearchParams();
  const handleLinkClick = (targetId) => {
    const targetSection = document.querySelector(`#${targetId}`);
    if (targetSection) {
      const offset = 50;
      const targetPosition = targetSection.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({
        top: targetPosition,
      });
    }
  };

  useEffect(() => {
    if (searchParams.get('scrollTo')){
    handleLinkClick(searchParams.get('scrollTo'));
  }
  } , [])  

  return (
    <>
    <NavBar hideHome={true}/>
    <Hero />
    <AcercaDeMi/>
    <ConsultasFrecuentes />
    <Consultorios />
    <FollowIg />
    <Footer />
    </>
 
  )
}
