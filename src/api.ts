import { Product } from './types'

const apiUrl: string = 'https://fakestoreapi.com/products'

export default async function api(): Promise<Product[]> {
  return fetch(apiUrl).then((res) => res.json())
}
