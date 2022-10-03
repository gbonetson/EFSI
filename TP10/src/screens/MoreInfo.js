import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import logo_generic from '../components/img/logo_generic.png';
import Ricky from '../components/img/Ricky.gif'
import ricky2 from '../components/img/ricky2.jpeg'


export default function MoreInfo(){
    useEffect(()=>{
        AOS.init();
    },[])

    return(
        <>
            <div className="text-center" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                <h1>Quienes Somos</h1>
            </div>
            
            <div className="container py-6" style={{padding:'5%'}}>
                <div className='row align-items-center' data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                    <div className='col'>
                        <h2 >Somos Campana Sanitarios, una empresa argentina cuyo objetivo es brindar 
                        muebles sanitarios de la maxima calidad y al mejor precio. </h2>
                    </div>
                    <div className='col'>
                        <img className='img-fluid' src={logo_generic} height="300" alt="paraguasho2"/>
                    </div>
                </div>

                <div style={{paddingTop:'20%'}}></div>
                <div style={{paddingTop:'20%'}}></div>

                <div className='row align-items-center' data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                    <div className='col' style={{paddingRop:'0'}}>
                        <img className='img-fluid' src={Ricky} height="500" alt="El Comandante"/>
                    </div>
                    <div className='col'>
                        <h2 >Campana Sanitarios fue fundada en 2004 por Ricardo "el comandante" Fort (R.I.P.) despues
                        de declarar que los muebles del baño del Hilton eran "Una reverenda cagada". En plena
                        frustración, Mr. Fort decide crear su propia empresa de sanitarios, financiada por sus
                        riquezas personales. </h2>
                    </div>

                </div>

                <div style={{paddingTop:'20%'}}></div>
                <div style={{paddingTop:'20%'}}></div>

                <div className='row align-items-center' data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                    <div className='col'>
                        <h2 >Desde el triste fallecimiento del comandante, hemos tenido que evolucionar administrativamente
                        ya que ya no nos patrocina papi.

                        Nuestra propuesta es simple, muebles de lujo a precios argentinos, cosa que no puedas dejar de
                        cagar por lo abierto que te queda el ano, así podes admirar tus hermosos muebles por toda la eternidad.</h2>
                    </div>
                    <div className='col' style={{paddingRop:'0'}}>
                        <img className='img-fluid' src={Ricky} height="500" alt="El Comandante"/>
                    </div>
                </div>

            </div>

            <div style={{paddingTop:'50%'}}></div>
        </>
    )
}

