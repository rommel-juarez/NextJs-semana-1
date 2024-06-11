import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, {params}: {params: {slug: string}}) {
    const id = params.slug

    return NextResponse.json(productos.find(x => x.Id == parseInt(id)))
}

//lista objetos JS
let productos = [
    {
        Id: 1,
        Nombre: "Producto 1",
        Descripcion: "Producto descripcion",
        Costo: 300
    },
    {
        Id: 2,
        Nombre: "Producto 2",
        Descripcion: "Producto descripcion",
        Costo: 300
    },
    {
        Id: 3,
        Nombre: "Producto 3",
        Descripcion: "Producto descripcion",
        Costo: 300
    },
    {
        Id: 4,
        Nombre: "Producto 4",
        Descripcion: "Producto descripcion",
        Costo: 300
    },
    {
        Id: 5,
        Nombre: "Producto 5",
        Descripcion: "Producto descripcion",
        Costo: 300
    },
    {
        Id: 6,
        Nombre: "Producto 6",
        Descripcion: "Producto descripcion",
        Costo: 300
    },
    {
        Id: 7,
        Nombre: "Producto 7",
        Descripcion: "Producto descripcion",
        Costo: 300
    }
]