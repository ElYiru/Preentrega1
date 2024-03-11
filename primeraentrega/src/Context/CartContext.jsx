import React, { useState, createContext } from "react";
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from "../FireBase/Config";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const agregarCarrito = async (producto, cantidad) => {
        const productoExistenteIndex = cart.findIndex(item => item.producto.id === producto.id);
        const productoRef = doc(db, "productos", producto.id);
        
        if (productoExistenteIndex === -1) {
            setCart([...cart, { producto, cantidad }]);
        } else {
            const newCart = [...cart];
            newCart[productoExistenteIndex].cantidad += cantidad;
            setCart(newCart);
        }

        try {
            const productoDoc = await getDoc(productoRef);
            const stockActual = productoDoc.data().stock;
            const nuevoStock = stockActual - cantidad;
            await updateDoc(productoRef, { stock: nuevoStock });
        } catch (error) {
            console.error("Error al actualizar el stock del producto:", error);
        }
    };

    const eliminarItem = (productoId) => {
        const newCart = cart.filter(item => item.producto.id !== productoId);
        setCart(newCart);
    };

    const vaciarCarrito = () => {
        setCart([]);
    };

    const cantidadCarrito = () => {
        const totalQuantity = cart.reduce((total, item) => total + item.cantidad, 0);
        return totalQuantity;
    };

    const totalCarrito = () => {
        const totalPrice = cart.reduce((total, item) => total + (item.producto.precio * item.cantidad), 0);
        return totalPrice;
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                agregarCarrito,
                eliminarItem,
                vaciarCarrito,
                cantidadCarrito,
                totalCarrito
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
