import { useEffect, useState } from 'react'
import { Switch, Route } from 'wouter'
import api from './api'
import Footer from './components/Footer'
import Header from './components/Header'
import { Detail } from './pages/Detail'
import { Home } from './pages/Home'
import { Product } from './types'

const App = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    api().then((dataApi) => {
      setProducts(dataApi)
      setIsLoading(false)
    })
  }, [])

  return (
    <div className='dark:bg-slate-800 bg-gray-50 dark:text-gray-200 text-gray-800 min-h-screen transition-colors duration-300'>
      <Header />
      <main className='flex flex-col gap-8 mt-8 items-center max-w-7xl mx-auto'>
        <Switch>
          <Route path='/'>
            <Home isLoading={isLoading} products={products} />
          </Route>
          <Route path='/product/:id'>
            {(params) => <Detail products={products} params={params} />}
          </Route>
        </Switch>
      </main>
      <Footer />
    </div>
  )
}

export default App
