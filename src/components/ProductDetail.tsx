import { getRanking } from '../actions/getRanking'
import { Product } from '../types'

interface Params {
  productDetail: Product
}

export const ProductDetail = ({ productDetail }: Params) => {
  const handleClick = (id: number) => {
    console.log('added product ', id)
  }

  return (
    <article className='flex gap-8 mb-12'>
      <figure className='p-8 bg-white rounded-md border-gray-100 border-2 flex justify-center items-center flex-1'>
        <img className='w-auto h-64 object-contain' src={productDetail.image} />
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
        <button
          onClick={() => handleClick(productDetail.id)}
          className='bg-pink-500 hover:bg-pink-600 py-2 px-4 rounded-full text-gray-100 font-bold'
        >
          Add to Cart
        </button>
      </div>
    </article>
  )
}
