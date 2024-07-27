import { useEffect, useState } from "react"
import { ProductProps } from "../pages/Shop/component/ShopCart";

type TypeError = {
  isError: boolean;
  error: string
}
export default function useGetProductByID(id: number) {
  const [product, setProduct] = useState<ProductProps>();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState<TypeError>({ isError: false, error: "" });

  useEffect(() => {
    
     fetch('https://fakestoreapi.com/products/'+ id )
        .then(res=>res.json())
       .then(json => {
         setProduct(json);
       }).catch(err => {
         setIsError({ isError: true, error: err })
       }).finally(()=>setIsLoading(false))
    
  }, [])
  
  return {
      product,
      isLoading,
      isError
    }
  
}