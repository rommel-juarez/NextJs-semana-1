import { NextRequest, NextResponse } from "next/server";
import { productodto } from "./producto.dto";
import { NextApiRequest, NextApiResponse } from 'next';
import Index from "@/Componentes/Card/index.producto";

export async function GET() {
    return NextResponse.json(productos)
}

export async function POST(req: NextRequest){
    const data:productodto = await req.json()
    productos = [...productos, data]
    return NextResponse.json({message: "Producto agregado correctamente", succedded: true})
}

export async function PUT(req: NextRequest){
    const data:productodto = await req.json()
    let indexProduct = productos.findIndex(x => x.Id == data.Id)
    productos[indexProduct] = data
    return NextResponse.json({message: "Producto actualizado correctamente", succedded: true})

}

export async function DELETE(req: NextRequest){
    let searchParams = req.nextUrl.searchParams
    const id = parseInt( searchParams.get('id') ?? "0")
    let indexProduct = productos.findIndex(x => x.Id == id)
    productos.splice(indexProduct,1)
    return NextResponse.json({message: "Producto eliminado correctamente", succedded: true})
}

//lista objetos JS
let productos = [
    {
        Id: 1,
        Nombre: "Pala",
        Descripcion: "Pala Ideal para todo tipo de trabajos",
        Costo: 300
    },
    {
        Id: 2,
        Nombre: "Carretilla",
        Descripcion: "Carretilla para trabajos pesados",
        Costo: 600
    },
    {
        Id: 3,
        Nombre: "Cemento",
        Descripcion: "Cemento para las mejores construcciones",
        Costo: 500
    }
]


