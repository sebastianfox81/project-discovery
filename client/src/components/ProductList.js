import React from 'react'
import styled from 'styled-components'
import { useFilterContext } from '../context/filter_context'
import { useProductsContext } from '../context/products_context'
import Product from './Product'
import GridView from './GridView'
import ListView from './ListView'

const ProductList = () => {

  const { products } = useProductsContext()
  const { filtered_products } = useFilterContext()
  return (
    <Wrapper>
      <GridView products={filtered_products}/>
      {/* <div className='section-center featured'>
      {products.map((product) => {

        return (
          <Product key={product.id} {...product}/>
        )
      })}

      </div> */}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: var(--clr-grey-10);
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 225px;
    }
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`

export default ProductList
