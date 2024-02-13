import react, {useState} from "react"

const ItemCount = ({initial,stock}) =>{
    const [count, setcount] = useState(1)

    const less = () =>{
        if (count > initial)
        {
            setcount (count - 1)
    }
}

const more = () =>{
    if (count < stock)
    {

        setcount (count + 1)
    }
}


const addtochart = () =>{
   /* Aca una alerta con la biblioteca esa  */
}




    return (
        <div>
            <button onClick={less}>-</button>

            <p>CANTIDAD</p>


         <button onClick={more}>+</button>
         <button onClick={addtochart}>Agregar al carrito</button>
        </div>
      );
    }

export default ItemCount;
