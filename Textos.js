import React from 'react';
import SCHOOLCHECK from "@/public/img/SCHOOL-CHECK.png"
import SPORTCHECK from "@/public/img/SPORT-CHECK.png"
import DUMBELL from "@/public/img/DUMBELL.png"
import DOCTORCHECK from "@/public/img/DOCTOR-CHECK.png"
import SLEEP from "@/public/img/SLEEP.png"
import OFF from "@/public/img/OFF.png"

export const createLineBreaks = text => {
  if (!text) {
    return null;
  }

  return text.split('\n').map((linea, i) => (
    <React.Fragment key={i}>
      {linea}
      <br/>
    </React.Fragment>
  ));
};

export const CFTEXTS = [
  {
  'id': '1',
  image: SCHOOLCHECK,
  'title': 'Certificado médico escolar',
  'description': 'Documento que acredita que un estudiante está en condiciones físicas y mentales aptas para asistir a clases y realizar actividades físicas.',
  'body': `El certificado médico escolar es un documento que acredita que un estudiante está en condiciones físicas y mentales aptas para asistir a clases y realizar actividades físicas. En Argentina, este certificado es requerido para poder matricularse en una escuela. No esperes a marzo para solicitar el turno, se puede realizar en los meses previos.\nEl proceso para obtener un certificado médico escolar en Argentina comienza con una visita al médico pediatra del niño, niña o adolescente. Durante la visita, el médico realizará un examen físico completo y recopilará información sobre la salud del estudiante, incluyendo cualquier enfermedad o afección crónica que tenga.\n Depende el año escolar se requiere además realizar una audiometría, un control oftalmológico y odontológico.\n Una vez que se ha recopilado toda la información necesaria, el médico emitirá un certificado médico escolar que debe ser presentado en la escuela. En el certificado se especificará si el estudiante está apto o no para asistir a clases y realizar actividades físicas escolares. Si el estudiante tiene alguna afección crónica o enfermedad, se especificarán las precauciones y medidas necesarias para su bienestar y seguridad en la escuela.\n Es importante destacar que el certificado médico escolar es válido solo por un año y debe ser renovado anualmente.`,
  'readtime': '2 mins',
  },
  {
    'id': '2',
    image: SPORTCHECK,
    'title': 'Apto para práctica deportiva',
    'description': 'Los deportes ayudan a los niños a mejorar su coordinación, equilibrio y resistencia, así como a desarrollar habilidades motoras básicas.',
    'body': 'La práctica deportiva en niños es esencial para su desarrollo físico, mental y social. Los deportes ayudan a los niños a mejorar su coordinación, equilibrio y resistencia, así como a desarrollar habilidades motoras básicas. Además, el deporte puede ayudar a los niños a desarrollar un sentido de disciplina y responsabilidad, ya que aprenden a cumplir con reglas y a trabajar en equipo.\n Sin embargo, es importante que los niños practiquen deportes de manera segura y adecuada a su edad y habilidades. Los niños pequeños no deben practicar deportes extremos o de contacto, ya que su cuerpo aún no está completamente desarrollado. En cambio, deben comenzar con actividades que promuevan el movimiento y el juego, como el básquet, el fútbol o la gimnasia.\n A medida que los niños van creciendo, pueden comenzar a practicar deportes más avanzados, como el atletismo, la natación o el hockey. Sin embargo, es importante que los niños sigan siendo supervisados por un adulto y que se les enseñe a practicar de manera segura, evitando lesiones.\n Además de los beneficios físicos, el deporte también puede ayudar a los niños a desarrollar habilidades sociales y emocionales. El trabajo en equipo y la competencia les ayudan a aprender a cooperar y a ser buenos perdedores. También pueden aprender a ser responsables, a ser puntuales y a cumplir con sus compromisos.\n El deporte también puede ayudar a los niños a mejorar su autoestima y confianza en sí mismos. Al ver que son capaces de lograr metas y superar desafíos, los niños se sienten más seguros y valiosos.\n En resumen, la práctica deportiva en niños es esencial para su desarrollo físico, mental y social. Es importante asegurar que los niños practican deportes de manera segura y adecuada a su edad y habilidades, y que se les enseñe a ser responsables y a trabajar en equipo. Además, el deporte puede ayudar a los niños a mejorar su autoestima y confianza en sí mismos. El apto para la práctica deportiva consta de una evaluación clínica en el consultorio del pediatra y una evaluación con electrocardiograma y ecocardiograma, con la derivación del pediatra.',   
    'readtime': '4 mins',
},
  {
    'id': '3',
    image: DUMBELL,
    'title': 'Práctica deportiva competitiva',
    'description': 'Es importante asegurarse de que los niños cumplan ciertos requisitos antes de participar en competiciones deportivas.',
    'body': 'La práctica deportiva competitiva en niños puede ser muy beneficiosa para su desarrollo físico, mental y social. Sin embargo, es importante asegurarse de que los niños cumplan ciertos requisitos antes de participar en competiciones deportivas.\n En primer lugar, es importante asegurarse de que el niño tenga una buena salud. Es recomendable que el niño haya realizado un examen médico completo antes de iniciar cualquier actividad física competitiva. El médico puede determinar si el niño tiene alguna condición médica que pueda ponerlo en riesgo durante la competencia.\n En segundo lugar, es importante asegurarse de que el niño tenga un buen nivel de preparación física. La práctica deportiva competitiva puede ser muy exigente físicamente, por lo que es importante que el niño haya estado entrenando de manera adecuada antes de participar en una competencia.\n En tercer lugar, es importante asegurarse de que el niño tenga un buen nivel de habilidad técnica. La competencia deportiva requiere un alto nivel de habilidad técnica, por lo que es importante que el niño haya estado practicando de manera adecuada antes de participar en una competencia.\n En cuarto lugar, es importante asegurarse de que el niño esté emocionalmente preparado para competir. La competencia deportiva puede ser muy estresante, por lo que es importante que el niño esté emocionalmente preparado para manejar la presión.\n Es importante que el niño conozca las reglas y normas de la competencia a la que va a participar para evitar cualquier tipo de sorpresa o confusión durante la misma. Para la práctica competitiva además de la evaluación clínica en el consultorio del pediatra se realiza una evaluación cardiológica con electrocardiograma, ecocardiograma y si la edad lo permite una ergometría graduada.',
    'readtime': '3 mins',
  },
  {
    'id': '4',
    image: DOCTORCHECK,
    'title': 'Control pediátrico periódico',
    'description': 'Es una recomendación y también un derecho de todos los bebés, niños y niñas concurrir a controles programados con el pediatra.',
    'body': 'Es una recomendación y también un derecho de todos los bebés, niños y niñas concurrir a controles programados con el pediatra. Se trata de controles periódicos para ver si están sanos y creciendo bien. En el control de salud podés evacuar tus dudas y dificultades sobre la crianza, la alimentación y las vacunas.\n Frecuencia de controles recomendados:\n Entre los 7 y 10 días de vida: el primer control.\n De 1 a 6 meses: todos los meses.\n De 6 meses a 1 año: cada 1 a 2 meses.\n De 1 a 2 años: cada 3 meses.\n De 2 a 4 años: cada 4 a 6 meses.\n Desde los 4 años: 2 veces al año (mínimo 1 vez al año)',    
    'readtime': '1 mins',
  },
  {
    'id': '5',
    image: SLEEP,
    'title': 'Tratamiento de la enuresis',
    'description': 'La ENURESIS es la emisión involuntaria de orina más allá de los 5 años. Cuando ésta ocurre durante el sueño se llama "enuresis nocturna".',
    'body': 'Se considera ENURESIS a la emisión involuntaria de orina más allá de los 5 años. Cuando ésta ocurre durante el sueño se llama "enuresis nocturna".\n Es muy poco probable que un niño con enuresis lo resuelva solo y en el corto plazo.\n La gente suele creer que es "psicológico", pero los niños que se orinan de noche y siempre lo hicieron, muy rara vez su problema tiene ese origen. En general se debe a disfunciones orgánicas, que luego de una entrevista y de recabar algunos datos se puede intentar un tratamiento específico.\n La enuresis es un problema de enorme impacto, no solo en el niño/a, también para toda la familia. Mientras el niño crece con enuresis el problema se agudiza, sobre todo cuando ya están en edad escolar por la frustración, el bullying, los problemas con los hermanos, la imposibilidad de ir a dormir de amigos, campamentos y viajes, etc.\n Si tu hijo/a tiene más de 5 años y tiene enuresis, de dejes de consultarme y juntos veremos cuál es el tratamiento más oportuno.',   
    'readtime': '2 mins',
  },
  {
    'id': '6',
    image: OFF,
    'title': 'Repelentes para mosquitos',
    'description': 'Cuando se trata de niños, es importante elegir un repelente seguro y efectivo, y tener en cuenta ciertas medidas necesarias.',
    'body': 'Cuando se trata de lactantes y niños, es importante elegir un repelente seguro y efectivo, y tener en cuenta ciertas medidas necesarias.\n  Para los niños mayores de 2 meses y menores de 2 años y en regiones sin riesgo de Dengue, se recomienda utilizar repelentes con aceite de citronella (Aulo Gelio, Rep). La Agencia de Protección Ambiental de los Estados Unidos (EPA) recomienda el uso de repelentes que contengan DEET en lactantes y niños desde los 2 meses de edad, con concentraciones entre 10% y 30% de DEET (NN-dietil-m-toluamida, nombre comercial: OFF).\n También tenga en cuenta:\n - Póngale ropa de manga larga y aplique el repelente a la tela y no a la piel en las zonas cubiertas.\n - NO se deben usar repelentes en la boca ni ojos, tampoco en las manos de los niños ya que es probable que se froten los ojos o se lleven los dedos a la boca. A los niños de 2 años o menores NO se les debe aplicar repelente más de una vez en un período de 24 horas (si utiliza DEET). Limpie la piel del repelente después de que pase el riesgo de ser picado por un insecto.\n - OFF spray y crema: DEET 7% (duración 1-2 horas)\n - OFF gel: DEET 10% (duración 2-3 horas)\n - OFF aerosol naranja: DEET 15% (duración 3 horas)\n - OFF aerosol verde: DEET 25% (duración 6 horas)',    
    'readtime': '2 mins',
  }
];

export const LITEXTS = [{
  "id":"1",
  "link":"https://bancos.salud.gob.ar/recurso/guia-de-practica-clinica-sobre-alimentacion-complementaria-para-los-ninos-y-ninas-menores",
  "title":"Guía sobre alimentación para los niños y niñas menores de 2 años.",
},{
  "id":"2",
  "link":"https://www.healthychildren.org/Spanish/safety-prevention/at-home/Paginas/Before-Choosing-a-Pet.aspx",
  "title":"Consejos para elegir la mascota adecuada para su familia.",
},{
  "id":"3",
  "link":"https://medlineplus.gov/spanish/childrenshealth.html",
  "title":"Información de importancia sobre la salud del niño",
},{
  "id":"4",
  "link":"https://www.sap.org.ar/comunidad-novedad.php?codigo=17",
  "title":"¿Qué es un soplo cardíaco y qué tipos de soplos existen?",
},{
  "id":"5",
  "link":"https://e-lactancia.org/",
  "title":"¿Que medicamentos son compatibles con la lactancia?",
},{
  "id":"6",
  "link":"https://www.argentina.gob.ar/noticias/guias-de-acompanamiento-las-infancias-y-adolescencias-en-los-entornos-digitales",
  "title":"Infancia y adolescencia en los entornos digitales",
}
];
