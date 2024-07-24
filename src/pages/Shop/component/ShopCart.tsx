import { Button } from "../../../components/ui/button"
import { Card, CardContent, CardFooter } from "../../../components/ui/card"
import { formatCurrency } from "../../../lib/formatCurrency";


export type ProductProps = {
  id: number,
  category: string,
  title: string;
  price: number;
  image: string;
  description: string;
  rating: {
    rate: number,
    count: number
  }
}

type ShopItemProps = {
  product: ProductProps;
  itemCount?: number
}


function ShopCart({ product, itemCount = 0 }: ShopItemProps) {

  return (
    <Card>
      <CardContent className=" py-4 flex justify-center border-b" >
        <img className="h-52  object-cover " src={product.image} alt={product.title} />
      </CardContent>
      <CardFooter className=" grid row-auto grid-cols-1 gap-3 grid-rows-[30px_minmax(50px,_1fr)] p-5">
        <div className=" flex justify-between gap-4 ">
          <p className=" w-8/12 truncate" >{product.title}</p>
          <p>{formatCurrency(product.price)}</p>
        </div>
        <div className=" flex flex-col items-center justify-center ">
          {itemCount === 0 ? (
            <Button className=" w-full">Add to Cart</Button>
          ) : (
            <div className="flex flex-col justify-center  gap-2">
              <div className="flex justify-center gap-2 items-center">
                <Button>+</Button>{itemCount}<Button>-</Button>
              </div>
              <Button variant="destructive" className=" w-full">Remove</Button>
            </div>
          )}

        </div>
      </CardFooter>
    </Card>

  )
}

export default ShopCart