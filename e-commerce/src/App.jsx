import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'
import Cart from './Components/Cart/Cart'
import Checkout from "./Components/Checkout/Checkout"


function App() {


  return (
    <div className="App">
      <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
            <Route path="/product/:itemId" element={<ItemDetailContainer />} />
            <Route path='/cart' element= {<Cart />} />
            <Route path='/checkout' element= {<Checkout />} />
            <Route path="*" element={<h1>404 NOT FOUND</h1>} />
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App


