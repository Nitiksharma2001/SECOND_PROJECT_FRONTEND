import ProductCard from '../../../Components/Card/ProductCard'
import FetchProduct from '../../../Hooks/Products/FetchProduct'
import { useParams } from 'react-router-dom'
import { ColorRing } from 'react-loader-spinner'
const Product = () => {
  const { id } = useParams()
  const { finalData: product, isLoading, message } = FetchProduct(id)

  return (
    <>
      {product && (
        <main className='flex items-center justify-center h-full'>
          <ProductCard product={product} />
        </main>
      )}

      {!product && (
        <section className='flex justify-items-center items-center h-full'>
          <ColorRing
            width='100%'
            ariaLabel='color-ring-loading'
            wrapperClass='color-ring-wrapper'
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
          />
        </section>
      )}
    </>
  )
}

export default Product
