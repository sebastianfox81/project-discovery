import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import guitars from '../assets/guitars.webp'
import heroBcg from '../assets/hero-bcg.jpeg'
import heroBcg2 from '../assets/hero-bcg-2.jpeg'

const Hero = () => {
  return (
    <Wrapper className='section-center'>
    <article className='content'>
      <h1>
        Explore <br />
        our guitars
      </h1>
      <p>
 We understand the power of music on the soul and the vehicle it provides for our sanity, health, and creativity. We want to help make that gift available to everyone. You don t have to be a rock star or a professional musician to enjoy the rewards of music participation. Find the perfect guitar for you or someone else who wants to benefit from this amazing gift!
      </p>
      <Link to='/products' className='btn hero-btn'>
        shop now
      </Link>
    </article>
    <article className='img-container'>
      <img src={guitars} alt='nice table' className='main-img' />
    </article>
  </Wrapper>
  )
}

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  .img-container {
    display: none;
  }

  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      width: 100%;
      height: 550px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
    }
  }
`

export default Hero
