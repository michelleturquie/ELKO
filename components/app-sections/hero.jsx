"use client"
import useInViewPermanent from "@/hooks/useinview";
import Button from "@/components/button";
import Image from 'next/image';
import Link from "next/link";
import HR from '@/public/img/medical.png';

const handleLinkClick = (e, targetId) => {
  e.preventDefault();
  const targetSection = document.querySelector(`#${targetId}`);
  if (targetSection) {
    const offset = 50;
    const targetPosition = targetSection.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }
};

export default function Hero() {
  const { ref: p1Ref, inView: p1InView } = useInViewPermanent();
  const { ref: p2Ref, inView: p2InView } = useInViewPermanent();
  const { ref: p3Ref, inView: p3InView } = useInViewPermanent();
  const { ref: p4Ref, inView: p4InView } = useInViewPermanent()

return (
<section
  className={`flex flex-row max-w-[1420px] items-center justify-center gap-24 mx-[10px] sm:mx-[20px] md:mx-[50px] xxl:mx-auto rounded-[30px] h-[475px] sm:h-[620px] lx:h-[700px] p-[22px] sm:p-10 bg-my-blue text-my-white`}>
  <div className="flex flex-col gap-y-[15px] sm:gap-y-[20px]">
    <h1
      ref={p1Ref} className={`initial-position-X ${p1InView && 'appear-from-left'} text-center xl:text-start text-[48px] sm:text-[50px] md:text-[55px] lg:text-[64px] xl:text-[55px] lx:text-[64px] font-bold leading-[55px] sm:leading-[65px] lg:leading-[75px] xl:leading-[60px] lx:leading-[75px]`}>
      Médico especialista <br></br> en pediatría</h1>
    <h2 ref={p2Ref} className={`initial-position-X ${p2InView && 'appear-from-left'} text-center xl:text-start text-[14px] ms:text-base sm:text-lg lx:text-xl`}>Médico de cabecera de niños, niñas y
      adolescentes. <br className="hidden ms:block"></br> Seguimiento de pacientes con enfermedades <br
        className="hidden ms:block md:hidden xl:block"></br>crónicas y complejas.</h2>
    <div ref={p3Ref} className={`initial-position-X ${p3InView && 'appear-from-left'} flex justify-center xl:justify-start gap-x-[15px] mt-[10px]`}>
    <Link href="https://wa.link/bu4ent" target="_blank"><Button className="bg-my-white text-my-blue text-sm sm:text-base  transition duration-700 ease-in-out hover:shadow-glow hover:shadow-md">Agenda tu consulta</Button></Link>
      <Button
        className="text-sm sm:text-base transition duration-500 ease-in-out hover:bg-my-white hover:text-my-blue" onClick={(e) => handleLinkClick(e, "footer")}>Más
        información</Button>
    </div>
  </div>
  <div ref={p4Ref} className={`initial-position-X ${p4InView && 'appear-from-right'} hidden xl:flex items-center bg-my-white h-[400px] w-[400px] lx:h-[450px] lx:w-[450px] rounded-full`}>
    <Image className="mx-auto h-[260px] w-[260px] lx:h-[280px] lx:w-[280px]" src={HR} alt="" />
  </div>
</section>
)
}