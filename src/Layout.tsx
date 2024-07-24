import { NavLink, Outlet } from 'react-router-dom'
import { ShoppingCart } from 'lucide-react';
import { Button } from './components/ui/button';
import { useShoppingCartContext } from './context/shoppingCartContext';

function linkClasses(isActive: boolean) {
  const classes = "block  text-base md:text-base px-5 py-1.5 rounded transition-colors ";
  const conditionalClasses = isActive ? " text-white bg-green-800 " : " hover:text-green-700 ";
  return classes + conditionalClasses

}
function Layout() {
  const { openShopCart, cartQuantity } = useShoppingCartContext();
  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 h-16 border-b bg-background px-4 md:px-6 flex items-center gap-4 justify-center">
        <div className='lg:max-w-screen-xl flex items-center gap-4 justify-between w-full'>
          <nav className="hidden flex-col gap-2 text-lg font-medium md:flex md:flex-row md:items-center  md:text-sm 	 ">
            <NavLink to="/"
              className={({ isActive }) => linkClasses(isActive)}>
              Home
            </NavLink>
            <NavLink to="/shop"
              className={({ isActive }) => linkClasses(isActive)}>
              Shop
            </NavLink>
            <NavLink to="/about"
              className={({ isActive }) => linkClasses(isActive)}>
              About
            </NavLink>
          </nav>
          <Button variant="outline" size="icon" className=' p-2 relative rounded-full ' onClick={openShopCart}  >
            <ShoppingCart color='#15803d' />
            {
              Boolean(cartQuantity as number) && <span className=' absolute bg-green-800 rounded-full w-5 h-5 text-white right-0 bottom-0 translate-y-2 translate-x-2	'>{cartQuantity}</span>
            }
          </Button>
        </div>
      </header>
      <main className=' px-4 md:px-6'>
        <div className=' lg:max-w-screen-xl m-auto'>
          <Outlet />
        </div>
      </main>
    </div>
  )
}

export default Layout