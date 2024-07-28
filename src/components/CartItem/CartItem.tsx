import { CartItemProps, useShoppingCartContext } from "../../context/shoppingCartContext"
import useGetProductByID from "../../hooks/useGetProductByID"
import { formatCurrency } from "../../lib/formatCurrency";
import { Button } from "../ui/button";

function CartItem({ id, quantity }: CartItemProps) {
  const { isLoading, isError, product } = useGetProductByID(id);
  const { removeFromCart } = useShoppingCartContext();

  if (isLoading) {
    return <div> loading </div>
  }
  if (isError.isError) {
    return <div> product not found </div>
  }
  if (product == undefined) {
    return <div>Not valid product</div>
  }
  return (
    <div className=" flex justify-between items-center">
      <div className="flex gap-2 items-center ">
        <div className=" w-20 h-14 flex justify-center">
          <img className="max-w-full h-auto " src={product?.image} />
        </div>
        <div>
          <div className=" flex gap-1 items-center">
            <p className="truncate w-20 text-xs text-gray-700 ">{product?.title}</p>
            <span className=" text-[10px] text-gray-400">x {quantity}</span>
          </div>
          <span>{formatCurrency(product?.price || 0)}</span>
        </div>

      </div>
      <div className="flex gap-2 items-center">
        <span className=" text-gray-500 text-xs ">{formatCurrency(quantity * product?.price)}</span>
        <Button variant={"outline"} size={"sm"} onClick={() => removeFromCart(id)} >&times;</Button>
      </div>
    </div>
  )
}

export default CartItem