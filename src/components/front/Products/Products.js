// import React from 'react';
// import './Products.css';

// function Products({ productitems, addToCart }) {
//   if (!Array.isArray(productitems) || productitems.length === 0) {
//     return <div>No products available.</div>;
//   }

//   const handleAddToCart = (productitem) => {
//     addToCart(productitem); 
//   };

//   return (
//     <div className='products'>
//       {productitems.map((productitem) => (
//         <div className='card' key={productitem.id}>
//           <img className='product-image' src={productitem.image} alt={productitem.name} />
//           <div>
//             <h3 className='product-name'>{productitem.name}</h3>
//           </div>
//           <div className='product-price'>{productitem.price}</div>
//           <div>
//             <button className='product-add-button' onClick={() => handleAddToCart(productitem)}>
//               Add to Cart
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Products;



import React, { useEffect, useState } from 'react';
import './Products.css';

function Products({ addToCart }) {
  const [productItems, setProductItems] = useState([]);
  // const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/productitems')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setProductItems(data);
        // setLoading(false);
      })
      .catch((error) => {
        setError(error);
        // setLoading(false);
      });
  }, []);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!Array.isArray(productItems) || productItems.length === 0) {
    return <div>No products available.</div>;
  }

  const handleAddToCart = (productItem) => {
    addToCart(productItem);
  };

  return (
    <div className='products'>
      {productItems.map((productItem) => (
        <div className='card' key={productItem.id}>
          <img className='product-image' src={productItem.image} alt={productItem.name} />
          <div>
            <h3 className='product-name'>{productItem.name}</h3>
          </div>
          <div className='product-price'>{productItem.price}</div>
          <div>
            <button className='product-add-button' onClick={() => handleAddToCart(productItem)}>
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;

