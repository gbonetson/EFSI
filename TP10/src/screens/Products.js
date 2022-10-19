import React from 'react'
import Productos from '../components/ListaProductos'


export default function Products(){
    function PlaySound(soundobj) {
        var thissound=document.getElementById(soundobj);
        thissound.play();
    }
    
    function StopSound(soundobj) {
        var thissound=document.getElementById(soundobj);
        thissound.pause();
        thissound.currentTime = 0;
    }

    const data = Productos
    const Listado = data.map((d)=>
        <div className="product text-center">
            <img src={data.imagen}/>
            <dt>{data.nombre}</dt>
            <p>{data.desc}</p>
            <p>{data.precio}</p>
        </div>
    )

    return(
        <>
            <div>
                {Listado}
            </div>
        </>
    )}


