
import storeItems from "../../lib/data.json"
import ShopCart from "./component/ShopCart"
function Shop() {

  return (
    <div className=" grid gap-6 grid-cols-1	md:grid-cols-2 lg:grid-cols-3 py-6	">
      {
        storeItems.map(item => {
          return <ShopCart key={item.id} {...item} />
        })
      }

    </div>
  )
}

export default Shop