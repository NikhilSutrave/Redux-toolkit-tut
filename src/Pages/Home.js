import React from 'react'
import Products from '../components/Products'

const Home = () => {
  return (
    <div>
        <span className='title'>Welcome to Redux/Toolkit Store</span>
        <section>
            <h3>Products</h3>
            <Products />
        </section>
    </div>
  )
}

export default Home