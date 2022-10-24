interface getRanking {
  (ranking: number): string
}

export const getRanking: getRanking = (ranking) => {
  return '★'.repeat(ranking).padEnd(5, '☆')
}
