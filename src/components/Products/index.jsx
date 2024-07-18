import React, { useState } from 'react'
import { popularProducts } from "../../../public/db.json"
import Product from '../Product';
import { ProductsWrapper } from './style';

const Products = () => {
    const [product, setProduct] = useState(popularProducts);


    return (
        <div>
            <h2 className='products__heading'>Arzon narxlar </h2>

            <ProductsWrapper>
                {
                    product.map((item) => {
                        return (
                            <Product key={item.id} item={item} />
                        )
                    })
                }
            </ProductsWrapper>
        </div>
    )
}

export default Products