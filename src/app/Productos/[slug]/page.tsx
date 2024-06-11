'use client';

import { useState, useEffect } from 'react';
import useSWR from 'swr';
import { useRouter } from 'next/router';
import { productodto } from '@/app/api/producto/producto.dto';

const fetcher = (url: string) => fetch(url).then(r => r.json());

const Page = ({ params }: { params: { slug: string } }) => {
  const id = params.slug;
  const { data: ProductosData, error, isLoading, mutate } = useSWR(`/api/producto/${id}`, fetcher);
  const [product, setProduct] = useState<productodto>({
    Id: 0,
    Descripcion: '',
    Nombre: '',
    Costo: 0,
  });

  useEffect(() => {
    if (ProductosData) {
      setProduct(ProductosData);
    }
  }, [ProductosData]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduct(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/producto/${product.Id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || 'Error en la actualización del producto');
      }

      const result = await response.json();
      if (result.succedded) {
        alert(result.message);
        mutate(); // Re-fetch the product data after update
      } else {
        alert('Error actualizando el producto');
      }
    } catch (error) {
      console.error('Error actualizando el producto:', error);
      alert('Error actualizando el producto. Por favor, inténtalo de nuevo.');
    }
  };

  if (isLoading) return <p>Cargando...</p>;
  if (error) return <p>Error cargando los datos del producto</p>;

  return (
    <>
      <h1>Detalles del Producto: {product.Nombre}</h1>
      <p>{product.Descripcion}</p>
      <p>{product.Costo}</p>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="Nombre">Nombre:</label>
          <input
            type="text"
            id="Nombre"
            name="Nombre"
            value={product.Nombre}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="Descripcion">Descripción:</label>
          <input
            type="text"
            id="Descripcion"
            name="Descripcion"
            value={product.Descripcion}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="Costo">Costo:</label>
          <input
            type="number"
            id="Costo"
            name="Costo"
            value={product.Costo}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Actualizar Producto</button>
      </form>
    </>
  );
};

export default Page;
