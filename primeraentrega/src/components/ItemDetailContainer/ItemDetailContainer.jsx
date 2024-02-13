import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/public/productos.json');
        const data = await response.json();
        const producto = data.find((p) => p.id === parseInt(id)); // Convertir id a entero si es necesario
        setProducto(producto);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div>
      <ItemDetail producto={producto} />
    </div>
  );
};

export default ItemDetailContainer;
