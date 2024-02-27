import React from 'react';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './components/NavBar/NavBar';

const App = () => {

  return (
    <>
    
    <BrowserRouter>

      <Navbar/>

      <Routes>

        <Route path='/' element={<ItemListContainer/>}/>

        <Route path='/categoria/:categoryId' element={<ItemListContainer/>}/>

        <Route path='/detalle/:id' element={<ItemDetailContainer/>}/>

        
        
      </Routes>

      
      
    </BrowserRouter>

    </>
  );
};

export default App;