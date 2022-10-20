import { useEffect, useState } from 'react'
import api from './api'
import Footer from './components/Footer'
import Header from './components/Header'
import Products from './components/Products'
import Spinner from './components/Spinner'

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

const App = () => {
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
            <main className='flex flex-col gap-8 mt-8 items-center max-w-7xl mx-auto'>
                <h1 className='text-6xl font-bold'>
                    Welcome to
                    <span className='bg-gradient-to-r from-pink-400 to-pink-200 bg-clip-text text-transparent pl-2'>
                        Arturo Shop!
                    </span>
                </h1>
                <p>The place where you ENJOY buying random stuff</p>
                <section className='w-full'>
                    <h2 className='text-2xl uppercase font-bold mb-6'>
                        Products
                    </h2>
                    {isLoading ? <Spinner /> : <Products products={products} />}
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default App
