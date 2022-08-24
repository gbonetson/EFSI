import React from 'react';
import '../App.css';
import Header from './header';

class TempForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: 'Argentina'};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('Seleccionaste: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
                <div className='inputContainer'>
                    <label>
                        Ciudad
                        <input className='input-field' type='text' name='text'/>
                    </label>
                </div>
          <label>
            -- Seleccione un Pais --
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="Argentina">Argentina</option>
              <option value="España">España</option>
              <option value="Brasil">Brasil</option>
              <option value="Inglaterra">Inglaterra</option>
              <option value="Estados Unidos">Estados Unidos</option>
              <option value="China">China</option>

            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  <form>
                        <div className='input-field'>
                            <input type='text' >
                            
                            </input>
                        </div>
                        <div className='input-field'>
                            <div className='select-wrapper'>
                                <input className='select-dropdown dropdown-trigger' type='text'>
                                </input>
                            </div>
                        </div>
                    </form>

function Clima(){
    return(
        <div className="App">
            <Header/>
            <div className='container'>
               <div className='justify-content-left'>
                    <TempForm/>
               </div>
               <div className='justify-content-right'>
                
                </div> 
            </div>
        </div>
    )
}
export default Clima