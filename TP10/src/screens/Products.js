import {React, useState} from 'react'
import useSound from 'use-sound'
import Productos from '../components/ListaProductos'
import OOAA from '../components/img/Moai.mp3'
import gioGio from '../components/img/gioGio.mp3'

export default function Products(){
    const [ListadoP, setListadoP] = useState(Productos);

    const [playOn] = useSound(
        OOAA,
        { volume: 0.5 }
      );

    const [playOff] = useSound(
        OOAA,
        { volume: 0.25 }
      );

    const [playOn2] = useSound(
        gioGio,
        { volume: 0.5 }
      );

    const [playOff2] = useSound(
        gioGio,
        { volume: 0.25 }
      );


    return(
        <>  
            <div style={{marginLeft:'40%'}}><h1>Nuestros Productos:</h1></div>
            <div style={{paddingTop:'5%'}}></div>
            <div className="row">
                
                    {ListadoP.map((producto, index)=>{
                        if(producto.nombre==="💀"){
                         return(
                            <div className="col-4">
                                <div className="card" style={{margin:'10px'}}>
                                    <div className="card-body" onMouseOver={playOn} onMouseOut={playOff}>
                                        <img style={{height: "300px",width: "300px"}} src={producto.imagen} className="card-img-top" alt="Producto"/>
                                        <h3 className="card-title">{producto.nombre}</h3>
                                        <h5 className="card-text">{producto.desc}</h5>
                                        <h3 className="card-title">{  "$" + producto.precio}</h3>
                                    </div>
                                </div>
                            </div>
                         )               
                        }
                        else{
                            if(producto.nombre==="Giorno Giovanna limited edition toilet"){
                                return(
                                   <div className="col-4">
                                       <div className="card" style={{margin:'10px'}}>
                                           <div className="card-body" onMouseOver={playOn2} onMouseOut={playOff2}>
                                               <img style={{height: "300px",width: "300px"}} src={producto.imagen} className="card-img-top" alt="Producto"/>
                                               <h3 className="card-title">{producto.nombre}</h3>
                                               <h5 className="card-text">{producto.desc}</h5>
                                               <h3 className="card-title">{  "$" + producto.precio}</h3>
                                           </div>
                                       </div>
                                   </div>
                                )               
                            }
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
                        }
                    })
                }
                </div>
                <div style={{paddingTop:'10%'}}></div>
        </>
    )}


