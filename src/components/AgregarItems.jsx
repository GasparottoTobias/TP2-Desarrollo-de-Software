import React, { useState, useEffect } from 'react';
import '../App.css';  

function AgregarItems({ alAgregarItem, alEditarItem, estaEditando, itemActual }) {
  const [valorEntrada, setValorEntrada] = useState('');
  const [cantidad, setCantidad] = useState(1);

  useEffect(() => {
    if (estaEditando) {
      setValorEntrada(itemActual.texto);
      setCantidad(itemActual.cantidad);
    }
  }, [estaEditando, itemActual]);

  const manejarCambioEntrada = (e) => {
    setValorEntrada(e.target.value);
  };

  const incrementarCantidad = () => {
    setCantidad(prevCantidad => prevCantidad + 1);
  };

  const decrementarCantidad = () => {
    if (cantidad > 1) {
      setCantidad(prevCantidad => prevCantidad - 1);
    }
  };

  const manejarAgregarItem = () => {
    if (valorEntrada.trim() !== "" && cantidad > 0) {
      if (estaEditando) {
        alEditarItem(valorEntrada, cantidad);
      } else {
        alAgregarItem(valorEntrada, cantidad);
      }
      setValorEntrada('');
      setCantidad(1);
    }
  };

  return (
    <div>
      <div>
        <input 
          type="text" 
          value={valorEntrada} 
          onChange={manejarCambioEntrada} 
          placeholder="Ingresa un ítem"
        />
        <button onClick={manejarAgregarItem} className='botonAgregarGuardar'>
         {estaEditando ? 'Guardar' : 'Agregar'}
        </button>

      </div>
      
      <div className='cantidad'>
        <button 
          onClick={decrementarCantidad} 
          disabled={cantidad <= 1}
          className="botonResta"
        >
          -
        </button>
        <span>{cantidad}</span>
        <button 
          onClick={incrementarCantidad} 
          className="botonSuma"
        >
          +
        </button>
      </div>
 
    </div>
  );
}

export default AgregarItems;