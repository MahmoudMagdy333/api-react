import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Try from './Components/try/try';
import HomeSection from './Components/HomeSection/HomeSection';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductDetails from './Pages/ProductDetails/ProductDetails';

export default function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Try/>
      <Routes>
        <Route path='/' element={<HomeSection/>}/>
        <Route path='/details/:productid' element={<ProductDetails/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}