import { Children } from "react"
import { CardDto } from "./card.dto"
import { productoCard } from "./card.producto"
import styles from './styles.module.css'
import React from 'react';



const Index = (info: productoCard) => {
    return (<>
        <div className={styles.containerCard}>
            <p>Productos</p>
            <p>{info.Id}</p>
            <p>{info.Nombre}</p>
            <p>{info.Descripcion}</p>
            <p>{info.Costo}</p>
        </div>
    </>)
}

export default Index