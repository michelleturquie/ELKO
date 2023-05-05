import Image from 'next/image';
import Link from "next/link";
import WPP from '@/public/img/whatsapp.png';

export default function WppButton() {
  return (
    <Link href="https://wa.link/bu4ent" target="_blank">
    <div className="fixed bottom-6 right-6 bg-[#5AF141] w-[70px] h-[70px] text-white font-bold py-2 px-4 rounded-full flex items-center justify-center shadow-lg transition duration-700 ease-in-out hover:wpp-glow hover:shadow-xl">
    <Image className="w-[35px] h-[35px]" src={WPP} alt=""/>
    </div>
    </Link>
  )
}
