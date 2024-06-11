'use client';
import { useRouter } from 'next/navigation';
import useSWR from 'swr';
import styles from './styles.module.css';

const fetcher = (url: string) => fetch(url).then(r => r.json());
const deleteFetcher = async (url: string) => fetch(url, { method: "DELETE"}).then(r => r.json());

const Page = () => {
    const router = useRouter();

    let ProductosArray = [] as Array<producto>;

    const { data: ProductosData, error, isLoading, mutate } = useSWR('/api/producto', fetcher);

    if (ProductosData) ProductosArray = ProductosData;

    const deleteProducto = (id: number) => {
        deleteFetcher(`/api/producto?id=${id}`)
        .then((data) => {
            // router.push('/Productos')
        }).catch((e) => {
            // handle error
        });
        mutate();
    }

    const detailsProducto = (id: number) => {
        router.push(`/Productos/${id}`);
    }

    return (
        <div className={styles.productosContainer}>
            <div className={styles.header}>Lista de Productos</div>
            {ProductosArray.map((item, index) => {
                return (
                    <p key={index}>
                        <span>{item.Id} - {item.Nombre} - {item.Descripcion} - ${item.Costo}</span>
                        <i onClick={() => deleteProducto(item.Id)} className="bi bi-trash3-fill"></i>
                        <i onClick={() => detailsProducto(item.Id)} className="bi bi-pencil-square"></i>
                    </p>
                )
            })}
        </div>
    )
}

export default Page;

interface producto {
    Id: number,
    Nombre: string,
    Descripcion: string,
    Costo: number
}
