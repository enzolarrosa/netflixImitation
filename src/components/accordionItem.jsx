import React from "react";
import {Collapse} from 'react-collapse'
import {AiOutlinePlus} from 'react-icons/ai'
import {RxCross2} from 'react-icons/rx'
import a from '../style/accordion.module.css'

export default function AccordionItem({open,toggle,title,desc}){

    return(
        <div className={a.divItem}>
            <div className={a.item} onClick={toggle}>
                <h3>{title}</h3>
                <div className={a.icon}>
                {open? <RxCross2/> : <AiOutlinePlus/>}
                </div>
            </div>
            <Collapse isOpened={open}>
                <div className={a.divDesc}>
                    <p>{desc}</p>
                </div>
            </Collapse>
        </div>
    )
}