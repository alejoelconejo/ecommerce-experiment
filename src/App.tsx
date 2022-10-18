import { useEffect, useState } from 'react'
import api from './api'
import Header from './Header'
import Products from './Products'
import Spinner from './Spinnert'

export interface Product {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
    rating: Rating
}

export interface Rating {
    rate: number
    count: number
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

    return (
        <div className='bg-slate-800 text-gray-200 min-h-screen'>
            <Header />
            <main className='flex flex-col gap-8 mt-6 items-center'>
                <h1 className='text-5xl font-bold'>
                    Welcome to
                    <span className='text-pink-300 pl-2'>Arturo Shop!</span>
                </h1>
                <p>The place where you ENJOY buying random stuff</p>
                <section>
                    <h2 className='text-2xl uppercase font-bold mb-6'>
                        Products
                    </h2>
                    {isLoading ? <Spinner /> : <Products products={products} />}
                </section>
            </main>
            <footer>footer</footer>
        </div>
    )
}

export default App
