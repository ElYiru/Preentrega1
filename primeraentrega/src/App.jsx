import { useState } from 'react'
import CartWidget from './components/CartWidget/CartWidget'
import NavBar from './components/NavBar/NavBar'
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {


  return (
    <>
    
   <NavBar/>
   <br /> <br />
   <CartWidget/>
   <ItemListContainer greeting={"Bienvenido a TiendaNautica"} />

   
    </>
  )
}

export default App
