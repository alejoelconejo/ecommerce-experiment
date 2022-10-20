import { Product } from '../App'

interface getRanking {
    (ranking: number): string
}
const getRanking: getRanking = (ranking) => {
    return '★'.repeat(ranking).padEnd(5, '☆')
}

const Products = ({ products }: { products: Product[] }) => {
    return (
        <div>
            <ul className='grid grid-cols-cards gap-4 text-slate-800'>
                {products.map(({ title, id, image, price, rating }) => (
                    <li
                        key={id}
                        className='bg-white p-4 flex flex-col gap-4 rounded-md'
                    >
                        <img src={image} className='h-64 w-64 object-contain' />
                        <footer className='flex flex-col'>
                            <p>
                                {price.toLocaleString('es-AR', {
                                    style: 'currency',
                                    currency: 'ARS',
                                })}
                            </p>
                            <h3>{title}</h3>
                            <p className='text-yellow-500'>
                                {getRanking(rating.rate)}
                            </p>
                        </footer>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Products
