import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {Header} from './components';
import {Home, Cart} from './pages';

const App = () =>  {
  return (
    <div className="wrapper">
      <Header/>
      <div className="content">
      <Routes>
        <Route exact path="/donner-shop/" element={<Home/>}/>
        <Route path="/donner-shop/cart" element={<Cart />}/>
      </Routes>
      </div>
    </div>
  );
}

export default App;
