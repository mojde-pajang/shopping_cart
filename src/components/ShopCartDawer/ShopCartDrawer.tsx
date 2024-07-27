import { useShoppingCartContext } from "../../context/shoppingCartContext";
import { formatCurrency } from "../../lib/formatCurrency";
import CartItem from "../CartItem/CartItem";
import { Button } from "../ui/button";

type ShopCartDrawerProps = {
  isOpen: boolean;
}
function ShopCartDrawer({ isOpen }: ShopCartDrawerProps) {
  const { closeShopCart, cartItems } = useShoppingCartContext();
  const total = cartItems.reduce((accumulator, currentValue) => accumulator + (currentValue.price * currentValue.quantity), 0)
  return (
    <div className={`w-screen h-screen ${isOpen ? ' fixed' : 'hidden'} z-50  top-0 left-0`}  >
      <div className=" w-full h-full top-0 left-0 bg-primary opacity-60 " onClick={closeShopCart}></div>
      <div className=" grid grid-rows-[60px_minmax(200px,_1fr)_60px] bg-white w-80 max-w-xs top-0 right-0 h-screen p-5 absolute rounded-tl-lg rounded-bl-lg" >
        <div className=" flex justify-between">
          <p>Your selection</p>
          <Button variant={"outline"} size={"sm"} onClick={closeShopCart} >&times;</Button>
        </div>
        <div className=" flex flex-col gap-4 overflow-y-auto ">
          {cartItems.map((item) => {
            return <CartItem key={item.id} {...item} />
          })}
        </div>
        <div className="">
          <p>Total: {formatCurrency(total)}</p>

        </div>
      </div>
    </div>
  )
}

export default ShopCartDrawer