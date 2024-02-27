import React, {useState} from 'react'

const ItemCount = ({initial,stock}) => {

    const [contador,setContador] = useState(1);

    const decrementar = () => {
        if(contador > initial){
            setContador(contador - 1)
        }
    }

    const incrementar = () => {
        if(contador < stock){
            setContador(contador+1)
        }
    }

    const agregarCarrito = () => {
        alert("Embarcaciones Añadidas Al Carrito")
    }

  return (
    <div>

        

        <button onClick={decrementar}>-</button>

        {contador}

        <button onClick={incrementar}>+</button>
        <br />
        <button onClick={agregarCarrito}>Agregar al carrito</button>

    </div>
  )
}

export default ItemCount;