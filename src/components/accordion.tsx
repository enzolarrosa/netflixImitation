import React, {useState} from "react";
import AccordionItem from "./accordionItem";
import a from '../style/accordion.module.css'

export default function Accordion() {

    const [open,setOpen] = useState<boolean >(false);

    const toggle = () => {
        if(open === false) {return setOpen(true)}
        setOpen(false)
    }

    interface accordionComp {
      title: string;
      desc: string
    }

    const accordionDate: accordionComp[]= [{title:"¿Qué es Netflix?",desc:"Netflix es un servicio de streaming que ofrece una gran variedad de películas, series y documentales premiados en casi cualquier pantalla conectada a internet.Todo lo que quieras ver, sin límites ni comerciales, a un costo muy accesible. Siempre hay algo nuevo por descubrir, ¡y todas las semanas se agregan más películas y series!"},{title:"¿Cuánto cuesta Netflix?",desc:"Disfruta Netflix en tu smartphone, tablet, smart TV, laptop o dispositivo de streaming, todo por una tarifa plana mensual. Planes desde $ 1.649 hasta $ 3.999 al mes (sin impuestos incluidos). Sin costos adicionales ni contratos."},{title:"¿Dónde puedo ver Netflix?",desc:"Disfruta donde quieras, cuando quieras. Inicia sesión en tu cuenta de Netflix para ver contenido al instante a través de netflix.com desde tu computadora personal o en cualquier dispositivo con conexión a internet que cuente con la app de Netflix, como smart TV, smartphones, tablets, reproductores multimedia y consolas de juegos. Además, puedes descargar tus series favoritas con iOS, Android o la app para Windows 10. Con la función de descarga, puedes ver donde vayas y sin conexión a internet. Lleva Netflix contigo adonde sea."},{title:"¿Cómo cancelo?",desc:"Netflix es flexible. Sin contratos molestos ni compromisos. Cancela la membresía online con solo dos clics. No hay cargos por cancelación. Empieza y termina cuando quieras."},{title:"¿Qué puedo ver en Netflix?",desc:"Netflix tiene un amplio catálogo de películas, series, documentales, animes, originales premiados y más. Todo lo que quieras ver, cuando quieras."},{title:"¿Es bueno Netflix para los niños?",desc:"La experiencia de Netflix para niños está incluida en la membresía para que los padres tengan el control mientras los peques disfrutan series y películas familiares en su propio espacio.Los perfiles para niños incluyen controles parentales protegidos por PIN que te permiten restringir el contenido que pueden ver los niños en función de la clasificación por edad y bloquear determinados títulos que no quieras que los niños vean."},]
    
    return(
        <div className={a.conteiner}>
          {accordionDate.map((data,index)=>{
            return <AccordionItem
            key={index}
            open={open}
            title={data.title}
            desc={data.desc}
            toggle={() => toggle()} />
          })}
        </div>
    )
}