import React, {useState, useEffect} from 'react';
import '../App.css';

  const Formulario = (props) =>{
    const [c, setC] = useState('')
    const [p, setP] = useState('')

    const getPais = (c, p) =>{ 
            fetch('http://api.openweathermap.org/data/2.5/weather?q='+ c + ',' + p + '&APPID=467eb2e2a1738c82e813a30610d7c354')
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                props.setTemp((data.main.temp -273.15).toFixed(2))
                props.setMinTemp((data.main.temp_min -273.15).toFixed(2))
                props.setMaxTemp((data.main.temp_max -273.15).toFixed(2))
            })
        } 
    return(
        <div className='App'>
                <div className='inputContainer'>
                    <label>
                    <div className='labelGay'>
                        Ciudad
                    </div>
                    <input className='input-field' type='text' name='text' onChange={(value)=>{
                        setC(value.target.value)
                    }}/>
                    </label>
                </div>
                <div className='selectPais'>
                    <label>
                    <div className='labelGay'>
                        -- Seleccione un Pais --
                    </div>
                    <select className='argenchina' onChange={(value)=>{
                        setP(value.state.value)
                        }}>
                        <option value="Argentina">Argentina</option>
                        <option value="España">España</option>
                        <option value="Brasil">Brasil</option>
                        <option value="Inglaterra">Inglaterra</option>
                        <option value="Estados Unidos">Estados Unidos</option>
                        <option value="China">China</option>

                    </select>
                    </label>
                </div>
                <div className='botonazoCunt'>
                    <button className='botonazo' type="submit" onClick={()=>getPais(c,p)}>Buscar Clima</button>
                </div>
        </div>
    )
  }
  export default Formulario