import { useEffect, useState } from 'react'
import api from './api'
import Header from './Header'
import Spinner from './Spinnert'

export interface Rating {
    rate: number
    count: number
}

export interface Product {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
    rating: Rating
}

function App() {
    const [products, setProducts] = useState<Product[]>([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        api().then((dataApi) => {
            setProducts(dataApi)
            setIsLoading(false)
        })
    }, [])

    function getRanking(ranking) {
        return '★'.repeat(ranking).padEnd(5, '☆')
    }

    return (
        <div className='bg-slate-800 text-gray-200 min-h-screen'>
            <Header />
            <main className='flex flex-col gap-8 mt-6 items-center'>
                <h1 className='text-3xl font-bold'>
                    Welcome to
                    <span className='text-pink-300 pl-2'>Arturo Shop!</span>
                </h1>
                <p>The place where you ENJOY buying random stuff</p>
                <section>
                    <h2 className='text-2xl uppercase font-bold mb-4'>
                        Products
                    </h2>
                    {isLoading ? (
                        <Spinner />
                    ) : (
                        <div>
                            <ul className='grid grid-cols-cards gap-4 text-slate-800'>
                                {products.map(
                                    ({ title, id, image, price, rating }) => (
                                        <li
                                            key={id}
                                            className='bg-white p-4 flex flex-col gap-4 rounded-md'
                                        >
                                            <img
                                                src={image}
                                                className='h-64 w-64 object-contain'
                                            />
                                            <footer className='flex flex-col'>
                                                <p>
                                                    {price.toLocaleString(
                                                        'es-AR',
                                                        {
                                                            style: 'currency',
                                                            currency: 'ARS',
                                                        }
                                                    )}
                                                </p>
                                                <h3>{title}</h3>
                                                <p className='text-yellow-500'>
                                                    {getRanking(rating.rate)}
                                                </p>
                                            </footer>
                                        </li>
                                    )
                                )}
                            </ul>
                        </div>
                    )}
                </section>
            </main>
            <footer>footer</footer>
        </div>
    )
}

export default App
