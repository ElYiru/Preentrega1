import React from "react";
import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  return (
    <Link to={'/pedrin'}>
      <div key={producto.id} className="container">
        <h2>{producto.nombre}</h2>
        <img src={producto.foto} />
      </div>
    </Link>
  );
}

export default Item;
