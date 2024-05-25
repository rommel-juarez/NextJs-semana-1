import { CardDto } from "./card.dto"
import { productoCard } from "./card.producto"
import styles from './styles.module.css'
import Image from "next/image"

const Index = (info: CardDto) => {
    return (<>
        <div className={styles.containerCard}>
        <Image src={info.icono} alt={info.titulo} width={300} height={200} className={styles.image} />
            <p>comenzando con las cards</p>
            <p>{info.titulo}</p>
            <p>{info.descripcion}</p>

        </div>
    </>)
}



export default Index