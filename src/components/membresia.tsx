import React from 'react'
import {HiOutlineChevronRight} from 'react-icons/hi'
import m from '../style/membresia.module.css'

export default function Membresia(){

    // useEffect(() => {
    //     efect()
    // },[])

    // function efect() {
    //     const labelEmail= document.querySelector('.labelEmail')
    //     const inputEmail= document.querySelector('.inputEmail')

    //     inputEmail.onfocus = () =>{
    //         labelEmail.classList.add('email')
    //         labelEmail.classList.remove('labelEmail')
    //     }
    //     inputEmail.onblur = () =>{
    //         inputEmail.value= inputEmail.value.trim( )
    //         if(inputEmail.value == 0){
    //             labelEmail.classList.add('labelEmail')
    //             labelEmail.classList.remove('email')
    //         }
    //      }
    // }

    return(
        <div className={m.conteiner}>
            <p >¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o reiniciar tu membresía de Netflix.</p>
            <div className={m.conteinerInput}>
                <div className={m.divInput}>
                {/* <label className='labelEmail'>Email</label> */}
                <input placeholder='Email' className='inputEmail' type='email'/>
                </div>
                <button>Comenzar <HiOutlineChevronRight/></button>
            </div>
        </div>
    )
}