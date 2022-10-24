import {React, useState} from 'react'
import Productos from '../components/ListaProductos'


export default function Products(){
    const [ListadoP, setListadoP] = useState(Productos);

    function PlaySound(soundobj) {
        var thissound=document.getElementById(soundobj);
        thissound.play();
    }
    
    function StopSound(soundobj) {
        var thissound=document.getElementById(soundobj);
        thissound.pause();
        thissound.currentTime = 0;
    }


    return(
        <>
            <div className="row">
                
                    {ListadoP.map((producto, index)=>{
                        return(
                            <div className="col-4">
                                <div className="card" style={{margin:'10px'}}>
                                    <div className="card-body">
                                        <img style={{height: "300px",width: "300px"}} src={producto.imagen} className="card-img-top" alt="Producto"/>
                                        <h3 className="card-title">{producto.nombre}</h3>
                                        <h5 className="card-text">{producto.desc}</h5>
                                        <h3 className="card-title">{  "$" + producto.precio}</h3>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                </div>
                <div style={{paddingTop:'10%'}}></div>

        </>
    )}


