import React from 'react'
import styled from 'styled-components'
import { useFilterContext } from '../context/filter_context'
import GridView from './GridView'

const ProductList = () => {
  const { filtered_products } = useFilterContext()
  return (
    <Wrapper>
      <GridView products={filtered_products} />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: var(--clr-white);
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
