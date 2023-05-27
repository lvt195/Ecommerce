import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';

import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import AllProduct from './pages/AllProduct';
import Contact from './pages/Contact';
import Feedback from './pages/Feedback';

const App = () => {
  return <div className='overflow-hidden'>
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product/:id' element={<ProductDetails/>}/>
        <Route path='/products/' element={<AllProduct/>}/>
        <Route path='/contact/' element={<Contact/>}/>
        <Route path='/feedback/' element={<Feedback/>}/>
      </Routes>

      <Sidebar/>

      <Footer/>
    </Router>
  </div>;
};

export default App;