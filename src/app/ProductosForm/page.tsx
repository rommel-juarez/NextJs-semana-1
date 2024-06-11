'use client'
import { Field, Form, Formik, FormikProps, ErrorMessage } from "formik";
import { useRouter } from "next/navigation";
import { number, object, string } from 'yup';
import { productoFormDto, productodto } from "../api/producto/producto.dto";
import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()
const addFetcher = async (url: string, data: productoFormDto) => fetch(url, { method: "POST", body: JSON.stringify(data) }).then(r => r.json())
const getFetch = async (url: string) => fetch(url, { method: "GET" }).then(r => r.json())

const Add = () => {

    const router = useRouter()
    const formTicket = {
        Id: '',
        Nombre: '',
        Descripcion: '',
        Costo:''
    } as productoFormDto

    const submitAdd = async (values: productoFormDto) => {
        let newProducto = {
            Id: values.Id,
            Nombre: values.Nombre,
            Descripcion: values.Descripcion,
            Costo: values.Costo,
        }

        console.log(newProducto)
        
        addFetcher('/api/producto', newProducto)
        .then((data) => {
            //router.push('/Productos')
        }).catch((e) => {

        })

    }
    return (<>
       <div className={styles.container}>
            <div className="row d-flex justify-content-center">
                <div className="">
                    <div className="h4">Producto</div>
                    <Formik
                        initialValues={formTicket}
                        onSubmit={submitAdd}
                        validationSchema={addTicketSchema}
                    >
                        {
                            (props: FormikProps<any>) => (
                                <Form>

                                    <label>Nombre</label>
                                    <Field
                                        name="Nombre"
                                        className={styles.formControl}
                                    ></Field>
                                    <ErrorMessage name="Nombre">{(msg) => (<div className="text-danger text-center">{msg}</div>)}</ErrorMessage>
                                    
                                    <label>Descripcion</label>
                                    <Field
                                        name="Descripcion"
                                        className={styles.formControl}
                                    ></Field>
                                    <ErrorMessage name="Descripcion">{(msg) => (<div className="text-danger text-center">{msg}</div>)}</ErrorMessage>
                                    
                                    <label>Costo</label>
                                    <Field
                                        name="Costo"
                                        className={styles.formControl}
                                    ></Field>
                                    <ErrorMessage name="Costo">{(msg) => (<div className="text-danger text-center">{msg}</div>)}</ErrorMessage>
                                    
                                    <div className="row d-flex justify-content-center">
                                        <button type="submit" className={styles.btnPrimary}>Agregar</button>
                                    </div>
                                </Form>
                            )
                        }

                    </Formik>
                </div>
            </div>
        </div>
    </>)
}

export default Add


const addTicketSchema = object({
    Nombre: string().required('Campo Requerido'),
    Descripcion: string().required('Campo Requerido'),
    Costo: number().min(1, 'Valor requerido positivo').typeError('Tipo de valor no valido').required('Campo Requerido')
})


import styles from './styles.module.css';