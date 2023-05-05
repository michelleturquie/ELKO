import Image from 'next/image';
import HR from '@/public/img/DocPic-2.png';
import useInViewPermanent from "@/hooks/useinview";


export default function AcercaDeMi() {
const { ref: p1Ref, inView: p1InView } = useInViewPermanent();

return (
<section id='about' ref={p1Ref} className={`initial-position ${p1InView && 'appear' } flex flex-col lx:flex-row max-w-[1280px]
  my-[75px] md:my-[150px] mx-[10px] sm:mx-[20px] md:mx-[50px] xl:mx-[120px] xxl:mx-auto gap-5`}>
  <div className="flex flex-col gap-y-5 w-full lx:w-7/12">
    <h1
      className="flex items-center p-7 bg-my-blue rounded-[30px] w-full h-[90px] lg:h-[100px] text-3xl sm:text-4xl lg:text-5xl font-bold text-my-white">
      Carrera profesional</h1>
    <div
      className="p-7 bg-my-gray rounded-[30px] w-auto text-base font-medium text-my-black text-justify	leading-relaxed">
      <p>El Dr. Hernán Rowensztein se graduó de médico (Universidad de Buenos Aires). Ingresó en 1998 al Hospital de
        Pediatría “Prof. Dr. Juan P. Garrahan” donde realizó las residencias de Pediatría y Medicina Interna Pediátrica,
        y fue jefe de residentes.Desde 2005 es médico de planta del Garrahan, fue Jefe de Clínica de una sala de
        internación y en la actualidad es Coordinador de Formación de Recursos Humanos.
        Está certificado por el Ministerio de Salud de la Nación y la Sociedad Argentina de Pediatría.
        <br></br>
      </p>
      <p className='mt-2'>Se formó en investigación y tiene más de 30 trabajos científicos publicados. Docente de la
        Facultad de Medicina U.B.A. desde hace más de 25 años en el grado (carrera de Medicina) y actualmente también en
        el posgrado, donde es Subdirector de la Carrera de Especialista en Pediatría.
        Magister en Educación para Profesionales de la Salud (Instituto Universitario del Hospital Italiano).
        Certificado como pediatra por la Sociedad Argentina de Pediatría y el Ministerio de Salud.
        <br></br>
        Desde hace más de 20 años también se dedica a la práctica privada asistencial de la pediatría en su consultorio.
      </p>
    </div>
  </div>
  <div className="lx:relative flex items-baseline justify-center bg-my-blue rounded-[30px] w-full lx:w-5/12">
    <Image
      className='w-[300px] h-[420px] md:w-[355px] md:h-[530px] lx:w-[380px] lx:h-[555px]  lx:absolute lx:bottom-0 px-5 pt-3'
      src={HR} alt="" />
  </div>
</section>
)
}