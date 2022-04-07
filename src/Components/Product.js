import React from 'react'

function Product({product}) {
  return (
    <div>
        <h2>I am {product.id} {product.title}</h2>
    </div>
  )
}

export default Product