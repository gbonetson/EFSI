import {React, useState} from 'react'
import { useContext, useEffect } from "react";
import CartContext from "./CartContext";
import Productos from './ListaProductos'


export default function Gallery() {
    let a = [0,1,2,3,4,5]
    const [ListadoP, setListadoP] = useState(Productos);
    const [cart , setCart] = useContext(CartContext);
    return (
        <div className="container">
            <h5><dt>Productos destacados</dt></h5>
            <div className="d-flex justify-content-between flex-wrap">
            <div style={{paddingTop:'5%'}}></div>
            <div className="row">
                
                    {
                    a.map((aa, index)=>{
                         return(
                                <div className="col-4">
                                    <div className="card" style={{margin:'10px'}}>
                                        <div className="card-body">
                                            <img style={{height: "300px",width: "300px"}} src={ListadoP[index].imagen} className="card-img-top" alt="Producto"/>
                                            <h3 className="card-title">{ListadoP[index].nombre}</h3>
                                            <h5 className="card-text">{ListadoP[index].desc}</h5>
                                            <h3 className="card-title">{  "$" + ListadoP[index].precio}</h3>
                                            <button className="btn btn-outline-success" onClick={()=>{setCart([...cart, ListadoP[index]])}}>Agregar al Carrito</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        
                    })
                }
                </div>
            </div>
        </div>
    )
}