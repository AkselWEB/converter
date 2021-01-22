import React, { useState } from 'react';
import { StyledConvertisseur } from './StyledConvertisseur'
import { BsArrowUpDown } from 'react-icons/bs'

const Convertisseur = () => {
    const [mode, setMode] = useState('EURO/DOLLAR')
    const [euro, setEuro] = useState(1)
    const [dollar, setDollar] = useState(0.825939)

    const handleChange = (event) => {
      const value = (event.target.value) ? event.target.value : 0
      if (mode === 'EURO/DOLLAR') {
        setEuro(value)
        setDollar(value * 0.825939)
      } else {
        setDollar(value)
        setEuro(value * 1.22202)
      }
    }

    const toggleMode = () => {
      if (mode === 'EURO/DOLLAR') {
        setMode('DOLLAR/EURO')
      } else {
        setMode('EURO/DOLLAR')
      }
    }

    return (
      <StyledConvertisseur>
        <h5>Convertisseur</h5>
        <div className='wrapper-converter'>
          <small>
            {mode === 'EURO/DOLLAR' ? `${parseFloat(euro).toFixed(2)} euros` : `${parseFloat(dollar).toFixed(2)} dollar`} is equivalent to
          </small>
          <span>
            {mode === 'EURO/DOLLAR' ? `${parseFloat(dollar).toFixed(2)} Dollar` : `${parseFloat(euro).toFixed(2)} Euros`}
          </span>
          <div className='container-bottom'>
            <form className='container-input'>
              <div className='wrapper-input'>
                <label>{mode === 'EURO/DOLLAR' ? 'Montant en EURO' : 'Montant en DOLLAR'}</label>
                <input minLength='1' min='0' onChange={handleChange} value={mode === 'EURO/DOLLAR' ? euro : dollar} type="number" />
              </div>
              <div className='wrapper-input'>
                <label>{mode === 'EURO/DOLLAR' ? 'Montant en DOLLAR' : 'Montant en EURO'}</label>
                <input minLength='1' min='0' value={mode === 'EURO/DOLLAR' ? parseFloat(dollar).toFixed(2) : parseFloat(euro).toFixed(2)} />
              </div>
            </form>
            <BsArrowUpDown onClick={toggleMode} />
          </div>
        </div>
      </StyledConvertisseur>
    );
  };
  
  export default Convertisseur;
  