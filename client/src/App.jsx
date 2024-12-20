import { useState } from 'react';
// import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import Hotel from './pages/hotel/Hotel';
import List from './pages/list/List';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path='/hotels' element={<List/>}/>
            <Route path='/hotels/:id' element={<Hotel/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
