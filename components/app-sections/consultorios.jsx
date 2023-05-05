import useInViewPermanent from "@/hooks/useinview";

export default function Consultorios() {
  const { ref: p1Ref, inView: p1InView } = useInViewPermanent();
  const { ref: p2Ref, inView: p2InView } = useInViewPermanent();
  const { ref: p3Ref, inView: p3InView } = useInViewPermanent();
  
return (
<section id="consultorios" className="my-[75px] max-w-[1280px] md:my-[150px] mx-[10px] sm:mx-[20px] md:mx-[50px] xl:mx-[120px] xxl:mx-auto gap-5">
  <h1 ref={p1Ref} className={`initial-position ${p1InView && 'appear'} flex items-center py-7 px-6 bg-my-blue rounded-[30px] w-full h-[90px] lg:h-[100px] text-3xl sm:text-4xl lg:text-5xl font-bold text-my-white mb-5`}>
    Consultorios </h1>
  <div className="flex flex-col lg:flex-row gap-5">
    <div ref={p2Ref} className={`initial-position-X ${p2InView && 'appear-from-left'} flex flex-col md:flex-row lg:flex-col gap-2.5 md:gap-5 w-full`}>
      <iframe className="rounded-[30px] w-full md:w-7/12 lg:w-full h-[450px] sm:h-[400px]"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.668081205051!2d-58.44640700716464!3d-34.61255380314767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca151c269457%3A0x9f5a936e8920d086!2sAv.%20Dr.%20Honorio%20Pueyrred%C3%B3n%20638%2C%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1676056608957!5m2!1ses-419!2sar"
        allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      <div className="flex flex-col justify-end p-6 bg-my-blue rounded-[30px] w-full md:w-5/12 lg:w-full">
        <h2 className="text-[18px] text-my-white font-bold mb-2">Caballito</h2>
        <div className="mb-1">
          <p className="text-[18px] text-my-white font-semibold">Av. Honorio Pueyrredón 638 PB "B"</p>
          <p className="text-[18px] text-my-white font-normal">Ciudad Autónoma de Buenos Aires.</p>
        </div>
        <div className="">
          <p className="text-[18px] text-my-white font-semibold">Horarios de Atención: </p>
          <p className="text-[18px] text-my-white font-normal">Martes, por la tarde.</p>
        </div>
      </div>
    </div>
    <div ref={p3Ref} className={`initial-position-X ${p3InView && 'appear-from-right'} flex flex-col md:flex-row lg:flex-col gap-2.5 lg:gap-5 w-full`}>
      <iframe className="rounded-[30px] w-full md:w-7/12 lg:w-full h-[450px] sm:h-[400px]"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.905333115223!2d-58.4879210490139!3d-34.60655526505977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb61ff66987c9%3A0x67d72a4e70c8941b!2sComuna%2011%2C%20Nazca%202538%2C%20C1417%20CABA!5e0!3m2!1ses-419!2sar!4v1676057112210!5m2!1ses-419!2sar"
        allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

      <div className="flex flex-col justify-end p-6 bg-my-blue rounded-[30px] w-full md:w-5/12 lg:w-full">
        <h2 className="text-[18px] text-my-white font-bold mb-2">Villa del Parque</h2>
        <div className="mb-1">
          <p className="text-[18px] text-my-white font-semibold">Av. Nazca 2538 PB "B"</p>
          <p className="text-[18px] text-my-white font-normal">Ciudad Autónoma de Buenos Aires.</p>
        </div>
        <div className="">
          <p className="text-[18px] text-my-white font-semibold">Horarios de Atención: </p>
          <p className="text-[18px] text-my-white font-normal">Lunes y Miercoles, por la tarde.</p>
        </div>
      </div>
    </div>
  </div>
</section>
)
}