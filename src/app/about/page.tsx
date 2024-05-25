'use client'
import { useState } from 'react'
import styles from './styles.module.css'
import Card from '@/Componentes/Card/'

const Page = () => {
    const [valor, setValor] = useState('Hola mundo')
    /** */
    return <>
        <div className={styles.containerCard}>
            <div className={styles.containerContent}>
                <Card icono='/images/mesi.jpeg' titulo='Leo Messi' descripcion='Campeon del Mundo'></Card>
                <Card icono='/images/alustiza.jpeg' titulo='Matias Alustiza' descripcion='Campeon Copa MX'></Card>
                <Card icono='/images/foden.jpeg' titulo='Phill Foden' descripcion='Campeon de Champions'></Card>
            </div>
        </div>
    </>
}

export default Page