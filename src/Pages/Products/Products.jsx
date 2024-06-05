import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ProductCard from '../../Components/UI/Card/ProductCard'
import { ColorRing } from 'react-loader-spinner'
import FetchProducts from '../../Hooks/Products/FetchProducts'
import SPSnackBar from '../../Components/UI/SnackBar/SPSnackBar'
import ShowSnackbar from '../../Helper/ShowSnackbar'
const Products = () => {
  const result = FetchProducts()
  const { finalData: products, isLoading, message } = result
  const navigate = useNavigate()

  const { isVisible, showSnackBar } = ShowSnackbar()

  useEffect(() => {
    if (!isLoading) {
      showSnackBar()
    }
  }, [isLoading])

  return (
    <main className='h-full'>
      {products && (
        <section className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 justify-items-center gap-y-8 gap-x-0 lg:grid-cols-3'>
          {products.map((product) => {
            return (
              <ProductCard
                key={product._id}
                eventHandler={() => {
                  navigate(`/products/${product._id}`)
                }}
                product={product}
              />
            )
          })}
        </section>
      )}

      {isLoading && (
        <section className='flex justify-items-center items-center h-full'>
          <ColorRing
            width='100%'
            ariaLabel='color-ring-loading'
            wrapperClass='color-ring-wrapper'
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
          />
        </section>
      )}

      <SPSnackBar
        text={message}
        isVisible={isVisible}
      />
    </main>
  )
}

export default Products
