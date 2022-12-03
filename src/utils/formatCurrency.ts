export function formatCurrency(num: number) {
  return num.toLocaleString('es-AR', {
    style: 'currency',
    currency: 'ARS',
  })
}
