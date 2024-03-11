import React, { useContext } from 'react';
import { Link } from 'react-router-dom'; 
import { CartContext } from '../../Context/CartContext';
import "./CartWidget.css";

const CartWidget = () => {

    const {cantidadCarrito} = useContext(CartContext)
    
    return (
        <div>
           <Link to="/cart">
            <img className="carrito" src="https://icones.pro/wp-content/uploads/2021/05/icone-de-panier-noir.png" alt="" />
            <p>{cantidadCarrito() == 0 ? null : cantidadCarrito()}</p>
        </Link>

        </div>
    );
};

export default CartWidget;


