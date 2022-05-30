export const formatPrice = (number) => {
  return new Intl.NumberFormat('en-Us', {
    style: 'currency',
    currency: 'USD'
  }).format(number)
}

export const getUniqueValues = () => {}
