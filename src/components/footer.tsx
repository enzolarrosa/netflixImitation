import React from "react";
import f from '../style/footer.module.css'

export default function Footer(){

    return (
        <div className={f.conteiner}>
            <div className={f.divPreguntas}>
            <p>¿Preguntas? Llama al <a href="#">0800 XXX XXXX</a></p>
            </div>
            <div className={f.divEnlaces}>
               <ul className={f.ul}>
                <li><a href="#">Preguntas frecuentes</a></li>
                <li><a href="#">Relaciones con inversionistas</a></li>
                <li><a href="#">Privacidad</a></li>
                <li><a href="#">Prueba de velocidad</a></li>
                <li><a href="#">Centro de ayuda</a></li>
                <li><a href="#">Empleo</a></li>
                <li><a href="#">Preferencias de cookie</a>s</li>
                <li><a href="#">Avisos legales</a></li>
                <li><a href="#">Cuenta</a></li>
                <li><a href="#">Formas de ver</a></li>
                <li><a href="#">Información corporativa</a></li>
                <li><a href="#">Solo en Netflix</a></li>
                <li><a href="#">Prensa</a></li>
                <li><a href="#">Términos de uso</a></li>
                <li><a href="#">Contáctanos</a></li>
               </ul>
            </div>
        </div>
    )
}