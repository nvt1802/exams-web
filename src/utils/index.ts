export const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export const getPathDisplay = (string: string) => {
  const listPath: string[] = string.split('/')
  return listPath.map((item: string) => {
    return item.split('-')
  })
  // return array.map((item: string) => {
  //   return capitalizeFirstLetter(item)
  // })
}
