// import React, { useState } from 'react';
// import Header from './components/front/Header/Header';
// import Routes from './components/front/Routes/Routes';
// import { BrowserRouter as Router } from 'react-router-dom';

// const App = () => {
//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (product) => {
//     setCartItems([...cartItems, product]);
//   };

//   const removeFromCart = (productId) => {
//     setCartItems(cartItems.filter(item => item.id !== productId));
//   };

//   return (
//     <div>
//       <Router>
//         <Header cartItemCount={cartItems.length}  />
//         <Routes addToCart={addToCart} cartItems={cartItems} removeFromCart={removeFromCart} />
//       </Router>
//     </div>
//   );
// };

// export default App;

// import React, { useState } from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
// import Header from './components/Header/Header';
// import Routes from './components/Routes/Routes';
// import './App.css';

// const App = () => {
//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (item) => {
//     const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
//     if (existingItem) {
//       setCartItems(cartItems.map(cartItem =>
//         cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
//       ));
//     } else {
//       setCartItems([...cartItems, { ...item, quantity: 1 }]);
//     }
//   };

//   const removeFromCart = (id) => {
//     const existingItem = cartItems.find(cartItem => cartItem.id === id);
//     if (existingItem.quantity === 1) {
//       setCartItems(cartItems.filter(cartItem => cartItem.id !== id));
//     } else {
//       setCartItems(cartItems.map(cartItem =>
//         cartItem.id === id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
//       ));
//     }
//   };

//   const clearCart = () => {
//     setCartItems([]);
//   };

//   return (
//     <Router>
//       <Header />
//       <Routes
//         addToCart={addToCart}
//         cartItems={cartItems}
//         removeFromCart={removeFromCart}
//         clearCart={clearCart}
//       />
//     </Router>
//   );
// };

// export default App;

import React, { useState } from 'react';
import Header from './components/front/Header/Header';
import Routes from './components/front/Routes/Routes';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      setCartItems(cartItems.map(cartItem =>
        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      ));
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === id);
    if (existingItem.quantity === 1) {
      setCartItems(cartItems.filter(cartItem => cartItem.id !== id));
    } else {
      setCartItems(cartItems.map(cartItem =>
        cartItem.id === id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
      ));
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <Router>
      <Header />
      <Routes
        addToCart={addToCart}
        cartItems={cartItems}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
      />
    </Router>
  );
};

export default App;
