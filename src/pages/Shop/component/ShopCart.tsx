import { Button } from "../../../components/ui/button"
import { Card, CardContent, CardFooter } from "../../../components/ui/card"



type ShopCartProps = {
  id: number,
  name: string,
  price: number
}

function ShopCart({ id, name, price }: ShopCartProps) {
  console.log(id)
  return (
    <Card>
      <CardContent >
        <p>Card Content</p>
      </CardContent>
      <CardFooter className=" grid grid-cols-1 grid-rows-2">
        <div className=" flex justify-between">
          <p>{name}</p>
          <p>{price}</p>
        </div>
        <div>
          <Button className=" w-full">Add to Cart</Button>
        </div>
      </CardFooter>
    </Card>

  )
}

export default ShopCart