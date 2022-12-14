import { useEffect, useState } from 'react'
import { Switch, Route } from 'wouter'
import api from './api'
import Footer from './components/Footer'
import Header from './components/Header'
import ScrollToTop from './components/ScrollToTop'
import { ShoppingCartProvider } from './contexts/CartContext'
import { Detail } from './pages/Detail'
import { Home } from './pages/Home'
import { Product } from './types'

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [cart, setCart] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    api().then((dataApi) => {
      setProducts(dataApi)
      setIsLoading(false)
    })
  }, [])

  return (
    <div className='dark:text-gray-200 text-gray-800 min-h-screen transition-colors duration-300 px-4 md:ml-[calc(100vw-100%)] md:mr-0'>
      <ScrollToTop />
      <ShoppingCartProvider>
        <Header products={products} />
        <main className='flex flex-col gap-8 my-8 items-center max-w-7xl mx-auto'>
          <Switch>
            <Route path='/'>
              <Home isLoading={isLoading} products={products} />
            </Route>
            <Route path='/product/:id'>
              {(params) => (
                <Detail
                  products={products}
                  params={params}
                  cart={cart}
                  setCart={setCart}
                />
              )}
            </Route>
            <Route>404, Not Found!</Route>
          </Switch>
        </main>
      </ShoppingCartProvider>
      <Footer />
    </div>
  )
}

export default App
