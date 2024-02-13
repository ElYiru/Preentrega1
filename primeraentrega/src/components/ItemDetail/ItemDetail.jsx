import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = ({producto}) =>{
  return(
    <div>
 <h1>{producto.nombre}</h1>
 <img src={producto.foto} alt="{prduct.nombre}" />
 <h3>{producto.precio}</h3>
 <h4>{producto.stock}</h4>
 <p>{producto.descripcion}</p>
    <ItemCount initial={1} stock={producto.stock}/>
    </div>
  )
}
export default ItemDetail;