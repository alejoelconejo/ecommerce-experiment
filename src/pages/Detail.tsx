import { SetStateAction } from 'react'
import { Link } from 'wouter'
import { ProductDetail } from '../components/ProductDetail'
import { RelatedProducts } from '../components/RelatedProducts'
import { Product } from '../types'

interface Props {
  products: Product[]
  params: { id: string }
  cart: Product[]
  setCart: React.Dispatch<SetStateAction<Product[]>>
}

export const Detail = ({ products, params, cart, setCart }: Props) => {
  const paramsId = Number(params.id)

  const productDetail = products.filter((product) => product.id === paramsId)[0]

  if (!productDetail) return null

  return (
    <section className='max-w-4xl'>
      <header className='mb-8 dark:text-gray-300'>
        <Link
          href='/'
          className='px-4 py-2 rounded-full bg-gray-300 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600'
        >
          ← Back to Home
        </Link>
      </header>
      <ProductDetail productDetail={productDetail} />
      <RelatedProducts products={products} productDetail={productDetail} />
    </section>
  )
}
