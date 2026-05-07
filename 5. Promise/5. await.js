const fetchProductData = async () => {
  const result = await fetch("https://fakestoreapi.com/products")
  const data = await result.json()
  console.log(data)
}

await fetchProductData()
