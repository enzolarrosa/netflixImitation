import React,{useState} from "react";
import logoNetflix from "../img/logoNetflix.png"
import n from '../style/navLogin.module.css'
import {TbWorld} from 'react-icons/tb'
import {MdArrowDropDown} from 'react-icons/md'

export default function NavLogin (){

    const [idioma, setIdioma] = useState({
         lang: 'Español'
        }
    )

    const select = (e) => {
        setIdioma({
            lang: e
        })
    }

    const language = () => {
        const divSelect = document.querySelector('.options')
        divSelect.classList.toggle('divOptions')
    }

    return(
        <div className={n.conteiner}>
            <div className={n.divLogo}>
                <img src={logoNetflix} alt="logo Netflix" />
            </div>
            <div className={n.divLogin}>
                <div className={n.divSelect} onClick={() => language()}>
                <TbWorld className={n.icon}/>
                <p>{idioma.lang}</p>
                <MdArrowDropDown className={n.icon}/>
                <div className='options'  >
                    <button onClick={()=> select('Español')}>Español</button><button onClick={()=> select('English')}>English</button>
                </div>
                </div>
                <button className={n.btnLogin}>Iniciar sesión</button>
            </div>
        </div>
    )
}