import { Rating } from '../types'

interface getRanking {
  (ranking: Rating['rate']): string
}

export const getRanking: getRanking = (ranking) => {
  return '★'.repeat(ranking).padEnd(5, '☆')
}
