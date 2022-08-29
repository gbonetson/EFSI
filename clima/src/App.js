import React, {useEffect, useState} from 'react';
import './App.css';
import Clima from './components/clima'
import Formulario from './components/formulario';
import Header from './components/header';

function App() {
  const [temp, setTemp] = useState('')
  const [minTemp, setMinTemp] = useState('')
  const [maxTemp, setMaxTemp] = useState('')

  return (
    <div className="App">
            <Header/>
            <div className='container'>
               <div className='justify-content-left SecCunt'>
                  <Formulario setTemp={setTemp} setMinTemp={setMinTemp} setMaxTemp={setMaxTemp}/>
               </div>
               <div className='justify-content-right SecCunt'>
                  <Clima temp={temp} minTemp={minTemp} maxTemp={maxTemp}/>
                </div> 
            </div>
        </div>
  );
}

export default App;
