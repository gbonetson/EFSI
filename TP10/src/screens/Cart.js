import { React, useContext, useState } from "react";
import CartContext from "../components/CartContext";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartPlus} from'@fortawesome/free-solid-svg-icons'



export default function Cart() {
    const [cart, setCart] = useContext(CartContext);
    const [active, setActive] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);
    let total = 0;
    console.log(cart)
    for(let i = 0; i < cart.length; i++){
        total = total + cart[i].precio
    }
    if(cart.length == 0){
        return(
            <>
            <h1 style={{textAlign:'center'}}>El carrito esta vacio.</h1>
            <h3 style={{textAlign:'center'}}>Visitá nuestra home para llenar el carrito</h3>
            <Link style={{margin:'auto', display:'grid', width:250, height:'50'}} className="btn btn-outline-primary" to="/Products">Comprar</Link>
            </>
        ) 
    }else{
    return (
        <>
        <div className="container">
        <div className="row">
        <hr style={{marginBottom:"1vh"}}/>
                    {cart.map(producto => (
                        
                 <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="card">
                  <img src={producto.imagen} className="card-img-top" alt="..." style={{width:"100%", height:400}}/>
                  <div className="card-body text-center">
                    <h6 className="card-title">{producto.nombre}</h6>
                    <p className="card-text">{producto.descripcion}</p>
                    <h5 className="card-text">${producto.precio}</h5>
                    <button className="btn btn-outline-danger" onClick={() => setCart(cart.filter(prod=>{return prod.nombre !== producto.nombre}))}>Eliminar producto</button>
                  </div>
                </div>   
                </div>
                    ))
                    }
                    </div>
                    <h3 style={{textAlign:'center',padding:'4%'}}>Monto total: ${total}</h3>
                    </div>
        </>
    )}



}