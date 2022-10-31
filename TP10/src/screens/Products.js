import {React, useState,useRef} from 'react'
import Productos from '../components/ListaProductos'


export default function Products(){

    const ref = useRef(null);

    const [ListadoP, setListadoP] = useState(Productos);

    function PlaySound(e) {
       console.log(e.target)
       console.log("a")
        // thissound.play();
    }
    
    function StopSound(soundobj) {
        // var thissound=document.getElementById(soundobj);
        // // thissound.pause();
        // thissound.currentTime = 0;
    }


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
                                    <div className="card-body" onMouseOver={PlaySound} onMouseOut={StopSound}>
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
                <audio ref={ref} id='mySound' src="https://www.youtube.com/watch?v=2tRIjRVcHcQ"/>
        </>
    )}


