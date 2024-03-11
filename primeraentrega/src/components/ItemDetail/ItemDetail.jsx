import React, { useState, useContext } from 'react';
import ItemCount from "../ItemCount/ItemCount";
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';

const ItemDetail = ({ producto }) => {
    const [cart, setCart] = useState(false); 
    const { agregarCarrito } = useContext(CartContext);

    const onAdd = (count) => {
        setCart(true);
        agregarCarrito(producto, count);
    }

    return (
        <div className="bg-white p-6">
            <h1 className="text-2xl font-bold text-gray-900">{producto.nombre}</h1>
            <img src={producto.img} alt={producto.nombre} className="mt-4 rounded-lg" />
            <h3 className="mt-4 text-xl font-semibold text-gray-900">${producto.precio}</h3>
            <h3 className="text-xl text-gray-900">{producto.stock > 0 ? `Stock: ${producto.stock}` : 'Out of Stock'}</h3>
            <p className="mt-4 text-gray-600">{producto.description}</p>

            {producto.stock === 0 ? (
                <h2 className="mt-4 text-red-600">EL PRODUCTO NO TIENE STOCK</h2>
            ) : (
                cart ? (
                    <Link to={'/cart'} className="mt-4 block bg-indigo-600 text-white rounded-md py-2 px-4 text-center font-semibold hover:bg-indigo-700">
                        Ir al carrito
                    </Link>
                ) : (
                    <ItemCount initial={1} stock={producto.stock} onAdd={onAdd} className="mt-4" />
                )
            )}
        </div>
    );
};

export default ItemDetail;
