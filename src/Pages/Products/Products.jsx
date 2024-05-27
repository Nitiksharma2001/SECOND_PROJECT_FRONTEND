import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ProductCard from '../../Components/Card/ProductCard'
import { ColorRing } from 'react-loader-spinner'
import FetchProducts from '../../Hooks/FetchProducts'
const Products = () => {
  const products = FetchProducts()
  const navigate = useNavigate()


  return (
    <main className='h-full'>
      {products && (
        <section className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 justify-items-center gap-y-8 gap-x-0 lg:grid-cols-3'>
          {products.map((currProduct) => {
            return (
              <ProductCard
                eventHandler={() => {
                  navigate(`/products/${currProduct._id}`)
                }}
                product={currProduct}
              />
            )
          })}
        </section>
      )}

      {!products && (
        <section className='flex justify-items-center items-center h-full'>
          <ColorRing
            width='100%'
            ariaLabel='color-ring-loading'
            wrapperClass='color-ring-wrapper'
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
          />
        </section>
      )}
    </main>
  )
}

export default Products
