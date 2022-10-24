import { getRanking } from '../actions/getRanking'
import { Product } from '../types'

interface Params {
  products: Product[]
  params: { id: string }
}

export const Detail = ({ products, params }: Params) => {
  const paramsId = Number(params.id)

  const productDetail = products.filter((product) => product.id === paramsId)[0]

  return (
    <section>
      <img className='h-96' src={productDetail.image} />
      <h2>{productDetail.title}</h2>
      <p>{productDetail.description}</p>
      <span>
        {productDetail.price.toLocaleString('es-AR', {
          style: 'currency',
          currency: 'ARS',
        })}
      </span>
      <p>{getRanking(productDetail.rating.rate)}</p>
      <span>({productDetail.rating.count})</span>
    </section>
  )
}
