// import React from 'react';
// import Products from '../Products/Products';
// import data from '../../back/data/data';
// import Signup from '../../front/Signup/Signup';
// import Login from '../../front/Login/Login';
// import Contact from  '../../front/Contact/Contact';
// import Cart from '../Cart/Cart';
// import { Route, Routes as RouterRoutes } from 'react-router-dom';

// const Routes = ({ addToCart, cartItems, removeFromCart }) => {
//   const { productitems } = data;

//   return (
//     <div>
//       <RouterRoutes>
//         <Route path="/" element={<Products productitems={productitems} addToCart={addToCart} />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/login" element={<Login />} />
//         <Route path='/contact' element={<Contact />} />
//         <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />
//       </RouterRoutes>
//     </div>
//   );
// };

// export default Routes;

// import React from 'react';
// import Products from '../Products/Products';
// import data from '../../back/data/data';
// import Signup from '../../front/Signup/Signup';
// import Login from '../../front/Login/Login';
// import Contact from '../../front/Contact/Contact';
// import Cart from '../Cart/Cart';
// import { Route, Routes as RouterRoutes } from 'react-router-dom';

// const Routes = ({ addToCart, cartItems, removeFromCart, clearCart }) => {
//   const { productitems } = data;

//   return (
//     <div>
//       <RouterRoutes>
//         <Route path="/" element={<Products productitems={productitems} addToCart={addToCart} />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/login" element={<Login />} />
//         <Route path='/contact' element={<Contact />} />
//         <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} clearCart={clearCart} />} />
//       </RouterRoutes>
//     </div>
//   );
// };

// export default Routes;


import React from 'react';
import Products from '../Products/Products';
import data from '../../back/data/data';
import Signup from '../../front/Signup/Signup';
import Login from '../../front/Login/Login';
import Contact from '../../front/Contact/Contact';
import Cart from '../Cart/Cart';
import { Route, Routes as RouterRoutes } from 'react-router-dom';

const Routes = ({ addToCart, cartItems, removeFromCart, clearCart }) => {
  const { productitems } = data;

  return (
    <div>
      <RouterRoutes>
        <Route path="/" element={<Products productitems={productitems} addToCart={addToCart} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} clearCart={clearCart} />} />
      </RouterRoutes>
    </div>
  );
};

export default Routes;
