import React from "react";
import NavLogin from "../components/navLogin";
import Membresia from '../components/membresia'
import h from '../style/homePage.module.css'
import tv1 from '../img/tv1.png'
import tvVideo1 from '../img/video-tv-1.m4v'
import tvVideo2 from '../img/video-tv-2.m4v'
import compuImg from '../img/compu.png'
import mobileImg from '../img/mobile.jpg'
import strangerImg from '../img/stranger.png'
import niñosImg from '../img/niños.png'
import {FcDownload} from 'react-icons/fc'
import Accordion from "../components/accordion";

export default function HomePage(){

    return(
        <div className={h.conteiner}>
            <NavLogin/>
            <div className={h.mainConteiner}>
                <h1>Películas y series ilimitadas y mucho más</h1>
                <p className={h.pMain}>Disfruta donde quieras. Cancela cuando quieras.</p>
                <Membresia/>
            </div>
            <div className={h.sectionOne}>
                <div className={h.infoOne}>
                    <h2 className={h.titleOne}>Disfruta en tu TV</h2>
                    <p>Ve en smart TV, PlayStation, Xbox, Chromecast, Apple TV, reproductores de Blu-ray y más.</p>
                </div>
                <div className={h.animOne}>
                    <img src={tv1} alt="tv" />
                    <div className={h.divVideoOne}>
                        <video autoPlay={true} loop={true} src={tvVideo1} >
                        </video>
                    </div>
                </div>
            </div>
            <div className={h.sectionOne}>
                <div className={h.animTwo}>
                    <img src={mobileImg} alt="tv" />
                    <div className={h.divVideoTwo}>
                        <div className={h.divStranger}>
                            <img src={strangerImg} alt="stranger" />
                        </div>
                        <div className={h.divTitleStranger} >
                            <span className={h.titleStranger}>Stranger Things</span>
                            <p>Descargando...</p>
                        </div>
                        <div className={h.divDowloadStranger}>
                          <FcDownload/>
                        </div>
                    </div>
                </div>
                <div className={h.infoTwo}>
                    <h2 className={h.titleTwo}>Descarga tus series para verlas offline</h2>
                    <p>Guarda tu contenido favorito y tendrás siempre algo para ver.</p>
                </div>
            </div>
            <div className={h.sectionOne}>
                <div className={h.infoOne}>
                    <h2 className={h.titleThree}>Disfruta donde quieras</h2>
                    <p>Películas y series ilimitadas en tu teléfono, tablet, computadora y TV.</p>
                </div>
                <div className={h.animOne}> 
                   <img src={compuImg} alt="tv" />
                    <div className={h.divVideoThree}>
                        <video autoPlay={true} loop={true} src={tvVideo2} >
                        </video>
                    </div>
                </div>
            </div>
            <div className={h.sectionOne}>
                <div className={h.animOne}>
                    <img src={niñosImg} alt="tv" />
                </div>
                <div className={h.infoFour}>
                    <h2 className={h.titleFour}>Crea perfiles para niños</h2>
                    <p>Los niños vivirán aventuras con sus personajes favoritos en un espacio diseñado exclusivamente para ellos, sin costo con tu membresía.</p>
                </div>
            </div>
            <div className={h.sectionTwo}>
                <h2>Preguntas frecuentes</h2>
                <Accordion/>
                <Membresia/>
            </div>
        </div>
    )
}