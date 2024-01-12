import { useState } from 'react';
import Dashboard from './components/Dashboard'
// import './App.css';
import TradingViewWidget from './components/TradingViewWidget';
import StockContext from './contexts/StockContext';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Portfolio from './components/Portfolio';
import Login from './components/Login';
import Analytics from './components/Analytics';
export default function App() {
  const [stockSymbol, setStockSymbol] = useState("")
  return (
    <StockContext.Provider value ={{stockSymbol, setStockSymbol }} >

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/portfolio' element={<Portfolio/>}></Route>
          <Route path='/dashboard' element={<Dashboard/>}></Route>
          <Route path='/analytics' element={<Analytics/>}></Route>
        </Routes>
      </BrowserRouter>
          
    </StockContext.Provider>

  );
}


