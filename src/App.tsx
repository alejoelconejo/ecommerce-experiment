import { useEffect, useMemo, useState } from 'react'
import api from './api'
import Categories from './components/Categories'
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

const categories: Set<string> = new Set()

const App = () => {
    const [products, setProducts] = useState<Product[]>([])
    const [selectedCategory, setSelectedCategory] = useState<string>('')
    const [isLoading, setIsLoading] = useState(true)

    const getFilteredList = () => {
        if (!selectedCategory) return products
        return products.filter(
            (product) => product.category === selectedCategory
        )
    }

    const filteredList = useMemo(getFilteredList, [selectedCategory, products])

    useEffect(() => {
        api().then((dataApi) => {
            setProducts(dataApi)
            setIsLoading(false)
        })
    }, [])

    useEffect(() => {
        products.forEach((product) => categories.add(product.category))
    }, [products])

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
                    <h3 className='text-xl uppercase font-bold'>Categories</h3>
                    {!categories.size ? (
                        <Spinner />
                    ) : (
                        <Categories
                            categories={categories}
                            setSelectedCategory={setSelectedCategory}
                        />
                    )}
                </section>
                <section className='w-full'>
                    <h2 className='text-2xl uppercase font-bold mb-6'>
                        Products
                    </h2>
                    {isLoading ? (
                        <Spinner />
                    ) : (
                        <Products filteredList={filteredList} />
                    )}
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default App
