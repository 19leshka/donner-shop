import React from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import {Header} from './components';
import {Home, Cart} from './pages';

const App = () =>  {
  return (
    <div className="wrapper">
      <Header/>
      <div className="content">
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart />}/>
      </Routes>
      </div>
    </div>
  );
}

export default App;
