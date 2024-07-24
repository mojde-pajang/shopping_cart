import { ShoppingCartProvider } from "./context/shoppingCartContext"
import Routes from "./Routes"

function App() {

  return (
    <ShoppingCartProvider>
      <Routes />
    </ShoppingCartProvider>
  )
}

export default App
