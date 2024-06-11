import { NextRequest, NextResponse } from "next/server";
import { productodto } from "./producto.dto";
import { PrismaClient } from '@prisma/client'
import { productoFormDto } from "./producto.dto";

const prisma = new PrismaClient()

export async function GET() {
    const productosprisma = await prisma.productos.findMany()
    return NextResponse.json(productosprisma)
}

export async function POST(req: NextRequest){
    const data = await req.json();


    const productosprisma = await prisma.productos.create({
        data: {
            Nombre: data.Nombre,
            Descripcion: data.descripcion,
            Costo: data.Costo
        },
    });
    return NextResponse.json({message: "Producto agregado correctamente", succedded: true})
}

export async function PUT(req: NextRequest){
    const data:productodto = await req.json()
    const responseUpdate = await prisma.productos.update({
        where: {
            Id: data.Id
        },
        data:{
            Nombre: data.Nombre,
            Descripcion: data.Descripcion,
            Costo: data.Costo
        }
        })
    return NextResponse.json({message: "Producto actualizado correctamente", succedded: true})

}

export async function DELETE(req: NextRequest){
    let searchParams = req.nextUrl.searchParams
    const id = parseInt( searchParams.get('id') ?? "0")
    if (isNaN(id) || id === 0) {
        return NextResponse.json({
            message: "ID inválido",
            succedded: false,
        });
    }

    // Eliminar el producto de la base de datos
    const deletedProducto = await prisma.productos.delete({
        where: {
            Id: id,
        },
    });

    return NextResponse.json({message: "Producto eliminado correctamente", succedded: true})
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