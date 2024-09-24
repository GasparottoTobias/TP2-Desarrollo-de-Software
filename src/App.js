import React, { useState } from 'react';
import AgregarItems from './components/AgregarItems';
import Lista from './components/Lista';

function App() {
  const [items, setItems] = useState([]);
  const [editando, setEditando] = useState(false);
  const [itemActual, setItemActual] = useState(null);

  const agregarItem = (texto, cantidad) => {
    const nuevoItem = { id: Date.now(), texto, cantidad };
    setItems([...items, nuevoItem]);
  };

  const eliminarItem = (id) => {
    const nuevaLista = items.filter(item => item.id !== id);
    setItems(nuevaLista);
  };

  const editarItem = (id) => {
    const item = items.find(item => item.id === id);
    setEditando(true);
    setItemActual(item);
  };

  const guardarEdicion = (texto, cantidad) => {
    const itemsActualizados = items.map(item =>
      item.id === itemActual.id ? { ...item, texto, cantidad } : item
    );
    setItems(itemsActualizados);
    setEditando(false);
    setItemActual(null);
  };
  return (
    <div className='contenedor'>
      <h1>Lista de Compras</h1>
      <div>
        <AgregarItems 
          alAgregarItem={agregarItem} 
          alEditarItem={guardarEdicion} 
          estaEditando={editando} 
          itemActual={itemActual} 
        />
      </div>
      <div className='lista'>
        <h3>Carrito</h3>
        <Lista 
          items={items} 
          alEliminarItem={eliminarItem} 
          alEditarItem={editarItem} 
        />
      </div>
    </div>
  );
}

export default App;