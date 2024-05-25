'use client';

import useSWR from 'swr';
import Card from '@/Componentes/Card/index.producto';
import styles from './styles.module.css';

const fetcher = (url: string) => fetch(url).then(r => r.json());

const Page = () => {
    const { data: ProductosData, error, isLoading } = useSWR('/api/producto', fetcher);

    if (isLoading) return <div>Loading...</div>;
    if (error) {
        console.error("Error loading data:", error);
        return <div>Error loading data</div>;
    }

    if (!ProductosData) return <div>No data found</div>;

    return (
        <div>
            {ProductosData.map((item: any, index: number) => (
                <div className={styles.containerCard} key={index}>
                    <div className={styles.containerContent}>
                        <Card 
                            Id={item.Id} 
                            Nombre={item.Nombre}
                            Descripcion={item.Descripcion}
                            Costo={item.Costo}
                        />  
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Page;




