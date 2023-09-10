import { useState, useEffect } from 'react';
import {Product} from '../product'

function PreviousState () {

  // const defaultProducts = [
  //   {name: 'product1', price: 100.00},
  //   {name: 'product2', price: 200.00}
  // ]

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('https://localhost:5001/api/products')
      .then(response =>response.json())
      .then(data => setProducts(data.data))
  }, [])

  function addProduct() {
    setProducts((prevState) => [
      ...prevState,
      {
        name: 'product' + (prevState.length + 1),
        price: prevState.length * 100 + 100
      }
    ]);
  }

  return (
    <>
      <div>
          <h1>ProShop</h1>
          <ul>
            {products.map((product, index) => (
              <li key={index}>
                {product.name} - {product.price}
              </li>
            ))}
          </ul>
          <button onClick={addProduct}>Add Product</button>
      </div>
    </>
  )
}

export default PreviousState;
