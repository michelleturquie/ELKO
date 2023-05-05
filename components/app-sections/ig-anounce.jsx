import Image from 'next/image';
import Link from "next/link";
import Button from "@/components/button";
import IG from '@/public/img/instagram.png';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faArrowRight } from "@fortawesome/free-solid-svg-icons"
import useInViewPermanent from "@/hooks/useinview";


export default function FollowIg() {
  const { ref: p1Ref, inView: p1InView } = useInViewPermanent();

  return (
    <section className="max-w-[1280px] my-[75px] md:my-[150px] mx-[10px] sm:mx-[20px] md:mx-[50px] xl:mx-[120px] xxl:mx-auto">
    <div ref={p1Ref} className={`initial-position-X ${p1InView && 'appear-from-left'} flex flex-col lg:flex-row items-center justify-center bg-my-blue py-8 md:py-12 xl:py-16 px-2 rounded-[30px] gap-0 lg:gap-10`}>
    <Image className=" w-[60px] h-[60px] sm:w-[85px] sm:h-[85px] lg:w-[170px] lg:h-[170px] xl:w-[195px] xl:h-[195px]" src={IG} alt=""/>
    <div>
    <h1 className="text-[24px] sm:text-[26px] md:text-[32px] lg:text-[35px] xl:text-[38px] lx:text-[42px] leading-normal xl:leading-[45px] font-bold text-my-white text-center lg:text-start mt-[10px] xl:mt-0">Mantente al tanto de todo <br className='block sm:hidden'></br> lo relacionado <br className='hidden sm:block'></br> con la salud<br className='block sm:hidden'></br> de tu hijo en mi Instagram</h1>
    <Link href="https://www.instagram.com/drhernanrowensztein/" target="_blank"><Button className="flex bg-my-white text-my-blue text-sm sm:text-base mt-[15px] xl:mt-[25px] gap-[2px] transition duration-700 ease-in-out hover:shadow-glow hover:shadow-md mx-auto lg:mx-0">
        Conoce mi perfil
        <FontAwesomeIcon icon={faArrowRight} className="w-[14px] h-[14px] md:w-[16px] md:h-[16px] text-my-blue -rotate-45 pt-[5px]" />
    </Button>
    </Link>
    </div>
    </div>
    </section>
  )
}
