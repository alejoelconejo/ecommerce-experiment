import { Link } from 'wouter'
import { getRanking } from '../actions/getRanking'
import { Product } from '../types'

interface Params {
  products: Product[]
  params: { id: string }
}

export const Detail = ({ products, params }: Params) => {
  const paramsId = Number(params.id)

  const productDetail = products.filter((product) => product.id === paramsId)[0]

  const getSimilarProducts = () =>
    products.filter((product) => productDetail.category === product.category)

  const similarProducts = getSimilarProducts()

  if (!productDetail) return null

  return (
    <section className='max-w-4xl'>
      <article className='flex gap-8 mb-12'>
        <figure className='p-8 bg-white rounded-md border-gray-100 border-2 flex justify-center items-center flex-1'>
          <img
            className='w-auto h-64 object-contain'
            src={productDetail.image}
          />
        </figure>
        <div className='flex-1'>
          <h2 className='font-bold text-3xl mb-2'>{productDetail.title}</h2>
          <p className='mb-8'>{productDetail.description}</p>
          <span className='font-bold text-xl'>
            {productDetail.price.toLocaleString('es-AR', {
              style: 'currency',
              currency: 'ARS',
            })}
          </span>
          <div className='flex gap-1 mb-4'>
            <p>{getRanking(productDetail.rating.rate)}</p>
            <span>({productDetail.rating.count})</span>
          </div>
          <button className='bg-pink-500 hover:bg-pink-600 py-2 px-4 rounded-full text-gray-100 font-bold'>
            Add to Cart
          </button>
        </div>
      </article>
      <div>
        <h3 className='text-2xl mb-4'>More Products</h3>
        <ul className='grid grid-cols-relatedProducts gap-4'>
          {similarProducts.map(({ id, title, image }) => (
            <li key={id} className='w-full'>
              <Link href={`/product/${id}`}>
                <figure className='bg-white p-4 rounded-md'>
                  <img src={image} className='h-48 w-48 object-contain '></img>
                </figure>
                <h3>{title}</h3>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
