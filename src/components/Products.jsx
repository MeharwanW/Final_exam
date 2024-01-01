import React from 'react'
import "./Products.css"
import {ProductList , ProductProvider} from "./../context/FInalExamContext1";


const Products = () => {
  return (
    <div className='products'> 
        <div>
            <ProductProvider>
                <div>
                    <ProductList />
                </div>
            </ProductProvider>
        </div>
    </div>
  )
}

export default Products