import React from 'react'
import Product from './Product';

function NameList() {
 const names = ['Tom', 'Jerry','Popoye']
 const namesList = names.map((name) => <h2>{name}</h2> )

//  for array of objects - 

const products = [
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 },
];

// Always recommended to separate the JSX into a separate component when code grows. Example - List item shud iterate thru the list & pass data to the child component where the JSX is mentioned.
// Here we are passing product as props & Product component is destructring there.
const productsList = products.map((product) => <Product key={product.id} product = {product}></Product>)

  return (
    <div>
        {
            namesList
        }
        {productsList}
    </div>
  )
}

export default NameList