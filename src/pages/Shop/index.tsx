
import useGetProducts from "../../hooks/useGetProducts"
import ShopCart from "./component/ShopCart"
function Shop() {
  const { isLoading, isError, products } = useGetProducts()

  if (isLoading) {
    return (<div className=" grid gap-6 grid-cols-1	md:grid-cols-2 lg:grid-cols-3 py-6	">Loading ...</div>)
  }

  if (isError.isError) {
    console.log(isError.error)
    return (<div className=" grid gap-6 grid-cols-1	md:grid-cols-2 lg:grid-cols-3 py-6	">Opssss ...</div>)
  }

  return (

    <div className=" grid gap-10 grid-cols-1	md:grid-cols-2 lg:grid-cols-3 py-6	">
      {
        products.map(item => {
          return <ShopCart key={item.id} product={item} />
        })
      }

    </div>
  )
}

export default Shop