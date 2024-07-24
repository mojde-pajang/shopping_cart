import { useEffect, useState } from "react"
import { ShopCartProps } from "../pages/Shop/component/ShopCart";

type TypeError = {
  isError: boolean;
  error: string
}
export default function useGetProducts() {
  const [products, setProducts] = useState<ShopCartProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState<TypeError>({ isError: false, error: "" });

  useEffect(() => {
    if (products.length) setIsLoading(false)
    
     fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
       .then(json => {
         setProducts(json);
         setIsLoading(false)
       }).catch(err => {
         setIsError({ isError: true, error: err })
         setIsLoading(false)
       })
    
  }, [])
  
  return {
      products,
      isLoading,
      isError
    }
  
}