"use client"
import Link from "next/link";
import Button from "./button";
import { React, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { usePathname } from 'next/navigation';

export default function NavBar({ hideHome, hideLinksInteres }) {
  const pathname = usePathname();
  const [showMenu, setShowMenu] = useState(false);

  const handleLinkClick = (targetId) => {
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

  const handleLinkClickForHome = (e, targetId) => {
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

  let Navbar;

  if (pathname === "/") {
    Navbar = [<nav key={""} className={"max-w-[1420px] py-[25px] px-[24px] xl:py-[25px] xl:px-[32px] bg-my-blue flex flex-col xl:flex-row justify-between xl:items-center text-my-white mx-[10px] sm:mx-[20px] md:mx-[50px] xxl:mx-auto my-[30px] rounded-[25px] xl:rounded-[30px]  xl:h-[100px]"}>
      <div className="flex flex-row justify-between items-center">
        <Link href="/"><span className="text-lg md:text-xl font-bold">Hernan Rowensztein</span></Link>
        <Button className="flex xl:hidden border-0" onClick={() => setShowMenu(!showMenu)}>{showMenu ? <FontAwesomeIcon icon={faXmark} className="scale-[1.35] text-my-white" /> : <FontAwesomeIcon icon={faBars} className="scale-[1.35] text-my-white" />}</Button>
      </div>
      <ul className="hidden xl:flex flex-col xl:flex-row gap-5 xl:items-center font-medium">
        {!hideHome && (<li><Link href="/" className="hover-underline-animation">Home</Link></li>)}
        <li><Link className="hover-underline-animation cursor-pointer" href={""} onClick={(e) => handleLinkClickForHome(e, "about")}>Carrera profesional</Link></li>
        <li><Link className="hover-underline-animation cursor-pointer" href={""} onClick={(e) => handleLinkClickForHome(e, "consultas")}>Consultas frecuentes</Link></li>
        <li><Link className="hover-underline-animation cursor-pointer" href={""} onClick={(e) => handleLinkClickForHome(e, "consultorios")}>Consultorios</Link></li>
        {!hideLinksInteres && (<li><Link className="hover-underline-animation" href="/links-interes">Links de interés</Link></li>)}
        <li><Link href="https://wa.link/bu4ent" target="_blank"><Button className="transition duration-500 ease-in-out hover:bg-my-white hover:text-my-blue">Agenda tu consulta</Button></Link></li>
      </ul>
      <ul className={showMenu === false ? "hidden " : "flex " + "   xl:hidden flex-col xl:flex-row gap-5 xl:items-center font-medium bg-my-blue mt-3"}>
        {!hideHome && (<li><Link className="hover-underline-animation" href="/">Home</Link></li>)}
        <li><Link className="hover-underline-animation cursor-pointer" href={""} onClick={(e) => handleLinkClickForHome(e, "about")}>Carrera profesional</Link></li>
        <li><Link className="hover-underline-animation cursor-pointer" href={""} onClick={(e) => handleLinkClickForHome(e, "consultas")}>Consultas frecuentes</Link></li>
        <li><Link className="hover-underline-animation cursor-pointer" href={""} onClick={(e) => handleLinkClickForHome(e, "consultorios")}>Consultorios</Link></li>
        {!hideLinksInteres && (<li><Link className="hover-underline-animation" href="/links-interes">Links de interés</Link></li>)}
        <li><Link href="/wpp"><Button className="transition duration-500 ease-in-out hover:bg-my-white hover:text-my-blue">Agenda tu consulta</Button></Link></li>
      </ul>
    </nav>];
  } else {
    Navbar = [<nav key={""} className={"max-w-[1420px] py-[25px] px-[24px] xl:py-[25px] xl:px-[32px] bg-my-blue flex flex-col xl:flex-row justify-between xl:items-center text-my-white mx-[10px] sm:mx-[20px] md:mx-[50px] xxl:mx-auto my-[30px] rounded-[25px] xl:rounded-[30px]  xl:h-[100px]"}>
      <div className="flex flex-row justify-between items-center">
        <Link href="/"><span className="text-lg md:text-xl font-bold">Hernan Rowensztein</span></Link>
        <Button className="flex xl:hidden border-0" onClick={() => setShowMenu(!showMenu)}>{showMenu ? <FontAwesomeIcon icon={faXmark} className="scale-[1.35] text-my-white" /> : <FontAwesomeIcon icon={faBars} className="scale-[1.35] text-my-white" />}</Button>
      </div>
      <ul className="hidden xl:flex flex-col xl:flex-row gap-5 xl:items-center font-medium">
        {!hideHome && (<li><Link href="/" className="hover-underline-animation">Home</Link></li>)}
        <li><Link className="hover-underline-animation cursor-pointer" href={{ pathname: '/', query: { scrollTo: "about" } }} onClick={() => { handleLinkClick("about") }}>Carrera profesional</Link></li>
        <li><Link className="hover-underline-animation cursor-pointer" href={{ pathname: '/', query: { scrollTo: "consultas" } }} onClick={() => { handleLinkClick("consultas") }}>Consultas frecuentes</Link></li>
        <li><Link className="hover-underline-animation cursor-pointer" href={{ pathname: '/', query: { scrollTo: "consultorios" } }} onClick={() => { handleLinkClick("consultorios") }}>Consultorios</Link></li>
        {!hideLinksInteres && (<li><Link className="hover-underline-animation" href="/links-interes">Links de interés</Link></li>)}
        <li><Link href="https://wa.link/bu4ent" target="_blank"><Button className="transition duration-500 ease-in-out hover:bg-my-white hover:text-my-blue">Agenda tu consulta</Button></Link></li>
      </ul>
      <ul className={showMenu === false ? "hidden " : "flex " + "   xl:hidden flex-col xl:flex-row gap-5 xl:items-center font-medium bg-my-blue mt-3"}>
        {!hideHome && (<li><Link className="hover-underline-animation" href="/">Home</Link></li>)}
        <li><Link className="hover-underline-animation cursor-pointer" href={{ pathname: '/', query: { scrollTo: "about" } }} onClick={() => { handleLinkClick("about") }}>Carrera profesional</Link></li>
        <li><Link className="hover-underline-animation cursor-pointer" href={{ pathname: '/', query: { scrollTo: "consultas" } }} onClick={() => { handleLinkClick("consultas") }}>Consultas frecuentes</Link></li>
        <li><Link className="hover-underline-animation cursor-pointer" href={{ pathname: '/', query: { scrollTo: "consultorios" } }} onClick={() => { handleLinkClick("consultorios") }}>Consultorios</Link></li>
        {!hideLinksInteres && (<li><Link className="hover-underline-animation" href="/links-interes">Links de interés</Link></li>)}
        <li><Link href="/wpp"><Button className="transition duration-500 ease-in-out hover:bg-my-white hover:text-my-blue">Agenda tu consulta</Button></Link></li>
      </ul>
    </nav>];
  }


  return (
    [Navbar]
  )
}
