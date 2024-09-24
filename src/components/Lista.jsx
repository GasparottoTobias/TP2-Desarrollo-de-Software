import React from 'react';


function Lista({ items, alEliminarItem, alEditarItem }) {
  return (
    <div>
      {items.length === 0 ? ( 
        <p>La lista está vacía</p>
      ) : (
        <ul className='itemLista'>
          {items.map((item) => (
            <li key={item.id}>
              {item.texto} - Cantidad: {item.cantidad}
              <button onClick={() => alEditarItem(item.id)} className="botonEditar">Editar</button>
              <button onClick={() => alEliminarItem(item.id)} className="botonEliminar">Eliminar</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Lista;
