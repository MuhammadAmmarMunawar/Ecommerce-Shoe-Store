// import React from 'react';
// import './Cart.css';

// function Cart({ cartItems, removeFromCart }) {
//   if (!Array.isArray(cartItems) || cartItems.length === 0) {
//     return <div className='cart'>No items in cart.</div>;
//   }

//   return (
//     <div className='cart'>
//       <div className='cart-items header'>
//         Cart Items
//       </div>
//       <div className='cart-items-list'>
//         {cartItems.map((item) => (
//           <div key={item.id} className='cart-item'>
//             <div className='cart-item-details'>
//               <img src={item.image} alt={item.name} className='cart-item-image' />
//               <div className='cart-item-info'>
//                 <h3 className='cart-item-name'>{item.name}</h3>
//                 <div className='cart-item-price'>{item.price}</div>
//               </div>
//             </div>
//             <button className='cart-item-remove' onClick={() => removeFromCart(item.id)}>
//               Remove
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Cart;
import React from 'react';
import './Cart.css';

function Cart({ cartItems, removeFromCart, clearCart }) {
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = 5.00; // Fixed shipping cost
  const totalAmount = Math.round((subtotal + shipping) * 100) / 100; // Rounding to 2 decimal places

  if (!Array.isArray(cartItems) || cartItems.length === 0) {
    return <div className='cart'>No items in cart.</div>;
  }

  return (
    <div className='cart'>
      {/* <div className='cart-header'>
        <h2>Cart Items</h2>
        <button className='clear-cart' onClick={clearCart}>Empty Cart</button>
      </div> */}
      <div className='cart-details'>
        <p>Subtotal: ${Math.round(subtotal * 100) / 100}</p>
        <p>Shipping: ${shipping}</p>
        <p>Total Amount: ${totalAmount}</p>
      </div>
      <div className='cart-items-list'>
        {cartItems.map((item) => (
          <div key={item.id} className='cart-item'>
            <div className='cart-item-details'>
              <img src={item.image} alt={item.name} className='cart-item-image' />
              <div className='cart-item-info'>
                <h3 className='cart-item-name'>{item.name}</h3>
                <div className='cart-item-quantity'>Quantity: {item.quantity}</div>
                <div className='cart-item-price'>${item.price}</div>
              </div>
            </div>
            <button className='cart-item-remove' onClick={() => removeFromCart(item.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
      <button className='checkout-button' onClick={() => alert('Proceed to checkout')}>
        Go to Checkout
      </button>
    </div>
  );
}

export default Cart;


