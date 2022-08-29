import React from 'react';
import '../App.css';

function Clima(props){
    return(
      <div className='card-panel'>
        <h2>El clima de {} es:</h2>
        <p className='temperatura'>{props.temp}°C</p>
        <p>Temperatura Maxima {props.maxTemp}°C</p>
        <p>Temperatura Minima {props.minTemp}°C</p>
      </div>
    )
}
export default Clima