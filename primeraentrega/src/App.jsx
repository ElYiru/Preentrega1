import { useState } from 'react'
import CartWidget from './components/CartWidget/CartWidget'
import NavBar from './components/NavBar/NavBar'
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ItemCount from './components/ItemCount/ItemCount'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

function App() {


  return (
    <>
    <BrowserRouter> 
     <NavBar/>
    <Routes>

    <Route path='/' element={<ItemListContainer/>} />

    
  
    <Route path='/detalle' element={<ItemDetailContainer />} />


    <Route />

    </Routes>


 
   <br /> <br />
   <CartWidget/>
   
 
   </BrowserRouter>
    </>
  )
}

export default App
